const STORAGE_KEY = 'cardcatalog.cards';
const libraryEl = document.getElementById('library');
const viewButtons = document.querySelectorAll('.view-toggle button');
const cardForm = document.getElementById('card-form');
const filtersForm = document.getElementById('filters');
const clearFiltersBtn = document.getElementById('clear-filters');
const detailEl = document.getElementById('detail');
const editPanel = document.getElementById('edit-panel');
const editForm = document.getElementById('edit-form');
let currentView = 'grid';
let selectedCardId = null;

function storageAvailable() {
  try {
    const key = '__cardcatalog_test__';
    localStorage.setItem(key, 'ok');
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}

function readCards() {
  if (!storageAvailable()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Unable to read cards from localStorage', err);
    return [];
  }
}

function writeCards(cards) {
  if (!storageAvailable()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result || '';
      const base64 = result.toString().split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formValue(id) {
  return document.getElementById(id).value.trim();
}

function relatedDisplay(list) {
  return list && list.length ? list.join(', ') : '—';
}

function parseList(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function applyFilters(cards) {
  const searchId = formValue('filter-id');
  const box = formValue('filter-box');
  const tag = formValue('filter-tag');

  let filtered = cards;
  if (searchId) {
    filtered = filtered.filter((card) => card.id.toLowerCase().includes(searchId.toLowerCase()));
  }
  if (box) {
    filtered = filtered.filter(
      (card) => card.boxOrCollection && card.boxOrCollection.toLowerCase() === box.toLowerCase(),
    );
  }
  if (tag) {
    filtered = filtered.filter((card) => (card.tags || []).some((entry) => entry.toLowerCase() === tag.toLowerCase()));
  }

  const sort = document.getElementById('sort').value;
  if (sort === 'id') {
    filtered = [...filtered].sort((a, b) => a.id.localeCompare(b.id));
  } else if (sort === 'box') {
    filtered = [...filtered].sort((a, b) => (a.boxOrCollection || '').localeCompare(b.boxOrCollection || ''));
  } else {
    filtered = [...filtered].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return filtered;
}

function loadCards() {
  const cards = applyFilters(readCards());
  renderCards(cards);
}

function renderCards(cards) {
  libraryEl.classList.toggle('grid', currentView === 'grid');
  libraryEl.classList.toggle('list', currentView === 'list');
  if (!cards.length) {
    libraryEl.innerHTML = '<p class="placeholder">No cards saved yet. Add your first card above.</p>';
    return;
  }

  libraryEl.innerHTML = '';
  cards.forEach((card) => {
    const tile = document.createElement('div');
    tile.className = 'card-tile';
    tile.innerHTML = `
      <img src="${card.imageUrl}" alt="Card ${card.id}" loading="lazy" />
      <div class="card-meta">
        <div class="id">${card.id}</div>
        <div class="title">${card.title || 'Untitled card'}</div>
      </div>
    `;
    tile.addEventListener('click', () => showCardDetail(card.id));
    libraryEl.appendChild(tile);
  });
}

function showCardDetail(id) {
  const card = readCards().find((entry) => entry.id === id);
  if (!card) {
    detailEl.innerHTML = '<p class="placeholder">Card not found.</p>';
    editPanel.classList.add('hidden');
    return;
  }
  selectedCardId = card.id;
  renderDetail(card);
  populateEdit(card);
}

function renderDetail(card) {
  detailEl.classList.remove('placeholder');
  detailEl.innerHTML = '';

  const image = document.createElement('img');
  image.src = card.imageUrl;
  image.alt = `Card ${card.id}`;
  detailEl.appendChild(image);

  const meta = document.createElement('div');
  meta.className = 'meta-grid';

  const parent = card.parentId
    ? `<span class="link-like" data-card="${card.parentId}">${card.parentId}</span>`
    : '—';
  const related = card.relatedIds && card.relatedIds.length
    ? card.relatedIds.map((entry) => `<span class="link-like" data-card="${entry}">${entry}</span>`).join(', ')
    : '—';

  meta.innerHTML = `
    <div><strong>ID:</strong> ${card.id}</div>
    <div><strong>Title:</strong> ${card.title || '—'}</div>
    <div><strong>Box / Collection:</strong> ${card.boxOrCollection || '—'}</div>
    <div><strong>Parent ID:</strong> ${parent}</div>
    <div><strong>Related IDs:</strong> ${related}</div>
    <div><strong>Tags:</strong> ${card.tags && card.tags.length ? card.tags.map((tag) => `<span class="tag">${tag}</span>`).join(' ') : '—'}</div>
    <div><strong>Created:</strong> ${new Date(card.createdAt).toLocaleString()}</div>
    <div><strong>Updated:</strong> ${new Date(card.updatedAt).toLocaleString()}</div>
  `;

  meta.querySelectorAll('[data-card]').forEach((node) => {
    node.addEventListener('click', () => showCardDetail(node.dataset.card));
  });

  detailEl.appendChild(meta);
  editPanel.classList.remove('hidden');
}

function populateEdit(card) {
  document.getElementById('edit-id').value = card.id;
  document.getElementById('edit-title').value = card.title || '';
  document.getElementById('edit-box').value = card.boxOrCollection || '';
  document.getElementById('edit-parent').value = card.parentId || '';
  document.getElementById('edit-related').value = relatedDisplay(card.relatedIds || []);
  document.getElementById('edit-tags').value = relatedDisplay(card.tags || []);
  document.getElementById('edit-message').textContent = '';
}

async function handleCreate(event) {
  event.preventDefault();
  const file = document.getElementById('image').files[0];
  if (!file) return;

  const cards = readCards();
  const id = formValue('card-id');
  if (cards.some((card) => card.id === id)) {
    document.getElementById('form-message').textContent = 'A card with that ID already exists.';
    return;
  }

  const payload = {
    id,
    title: formValue('title'),
    boxOrCollection: formValue('box'),
    parentId: formValue('parent'),
    relatedIds: parseList(formValue('related')),
    tags: parseList(formValue('tags')),
    imageUrl: `data:${file.type || 'image/*'};base64,${await fileToBase64(file)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  cards.push(payload);
  writeCards(cards);
  document.getElementById('form-message').textContent = 'Card saved locally. The analog card remains the source of truth.';
  cardForm.reset();
  loadCards();
}

function handleEdit(event) {
  event.preventDefault();
  if (!selectedCardId) return;
  const cards = readCards();
  const index = cards.findIndex((card) => card.id === selectedCardId);
  if (index === -1) return;

  const incomingId = formValue('edit-id') || selectedCardId;
  if (incomingId !== selectedCardId && cards.some((card) => card.id === incomingId)) {
    document.getElementById('edit-message').textContent = 'A different card already uses that ID.';
    return;
  }

  const existing = cards[index];
  const updated = {
    ...existing,
    id: incomingId,
    title: formValue('edit-title'),
    boxOrCollection: formValue('edit-box'),
    parentId: formValue('edit-parent'),
    relatedIds: parseList(formValue('edit-related')),
    tags: parseList(formValue('edit-tags')),
    updatedAt: new Date().toISOString(),
  };

  cards[index] = updated;
  writeCards(cards);
  selectedCardId = updated.id;
  document.getElementById('edit-message').textContent = 'Metadata updated locally. Images stay untouched.';
  renderDetail(updated);
  loadCards();
}

function wireViewToggle() {
  viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      viewButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      currentView = button.dataset.view;
      loadCards();
    });
  });
}

function wireFilters() {
  filtersForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loadCards();
  });

  clearFiltersBtn.addEventListener('click', () => {
    filtersForm.reset();
    loadCards();
  });
}

cardForm.addEventListener('submit', handleCreate);
editForm.addEventListener('submit', handleEdit);
wireViewToggle();
wireFilters();
loadCards();
