const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const IMAGE_DIR = path.join(DATA_DIR, 'images');
const CARD_STORE = path.join(DATA_DIR, 'cards.json');

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(IMAGE_DIR, { recursive: true });

function ensureStore() {
  if (!fs.existsSync(CARD_STORE)) {
    fs.writeFileSync(CARD_STORE, JSON.stringify([]), 'utf8');
  }
}

function loadCards() {
  ensureStore();
  const raw = fs.readFileSync(CARD_STORE, 'utf8');
  return JSON.parse(raw);
}

function saveCards(cards) {
  fs.writeFileSync(CARD_STORE, JSON.stringify(cards, null, 2));
}

function sendJson(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });
}

function parseList(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }
  return String(value)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function contentTypeFor(filePath) {
  if (filePath.endsWith('.html')) return 'text/html; charset=utf-8';
  if (filePath.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filePath.endsWith('.png')) return 'image/png';
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg';
  if (filePath.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
}

function respondNotFound(res) {
  sendJson(res, 404, { error: 'Not found' });
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '-');
}

function storeImage(base64Data, mimeType, id) {
  const extension = mimeType && mimeType.includes('/') ? mimeType.split('/')[1] : 'bin';
  const filename = `${Date.now()}-${sanitizeFilename(id || 'card')}.${extension}`;
  const target = path.join(IMAGE_DIR, filename);
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(target, buffer);
  return filename;
}

function filterCards(cards, query) {
  const searchId = query.get('id');
  const box = query.get('box');
  const tag = query.get('tag');
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

  const sort = query.get('sort');
  if (sort === 'id') {
    filtered = [...filtered].sort((a, b) => a.id.localeCompare(b.id));
  } else if (sort === 'box') {
    filtered = [...filtered].sort((a, b) => (a.boxOrCollection || '').localeCompare(b.boxOrCollection || ''));
  } else {
    filtered = [...filtered].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return filtered;
}

function attachImageUrl(card) {
  return { ...card, imageUrl: `/images/${card.imageFilename}` };
}

async function handleCreateCard(req, res) {
  const body = await readRequestBody(req);
  let payload;
  try {
    payload = JSON.parse(body || '{}');
  } catch (err) {
    return sendJson(res, 400, { error: 'Invalid JSON payload' });
  }

  const { id, title, boxOrCollection, parentId, relatedIds, tags, imageData, imageType } = payload;
  if (!id || typeof id !== 'string') {
    return sendJson(res, 400, { error: 'Card id is required' });
  }
  if (!imageData || typeof imageData !== 'string') {
    return sendJson(res, 400, { error: 'An image (base64) is required' });
  }

  const cards = loadCards();
  if (cards.some((card) => card.id === id)) {
    return sendJson(res, 409, { error: 'A card with that id already exists' });
  }

  const imageFilename = storeImage(imageData, imageType, id);
  const now = new Date().toISOString();
  const card = {
    id,
    title: title || '',
    boxOrCollection: boxOrCollection || '',
    parentId: parentId || '',
    relatedIds: parseList(relatedIds),
    tags: parseList(tags),
    imageFilename,
    createdAt: now,
    updatedAt: now,
  };

  cards.push(card);
  saveCards(cards);
  return sendJson(res, 201, attachImageUrl(card));
}

async function handleUpdateCard(req, res, id) {
  const body = await readRequestBody(req);
  let payload;
  try {
    payload = JSON.parse(body || '{}');
  } catch (err) {
    return sendJson(res, 400, { error: 'Invalid JSON payload' });
  }

  const cards = loadCards();
  const index = cards.findIndex((card) => card.id === id);
  if (index === -1) return respondNotFound(res);

  const incomingId = typeof payload.id === 'string' && payload.id.trim() ? payload.id : id;
  if (incomingId !== id && cards.some((card) => card.id === incomingId)) {
    return sendJson(res, 409, { error: 'A different card already uses that id' });
  }

  const existing = cards[index];
  const updatedCard = {
    ...existing,
    id: incomingId,
    title: typeof payload.title === 'string' ? payload.title : existing.title,
    boxOrCollection:
      typeof payload.boxOrCollection === 'string' ? payload.boxOrCollection : existing.boxOrCollection,
    parentId: typeof payload.parentId === 'string' ? payload.parentId : existing.parentId,
    relatedIds: payload.relatedIds ? parseList(payload.relatedIds) : existing.relatedIds,
    tags: payload.tags ? parseList(payload.tags) : existing.tags,
    updatedAt: new Date().toISOString(),
  };

  cards[index] = updatedCard;
  saveCards(cards);
  return sendJson(res, 200, attachImageUrl(updatedCard));
}

function handleListCards(req, res, query) {
  const cards = loadCards();
  const filtered = filterCards(cards, query).map(attachImageUrl);
  sendJson(res, 200, filtered);
}

function handleGetCard(req, res, id) {
  const cards = loadCards();
  const match = cards.find((card) => card.id === id);
  if (!match) return respondNotFound(res);
  sendJson(res, 200, attachImageUrl(match));
}

function serveStatic(requestPath, res) {
  const safePath = requestPath === '/' ? '/index.html' : requestPath;
  const target = path.join(PUBLIC_DIR, safePath.replace(/^\//, ''));
  if (!target.startsWith(PUBLIC_DIR) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    return false;
  }
  const content = fs.readFileSync(target);
  res.writeHead(200, { 'Content-Type': contentTypeFor(target) });
  res.end(content);
  return true;
}

function serveImage(requestPath, res) {
  const safePath = requestPath.replace('/images/', '');
  const target = path.join(IMAGE_DIR, safePath);
  if (!target.startsWith(IMAGE_DIR) || !fs.existsSync(target)) {
    return respondNotFound(res);
  }
  const content = fs.readFileSync(target);
  res.writeHead(200, { 'Content-Type': contentTypeFor(target) });
  res.end(content);
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = parsedUrl;

  if (pathname.startsWith('/images/')) {
    return serveImage(pathname, res);
  }

  if (pathname.startsWith('/api/cards')) {
    if (req.method === 'GET' && pathname === '/api/cards') {
      return handleListCards(req, res, searchParams);
    }

    if (req.method === 'POST' && pathname === '/api/cards') {
      return handleCreateCard(req, res);
    }

    const segments = pathname.split('/').filter(Boolean);
    const cardId = segments[2];
    if (!cardId) {
      return respondNotFound(res);
    }

    if (req.method === 'GET') {
      return handleGetCard(req, res, decodeURIComponent(cardId));
    }

    if (req.method === 'PUT') {
      return handleUpdateCard(req, res, decodeURIComponent(cardId));
    }

    return respondNotFound(res);
  }

  if (serveStatic(pathname, res)) return;
  const fallback = path.join(PUBLIC_DIR, 'index.html');
  const content = fs.readFileSync(fallback);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(content);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`CardCatalog server running at http://localhost:${PORT}`);
});
