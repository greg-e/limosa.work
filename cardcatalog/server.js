const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');
const scansRoutes = require('./routes/scans');
const { loadConfig } = require('./storageConfig');

const app = express();
const PORT = process.env.PORT || 4000;
const paths = loadConfig();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', notesRoutes);
app.use('/api', scansRoutes);

const publicDir = path.join(__dirname, 'public');
app.use('/scans', express.static(paths.scansDir));
app.use(express.static(publicDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`CardCatalog listening on http://localhost:${PORT}`);
});
