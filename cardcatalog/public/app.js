const drawerEl = document.getElementById('drawer');
const drawerEmpty = document.getElementById('drawer-empty');
const tableEl = document.getElementById('table-list');
const overlay = document.getElementById('card-overlay');
const detailId = document.getElementById('detail-id');
const detailTitle = document.getElementById('detail-title');
const detailBody = document.getElementById('detail-body');
const detailLinks = document.getElementById('detail-links');
const detailMeta = document.getElementById('detail-meta');
const detailTranscription = document.getElementById('detail-transcription');
const linkTrailEl = document.getElementById('link-trail');
const pinPileEl = document.getElementById('pin-pile');
const lineMap = document.getElementById('line-map');
const mapOutput = document.getElementById('map-output');
const scanPreview = document.getElementById('scan-preview');
const registerModal = document.getElementById('register-modal');
const registerInput = document.getElementById('register-input');
const registerResults = document.getElementById('register-results');
const storageWarning = document.getElementById('storage-warning');
const formMessage = document.getElementById('form-message');

let cachedCards = [];
let imageUrlCache = new Map();
let selectedCardId = null;
let drawerOrder = [];
let trail = [];
let pinned = new Set(JSON.parse(localStorage.getItem('cardcatalog-pins') || '[]'));

const DB_NAME = 'cardcatalog';
const DB_STORE = 'cards';

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      reject(new Error('IndexedDB unavailable'));
      return;
    }

    const request = indexedDB.open(DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'id' });
      }
    };
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

async function withDb(callback) {
  try {
    const db = await openDatabase();
    return callback(db);
  } catch (error) {
    storageWarning.classList.remove('hidden');
    console.warn('Storage unavailable', error);
    throw error;
  }
}

async function getAllCards() {
  try {
    return await withDb(
      (db) =>
        new Promise((resolve, reject) => {
          const transaction = db.transaction(DB_STORE, 'readonly');
          const store = transaction.objectStore(DB_STORE);
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => reject(request.error);
        }),
    );
  } catch (error) {
    return [];
  }
}

async function getCard(id) {
  if (!id) return null;
  try {
    return await withDb(
      (db) =>
        new Promise((resolve, reject) => {
          const transaction = db.transaction(DB_STORE, 'readonly');
          const store = transaction.objectStore(DB_STORE);
          const request = store.get(id);
          request.onsuccess = () => resolve(request.result || null);
          request.onerror = () => reject(request.error);
        }),
    );
  } catch (error) {
    return null;
  }
}

async function putCard(card) {
  return withDb(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(DB_STORE, 'readwrite');
        const store = transaction.objectStore(DB_STORE);
        const request = store.put(card);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      }),
  );
}

function hydrate(cards) {
  return cards.map((card) => {
    const status = card.status || 'filed';
    if (card.imageUrl) return { ...card, status };
    if (imageUrlCache.has(card.id)) {
      return { ...card, imageUrl: imageUrlCache.get(card.id), status };
    }
    const url = URL.createObjectURL(card.imageBlob);
    imageUrlCache.set(card.id, url);
    return { ...card, imageUrl: url, status };
  });
}

function computeIndent(id) {
  if (!id) return 0;
  const slashDepth = id.split('/').length - 1;
  const letters = (id.match(/[a-zA-Z]/g) || []).length;
  return Math.min(6, slashDepth + letters);
}

function snippet(card) {
  if (card.transcription) {
    return card.transcription.split(/\n+/)[0].slice(0, 120);
  }
  if (card.title) return card.title;
  if (card.tags && card.tags.length) return card.tags.slice(0, 3).join(', ');
  return 'Handwritten card';
}

function updateTrail(id) {
  if (!id) return;
  const last = trail[trail.length - 1];
  if (last !== id) {
    trail.push(id);
  }
  linkTrailEl.textContent = `Link trail: ${trail.join(' → ')}`;
}

