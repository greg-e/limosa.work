#!/usr/bin/env node
/**
 * Rebuilds the static Zettelkasten index for the GitHub Pages UI.
 *
 * Usage: node scripts/build-zk-index.js
 *
 * The script scans markdown files under /notes, extracts the first heading as the
 * title, grabs the first paragraph as an excerpt, and writes JSON to
 * assets/data/zettelkasten-index.json for the client UI to load.
 */
const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '..', 'notes');
const OUTPUT_PATH = path.join(__dirname, '..', 'assets', 'data', 'zettelkasten-index.json');

function getTitle(lines, fallback) {
  const heading = lines.find((line) => /^#{1,6}\s+/.test(line));
  return heading ? heading.replace(/^#{1,6}\s+/, '').trim() : fallback;
}

function getExcerpt(content) {
  const paragraphs = content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  if (!paragraphs.length) return '';
  const snippet = paragraphs[0].replace(/^#{1,6}\s+/, '');
  return snippet.length > 240 ? `${snippet.slice(0, 240)}…` : snippet;
}

function buildIndex() {
  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith('.md'))
    .sort();

  const notes = files.map((file) => {
    const absolutePath = path.join(NOTES_DIR, file);
    const raw = fs.readFileSync(absolutePath, 'utf8');
    const lines = raw.split(/\r?\n/);
    const id = path.basename(file, '.md');
    return {
      id,
      title: getTitle(lines, id),
      path: `/notes/${file}`,
      excerpt: getExcerpt(raw),
    };
  });

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    notes,
  };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${notes.length} notes to ${OUTPUT_PATH}`);
}

buildIndex();
