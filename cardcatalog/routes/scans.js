const express = require('express');
const path = require('path');
const { upload, attachScanToNote, serveScan } = require('../scans');
const { loadConfig } = require('../storageConfig');

const router = express.Router();
const { scansDir } = loadConfig();

router.post('/scans', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file provided' });
  const { id } = req.body;
  const filePath = path.join(scansDir, req.file.filename);
  if (id) {
    const success = attachScanToNote(id, filePath);
    if (!success) return res.status(404).json({ error: 'Note not found to attach scan' });
  }
  const relative = path.join('scans', path.basename(filePath));
  res.status(201).json({ path: relative });
});

router.get('/scans/:filename', (req, res) => {
  const ok = serveScan(req.params.filename, res);
  if (!ok) return res.status(404).json({ error: 'Scan not found' });
});

module.exports = router;
