const { useEffect, useMemo, useState } = React;

const LOCAL_NOTES_KEY = 'cardcatalog-local-notes';
const TABLE_KEY = 'cardcatalog-table-drafts';

function parseFrontMatter(markdown) {
  const lines = markdown.split(/\r?\n/);
  if (lines[0] !== '---') return { data: {}, body: markdown.trim() };
  const end = lines.indexOf('---', 1);
  if (end === -1) return { data: {}, body: markdown.trim() };

  const fmLines = lines.slice(1, end);
  const data = {};
  let currentKey = null;
  fmLines.forEach((line) => {
    if (/^\s*-/.test(line) && currentKey) {
      data[currentKey] = data[currentKey] || [];
      data[currentKey].push(line.replace(/^\s*-\s*/, '').replace(/^"|"$/g, ''));
      return;
    }
    const [key, ...rest] = line.split(':');
    if (!key) return;
    currentKey = key.trim();
    const rawValue = rest.join(':').trim();
    if (!rawValue) {
      data[currentKey] = '';
      return;
    }
    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      data[currentKey] = rawValue
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^"|"$/g, ''))
        .filter(Boolean);
      return;
    }
    data[currentKey] = rawValue.replace(/^"|"$/g, '');
  });

  const body = lines.slice(end + 1).join('\n').trim();
  return { data, body };
}

