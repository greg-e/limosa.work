const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');
const { loadConfig } = require('./storageConfig');

const { notesDir } = loadConfig();

const ensureArray = (value) => Array.isArray(value) ? value : (value ? [value] : []);

function idToFilename(id) {
  const safe = id.replace(/[^a-zA-Z0-9_-]/g, '_');
  return `${safe}.md`;
}

function filenameToPath(filename) {
  return path.join(notesDir, filename);
}

function readNoteFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const front = parsed.data || {};
  return {
    id: front.id || path.basename(filePath, '.md'),
    title: front.title || '',
    links: ensureArray(front.links),
    backlinks: ensureArray(front.backlinks),
    tags: ensureArray(front.tags),
    created: front.created || new Date().toISOString(),
    scanImage: front.scanImage || '',
    body: parsed.content.trimStart()
  };
}

function writeNoteFile(note) {
  const frontmatter = {
    id: note.id,
    title: note.title || '',
    links: ensureArray(note.links),
    backlinks: ensureArray(note.backlinks),
    tags: ensureArray(note.tags),
    created: note.created || new Date().toISOString(),
    scanImage: note.scanImage || ''
  };
  const yamlFront = yaml.dump(frontmatter, { lineWidth: 120 });
  const content = `---\n${yamlFront}---\n\n${note.body || ''}`;
  const filename = idToFilename(note.id);
  fs.writeFileSync(filenameToPath(filename), content, 'utf8');
}

function listNoteFiles() {
  return fs.readdirSync(notesDir).filter((file) => file.endsWith('.md'));
}

function getAllNotes() {
  return listNoteFiles().map((file) => readNoteFile(filenameToPath(file)));
}

function getNoteById(id) {
  const filename = idToFilename(id);
  const filePath = filenameToPath(filename);
  if (!fs.existsSync(filePath)) return null;
  return readNoteFile(filePath);
}

function snippet(body, length = 180) {
  const clean = body.replace(/\s+/g, ' ').trim();
  return clean.slice(0, length);
}

function updateBacklinks(noteId, oldLinks, newLinks) {
  const removed = oldLinks.filter((l) => !newLinks.includes(l));
  const added = newLinks.filter((l) => !oldLinks.includes(l));

  removed.forEach((targetId) => {
    const target = getNoteById(targetId);
    if (!target) return;
    const updatedBacklinks = ensureArray(target.backlinks).filter((b) => b !== noteId);
    writeNoteFile({ ...target, backlinks: updatedBacklinks });
  });

  added.forEach((targetId) => {
    const target = getNoteById(targetId);
    if (!target) return;
    const backlinksSet = new Set(ensureArray(target.backlinks));
    backlinksSet.add(noteId);
    writeNoteFile({ ...target, backlinks: Array.from(backlinksSet) });
  });
}

function createNote({ id, title, body = '', links = [], tags = [], scanImage = '' }) {
  if (!id || !title) {
    throw new Error('id and title are required');
  }
  if (getNoteById(id)) {
    throw new Error('Note already exists');
  }
  const note = {
    id,
    title,
    links: ensureArray(links),
    backlinks: [],
    tags: ensureArray(tags),
    created: new Date().toISOString(),
    scanImage,
    body
  };
  writeNoteFile(note);
  updateBacklinks(id, [], note.links);
  return note;
}

function updateNote(id, updates) {
  const existing = getNoteById(id);
  if (!existing) throw new Error('Note not found');

  const updatedLinks = updates.links ? ensureArray(updates.links) : existing.links;
  const updatedNote = {
    ...existing,
    ...updates,
    links: updatedLinks,
    tags: updates.tags ? ensureArray(updates.tags) : existing.tags,
    backlinks: existing.backlinks
  };

  writeNoteFile(updatedNote);
  updateBacklinks(id, existing.links, updatedLinks);
  return updatedNote;
}

function searchNotes(query) {
  const all = getAllNotes();
  if (!query) return [];
  const q = query.toLowerCase();
  return all.filter((note) =>
    (note.title && note.title.toLowerCase().includes(q)) ||
    (note.body && note.body.toLowerCase().includes(q))
  );
}

function suggestNextId(parentId) {
  const all = getAllNotes();
  const children = all
    .map((note) => note.id)
    .filter((id) => id.startsWith(parentId) && id !== parentId);
  if (children.length === 0) {
    return `${parentId}a`;
  }
  const suffixes = children.map((child) => child.slice(parentId.length));
  const numeric = suffixes
    .map((s) => s.replace(/[^0-9]/g, ''))
    .filter(Boolean)
    .map(Number)
    .sort((a, b) => a - b);
  if (numeric.length) {
    const next = numeric[numeric.length - 1] + 1;
    return `${parentId}${next}`;
  }
  return `${parentId}${String.fromCharCode(97 + children.length)}`;
}

module.exports = {
  idToFilename,
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  searchNotes,
  suggestNextId,
  snippet
};