function renderPins() {
  pinPileEl.innerHTML = '';
  if (!pinned.size) return;
  [...pinned].forEach((id) => {
    const chip = document.createElement('div');
    chip.className = 'pin';
    chip.textContent = id;
    chip.addEventListener('click', () => showCardDetail(id));
    pinPileEl.appendChild(chip);
  });
}

function togglePin(cardId) {
  if (!cardId) return;
  if (pinned.has(cardId)) pinned.delete(cardId);
  else pinned.add(cardId);
  localStorage.setItem('cardcatalog-pins', JSON.stringify([...pinned]));
  renderPins();
}

function renderDrawer(cards) {
  drawerEl.innerHTML = '';
  const filed = cards.filter((card) => card.status !== 'table');
  drawerOrder = filed.map((c) => c.id);
  drawerEmpty.classList.toggle('hidden', filed.length > 0);
  if (!filed.length) return;

  filed
    .sort((a, b) => a.id.localeCompare(b.id))
    .forEach((card) => {
      const item = document.createElement('div');
      item.className = `drawer-card indent-${computeIndent(card.id)}`;
      item.innerHTML = `
        <div class="id">${card.id}</div>
        <div class="title">${card.title || 'Untitled card'}</div>
        <div class="snippet">${snippet(card)}</div>
      `;
      item.addEventListener('click', () => showCardDetail(card.id));
      drawerEl.appendChild(item);
    });
}

function renderTable(cards) {
  tableEl.innerHTML = '';
  const tableCards = cards.filter((card) => card.status === 'table');
  if (!tableCards.length) {
    const empty = document.createElement('div');
    empty.className = 'placeholder';
    empty.textContent = 'Nothing on the Table. Scan a card and leave it unfiled to stage it here.';
    tableEl.appendChild(empty);
    return;
  }

  tableCards
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((card) => {
      const div = document.createElement('div');
      div.className = 'table-card';
      div.innerHTML = `
        <div class="id">${card.id}</div>
        <div class="title">${card.title || 'Untitled card'}</div>
        <img src="${card.imageUrl}" alt="Card ${card.id}" loading="lazy" />
        <div class="snippet">${snippet(card)}</div>
        <div class="table-actions">
          <button class="ghost" data-action="view">Slide out</button>
          <button data-action="file">File behind…</button>
        </div>
      `;

      div.querySelector('[data-action="view"]').addEventListener('click', () => showCardDetail(card.id));
      div.querySelector('[data-action="file"]').addEventListener('click', async () => {
        const behind = prompt('File this card behind which ID? (leave blank to keep on Table)', card.parentId || '');
        if (!behind) return;
        await updateCard(card.id, {
          parentId: behind,
          status: 'filed',
          updatedAt: new Date().toISOString(),
        });
        loadAndRender();
      });

      tableEl.appendChild(div);
    });
}

function renderMap(cards) {
  const filed = cards.filter((card) => card.status !== 'table');
  const byParent = new Map();
  filed.forEach((card) => {
    const parent = card.parentId || '__root';
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push(card);
  });

  function walk(parent, prefix = '') {
    const branch = byParent.get(parent) || [];
    branch.sort((a, b) => a.id.localeCompare(b.id));
    let lines = '';
    branch.forEach((card, index) => {
      const connector = index === branch.length - 1 ? '└─ ' : '├─ ';
      lines += `${prefix}${connector}${card.id}\n`;
      lines += walk(card.id, `${prefix}${index === branch.length - 1 ? '   ' : '│  '}`);
    });
    return lines;
  }

  mapOutput.textContent = walk('__root') || 'No filed cards yet.';
}

