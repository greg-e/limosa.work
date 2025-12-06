const express = require('express');
const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  searchNotes,
  suggestNextId,
  snippet
} = require('../fileSystemNotes');

const router = express.Router();

router.get('/notes', (req, res) => {
  const notes = getAllNotes().map((note) => ({
    id: note.id,
    title: note.title,
    snippet: snippet(note.body),
    tags: note.tags,
    created: note.created
  }));
  res.json(notes);
});

router.get('/notes/:id', (req, res) => {
  const note = getNoteById(req.params.id);
  if (!note) return res.status(404).json({ error: 'Not found' });
  res.json(note);
});

router.post('/notes', (req, res) => {
  try {
    const note = createNote(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/notes/:id', (req, res) => {
  try {
    const note = updateNote(req.params.id, req.body);
    res.json(note);
  } catch (err) {
    const status = err.message === 'Note not found' ? 404 : 400;
    res.status(status).json({ error: err.message });
  }
});

router.get('/random-note', (req, res) => {
  const notes = getAllNotes();
  if (!notes.length) return res.status(404).json({ error: 'No notes available' });
  const pick = notes[Math.floor(Math.random() * notes.length)];
  res.json(pick);
});

router.get('/search', (req, res) => {
  const q = req.query.q || '';
  const matches = searchNotes(q).map((note) => ({
    id: note.id,
    title: note.title,
    snippet: snippet(note.body),
    tags: note.tags,
    created: note.created
  }));
  res.json(matches);
});

router.get('/suggest-next-id', (req, res) => {
  const parent = req.query.parent;
  if (!parent) return res.status(400).json({ error: 'parent query is required' });
  const suggestion = suggestNextId(parent);
  res.json({ suggestion });
});

module.exports = router;
