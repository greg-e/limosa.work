const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');
const defaultConfig = {
  notesDir: path.join(baseDir, 'cardcatalog', 'notes'),
  scansDir: path.join(baseDir, 'cardcatalog', 'scans')
};

function loadConfig() {
  const configPath = path.join(__dirname, 'config.json');
  let userConfig = {};
  if (fs.existsSync(configPath)) {
    try {
      userConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (err) {
      console.warn('Could not parse config.json, using defaults', err);
    }
  }
  const notesDir = path.resolve(userConfig.notesDir ? path.join(baseDir, userConfig.notesDir) : defaultConfig.notesDir);
  const scansDir = path.resolve(userConfig.scansDir ? path.join(baseDir, userConfig.scansDir) : defaultConfig.scansDir);
  if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });
  if (!fs.existsSync(scansDir)) fs.mkdirSync(scansDir, { recursive: true });
  return { notesDir, scansDir };
}

module.exports = { loadConfig };
