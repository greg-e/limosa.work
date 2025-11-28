"use strict";
const fs = require('fs/promises');
const path = require('path');
const NOTE_TYPES = ['permanent', 'literature', 'fleeting', 'index'];
const CATALOG_ROOT = 'catalog';
const ensureType = (type) => {
  if (!NOTE_TYPES.includes(type)) {
    throw new Error(`Invalid note type: ${type}. Expected one of ${NOTE_TYPES.join(', ')}`);
  }
};
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const formatTimestamp = (date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}`;
};
const slugify = (title) => title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');
const catalogRoot = (root = process.cwd()) => path.join(root, CATALOG_ROOT);
const ensureCatalogStructure = async (root = process.cwd()) => {
  const catalogPath = catalogRoot(root);
  await fs.mkdir(catalogPath, { recursive: true });
  await Promise.all(NOTE_TYPES.map((type) => fs.mkdir(path.join(catalogPath, type), { recursive: true })));
};
const generateNoteId = (title, created = new Date()) => {
  const timestamp = formatTimestamp(created);
  const slug = slugify(title);
  return `${timestamp}-${slug}`;
};
const notePath = (id, type, root = process.cwd()) => path.join(catalogRoot(root), type, `${id}.md`);
const serializeFrontMatter = (metadata, body = '') => {
  const yaml = Object.entries(metadata)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const items = value.map((item) => `  - ${item}`).join('\n');
        return `${key}:\n${items}`;
      }
      return `${key}: ${value ?? ''}`;
    })
    .join('\n');
  return `---\n${yaml}\n---\n\n${body}`;
};
const parseFrontMatter = (raw) => {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;
  const header = raw.substring(3, end).trim();
  const content = raw.substring(end + 4).trim();
  const lines = header.split(/\r?\n/);
  const data = {};
  let currentKey = null;
  for (const line of lines) {
    if (/^\s+-\s+/.test(line) && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(line.replace(/^\s+-\s+/, ''));
    } else {
      const [key, ...rest] = line.split(':');
      currentKey = key.trim();
      data[currentKey] = rest.join(':').trim();
      if (data[currentKey] === '') data[currentKey] = '';
    }
  }
  return { data, content };
};
const createNote = async (options) => {
  const { title, type, tags = [], links = [], source = '', root = process.cwd(), created = new Date() } = options;
  ensureType(type);
  await ensureCatalogStructure(root);
  const id = generateNoteId(title, created);
  const filePath = notePath(id, type, root);
  const metadata = {
    id,
    title,
    type,
    tags,
    links,
    created: formatDate(created),
    source,
  };
  const content = serializeFrontMatter(metadata);
  await fs.writeFile(filePath, content, { encoding: 'utf8' });
  return { ...metadata, content, path: filePath };
};
const listNotes = async (options = {}) => {
  const { type, tag, root = process.cwd() } = options;
  if (type) ensureType(type);
  const typesToRead = type ? [type] : NOTE_TYPES;
  const catalogPath = catalogRoot(root);
  const results = [];
  for (const noteType of typesToRead) {
    const typeDir = path.join(catalogPath, noteType);
    let entries = [];
    try {
      entries = await fs.readdir(typeDir);
    } catch (error) {
      continue;
    }
    for (const entry of entries) {
      if (!entry.endsWith('.md')) continue;
      const fullPath = path.join(typeDir, entry);
      const metadata = await readNote(fullPath);
      if (!metadata) continue;
      if (tag && !metadata.tags.includes(tag)) continue;
      results.push(metadata);
    }
  }
  return results.sort((a, b) => (a.created < b.created ? 1 : -1));
};
const readNote = async (filePath) => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = parseFrontMatter(raw);
    if (!parsed) return null;
    const data = parsed.data;
    if (!data.id || !data.title || !data.type) return null;
    ensureType(data.type);
    return {
      id: data.id,
      title: data.title,
      type: data.type,
      tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
      links: Array.isArray(data.links) ? data.links : data.links ? [data.links] : [],
      created: data.created || '',
      source: data.source || '',
      content: parsed.content,
      path: filePath,
    };
  } catch (error) {
    return null;
  }
};
const readNoteById = async (id, root = process.cwd()) => {
  const catalogPath = catalogRoot(root);
  for (const noteType of NOTE_TYPES) {
    const candidate = path.join(catalogPath, noteType, `${id}.md`);
    try {
      const stats = await fs.stat(candidate);
      if (stats.isFile()) {
        return readNote(candidate);
      }
    } catch (error) {
      // continue
    }
  }
  return null;
};
const summarizeNote = (note) => {
  const tagDisplay = note.tags.length ? note.tags.join(', ') : '—';
  const linkDisplay = note.links.length ? note.links.join(', ') : '—';
  return `${note.id} [${note.type}] ${note.title}\n  tags: ${tagDisplay}\n  links: ${linkDisplay}\n  path: ${note.path}`;
};
module.exports = {
  NOTE_TYPES_LIST: NOTE_TYPES,
  catalogRoot,
  ensureCatalogStructure,
  generateNoteId,
  notePath,
  createNote,
  listNotes,
  readNote,
  readNoteById,
  summarizeNote,
};
