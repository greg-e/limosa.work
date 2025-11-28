(function () {
  const listEl = document.querySelector('[data-zk-list]');
  const viewerEl = document.querySelector('[data-zk-viewer]');
  const searchEl = document.querySelector('[data-zk-search]');
  const statusEl = document.querySelector('[data-zk-status]');

  if (!listEl || !viewerEl || !searchEl || !statusEl) return;

  let notes = [];
  let filtered = [];
  let activeId = null;

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatInline(text) {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function renderMarkdown(md) {
    const lines = md.split(/\r?\n/);
    let html = '';
    let inList = false;

    const closeList = () => {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
    };

    for (const line of lines) {
      if (!line.trim()) {
        closeList();
        html += '';
        continue;
      }

      if (/^---+$/.test(line.trim())) {
        closeList();
        html += '<hr />';
        continue;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
      if (headingMatch) {
        closeList();
        const level = headingMatch[1].length;
        html += `<h${level}>${formatInline(headingMatch[2].trim())}</h${level}>`;
        continue;
      }

      const quoteMatch = line.match(/^>\s?(.*)/);
      if (quoteMatch) {
        closeList();
        html += `<blockquote>${formatInline(quoteMatch[1].trim())}</blockquote>`;
        continue;
      }

      const listMatch = line.match(/^[-*+]\s+(.*)/);
      if (listMatch) {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        html += `<li>${formatInline(listMatch[1].trim())}</li>`;
        continue;
      }

      closeList();
      html += `<p>${formatInline(line.trim())}</p>`;
    }

    closeList();
    return html;
  }

  function renderList(items) {
    listEl.innerHTML = '';
    if (!items.length) {
      listEl.innerHTML = '<p class="zk-empty">No notes match your filter.</p>';
      return;
    }

    for (const note of items) {
      const button = document.createElement('button');
      button.className = 'zk-note-card';
      button.type = 'button';
      button.dataset.noteId = note.id;
      button.innerHTML = `
        <span class="zk-note-title">${note.title}</span>
        <span class="zk-note-excerpt">${escapeHtml(note.excerpt || '')}</span>
      `;
      if (note.id === activeId) {
        button.classList.add('is-active');
      }
      button.addEventListener('click', () => selectNote(note.id));
      listEl.appendChild(button);
    }
  }

  async function selectNote(id) {
    activeId = id;
    renderList(filtered);
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    statusEl.textContent = 'Loading note…';
    viewerEl.innerHTML = '';

    try {
      const response = await fetch(note.path);
      if (!response.ok) throw new Error(`Failed to load note: ${response.status}`);
      const markdown = await response.text();
      viewerEl.innerHTML = renderMarkdown(markdown);
      statusEl.textContent = note.title;
    } catch (error) {
      viewerEl.innerHTML = `<p class="zk-error">${escapeHtml(error.message)}</p>`;
      statusEl.textContent = 'Could not load note';
    }
  }

  function applyFilter() {
    const term = searchEl.value.trim().toLowerCase();
    if (!term) {
      filtered = [...notes];
    } else {
      filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(term) || note.excerpt.toLowerCase().includes(term)
      );
    }
    renderList(filtered);
    if (!filtered.length) {
      activeId = null;
      viewerEl.innerHTML = '<p class="zk-empty">No notes match your filter.</p>';
      statusEl.textContent = 'No notes match your filter';
      return;
    }

    if (!activeId || !filtered.some((n) => n.id === activeId)) {
      selectNote(filtered[0].id);
    }
  }

  async function loadIndex() {
    statusEl.textContent = 'Loading index…';
    listEl.innerHTML = '';

    try {
      const response = await fetch('/assets/data/zettelkasten-index.json');
      if (!response.ok) throw new Error(`Index fetch failed: ${response.status}`);
      const payload = await response.json();
      notes = payload.notes || [];
      filtered = [...notes];
      renderList(filtered);
      statusEl.textContent = notes.length ? 'Select a note to view' : 'No notes available';
      if (notes.length) {
        selectNote(notes[0].id);
      }
    } catch (error) {
      statusEl.textContent = 'Could not load index';
      listEl.innerHTML = `<p class="zk-error">${escapeHtml(error.message)}</p>`;
    }
  }

  searchEl.addEventListener('input', applyFilter);

  loadIndex();
})();
