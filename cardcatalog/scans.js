const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { loadConfig } = require('./storageConfig');
const { idToFilename, getNoteById, updateNote } = require('./fileSystemNotes');

const { scansDir } = loadConfig();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, scansDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname) || '.jpg';
    const id = req.body.id;
    const filename = id ? `${idToFilename(id).replace('.md', ext)}` : `${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

function attachScanToNote(id, filePath) {
  const note = getNoteById(id);
  if (!note) return false;
  const relativePath = path.join('scans', path.basename(filePath));
  updateNote(id, { scanImage: relativePath });
  return true;
}

function serveScan(filename, res) {
  const fullPath = path.join(scansDir, filename);
  if (!fs.existsSync(fullPath)) return false;
  res.sendFile(fullPath);
  return true;
}

module.exports = { upload, attachScanToNote, serveScan };
