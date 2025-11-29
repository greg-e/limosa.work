import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { CreateNoteOptions, ListOptions, NoteMetadata, NoteType } from './types';

const NOTE_TYPES: NoteType[] = ['permanent', 'literature', 'fleeting', 'index'];
const CATALOG_ROOT = 'catalog';

const ensureType = (type: string): asserts type is NoteType => {
  if (!NOTE_TYPES.includes(type as NoteType)) {
    throw new Error(`Invalid note type: ${type}. Expected one of ${NOTE_TYPES.join(', ')}`);
  }
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatTimestamp = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}`;
};

const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const catalogRoot = (root: string = process.cwd()): string => path.join(root, CATALOG_ROOT);

export const ensureCatalogStructure = async (root: string = process.cwd()): Promise<void> => {
  const catalogPath = catalogRoot(root);
  await fs.mkdir(catalogPath, { recursive: true });
  await Promise.all(NOTE_TYPES.map((type) => fs.mkdir(path.join(catalogPath, type), { recursive: true })));
};

export const generateNoteId = (title: string, created: Date = new Date()): string => {
  const timestamp = formatTimestamp(created);
  const slug = slugify(title);
  return `${timestamp}-${slug}`;
};

export const notePath = (id: string, type: NoteType, root: string = process.cwd()): string =>
  path.join(catalogRoot(root), type, `${id}.md`);

export const createNote = async (options: CreateNoteOptions): Promise<NoteMetadata> => {
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

  const content = matter.stringify('', metadata);
  await fs.writeFile(filePath, content, { encoding: 'utf8' });

  return { ...metadata, content, path: filePath };
};

export const listNotes = async (options: ListOptions = {}): Promise<NoteMetadata[]> => {
  const { type, tag, root = process.cwd() } = options;
  if (type) ensureType(type);

  const typesToRead = type ? [type] : NOTE_TYPES;
  const catalogPath = catalogRoot(root);
  const results: NoteMetadata[] = [];

  for (const noteType of typesToRead) {
    const typeDir = path.join(catalogPath, noteType);
    let entries: string[] = [];
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

export const readNote = async (filePath: string): Promise<NoteMetadata | null> => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = matter(raw);
    const data = parsed.data as Partial<NoteMetadata>;

    if (!data.id || !data.title || !data.type) return null;
    ensureType(data.type);

    return {
      id: data.id,
      title: data.title,
      type: data.type,
      tags: data.tags || [],
      links: data.links || [],
      created: data.created || '',
      source: data.source || '',
      content: parsed.content.trim(),
      path: filePath,
    };
  } catch (error) {
    return null;
  }
};

export const readNoteById = async (id: string, root: string = process.cwd()): Promise<NoteMetadata | null> => {
  const catalogPath = catalogRoot(root);
  for (const noteType of NOTE_TYPES) {
    const candidate = path.join(catalogPath, noteType, `${id}.md`);
    try {
      const stats = await fs.stat(candidate);
      if (stats.isFile()) {
        return readNote(candidate);
      }
    } catch (error) {
      // continue searching
    }
  }
  return null;
};

export const summarizeNote = (note: NoteMetadata): string => {
  const tagDisplay = note.tags.length ? note.tags.join(', ') : '—';
  const linkDisplay = note.links.length ? note.links.join(', ') : '—';
  return `${note.id} [${note.type}] ${note.title}\n  tags: ${tagDisplay}\n  links: ${linkDisplay}\n  path: ${note.path}`;
};

export const NOTE_TYPES_LIST = NOTE_TYPES;
