#!/usr/bin/env node
/**
 * Build a static index for the CardCatalog slip-box UI so it can run on
 * GitHub Pages without a server. The script scans markdown notes in
 * cardcatalog/notes, parses their YAML front matter, and emits a compact
 * JSON file the client can load at runtime.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const NOTES_DIR = path.join(__dirname, '..', 'cardcatalog', 'notes');
const OUTPUT_PATH = path.join(__dirname, '..', 'cardcatalog', 'public', 'data', 'index.json');

function safeExcerpt(body) {
  const clean = body.trim().replace(/\s+/g, ' ');
  return clean.length > 240 ? `${clean.slice(0, 240)}…` : clean;
}

function collectNotes() {
  if (!fs.existsSync(NOTES_DIR)) {
    throw new Error(`Missing notes directory: ${NOTES_DIR}`);
  }

  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.toLowerCase().endsWith('.md'))
    .map((name) => path.join(NOTES_DIR, name));

  return files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const { data, content } = parsed;
    const id = data.id || path.basename(filePath, '.md');

    return {
      id,
      title: data.title || '',
      tags: data.tags || [],
      links: data.links || [],
      backlinks: data.backlinks || [],
      created: data.created || '',
      scanImage: data.scanImage ? `../${data.scanImage}` : '',
      path: `../notes/${path.basename(filePath)}`,
      snippet: safeExcerpt(content),
    };
  });
}

function recomputeBacklinks(notes) {
  const map = new Map(notes.map((n) => [n.id, { ...n, backlinks: [] }]));

  for (const note of map.values()) {
    (note.links || []).forEach((targetId) => {
      if (map.has(targetId)) {
        const target = map.get(targetId);
        if (!target.backlinks.includes(note.id)) {
          target.backlinks.push(note.id);
        }
      }
    });
  }

  return Array.from(map.values()).sort((a, b) => a.id.localeCompare(b.id));
}

function buildIndex() {
  const notes = collectNotes();
  const withBacklinks = recomputeBacklinks(notes);
  const payload = {
    generatedAt: new Date().toISOString(),
    notes: withBacklinks,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${withBacklinks.length} notes to ${OUTPUT_PATH}`);
}

buildIndex();
