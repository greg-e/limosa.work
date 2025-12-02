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

async function loadCards() {
  const params = new URLSearchParams();
  if (formValue('filter-id')) params.set('id', formValue('filter-id'));
  if (formValue('filter-box')) params.set('box', formValue('filter-box'));
  if (formValue('filter-tag')) params.set('tag', formValue('filter-tag'));
  const sort = document.getElementById('sort').value;
  if (sort !== 'created') params.set('sort', sort);

  const response = await fetch(`/api/cards?${params.toString()}`);
  const cards = await response.json();
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

async function showCardDetail(id) {
  const res = await fetch(`/api/cards/${encodeURIComponent(id)}`);
  if (!res.ok) {
    detailEl.innerHTML = '<p class="placeholder">Card not found.</p>';
    editPanel.classList.add('hidden');
    return;
  }
  const card = await res.json();
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
    ? card.relatedIds.map((id) => `<span class="link-like" data-card="${id}">${id}</span>`).join(', ')
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

  const payload = {
    id: formValue('card-id'),
    title: formValue('title'),
    boxOrCollection: formValue('box'),
    parentId: formValue('parent'),
    relatedIds: formValue('related'),
    tags: formValue('tags'),
    imageData: await fileToBase64(file),
    imageType: file.type,
  };

  const message = document.getElementById('form-message');
  message.textContent = 'Saving…';
  const res = await fetch('/api/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    message.textContent = error.error || 'Unable to save card.';
    return;
  }

  message.textContent = 'Card saved. The analog card remains the source of truth.';
  cardForm.reset();
  loadCards();
}

async function handleEdit(event) {
  event.preventDefault();
  if (!selectedCardId) return;
  const payload = {
    id: formValue('edit-id'),
    title: formValue('edit-title'),
    boxOrCollection: formValue('edit-box'),
    parentId: formValue('edit-parent'),
    relatedIds: formValue('edit-related'),
    tags: formValue('edit-tags'),
  };

  const message = document.getElementById('edit-message');
  message.textContent = 'Updating…';
  const res = await fetch(`/api/cards/${encodeURIComponent(selectedCardId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    message.textContent = error.error || 'Unable to update card.';
    return;
  }

  const updated = await res.json();
  message.textContent = 'Metadata updated. No changes made to the image.';
  selectedCardId = updated.id;
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
