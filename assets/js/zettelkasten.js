(function () {
  const viewerEl = document.querySelector('[data-zk-viewer]');
  const reelEl = document.querySelector('[data-zk-reel]');
  const countEl = document.querySelector('[data-zk-count]');
  const searchEl = document.querySelector('[data-zk-search]');
  const statusEl = document.querySelector('[data-zk-status]');
  const newButton = document.querySelector('[data-zk-new]');
  const refreshButton = document.querySelector('[data-zk-refresh]');
  const editLink = document.querySelector('[data-zk-edit]');
  const appEl = document.querySelector('[data-zk-app]');

  if (!viewerEl || !reelEl || !searchEl || !statusEl || !appEl) return;

  let notes = [];
  let filtered = [];
  let activeId = null;

  const repoOwner = appEl.dataset.zkRepoOwner || 'greg-e';
  const repoName = appEl.dataset.zkRepoName || 'limosa.work';
  const branch = appEl.dataset.zkBranch || 'main';

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

  function getTitle(lines, fallback) {
    const heading = lines.find((line) => /^#{1,6}\s+/.test(line));
    return heading ? heading.replace(/^#{1,6}\s+/, '').trim() : fallback;
  }

  function getExcerpt(content) {
    const paragraphs = content
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (!paragraphs.length) return '';
    const snippet = paragraphs[0].replace(/^#{1,6}\s+/, '');
    return snippet.length > 200 ? `${snippet.slice(0, 200)}…` : snippet;
  }

  function renderReel(items) {
    reelEl.innerHTML = '';
    if (countEl) {
      countEl.textContent = `${items.length} note${items.length === 1 ? '' : 's'}`;
    }

    if (!items.length) {
      reelEl.innerHTML = '<p class="zk-empty">No cards to show yet.</p>';
      return;
    }

    for (const note of items) {
      const button = document.createElement('button');
      button.className = 'zk-pill';
      button.type = 'button';
      button.dataset.noteId = note.id;
      button.innerHTML = `
        <span class="zk-pill-title">${note.title}</span>
        <span class="zk-pill-excerpt">${escapeHtml(note.excerpt || '')}</span>
      `;
      if (note.id === activeId) {
        button.classList.add('is-active');
      }
      button.addEventListener('click', () => selectNote(note.id));
      reelEl.appendChild(button);
    }
  }

  function clearSelection(message) {
    activeId = null;
    viewerEl.innerHTML = `<p class="zk-empty">${escapeHtml(message)}</p>`;
    statusEl.textContent = message;
    if (editLink) {
      editLink.classList.add('is-disabled');
      editLink.removeAttribute('href');
    }
  }

  async function selectNote(id) {
    activeId = id;
    renderReel(filtered);
    const note = notes.find((n) => n.id === id);
    if (!note) {
      if (editLink) {
        editLink.classList.add('is-disabled');
        editLink.removeAttribute('href');
      }
      clearSelection('That note is no longer available');
      return;
    }

    statusEl.textContent = 'Loading note…';
    viewerEl.innerHTML = '';

    if (editLink) {
      editLink.href = `https://github.com/${repoOwner}/${repoName}/edit/${branch}${note.path}`;
      editLink.classList.remove('is-disabled');
    }

    try {
      const response = await fetch(note.path, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Failed to load note: ${response.status}`);
      const markdown = await response.text();
      viewerEl.innerHTML = renderMarkdown(markdown);
      statusEl.textContent = note.title;
    } catch (error) {
      viewerEl.innerHTML = `<p class="zk-error">${escapeHtml(error.message)}</p>`;
      statusEl.textContent = 'Could not load note';
    }
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function generateId(title) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const slug = slugify(title || 'note');
    return `${yyyy}${mm}${dd}T${hh}${min}-${slug}`;
  }

  function openNewNote() {
    const title = window.prompt('Title for the new note?');
    if (title === null) return;

    const id = generateId(title);
    const filename = `${id}.md`;
    const frontMatter = ['---', `title: ${title || id}`, `created: ${new Date().toISOString()}`, '---', ''].join('\n');
    const body = `# ${title || id}\n\nStart writing…\n`;
    const template = `${frontMatter}${body}`;
    const url = new URL(`https://github.com/${repoOwner}/${repoName}/new/${branch}/notes`);
    url.searchParams.set('filename', filename);
    url.searchParams.set('value', template);
    window.open(url.toString(), '_blank', 'noopener');
  }

  function applyFilter() {
    const term = searchEl.value.trim().toLowerCase();
    if (!term) {
      filtered = [...notes];
    } else {
      filtered = notes.filter(
        (note) => note.title.toLowerCase().includes(term) || note.excerpt.toLowerCase().includes(term)
      );
    }
    renderReel(filtered);
    if (!filtered.length) {
      clearSelection('No notes match your filter');
      return;
    }

    const stillActive = activeId && filtered.some((n) => n.id === activeId);
    selectNote(stillActive ? activeId : filtered[0].id);
  }

  async function fetchStaticIndex() {
    const response = await fetch(`/assets/data/zettelkasten-index.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Index fetch failed: ${response.status}`);
    const payload = await response.json();
    return payload.notes || [];
  }

  async function fetchLiveIndex() {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/notes?ref=${branch}`;
    const response = await fetch(apiUrl, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`GitHub refresh failed: ${response.status}`);
    }
    const files = await response.json();
    const mdFiles = (files || [])
      .filter((item) => item && item.type === 'file' && item.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name));

    const liveNotes = [];
    for (const file of mdFiles) {
      try {
        const rawResponse = await fetch(file.download_url, { cache: 'no-store' });
        if (!rawResponse.ok) continue;
        const content = await rawResponse.text();
        const lines = content.split(/\r?\n/);
        const id = file.name.replace(/\.md$/, '');
        liveNotes.push({
          id,
          title: getTitle(lines, id),
          path: `/notes/${file.name}`,
          excerpt: getExcerpt(content),
        });
      } catch (error) {
        console.warn('Skipping note', file.name, error);
      }
    }

    if (!liveNotes.length) {
      throw new Error('No notes discovered via GitHub');
    }

    return liveNotes;
  }

  async function loadIndex({ message = 'Loading index…', preserveSearch = true, preferLive = false } = {}) {
    statusEl.textContent = message;
    reelEl.innerHTML = '';

    if (editLink) {
      editLink.classList.add('is-disabled');
      editLink.removeAttribute('href');
    }

    const loaders = preferLive ? [fetchLiveIndex, fetchStaticIndex] : [fetchStaticIndex, fetchLiveIndex];

    for (const load of loaders) {
      try {
        const fetched = await load();
        notes = fetched;
        if (!preserveSearch) {
          searchEl.value = '';
        }
        applyFilter();
        if (!notes.length) {
          clearSelection('No notes available');
        }
        statusEl.textContent = preferLive ? 'Index refreshed from GitHub' : 'Index loaded';
        return;
      } catch (error) {
        console.warn('Index load attempt failed:', error.message);
      }
    }

    statusEl.textContent = 'Could not load index';
    reelEl.innerHTML = '<p class="zk-error">Index unavailable.</p>';
  }

  searchEl.addEventListener('input', applyFilter);

  if (newButton) {
    newButton.addEventListener('click', openNewNote);
  }

  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      loadIndex({ message: 'Refreshing from GitHub…', preserveSearch: true, preferLive: true });
    });
  }

  if (editLink) {
    editLink.addEventListener('click', (event) => {
      if (editLink.classList.contains('is-disabled')) {
        event.preventDefault();
      }
    });
  }

  loadIndex({ message: 'Loading index…', preserveSearch: true, preferLive: false });
})();