function buildMarkdown(note) {
  const lines = ['---'];
  lines.push(`id: "${note.id}"`);
  if (note.title) lines.push(`title: "${note.title}"`);
  const writeArray = (key, arr) => {
    lines.push(`${key}:`);
    (arr || []).forEach((item) => lines.push(`  - "${item}"`));
    if (!arr || !arr.length) lines.push('  -');
  };
  writeArray('links', note.links || []);
  writeArray('backlinks', note.backlinks || []);
  writeArray('tags', note.tags || []);
  if (note.created) lines.push(`created: "${note.created}"`);
  if (note.scanImage) lines.push(`scanImage: "${note.scanImage}"`);
  lines.push('---', '', note.body || '');
  return lines.join('\n');
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function makeSnippet(body) {
  if (!body) return '';
  const clean = body.trim().replace(/\s+/g, ' ');
  return clean.length > 200 ? `${clean.slice(0, 200)}…` : clean;
}

function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function recomputeBacklinks(notes) {
  const map = new Map(notes.map((n) => [n.id, { ...n, backlinks: [] }]));
  map.forEach((note) => {
    (note.links || []).forEach((target) => {
      if (map.has(target)) {
        const targetNote = map.get(target);
        if (!targetNote.backlinks.includes(note.id)) {
          targetNote.backlinks.push(note.id);
        }
      }
    });
  });
  return Array.from(map.values()).sort((a, b) => a.id.localeCompare(b.id));
}

function Drawer({ notes, onOpen, onRandom }) {
  return (
    <div className="drawer">
      <div className="drawer-header">
        <div>
          <div className="eyebrow">Drawer</div>
          <h2>Slip-box cards</h2>
        </div>
        <button className="ghost" onClick={onRandom}>Pull a card</button>
      </div>
      <div className="drawer-stack">
        {notes.map((note) => (
          <button key={note.id} className="card-row" onClick={() => onOpen(note.id)}>
            <div className="card-row-id">[{note.id}]</div>
            <div className="card-row-title">{note.title || 'Untitled card'}</div>
            <div className="card-row-body">{note.snippet || '—'}</div>
            {note.tags && note.tags.length > 0 ? (
              <div className="tags-row">{note.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function LinkList({ label, ids, onOpen }) {
  if (!ids || !ids.length) return null;
  return (
    <div className="link-line">
      <span className="link-label">{label}</span>
      {ids.map((id) => (
        <button key={id} className="link-chip" onClick={() => onOpen(id)}>{id}</button>
      ))}
    </div>
  );
}

function CardView({ note, onBack, onEdit, onOpenLink }) {
  if (!note) return null;
  const renderedBody = typeof marked !== 'undefined' && marked.parse ? marked.parse(note.body || '') : (note.body || '');
  return (
    <div className="card-view">
      <div className="card-toolbar">
        <button className="ghost" onClick={onBack}>← Drawer</button>
        <div className="id-pill">{note.id}</div>
        <button className="ghost" onClick={() => onEdit(note)}>Edit</button>
      </div>
      <div className="card-paper">
        {note.scanImage ? (
          <div className="scan-block">
            <img src={note.scanImage} alt={`Scan for ${note.id}`} />
          </div>
        ) : null}
        <h2>{note.title || 'Untitled card'}</h2>
        <div className="metadata-line">
          {note.created ? <span>Created: {new Date(note.created).toLocaleDateString()}</span> : null}
          {note.tags && note.tags.length ? <span>Tags: {note.tags.join(', ')}</span> : null}
        </div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: renderedBody }} />
        <LinkList label="Links →" ids={note.links} onOpen={onOpenLink} />
        <LinkList label="Backlinks →" ids={note.backlinks} onOpen={onOpenLink} />
      </div>
    </div>
  );
}

function NoteEditor({ initial, onCancel, onSave }) {
  const [draft, setDraft] = useState(() => ({
    id: '',
    title: '',
    body: '',
    links: [],
    tags: [],
    scanImage: '',
    ...initial,
  }));
  const [linkInput, setLinkInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  const update = (key, value) => setDraft((d) => ({ ...d, [key]: value }));

  const addLink = () => {
    if (!linkInput.trim()) return;
    update('links', Array.from(new Set([...(draft.links || []), linkInput.trim()])));
    setLinkInput('');
  };
  const addTag = () => {
    if (!tagInput.trim()) return;
    update('tags', Array.from(new Set([...(draft.tags || []), tagInput.trim()])));
    setTagInput('');
  };

  const handleSave = () => {
    onSave({ ...draft, links: draft.links || [], tags: draft.tags || [] });
  };

  return (
    <div className="editor">
      <div className="editor-grid">
        <label>ID
          <input value={draft.id} onChange={(e) => update('id', e.target.value)} />
        </label>
        <label>Title
          <input value={draft.title} onChange={(e) => update('title', e.target.value)} />
        </label>
        <label>Scan image path (relative)
          <input value={draft.scanImage} onChange={(e) => update('scanImage', e.target.value)} placeholder="scans/your-scan.jpg" />
        </label>
        <label>Links
          <div className="chips-input">
            <div className="chip-list">{(draft.links || []).map((l) => (
              <span key={l} className="tag" onClick={() => update('links', (draft.links || []).filter((x) => x !== l))}>✕ {l}</span>
            ))}</div>
            <div className="chip-adder">
              <input value={linkInput} onChange={(e) => setLinkInput(e.target.value)} placeholder="12a / 12a1" />
              <button type="button" onClick={addLink}>Add</button>
            </div>
          </div>
        </label>
        <label>Tags
          <div className="chips-input">
            <div className="chip-list">{(draft.tags || []).map((t) => (
              <span key={t} className="tag" onClick={() => update('tags', (draft.tags || []).filter((x) => x !== t))}>✕ {t}</span>
            ))}</div>
            <div className="chip-adder">
              <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="systems" />
              <button type="button" onClick={addTag}>Add</button>
            </div>
          </div>
        </label>
      </div>
      <label>Body
        <textarea value={draft.body} onChange={(e) => update('body', e.target.value)} rows={12} />
      </label>
      <div className="editor-actions">
        <button className="ghost" onClick={onCancel}>Cancel</button>
        <button onClick={handleSave}>Save & download</button>
      </div>
    </div>
  );
}

function TableView({ drafts, onUpdateDraft, onCreate }) {
  const addDraft = () => onUpdateDraft([...drafts, { id: '', title: '', body: '', links: [], tags: [], scanImage: '', scanDataUrl: '' }]);

  const handleFile = (idx, file) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const next = drafts.slice();
      next[idx] = { ...next[idx], scanDataUrl: evt.target.result, scanImage: file.name };
      onUpdateDraft(next);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="table-view">
      <div className="table-header">
        <div>
          <div className="eyebrow">The Table</div>
          <h2>Unfiled scans</h2>
        </div>
        <button className="ghost" onClick={addDraft}>Place a card</button>
      </div>
      {drafts.length === 0 ? <p className="muted">No scans yet. Place a card to stage it.</p> : null}
      <div className="table-grid">
        {drafts.map((draft, idx) => (
          <div key={idx} className="table-card">
            {draft.scanDataUrl ? <img src={draft.scanDataUrl} alt="Staged scan" /> : <div className="scan-placeholder">Scan preview</div>}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && e.target.files[0] && handleFile(idx, e.target.files[0])}
            />
            <input placeholder="ID" value={draft.id} onChange={(e) => {
              const next = drafts.slice();
              next[idx] = { ...draft, id: e.target.value };
              onUpdateDraft(next);
            }} />
            <input placeholder="Title" value={draft.title} onChange={(e) => {
              const next = drafts.slice();
              next[idx] = { ...draft, title: e.target.value };
              onUpdateDraft(next);
            }} />
            <textarea placeholder="Body / transcription" value={draft.body} onChange={(e) => {
              const next = drafts.slice();
              next[idx] = { ...draft, body: e.target.value };
              onUpdateDraft(next);
            }} />
            <button onClick={() => onCreate(draft, idx)}>Create note file</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchView({ term, onChange, results, onOpen }) {
  return (
    <div className="search-view">
      <div className="search-bar">
        <input value={term} onChange={(e) => onChange(e.target.value)} placeholder="Register lookup" />
      </div>
      <div className="search-results">
        {results.length === 0 ? <p className="muted">No matches yet.</p> : results.map((note) => (
          <button key={note.id} className="card-row" onClick={() => onOpen(note.id)}>
            <div className="card-row-id">[{note.id}]</div>
            <div className="card-row-title">{note.title || 'Untitled card'}</div>
            <div className="card-row-body">{note.snippet || '—'}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [indexNotes, setIndexNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [view, setView] = useState('drawer');
  const [selectedId, setSelectedId] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [localNotes, setLocalNotes] = useStoredState(LOCAL_NOTES_KEY, []);
  const [tableDrafts, setTableDrafts] = useStoredState(TABLE_KEY, []);

  useEffect(() => {
    async function loadIndex() {
      try {
        const res = await fetch('data/index.json');
        if (!res.ok) throw new Error('index missing');
        const json = await res.json();
        setIndexNotes(json.notes || []);
      } catch (err) {
        setError('Unable to load the static drawer index. Run scripts/build-cardcatalog.js and commit the output.');
      } finally {
        setLoading(false);
      }
    }
    loadIndex();
  }, []);

  const notes = useMemo(() => recomputeBacklinks([...indexNotes, ...localNotes]), [indexNotes, localNotes]);

  function dataURLToBlob(dataUrl) {
    const [header, base64] = dataUrl.split(',');
    const mime = header.match(/:(.*?);/)[1];
    const binary = atob(base64);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      array[i] = binary.charCodeAt(i);
    }
    return new Blob([array], { type: mime });
  }

  function downloadBinary(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const openNote = async (id) => {
    setSelectedId(id);
    const meta = notes.find((n) => n.id === id);
    if (!meta) return;
    // Use local body if we already have it
    if (meta.body) {
      setCurrentNote(meta);
      setView('card');
      return;
    }
    try {
      const res = await fetch(meta.path);
      if (!res.ok) throw new Error('not found');
      const raw = await res.text();
      const parsed = parseFrontMatter(raw);
      setCurrentNote({ ...meta, ...parsed.data, body: parsed.body });
      setView('card');
    } catch (err) {
      setError(`Unable to read ${meta.path}. Make sure the note file is published.`);
    }
  };

  const handleSave = (note) => {
    if (!note.id.trim()) {
      setError('Every card needs an ID.');
      return;
    }
    const completed = { ...note, created: note.created || new Date().toISOString() };
    const markdown = buildMarkdown(completed);
    const filename = `${note.id.replace(/\//g, '_')}.md`;
    downloadFile(filename, markdown);
    setLocalNotes((existing) => {
      const filtered = existing.filter((n) => n.id !== note.id);
      return [...filtered, { ...completed, path: `../notes/${filename}`, snippet: makeSnippet(note.body) }];
    });
    setCurrentNote(completed);
    setView('card');
  };

  const handleCreateFromTable = (draft, idx) => {
    if (!draft.id.trim()) {
      setError('Assign an ID before filing a staged scan.');
      return;
    }
    const note = {
      id: draft.id,
      title: draft.title,
      body: draft.body,
      links: draft.links || [],
      tags: draft.tags || [],
      scanImage: draft.scanImage || '',
      backlinks: [],
      created: new Date().toISOString(),
    };
    handleSave(note);
    if (draft.scanDataUrl && draft.scanImage) {
      const blob = dataURLToBlob(draft.scanDataUrl);
      downloadBinary(draft.scanImage, blob);
    }
    const nextDrafts = tableDrafts.slice();
    nextDrafts.splice(idx, 1);
    setTableDrafts(nextDrafts);
  };

  const runSearch = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) return [];
    return notes.filter((note) => {
      return (
        note.id.toLowerCase().includes(term) ||
        (note.title || '').toLowerCase().includes(term) ||
        (note.snippet || '').toLowerCase().includes(term)
      );
    });
  }, [searchTerm, notes]);

  const pullRandom = () => {
    if (!notes.length) return;
    const choice = notes[Math.floor(Math.random() * notes.length)];
    openNote(choice.id);
  };

  return (
    <div className="page">
      <header className="topbar">
        <div>
          <div className="eyebrow">CardCatalog</div>
          <h1>Slip-box drawer (static)</h1>
        </div>
        <div className="nav">
          <button onClick={() => setView('drawer')}>Drawer</button>
          <button onClick={() => setView('table')}>Table</button>
          <button onClick={() => setView('search')}>Register</button>
          <button onClick={pullRandom}>Pull a card</button>
          <button onClick={() => { setCurrentNote({ id: '', title: '', body: '', links: [], tags: [], scanImage: '' }); setView('edit'); }}>New card</button>
        </div>
      </header>

      <div className="notice">Static Pages build: cards are files in this repo. Use the "Save & download" action to produce markdown (and scans) locally, then add them to the repository before publishing.</div>
      {loading ? <p className="muted">Loading drawer…</p> : null}
      {error ? <p className="error">{error}</p> : null}

      {view === 'drawer' && (
        <Drawer notes={notes} onOpen={openNote} onRandom={pullRandom} />
      )}

      {view === 'card' && currentNote ? (
        <CardView note={currentNote} onBack={() => setView('drawer')} onEdit={(n) => { setCurrentNote(n); setView('edit'); }} onOpenLink={openNote} />
      ) : null}

      {view === 'edit' && (
        <NoteEditor
          initial={currentNote || { id: '', title: '', body: '', links: [], tags: [], scanImage: '' }}
          onCancel={() => setView(selectedId ? 'card' : 'drawer')}
          onSave={handleSave}
        />
      )}

      {view === 'table' && (
        <TableView drafts={tableDrafts} onUpdateDraft={setTableDrafts} onCreate={handleCreateFromTable} />
      )}

      {view === 'search' && (
        <SearchView term={searchTerm} onChange={setSearchTerm} results={runSearch} onOpen={openNote} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
