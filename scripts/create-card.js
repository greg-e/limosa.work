#!/usr/bin/env node
/**
 * Create a new slip-box card directly in the repository and optionally copy a
 * scan image. This script writes the Markdown file (with YAML front matter),
 * updates backlinks, and can rebuild the static drawer index for Pages.
 */
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { createNote, idToFilename } = require('../cardcatalog/fileSystemNotes');
const { loadConfig } = require('../cardcatalog/storageConfig');
const { execSync } = require('child_process');

function parseList(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
}

function readBody({ body, bodyFile }) {
  if (bodyFile) {
    const fullPath = path.resolve(bodyFile);
    return fs.readFileSync(fullPath, 'utf8');
  }
  return body || '';
}

function copyScan(id, scanPath) {
  if (!scanPath) return '';
  const { scansDir } = loadConfig();
  const ext = path.extname(scanPath) || '.jpg';
  const safeBase = idToFilename(id).replace(/\.md$/, '');
  const dest = path.join(scansDir, `${safeBase}${ext}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.resolve(scanPath), dest);
  const relative = path.relative(path.join(__dirname, '..', 'cardcatalog'), dest);
  return relative.split(path.sep).join('/');
}

function buildIndexIfRequested(run) {
  if (!run) return;
  const scriptPath = path.join(__dirname, 'build-cardcatalog.js');
  execSync(`node ${scriptPath}`, { stdio: 'inherit' });
}

program
  .requiredOption('-i, --id <id>', 'zettel ID (e.g., 21/3d7a7)')
  .requiredOption('-t, --title <title>', 'card title')
  .option('-b, --body <body>', 'body text for the card')
  .option('--body-file <path>', 'path to a file containing the body')
  .option('-l, --links <ids>', 'comma-separated list of linked card IDs')
  .option('--tags <tags>', 'comma-separated list of tags')
  .option('--scan <path>', 'path to a JPEG/PNG scan to store alongside the card')
  .option('--build-index', 'rebuild public/data/index.json after writing the card')
  .parse(process.argv);

const options = program.opts();

(async () => {
  try {
    const body = readBody({ body: options.body, bodyFile: options.bodyFile });
    const links = parseList(options.links);
    const tags = parseList(options.tags);
    const scanImage = copyScan(options.id, options.scan);

    const note = createNote({
      id: options.id,
      title: options.title,
      body,
      links,
      tags,
      scanImage,
    });

    console.log(`Created card ${note.id} at ${idToFilename(note.id)}${scanImage ? ` with scan ${scanImage}` : ''}`);
    buildIndexIfRequested(options.buildIndex);
  } catch (err) {
    console.error('Failed to create card:', err.message);
    process.exit(1);
  }
})();