function renderDetail(card) {
  selectedCardId = card.id;
  updateTrail(card.id);
  overlay.classList.remove('hidden');
  detailId.textContent = card.id;
  detailTitle.textContent = card.title || 'Untitled card';
  detailBody.innerHTML = `<img src="${card.imageUrl}" alt="Card ${card.id}" />`;

  if (card.transcription) {
    detailTranscription.textContent = card.transcription;
    detailTranscription.classList.remove('hidden');
  } else {
    detailTranscription.classList.add('hidden');
  }

  const parentLink = card.parentId
    ? `<span class="link" data-card="${card.parentId}">${card.parentId}</span>`
    : '—';
  const related = card.relatedIds && card.relatedIds.length
    ? card.relatedIds.map((entry) => `<span class="link" data-card="${entry}">${entry}</span>`).join(', ')
    : '—';

  detailLinks.innerHTML = `
    <div><strong>Links →</strong> ${related}</div>
    <div><strong>Backlink →</strong> ${parentLink}</div>
  `;
  detailLinks.querySelectorAll('[data-card]').forEach((node) => {
    node.addEventListener('click', () => showCardDetail(node.dataset.card));
  });

  detailMeta.innerHTML = `
    <div><strong>Box / Collection:</strong> ${card.boxOrCollection || '—'}</div>
    <div><strong>Tags:</strong> ${(card.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join(' ') || '—'}</div>
    <div><strong>Status:</strong> ${card.status === 'table' ? 'On the Table' : 'Filed'}</div>
    <div><strong>Created:</strong> ${new Date(card.createdAt).toLocaleString()}</div>
    <div><strong>Updated:</strong> ${new Date(card.updatedAt).toLocaleString()}</div>
  `;

  document.getElementById('pin-toggle').textContent = pinned.has(card.id) ? 'Unclip' : 'Paper clip';
}

async function showCardDetail(id) {
  const card = await getCard(id);
  if (!card) return;
  const hydrated = hydrate([card])[0];
  renderDetail(hydrated);
}

async function updateCard(id, updates) {
  const existing = await getCard(id);
  if (!existing) return;
  const updated = { ...existing, ...updates };
  await putCard(updated);
}

async function handleCreate(event) {
  event.preventDefault();
  const file = document.getElementById('image').files[0];
  if (!file) return;

  const cards = await getAllCards();
  const id = document.getElementById('card-id').value.trim();
  if (cards.some((card) => card.id === id)) {
    formMessage.textContent = 'A card with that ID already exists.';
    return;
  }

  const parentId = document.getElementById('parent').value.trim();
  const status = document.getElementById('file-immediately').checked ? 'filed' : 'table';

  const payload = {
    id,
    title: document.getElementById('title').value.trim(),
    boxOrCollection: document.getElementById('box').value.trim(),
    parentId: parentId || null,
    relatedIds: parseList(document.getElementById('related').value),
    tags: parseList(document.getElementById('tags').value),
    transcription: document.getElementById('transcription').value.trim(),
    imageBlob: file,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    await putCard(payload);
    formMessage.textContent = status === 'table'
      ? 'Card saved to the Table. File it when you are ready.'
      : 'Card filed immediately behind the chosen address.';
    document.getElementById('card-form').reset();
    scanPreview.innerHTML = 'Drop in an image to see a preview framed like A6.';
    await loadAndRender();
  } catch (error) {
    formMessage.textContent = 'Unable to save. Check your browser storage permissions and try again.';
    console.warn('Failed to save card', error);
  }
}

function parseList(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function registerSearch() {
  const term = registerInput.value.trim().toLowerCase();
  registerResults.innerHTML = '';
  if (!term) return;
  const matches = cachedCards
    .filter((card) => {
      const haystack = `${card.id} ${card.title || ''} ${(card.tags || []).join(' ')}`.toLowerCase();
      return haystack.includes(term);
    })
    .slice(0, 3);

  if (!matches.length) {
    registerResults.textContent = 'No entry points yet. Add a card that carries this keyword.';
    return;
  }

  matches.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'register-card';
    div.innerHTML = `<div class="id">${card.id}</div><div class="title">${card.title || 'Untitled card'}</div>`;
    div.addEventListener('click', () => {
      closeRegister();
      showCardDetail(card.id);
    });
    registerResults.appendChild(div);
  });
}

