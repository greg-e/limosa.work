(function () {
  const viewerEl = document.querySelector('[data-zk-viewer]');
  const countEl = document.querySelector('[data-zk-count]');
  const activeEl = document.querySelector('[data-zk-active]');
  const statusEl = document.querySelector('[data-zk-status]');
  const newButton = document.querySelector('[data-zk-new]');
  const refreshButton = document.querySelector('[data-zk-refresh]');
  const editLink = document.querySelector('[data-zk-edit]');
  const appEl = document.querySelector('[data-zk-app]');
  const prevButton = document.querySelector('[data-zk-prev]');
  const nextButton = document.querySelector('[data-zk-next]');
  const catalogTrigger = document.querySelector('[data-zk-catalog-trigger]');
  const catalogEl = document.querySelector('[data-zk-catalog]');
  const catalogInput = document.querySelector('[data-zk-catalog-input]');
  const catalogTagsEl = document.querySelector('[data-zk-catalog-tags]');
  const catalogResultsEl = document.querySelector('[data-zk-catalog-results]');

  if (!viewerEl || !statusEl || !appEl) return;

  let notes = [];
  let activeId = null;
  let indexedCards = null;
  let isBuildingIndex = false;
  let catalogOpen = false;
  let catalogFocusIndex = -1;

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

  function stripMarkdown(text) {
    return text
      .replace(/`{1,3}[^`]*`{1,3}/g, '')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\[(.+?)\]\((.+?)\)/g, '$1')
      .replace(/^>\s?/gm, '')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/[*_-]{3,}/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function clearSelection(message) {
    activeId = null;
    viewerEl.innerHTML = `<p class="zk-empty">${escapeHtml(message)}</p>`;
    statusEl.textContent = message;
    if (countEl) {
      countEl.textContent = `${notes.length} note${notes.length === 1 ? '' : 's'}`;
    }
    if (activeEl) {
      activeEl.textContent = 'Nothing selected';
    }
    if (editLink) {
      editLink.classList.add('is-disabled');
      editLink.removeAttribute('href');
    }
  }

  function noteFetchUrl(note) {
    if (!note) return null;
    return note.raw || note.path;
  }

  async function selectNote(id) {
    activeId = id;
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

    if (countEl) {
      countEl.textContent = `${notes.length} note${notes.length === 1 ? '' : 's'}`;
    }
    if (activeEl) {
      const position = notes.findIndex((n) => n.id === id);
      if (position >= 0) {
        activeEl.textContent = `Card ${position + 1} of ${notes.length}`;
      }
    }

    if (editLink) {
      editLink.href = `https://github.com/${repoOwner}/${repoName}/edit/${branch}${note.path}`;
      editLink.classList.remove('is-disabled');
    }

    const fetchUrl = noteFetchUrl(note);

    if (!fetchUrl) {
      viewerEl.innerHTML = '<p class="zk-error">No fetch path for this note.</p>';
      statusEl.textContent = 'Could not load note';
      return;
    }

    try {
      const response = await fetch(fetchUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Failed to load note: ${response.status}`);
      const markdown = await response.text();
      viewerEl.innerHTML = renderMarkdown(markdown);
      statusEl.textContent = note.title;
    } catch (error) {
      viewerEl.innerHTML = `<p class="zk-error">${escapeHtml(error.message)}</p>`;
      statusEl.textContent = 'Could not load note';
    }
  }

  function getActiveIndex() {
    return notes.findIndex((n) => n.id === activeId);
  }

  function stepNote(delta) {
    if (!notes.length) return;
    const currentIndex = getActiveIndex();
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + delta + notes.length) % notes.length;
    selectNote(notes[nextIndex].id);
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

    const now = new Date();
    const id = generateId(title);
    const filename = `${id}.md`;
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const folder = `zettels/${year}/${year}${month}`;
    const frontMatter = ['---', `title: ${title || id}`, `created: ${now.toISOString()}`, '---', ''].join('\n');
    const body = `# ${title || id}\n\nStart writing…\n`;
    const template = `${frontMatter}${body}`;
    const url = new URL(`https://github.com/${repoOwner}/${repoName}/new/${branch}/${folder}`);
    url.searchParams.set('filename', filename);
    url.searchParams.set('value', template);
    window.open(url.toString(), '_blank', 'noopener');
  }

  async function fetchStaticIndex() {
    const response = await fetch(`/assets/data/zettelkasten-index.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Index fetch failed: ${response.status}`);
    const payload = await response.json();
    return payload.notes || [];
  }

  async function fetchLiveIndex() {
    const headers = { Accept: 'application/vnd.github.v3+json' };

    async function fetchDirectoryContents(relativePath) {
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${relativePath}?ref=${branch}`;
      const response = await fetch(apiUrl, { headers, cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`GitHub refresh failed (${relativePath}): ${response.status}`);
      }
      return response.json();
    }

    const liveNotes = [];

    async function walkDirectory(relativePath) {
      const entries = await fetchDirectoryContents(relativePath);
      for (const entry of entries) {
        if (entry.type === 'dir') {
          await walkDirectory(entry.path);
        } else if (entry.type === 'file' && entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'index.md') {
          try {
          const rawResponse = await fetch(entry.download_url, { cache: 'no-store' });
          if (!rawResponse.ok) continue;
          const content = await rawResponse.text();
          const lines = content.split(/\r?\n/);
          const id = entry.name.replace(/\.md$/, '');
          liveNotes.push({
            id,
            title: getTitle(lines, id),
            tags: extractTags(content),
            path: `/${entry.path}`,
            raw: entry.download_url,
            excerpt: getExcerpt(content),
          });
        } catch (error) {
          console.warn('Skipping note', entry.name, error);
        }
      }
      }
    }

    await walkDirectory('zettels');

    if (!liveNotes.length) {
      throw new Error('No notes discovered via GitHub');
    }

    return liveNotes.sort((a, b) => b.id.localeCompare(a.id));
  }

  async function loadIndex({ message = 'Loading index…', preserveSearch = true, preferLive = false } = {}) {
    statusEl.textContent = message;
    viewerEl.innerHTML = '<p class="zk-empty">Loading…</p>';

    if (editLink) {
      editLink.classList.add('is-disabled');
      editLink.removeAttribute('href');
    }

    const loaders = preferLive ? [fetchLiveIndex, fetchStaticIndex] : [fetchStaticIndex, fetchLiveIndex];

    for (const load of loaders) {
      try {
        const fetched = await load();
        notes = fetched;
        indexedCards = null;
        isBuildingIndex = false;
        if (notes.length) {
          const stillActive = activeId && notes.some((n) => n.id === activeId);
          selectNote(stillActive ? activeId : notes[0].id);
        } else {
          clearSelection('No notes available');
        }
        statusEl.textContent = preferLive ? 'Index refreshed from GitHub' : 'Index loaded';
        return;
      } catch (error) {
        console.warn('Index load attempt failed:', error.message);
      }
    }

    statusEl.textContent = 'Could not load index';
    viewerEl.innerHTML = '<p class="zk-error">Index unavailable.</p>';
  }

  async function buildCatalogIndex() {
    if (indexedCards || isBuildingIndex) return indexedCards;
    isBuildingIndex = true;
    if (catalogResultsEl) {
      catalogResultsEl.innerHTML = '<p class="zk-empty">Building catalog…</p>';
    }

    const cards = [];
    for (const note of notes) {
      try {
        const response = await fetch(noteFetchUrl(note), { cache: 'no-store' });
        if (!response.ok) throw new Error(`Failed to fetch ${note.id}`);
        const content = await response.text();
        const tags = extractTags(content);
        const fallbackTags = Array.isArray(note.tags) ? note.tags : [];
        const body = stripFrontMatter(content);
        const snippet = buildSnippet(body);
        cards.push({
          id: note.id,
          title: note.title,
          tags: tags.length ? tags : fallbackTags,
          content: body,
          updated: deriveUpdatedDate(note.id, content),
          snippet,
          path: note.path,
        });
      } catch (error) {
        console.warn('Catalog skip', note.id, error.message);
      }
    }

    indexedCards = cards;
    isBuildingIndex = false;
    renderTagFilters();
    return indexedCards;
  }

  function deriveUpdatedDate(id, content) {
    const createdMatch = content.match(/^created:\s*(.+)$/m);
    if (createdMatch) {
      const value = createdMatch[1].trim();
      return value;
    }
    const isoCandidate = id.slice(0, 8);
    if (/^\d{8}$/.test(isoCandidate)) {
      return `${isoCandidate.slice(0, 4)}-${isoCandidate.slice(4, 6)}-${isoCandidate.slice(6, 8)}`;
    }
    return undefined;
  }

  function stripFrontMatter(content) {
    const lines = content.split(/\r?\n/);
    if (lines[0] !== '---') return content;
    const endIndex = lines.indexOf('---', 1);
    if (endIndex === -1) return content;
    return lines.slice(endIndex + 1).join('\n').trim();
  }

  function extractTags(content) {
    const lines = content.split(/\r?\n/);
    if (lines[0] !== '---') return [];
    const endIndex = lines.indexOf('---', 1);
    if (endIndex === -1) return [];
    const fmLines = lines.slice(1, endIndex);
    const tagsIndex = fmLines.findIndex((line) => line.trim().startsWith('tags:'));
    if (tagsIndex === -1) return [];
    const inline = fmLines[tagsIndex].replace('tags:', '').trim();
    if (!inline) {
      const tagValues = [];
      for (let i = tagsIndex + 1; i < fmLines.length; i += 1) {
        const tagLine = fmLines[i];
        if (!tagLine.trim().startsWith('-')) break;
        tagValues.push(tagLine.replace(/^\s*-\s*/, '').trim());
      }
      return tagValues.filter(Boolean);
    }
    return inline
      .replace(/\[|\]/g, '')
      .split(/[,\s]+/)
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  function buildSnippet(content) {
    const plain = stripMarkdown(content);
    return plain.length > 200 ? `${plain.slice(0, 200)}…` : plain;
  }

  function searchCards(cards, query, requiredTags) {
    const tokens = query
      .toLowerCase()
      .split(/\s+/)
      .map((t) => t.trim())
      .filter(Boolean);

    const filteredByTags = requiredTags.length
      ? cards.filter((card) => requiredTags.every((tag) => card.tags.includes(tag)))
      : [...cards];

    const scored = filteredByTags
      .map((card) => {
        const searchText = `${card.title} ${card.content}`.toLowerCase();
        const matchedCount = tokens.length
          ? tokens.reduce((count, token) => (searchText.includes(token) ? count + 1 : count), 0)
          : 1;
        return { card, score: matchedCount };
      })
      .filter((entry) => tokens.length === 0 || entry.score > 0);

    return scored
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const dateA = a.card.updated ? Date.parse(a.card.updated) : NaN;
        const dateB = b.card.updated ? Date.parse(b.card.updated) : NaN;
        if (!Number.isNaN(dateA) && !Number.isNaN(dateB)) {
          return dateB - dateA;
        }
        if (!Number.isNaN(dateA)) return -1;
        if (!Number.isNaN(dateB)) return 1;
        return a.card.title.localeCompare(b.card.title);
      })
      .map((entry) => entry.card);
  }

  function renderTagFilters() {
    if (!catalogTagsEl || !indexedCards) return;
    const tagSet = new Set();
    indexedCards.forEach((card) => card.tags.forEach((tag) => tagSet.add(tag)));
    const tags = Array.from(tagSet).sort((a, b) => a.localeCompare(b));
    if (!tags.length) {
      catalogTagsEl.innerHTML = '<p class="zk-empty">No tags available.</p>';
      return;
    }
    catalogTagsEl.innerHTML = '';
    for (const tag of tags) {
      const id = `zk-tag-${tag.replace(/[^a-z0-9]+/gi, '-')}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'zk-catalog__tag';
      wrapper.innerHTML = `
        <input type="checkbox" value="${escapeHtml(tag)}" id="${id}" />
        <span>${escapeHtml(tag)}</span>
      `;
      wrapper.querySelector('input').addEventListener('change', runCatalogSearch);
      catalogTagsEl.appendChild(wrapper);
    }
  }

  function getSelectedTags() {
    if (!catalogTagsEl) return [];
    const inputs = Array.from(catalogTagsEl.querySelectorAll('input[type="checkbox"]'));
    return inputs
      .filter((input) => input.checked)
      .map((input) => input.value)
      .filter(Boolean);
  }

  function renderCatalogResults(results) {
    if (!catalogResultsEl) return;
    catalogResultsEl.innerHTML = '';
    if (!results.length) {
      catalogResultsEl.innerHTML = '<p class="zk-empty">No cards found.</p>';
      return;
    }
    results.forEach((card, index) => {
      const item = document.createElement('div');
      item.className = 'zk-catalog__result';
      item.setAttribute('role', 'option');
      item.tabIndex = -1;
      item.dataset.index = String(index);
      item.innerHTML = `
        <span class="zk-catalog__result-id">${escapeHtml(card.id)}</span>
        <span class="zk-catalog__result-title">${escapeHtml(card.title)}</span>
        <div class="zk-catalog__result-tags">${
          card.tags.map((tag) => `<span class="zk-catalog__tag-pill">${escapeHtml(tag)}</span>`).join('') ||
          '<span class="zk-catalog__tag-pill">untagged</span>'
        }</div>
        <span class="zk-catalog__result-snippet">${escapeHtml(card.snippet)}</span>
      `;
      item.addEventListener('click', () => {
        closeCatalog();
        selectNote(card.id);
      });
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          closeCatalog();
          selectNote(card.id);
        }
      });
      catalogResultsEl.appendChild(item);
    });
    if (catalogFocusIndex >= results.length) {
      catalogFocusIndex = results.length - 1;
    }
    if (catalogFocusIndex >= 0) {
      focusCatalogItem(catalogFocusIndex);
    }
  }

  function focusCatalogItem(index) {
    if (!catalogResultsEl) return;
    const items = Array.from(catalogResultsEl.querySelectorAll('.zk-catalog__result'));
    items.forEach((item) => item.classList.remove('is-focused'));
    if (index < 0 || index >= items.length) return;
    items[index].classList.add('is-focused');
    items[index].focus({ preventScroll: false });
  }

  async function runCatalogSearch({ preserveFocus = false } = {}) {
    if (!indexedCards) {
      await buildCatalogIndex();
    }
    if (!indexedCards) return;
    if (!preserveFocus) {
      catalogFocusIndex = -1;
    }
    const query = catalogInput ? catalogInput.value : '';
    const tags = getSelectedTags();
    const results = searchCards(indexedCards, query, tags);
    renderCatalogResults(results);
  }

  function openCatalog() {
    if (!catalogEl) return;
    catalogEl.classList.add('is-open');
    catalogEl.setAttribute('aria-hidden', 'false');
    catalogOpen = true;
    runCatalogSearch();
    setTimeout(() => catalogInput && catalogInput.focus(), 20);
  }

  function closeCatalog() {
    if (!catalogEl) return;
    catalogEl.classList.remove('is-open');
    catalogEl.setAttribute('aria-hidden', 'true');
    catalogOpen = false;
    catalogFocusIndex = -1;
  }

  function handleCatalogKeydown(event) {
    if (!catalogOpen) return;
    if (event.key === 'Escape') {
      closeCatalog();
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const items = catalogResultsEl
        ? Array.from(catalogResultsEl.querySelectorAll('.zk-catalog__result'))
        : [];
      if (!items.length) return;
      event.preventDefault();
      catalogFocusIndex = event.key === 'ArrowDown'
        ? Math.min(items.length - 1, catalogFocusIndex + 1)
        : Math.max(0, catalogFocusIndex - 1);
      focusCatalogItem(catalogFocusIndex);
    }
  }

  if (newButton) {
    newButton.addEventListener('click', openNewNote);
  }

  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      loadIndex({ message: 'Refreshing from GitHub…', preserveSearch: true, preferLive: true });
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => stepNote(-1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => stepNote(1));
  }

  if (editLink) {
    editLink.addEventListener('click', (event) => {
      if (editLink.classList.contains('is-disabled')) {
        event.preventDefault();
      }
    });
  }

  if (catalogTrigger) {
    catalogTrigger.addEventListener('click', () => {
      openCatalog();
    });
  }

  if (catalogInput) {
    let debounceHandle = null;
    catalogInput.addEventListener('input', () => {
      clearTimeout(debounceHandle);
      debounceHandle = setTimeout(() => runCatalogSearch(), 200);
    });
  }

  if (catalogEl) {
    catalogEl.addEventListener('keydown', handleCatalogKeydown);
    const closeButtons = catalogEl.querySelectorAll('[data-zk-catalog-close]');
    closeButtons.forEach((btn) => btn.addEventListener('click', closeCatalog));
  }

  window.addEventListener('keydown', (event) => {
    const isCmdK = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
    if (isCmdK) {
      event.preventDefault();
      if (catalogOpen) {
        closeCatalog();
      } else {
        openCatalog();
      }
    }
  });

  loadIndex({ message: 'Loading index…', preserveSearch: true, preferLive: false });
})();
