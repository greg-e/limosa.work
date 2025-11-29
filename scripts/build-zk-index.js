#!/usr/bin/env node
/**
 * Rebuilds the static Zettelkasten index for the GitHub Pages UI.
 *
 * Usage: node scripts/build-zk-index.js
 *
 * The script scans markdown files under /zettels (recursively), extracts the first
 * heading as the title, grabs the first paragraph as an excerpt, and writes JSON to
 * assets/data/zettelkasten-index.json for the client UI to load.
 */
const fs = require('fs');
const path = require('path');

const ZETTEL_ROOT = path.join(__dirname, '..', 'zettels');
const OUTPUT_PATH = path.join(__dirname, '..', 'assets', 'data', 'zettelkasten-index.json');

function stripFrontMatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return content;
  const endIndex = lines.indexOf('---', 1);
  if (endIndex === -1) return content;
  return lines.slice(endIndex + 1).join('\n').trim();
}

function extractFrontMatterTitle(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return null;
  const endIndex = lines.indexOf('---', 1);
  if (endIndex === -1) return null;
  const fmLines = lines.slice(1, endIndex);
  const titleLine = fmLines.find((line) => line.trim().toLowerCase().startsWith('title:'));
  if (!titleLine) return null;
  return titleLine.replace(/^[Tt]itle:\s*/, '').trim();
}

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

function collectMarkdownFiles(rootDir) {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      files = files.concat(collectMarkdownFiles(path.join(rootDir, entry.name)));
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'index.md') {
      files.push(path.join(rootDir, entry.name));
    }
  }

  return files;
}

function buildIndex() {
  if (!fs.existsSync(ZETTEL_ROOT)) {
    throw new Error(`Missing zettels directory: ${ZETTEL_ROOT}`);
  }

  const files = collectMarkdownFiles(ZETTEL_ROOT).sort((a, b) => {
    const nameA = path.basename(a);
    const nameB = path.basename(b);
    return nameB.localeCompare(nameA);
  });

  const notes = files.map((absolutePath) => {
    const raw = fs.readFileSync(absolutePath, 'utf8');
    const fmTitle = extractFrontMatterTitle(raw);
    const body = stripFrontMatter(raw);
    const lines = body.split(/\r?\n/);
    const relativePath = path.relative(path.join(__dirname, '..'), absolutePath);
    const id = path.basename(absolutePath, '.md');
    return {
      id,
      title: fmTitle || getTitle(lines, id),
      path: `/${relativePath.replace(/\\/g, '/')}`,
      excerpt: getExcerpt(body),
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
