"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTE_TYPES_LIST = exports.summarizeNote = exports.readNoteById = exports.readNote = exports.listNotes = exports.createNote = exports.notePath = exports.generateNoteId = exports.ensureCatalogStructure = exports.catalogRoot = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const NOTE_TYPES = ['permanent', 'literature', 'fleeting', 'index'];
const CATALOG_ROOT = 'catalog';
function ensureType(type) {
    if (!NOTE_TYPES.includes(type)) {
        throw new Error(`Invalid note type: ${type}. Expected one of ${NOTE_TYPES.join(', ')}`);
    }
}
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
const catalogRoot = (root = process.cwd()) => path_1.default.join(root, CATALOG_ROOT);
exports.catalogRoot = catalogRoot;
const ensureCatalogStructure = async (root = process.cwd()) => {
    const catalogPath = (0, exports.catalogRoot)(root);
    await promises_1.default.mkdir(catalogPath, { recursive: true });
    await Promise.all(NOTE_TYPES.map((type) => promises_1.default.mkdir(path_1.default.join(catalogPath, type), { recursive: true })));
};
exports.ensureCatalogStructure = ensureCatalogStructure;
const generateNoteId = (title, created = new Date()) => {
    const timestamp = formatTimestamp(created);
    const slug = slugify(title);
    return `${timestamp}-${slug}`;
};
exports.generateNoteId = generateNoteId;
const notePath = (id, type, root = process.cwd()) => path_1.default.join((0, exports.catalogRoot)(root), type, `${id}.md`);
exports.notePath = notePath;
const createNote = async (options) => {
    const { title, type, tags = [], links = [], source = '', root = process.cwd(), created = new Date() } = options;
    ensureType(type);
    await (0, exports.ensureCatalogStructure)(root);
    const id = (0, exports.generateNoteId)(title, created);
    const filePath = (0, exports.notePath)(id, type, root);
    const metadata = {
        id,
        title,
        type,
        tags,
        links,
        created: formatDate(created),
        source,
    };
    const content = gray_matter_1.default.stringify('', metadata);
    await promises_1.default.writeFile(filePath, content, { encoding: 'utf8' });
    return { ...metadata, content, path: filePath };
};
exports.createNote = createNote;
const listNotes = async (options = {}) => {
    const { type, tag, root = process.cwd() } = options;
    if (type)
        ensureType(type);
    const typesToRead = type ? [type] : NOTE_TYPES;
    const catalogPath = (0, exports.catalogRoot)(root);
    const results = [];
    for (const noteType of typesToRead) {
        const typeDir = path_1.default.join(catalogPath, noteType);
        let entries = [];
        try {
            entries = await promises_1.default.readdir(typeDir);
        }
        catch (error) {
            continue;
        }
        for (const entry of entries) {
            if (!entry.endsWith('.md'))
                continue;
            const fullPath = path_1.default.join(typeDir, entry);
            const metadata = await (0, exports.readNote)(fullPath);
            if (!metadata)
                continue;
            if (tag && !metadata.tags.includes(tag))
                continue;
            results.push(metadata);
        }
    }
    return results.sort((a, b) => (a.created < b.created ? 1 : -1));
};
exports.listNotes = listNotes;
const readNote = async (filePath) => {
    try {
        const raw = await promises_1.default.readFile(filePath, 'utf8');
        const parsed = (0, gray_matter_1.default)(raw);
        const data = parsed.data;
        if (!data.id || !data.title || !data.type)
            return null;
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
    }
    catch (error) {
        return null;
    }
};
exports.readNote = readNote;
const readNoteById = async (id, root = process.cwd()) => {
    const catalogPath = (0, exports.catalogRoot)(root);
    for (const noteType of NOTE_TYPES) {
        const candidate = path_1.default.join(catalogPath, noteType, `${id}.md`);
        try {
            const stats = await promises_1.default.stat(candidate);
            if (stats.isFile()) {
                return (0, exports.readNote)(candidate);
            }
        }
        catch (error) {
            // continue searching
        }
    }
    return null;
};
exports.readNoteById = readNoteById;
const summarizeNote = (note) => {
    const tagDisplay = note.tags.length ? note.tags.join(', ') : '—';
    const linkDisplay = note.links.length ? note.links.join(', ') : '—';
    return `${note.id} [${note.type}] ${note.title}\n  tags: ${tagDisplay}\n  links: ${linkDisplay}\n  path: ${note.path}`;
};
exports.summarizeNote = summarizeNote;
exports.NOTE_TYPES_LIST = NOTE_TYPES;