function openRegister() {
  registerModal.classList.remove('hidden');
  registerInput.focus();
}

function closeRegister() {
  registerModal.classList.add('hidden');
  registerInput.value = '';
  registerResults.innerHTML = '';
}

function toggleMap() {
  lineMap.classList.toggle('hidden');
}

function pullRandom() {
  if (!cachedCards.length) return;
  const pool = cachedCards.filter((card) => card.status !== 'table');
  const pick = (pool.length ? pool : cachedCards)[Math.floor(Math.random() * (pool.length ? pool.length : cachedCards.length))];
  showCardDetail(pick.id);
}

function suggestBranch(id) {
  if (!id) return '';
  const endsWithLetter = /[a-zA-Z]$/.test(id);
  const endsWithDigit = /\d$/.test(id);
  if (endsWithLetter) return `${id}1`;
  if (endsWithDigit) return `${id}a`;
  return `${id}1`;
}

async function addLink() {
  if (!selectedCardId) return;
  const target = prompt('Enter the card ID to link with (red pencil style):');
  if (!target) return;
  const card = await getCard(selectedCardId);
  const relatedIds = Array.from(new Set([...(card.relatedIds || []), target]));
  await updateCard(selectedCardId, { relatedIds, updatedAt: new Date().toISOString() });
  loadAndRender();
  showCardDetail(selectedCardId);
}

async function branchQuickAdd() {
  if (!selectedCardId) return;
  const suggestion = suggestBranch(selectedCardId);
  const target = prompt(`Proposed branch ID: ${suggestion}. Accept or edit:`, suggestion);
  if (!target) return;
  const card = await getCard(selectedCardId);
  const relatedIds = Array.from(new Set([...(card.relatedIds || []), target]));
  await updateCard(selectedCardId, { relatedIds, updatedAt: new Date().toISOString() });
  loadAndRender();
  showCardDetail(selectedCardId);
}

function handleScanPreview(event) {
  const file = event.target.files[0];
  if (!file) {
    scanPreview.innerHTML = 'Drop in an image to see a preview framed like A6.';
    return;
  }
  const url = URL.createObjectURL(file);
  scanPreview.innerHTML = `<img src="${url}" alt="Preview" />`;
}

function keyboardNavigation(event) {
  if (!selectedCardId) return;
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const index = drawerOrder.indexOf(selectedCardId);
  if (event.key === 'ArrowLeft' && index > 0) {
    showCardDetail(drawerOrder[index - 1]);
  }
  if (event.key === 'ArrowRight' && index < drawerOrder.length - 1) {
    showCardDetail(drawerOrder[index + 1]);
  }
}

async function loadAndRender() {
  cachedCards = hydrate(await getAllCards());
  renderDrawer(cachedCards);
  renderTable(cachedCards);
  renderMap(cachedCards);
  renderPins();
}

// Wiring

document.getElementById('card-form').addEventListener('submit', handleCreate);
document.getElementById('image').addEventListener('change', handleScanPreview);
document.getElementById('close-overlay').addEventListener('click', () => overlay.classList.add('hidden'));
document.getElementById('pin-toggle').addEventListener('click', () => togglePin(selectedCardId));
document.getElementById('register-button').addEventListener('click', openRegister);
document.getElementById('close-register').addEventListener('click', closeRegister);
registerInput.addEventListener('input', registerSearch);
document.getElementById('map-toggle').addEventListener('click', toggleMap);
document.getElementById('pull-button').addEventListener('click', pullRandom);
document.getElementById('table-button').addEventListener('click', () => document.getElementById('table').scrollIntoView({ behavior: 'smooth' }));
document.getElementById('add-link').addEventListener('click', addLink);
document.getElementById('branch-suggest').addEventListener('click', branchQuickAdd);
document.addEventListener('keydown', keyboardNavigation);

loadAndRender();
