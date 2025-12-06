const { useEffect, useState } = React;

const api = {
  async listNotes() {
    const res = await fetch('/api/notes');
    return res.json();
  },
  async fetchNote(id) {
    const res = await fetch(`/api/notes/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error('Not found');
    return res.json();
  },
  async createNote(payload) {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Create failed');
    return res.json();
  },
  async updateNote(id, payload) {
    const res = await fetch(`/api/notes/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Update failed');
    return res.json();
  },
  async search(q) {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    return res.json();
  },
  async random() {
    const res = await fetch('/api/random-note');
    if (!res.ok) throw new Error('No notes');
    return res.json();
  },
  async suggest(parent) {
    const res = await fetch(`/api/suggest-next-id?parent=${encodeURIComponent(parent)}`);
    return res.json();
  },
  async uploadScan(file, id) {
    const form = new FormData();
    form.append('file', file);
    if (id) form.append('id', id);
    const res = await fetch('/api/scans', { method: 'POST', body: form });
    if (!res.ok) throw new Error((await res.json()).error || 'Upload failed');
    return res.json();
  }
};

function Header({ view, setView, onRandom }) {
  return (
    <header className="topbar">
      <div className="logo">Slip-box Drawer</div>
      <nav>
        <button className={view === 'drawer' ? 'active' : ''} onClick={() => setView('drawer')}>Drawer</button>
        <button className={view === 'inbox' ? 'active' : ''} onClick={() => setView('inbox')}>Table</button>
        <button className={view === 'search' ? 'active' : ''} onClick={() => setView('search')}>Register</button>
        <button onClick={onRandom}>Pull a card</button>
      </nav>
    </header>
  );
}

function Drawer({ notes, onOpen }) {
  return (
    <div className="drawer">
      {notes.map((note) => (
        <div key={note.id} className="card-tab" onClick={() => onOpen(note.id)}>
          <div className="card-id">{note.id}</div>
          <div className="card-title">{note.title || 'Untitled'}</div>
          <div className="card-snippet">{note.snippet}</div>
        </div>
      ))}
      {notes.length === 0 && <div className="empty">No cards yet. Add one from the Table.</div>}
    </div>
  );
}

function TagList({ tags }) {
  if (!tags || !tags.length) return null;
  return (
    <div className="tags">
      {tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  );
}

function LinkList({ label, links, onOpen }) {
  if (!links || !links.length) return null;
  return (
    <div className="links">
      <div className="links-label">{label}</div>
      <div className="links-list">
        {links.map((l) => (
          <button key={l} className="link-chip" onClick={() => onOpen(l)}>{l}</button>
        ))}
      </div>
    </div>
  );
}

function Editor({ note, onSave }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [links, setLinks] = useState((note.links || []).join(', '));
  const [tags, setTags] = useState((note.tags || []).join(', '));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const save = async () => {
    setSaving(true);
    setError('');
    try {
      const payload = {
        title,
        body,
        links: links.split(',').map((l) => l.trim()).filter(Boolean),
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean)
      };
      await onSave(payload);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="editor">
      <div className="field">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="field">
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8} />
      </div>
      <div className="field grid">
        <div>
          <label>Links (comma-separated IDs)</label>
          <input value={links} onChange={(e) => setLinks(e.target.value)} />
        </div>
        <div>
          <label>Tags (comma-separated)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      <button onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Save changes'}</button>
    </div>
  );
}

function CardView({ note, onOpenLink, refresh }) {
  const [editing, setEditing] = useState(false);

  const save = async (payload) => {
    await api.updateNote(note.id, payload);
    await refresh();
    setEditing(false);
  };

  return (
    <div className="card-view">
      <div className="card-head">
        <div>
          <div className="card-id-large">{note.id}</div>
          <div className="card-title-large">{note.title}</div>
          <TagList tags={note.tags} />
        </div>
        <div className="card-actions">
          <button onClick={() => setEditing((v) => !v)}>{editing ? 'Close editor' : 'Edit'}</button>
        </div>
      </div>
      {note.scanImage && (
        <div className="scan">
          <img src={`/${note.scanImage}`} alt="scan" />
        </div>
      )}
      <div className="card-body">{note.body}</div>
      <LinkList label="Links →" links={note.links} onOpen={onOpenLink} />
      <LinkList label="Backlinks →" links={note.backlinks} onOpen={onOpenLink} />
      {editing && <Editor note={note} onSave={save} />}
    </div>
  );
}

function Inbox({ onCreate }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [links, setLinks] = useState('');
  const [tags, setTags] = useState('');
  const [scan, setScan] = useState(null);
  const [scanPath, setScanPath] = useState('');
  const [message, setMessage] = useState('');

  const uploadScan = async () => {
    if (!scan) return;
    const uploaded = await api.uploadScan(scan, id || undefined);
    setScanPath(uploaded.path);
  };

  const create = async () => {
    setMessage('');
    if (!id || !title) {
      setMessage('ID and title are required.');
      return;
    }
    try {
      await onCreate({
        id,
        title,
        body,
        links: links.split(',').map((l) => l.trim()).filter(Boolean),
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        scanImage: scanPath
      });
      setMessage('Created card');
      setId('');
      setTitle('');
      setBody('');
      setLinks('');
      setTags('');
      setScan(null);
      setScanPath('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="inbox">
      <div className="field grid">
        <div>
          <label>Card ID</label>
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="21/3d7a" />
        </div>
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Short label" />
        </div>
      </div>
      <div className="field">
        <label>Body</label>
        <textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Optional transcription or summary" />
      </div>
      <div className="field grid">
        <div>
          <label>Links</label>
          <input value={links} onChange={(e) => setLinks(e.target.value)} placeholder="1a, 1b" />
        </div>
        <div>
          <label>Tags</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="paper, systems" />
        </div>
      </div>
      <div className="field">
        <label>Scan / photo</label>
        <input type="file" accept="image/*" onChange={(e) => setScan(e.target.files[0])} />
        <button onClick={uploadScan} disabled={!scan}>Upload scan</button>
        {scanPath && <div className="hint">Attached scan at {scanPath}</div>}
      </div>
      {message && <div className="hint">{message}</div>}
      <button className="primary" onClick={create}>Create note</button>
    </div>
  );
}

function Register({ onOpen }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const runSearch = async () => {
    const data = await api.search(query);
    setResults(data);
  };

  return (
    <div className="register">
      <div className="field">
        <label>Search the register</label>
        <div className="row">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="keyword" />
          <button onClick={runSearch}>Search</button>
        </div>
      </div>
      <div className="drawer slim">
        {results.map((note) => (
          <div key={note.id} className="card-tab" onClick={() => onOpen(note.id)}>
            <div className="card-id">{note.id}</div>
            <div className="card-title">{note.title}</div>
            <div className="card-snippet">{note.snippet}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = useState('drawer');
  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState('');

  const loadNotes = async () => {
    const list = await api.listNotes();
    setNotes(list);
  };

  const openNote = async (id) => {
    setError('');
    try {
      const data = await api.fetchNote(id);
      setSelected(data);
      setView('card');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const randomCard = async () => {
    try {
      const n = await api.random();
      setSelected(n);
      setView('card');
    } catch (err) {
      setError(err.message);
    }
  };

  const createNote = async (payload) => {
    await api.createNote(payload);
    await loadNotes();
    setView('drawer');
  };

  return (
    <div className="app">
      <Header view={view} setView={setView} onRandom={randomCard} />
      {error && <div className="error banner">{error}</div>}
      {view === 'drawer' && <Drawer notes={notes} onOpen={openNote} />}
      {view === 'card' && selected && (
        <CardView
          note={selected}
          onOpenLink={openNote}
          refresh={async () => {
            const refreshed = await api.fetchNote(selected.id);
            setSelected(refreshed);
            await loadNotes();
          }}
        />
      )}
      {view === 'inbox' && <Inbox onCreate={createNote} />}
      {view === 'search' && <Register onOpen={openNote} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
