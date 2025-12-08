import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import htm from "https://esm.sh/htm@3.1.1";
import { marked } from "https://cdn.jsdelivr.net/npm/marked@12.0.2/+esm";
import {
  Search,
  Shuffle,
  Inbox,
  FileText,
  Download,
  Save,
  Edit3,
} from "https://esm.sh/lucide-react@0.441.0?deps=react@18.2.0";

const html = htm.bind(React.createElement);

const rootEl = document.getElementById("root");
const INDEX_URL = rootEl?.dataset?.indexUrl
  ? new URL(rootEl.dataset.indexUrl, window.location.href)
  : new URL("./data/index.json", import.meta.url);

function parseFrontMatter(markdown) {
  const lines = markdown.split(/\r?\n/);
  if (lines[0] !== "---") return { data: {}, body: markdown.trim() };
  const end = lines.indexOf("---", 1);
  if (end === -1) return { data: {}, body: markdown.trim() };
  const fmLines = lines.slice(1, end);
  const data = {};
  let currentKey = null;
  fmLines.forEach((line) => {
    if (/^\s*-/.test(line) && currentKey) {
      data[currentKey] = data[currentKey] || [];
      data[currentKey].push(line.replace(/^\s*-\s*/, "").replace(/^\"|\"$/g, ""));
      return;
    }
    const [key, ...rest] = line.split(":");
    if (!key) return;
    currentKey = key.trim();
    const rawValue = rest.join(":").trim();
    if (!rawValue) {
      data[currentKey] = "";
      return;
    }
    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[currentKey] = rawValue
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^\"|\"$/g, ""))
        .filter(Boolean);
      return;
    }
    data[currentKey] = rawValue.replace(/^\"|\"$/g, "");
  });
  const body = lines.slice(end + 1).join("\n").trim();
  return { data, body };
}

function buildMarkdown(note) {
  const lines = ["---"];
  lines.push(`id: "${note.id}"`);
  if (note.title) lines.push(`title: "${note.title}"`);
  const writeArray = (key, arr) => {
    lines.push(`${key}:`);
    (arr || []).forEach((item) => lines.push(`  - "${item}"`));
    if (!arr || !arr.length) lines.push("  -");
  };
  writeArray("links", note.links || []);
  writeArray("backlinks", note.backlinks || []);
  writeArray("tags", note.tags || []);
  if (note.created) lines.push(`created: "${note.created}"`);
  if (note.scanImage) lines.push(`scanImage: "${note.scanImage}"`);
  lines.push("---", "", note.body || "");
  return lines.join("\n");
}

function idToFilename(id) {
  return id.replace(/\//g, "_");
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function downloadFile(file, filename) {
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function Markdown({ body }) {
  const htmlContent = useMemo(() => ({ __html: marked.parse(body || "") }), [body]);
  return html`<div class="prose prose-stone max-w-none" dangerouslySetInnerHTML=${htmlContent}></div>`;
}

function DrawerCard({ note, onOpen }) {
  return html`
    <button
      class="drawer-card w-full text-left bg-white/80 paper-grid border border-amber-100 rounded-lg px-4 py-3 mb-2 drawer-shadow"
      onClick=${() => onOpen(note.id)}
    >
      <div class="flex items-start justify-between text-sm text-amber-900 font-semibold">
        <span class="tracking-tight">${note.id}</span>
        ${note.created
          ? html`<span class="text-[11px] text-amber-700">${new Date(note.created).toLocaleDateString()}</span>`
          : null}
      </div>
      <div class="text-lg font-semibold text-stone-900">${note.title || "Untitled"}</div>
      <div class="text-sm text-stone-600 leading-snug">${note.snippet || ""}</div>
      ${note.tags && note.tags.length
        ? html`<div class="flex flex-wrap gap-2 mt-2">${note.tags.map(
            (tag) => html`<span class="tag text-xs px-2 py-1 rounded">${tag}</span>`
          )}</div>`
        : null}
    </button>
  `;
}

function LinkList({ label, ids, onOpen }) {
  if (!ids || !ids.length) return null;
  return html`
    <div class="mt-3">
      <div class="text-xs uppercase tracking-[0.2em] text-amber-700 mb-1">${label}</div>
      <div class="flex flex-wrap gap-2">
        ${ids.map(
          (id) => html`<button
            class="px-3 py-1 text-sm rounded-full bg-white/80 border border-amber-200 hover:border-amber-400 transition"
            onClick=${() => onOpen(id)}
          >${id}</button>`
        )}
      </div>
    </div>
  `;
}

function CardView({ note, onOpen, onStartEdit }) {
  if (!note) return null;
  return html`
    <div class="card-surface rounded-2xl p-6 border border-amber-100">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-xs tracking-[0.3em] text-amber-700 uppercase">Card</div>
          <div class="text-2xl font-extrabold text-stone-900">${note.id}</div>
          <div class="text-lg text-stone-700">${note.title || "Untitled"}</div>
        </div>
        <div class="flex gap-2">
          <button
            class="flex items-center gap-2 px-3 py-2 bg-amber-700 text-white rounded-lg shadow"
            onClick=${onStartEdit}
          >
            ${html`<${Edit3} size="16" />`} Edit
          </button>
        </div>
      </div>
      ${note.scanImage
        ? html`<div class="mt-4">
            <div class="text-xs text-amber-700 mb-1">Scan</div>
            <img src=${note.scanImage} alt="Scan" class="rounded-lg border border-amber-100 max-h-64" />
          </div>`
        : null}
      <div class="mt-4 text-sm leading-relaxed bg-white/80 border border-amber-100 rounded-xl p-4 paper-grid">
        <${Markdown} body=${note.body} />
      </div>
      <${LinkList} label="Links" ids=${note.links || []} onOpen=${onOpen} />
      <${LinkList} label="Backlinks" ids=${note.backlinks || []} onOpen=${onOpen} />
      ${note.tags && note.tags.length
        ? html`<div class="mt-3 flex flex-wrap gap-2">
            ${note.tags.map((tag) => html`<span class="tag text-xs px-3 py-1 rounded-full">${tag}</span>`)}
          </div>`
        : null}
    </div>
  `;
}

function EditPanel({ note, onClose }) {
  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");
  const [links, setLinks] = useState((note?.links || []).join(", "));
  const [tags, setTags] = useState((note?.tags || []).join(", "));
  const [scanImage, setScanImage] = useState(note?.scanImage || "");

  const handleDownload = () => {
    const updated = {
      ...note,
      title,
      body,
      links: links
        .split(/,|\n/)
        .map((l) => l.trim())
        .filter(Boolean),
      tags: tags
        .split(/,|\n/)
        .map((t) => t.trim())
        .filter(Boolean),
      scanImage,
    };
    const markdown = buildMarkdown(updated);
    downloadText(`${idToFilename(updated.id)}.md`, markdown);
  };

  return html`
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-xs uppercase tracking-[0.3em] text-amber-700">Edit card</div>
            <div class="text-xl font-semibold">${note.id}</div>
          </div>
          <button class="text-sm text-amber-800" onClick=${onClose}>Close</button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <label class="text-sm space-y-1">
            <span class="text-amber-800">Title</span>
            <input value=${title} onInput=${(e) => setTitle(e.target.value)} class="w-full rounded-lg border border-amber-200 px-3 py-2" />
          </label>
          <label class="text-sm space-y-1">
            <span class="text-amber-800">Scan image path</span>
            <input value=${scanImage} onInput=${(e) => setScanImage(e.target.value)} class="w-full rounded-lg border border-amber-200 px-3 py-2" placeholder="scans/21_3d7a7.jpg" />
          </label>
        </div>
        <label class="text-sm space-y-2 block">
          <span class="text-amber-800">Body</span>
          <textarea
            class="w-full rounded-lg border border-amber-200 px-3 py-2 h-40"
            value=${body}
            onInput=${(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <div class="grid md:grid-cols-2 gap-4">
          <label class="text-sm space-y-1">
            <span class="text-amber-800">Links (comma or newline)</span>
            <textarea
              class="w-full rounded-lg border border-amber-200 px-3 py-2 h-24"
              value=${links}
              onInput=${(e) => setLinks(e.target.value)}
            ></textarea>
          </label>
          <label class="text-sm space-y-1">
            <span class="text-amber-800">Tags (comma or newline)</span>
            <textarea
              class="w-full rounded-lg border border-amber-200 px-3 py-2 h-24"
              value=${tags}
              onInput=${(e) => setTags(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div class="flex justify-between items-center pt-2">
          <button class="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-lg" onClick=${handleDownload}>
            <${Download} size="16" /> Download updated card
          </button>
          <button class="text-sm text-stone-600" onClick=${onClose}>Done</button>
        </div>
      </div>
    </div>
  `;
}

function TableInbox({ onCreate }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [links, setLinks] = useState("");
  const [tags, setTags] = useState("");
  const [scanFile, setScanFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleCreate = () => {
    if (!id.trim()) {
      setMessage("Provide a Zettel ID before filing.");
      return;
    }
    const note = {
      id: id.trim(),
      title: title.trim(),
      body,
      links: links
        .split(/,|\n/)
        .map((l) => l.trim())
        .filter(Boolean),
      backlinks: [],
      tags: tags
        .split(/,|\n/)
        .map((t) => t.trim())
        .filter(Boolean),
      created: new Date().toISOString(),
      scanImage: scanFile ? `scans/${idToFilename(id.trim())}${scanFile.name.includes(".") ? scanFile.name.slice(scanFile.name.lastIndexOf(".")) : ""}` : "",
    };
    const markdown = buildMarkdown(note);
    downloadText(`${idToFilename(note.id)}.md`, markdown);
    if (scanFile) {
      const ext = scanFile.name.includes(".") ? scanFile.name.slice(scanFile.name.lastIndexOf(".")) : "";
      downloadFile(scanFile, `${idToFilename(note.id)}${ext}`);
    }
    setMessage("Downloaded card file" + (scanFile ? " and scan." : "."));
    onCreate?.(note.id);
  };

  return html`
    <div class="bg-white/80 paper-grid border border-amber-100 rounded-2xl p-5 drawer-shadow">
      <div class="flex items-center gap-2 text-amber-800 font-semibold mb-3">
        <${Inbox} size="18" /> The Table (inbox)
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <label class="text-sm space-y-1">
          <span class="text-amber-800">Card ID</span>
          <input class="w-full border border-amber-200 rounded-lg px-3 py-2" value=${id} onInput=${(e) => setId(e.target.value)} placeholder="21/3d7a7" />
        </label>
        <label class="text-sm space-y-1">
          <span class="text-amber-800">Title</span>
          <input class="w-full border border-amber-200 rounded-lg px-3 py-2" value=${title} onInput=${(e) => setTitle(e.target.value)} placeholder="Causality within systems theory" />
        </label>
      </div>
      <label class="text-sm space-y-2 block mt-3">
        <span class="text-amber-800">Body</span>
        <textarea class="w-full border border-amber-200 rounded-lg px-3 py-2 h-32" value=${body} onInput=${(e) => setBody(e.target.value)}></textarea>
      </label>
      <div class="grid md:grid-cols-2 gap-4 mt-3">
        <label class="text-sm space-y-1">
          <span class="text-amber-800">Links (comma or newline)</span>
          <textarea class="w-full border border-amber-200 rounded-lg px-3 py-2 h-20" value=${links} onInput=${(e) => setLinks(e.target.value)}></textarea>
        </label>
        <label class="text-sm space-y-1">
          <span class="text-amber-800">Tags</span>
          <textarea class="w-full border border-amber-200 rounded-lg px-3 py-2 h-20" value=${tags} onInput=${(e) => setTags(e.target.value)}></textarea>
        </label>
      </div>
      <div class="mt-3 flex items-center gap-3">
        <label class="text-sm text-amber-800 flex items-center gap-2">
          Scan file
          <input type="file" accept="image/*" onChange=${(e) => setScanFile(e.target.files?.[0] || null)} />
        </label>
        ${scanFile
          ? html`<span class="text-xs text-stone-600">${scanFile.name}</span>`
          : html`<span class="text-xs text-stone-500">Optional</span>`}
      </div>
      <div class="mt-4 flex items-center gap-3">
        <button class="px-4 py-2 bg-amber-700 text-white rounded-lg flex items-center gap-2" onClick=${handleCreate}>
          <${Save} size="16" /> Download note file
        </button>
        ${message ? html`<div class="text-sm text-stone-700">${message}</div>` : null}
      </div>
    </div>
  `;
}

function RegisterPanel({ query, onQueryChange, results, onOpen }) {
  return html`
    <div class="bg-white/80 paper-grid border border-amber-100 rounded-2xl p-5 drawer-shadow">
      <div class="flex items-center gap-2 text-amber-800 font-semibold mb-3">
        <${Search} size="18" /> Register
      </div>
      <input
        class="w-full border border-amber-200 rounded-lg px-3 py-2 mb-3"
        placeholder="Find an entry point"
        value=${query}
        onInput=${(e) => onQueryChange(e.target.value)}
      />
      <div class="space-y-2">
        ${results.map(
          (note) => html`<button
            class="w-full text-left px-3 py-2 rounded-lg border border-amber-100 bg-white/70 hover:border-amber-400"
            onClick=${() => onOpen(note.id)}
          >
            <div class="text-sm text-amber-800">${note.id}</div>
            <div class="text-base font-semibold">${note.title || "Untitled"}</div>
            <div class="text-sm text-stone-600">${note.snippet || ""}</div>
          </button>`
        )}
      </div>
    </div>
  `;
}

function Trail({ trail, onOpen }) {
  if (!trail.length) return null;
  return html`
    <div class="flex items-center gap-2 text-xs text-amber-800 flex-wrap">
      ${trail.map((id, idx) =>
        html`<button
          class="px-2 py-1 bg-white/80 border border-amber-200 rounded"
          onClick=${() => onOpen(id)}
        >
          ${id}${idx < trail.length - 1 ? html`<span class="text-amber-500"> →</span>` : null}
        </button>`
      )}
    </div>
  `;
}

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    fetch(INDEX_URL)
      .then((res) => res.json())
      .then((data) => setNotes(data.notes || []))
      .catch(() => setNotes([]));
  }, []);

  const openNote = async (id) => {
    const entry = notes.find((n) => n.id === id);
    if (!entry) return;
    setLoading(true);
    try {
      const noteUrl = new URL(entry.path, INDEX_URL);
      const text = await fetch(noteUrl).then((r) => r.text());
      const parsed = parseFrontMatter(text);
      const note = {
        id,
        title: parsed.data.title || entry.title,
        links: parsed.data.links || [],
        backlinks: parsed.data.backlinks || [],
        tags: parsed.data.tags || entry.tags || [],
        created: parsed.data.created || entry.created,
        scanImage: parsed.data.scanImage || entry.scanImage,
        body: parsed.body,
      };
      setCurrentNote(note);
      setShowEdit(false);
      setTrail((prev) => (prev[prev.length - 1] === id ? prev : [...prev, id].slice(-8)));
    } finally {
      setLoading(false);
    }
  };

  const randomNote = () => {
    if (!notes.length) return;
    const pick = notes[Math.floor(Math.random() * notes.length)];
    openNote(pick.id);
  };

  const filtered = useMemo(() => {
    const term = query.toLowerCase();
    if (!term) return notes.slice(0, 12);
    return notes.filter(
      (n) =>
        n.id.toLowerCase().includes(term) ||
        (n.title || "").toLowerCase().includes(term) ||
        (n.snippet || "").toLowerCase().includes(term)
    );
  }, [notes, query]);

  return html`
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div class="flex flex-wrap items-center gap-3 justify-between">
        <div>
          <div class="text-xs uppercase tracking-[0.4em] text-amber-700">CardCatalog</div>
          <div class="text-2xl font-extrabold text-stone-900">Slip-box drawer</div>
          <p class="text-sm text-stone-700 max-w-2xl">
            A tactile, paper-first drawer that mirrors the physical slip-box. Cards live as Markdown files with scans alongside; edits download fresh files for you to place in the repo.
          </p>
        </div>
        <div class="flex gap-2">
          <button class="px-3 py-2 bg-amber-700 text-white rounded-lg flex items-center gap-2" onClick=${randomNote}>
            <${Shuffle} size="16" /> Pull a card
          </button>
          <button class="px-3 py-2 bg-white border border-amber-200 rounded-lg flex items-center gap-2" onClick=${() => openNote(notes[0]?.id)}>
            <${FileText} size="16" /> First card
          </button>
        </div>
      </div>

      <${Trail} trail=${trail} onOpen=${openNote} />

      <div class="grid lg:grid-cols-3 gap-5">
        <div class="lg:col-span-2 space-y-4">
          <div class="bg-white/80 border border-amber-100 rounded-2xl p-4 drawer-shadow">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2 text-amber-800 font-semibold">
                <${Search} size="18" /> Drawer
              </div>
              <input
                class="border border-amber-200 rounded-lg px-3 py-2 text-sm"
                placeholder="Filter by ID or title"
                value=${query}
                onInput=${(e) => setQuery(e.target.value)}
              />
            </div>
            <div class="max-h-[520px] overflow-y-auto pr-1">
              ${filtered.map((note) => html`<${DrawerCard} key=${note.id} note=${note} onOpen=${openNote} />`)}
            </div>
          </div>
          ${currentNote
            ? html`<${CardView} note=${currentNote} onOpen=${openNote} onStartEdit=${() => setShowEdit(true)} />`
            : html`<div class="text-sm text-stone-600 px-2">Select a card to open the drawer.</div>`}
        </div>
        <div class="space-y-4">
          <${RegisterPanel} query=${query} onQueryChange=${setQuery} results=${filtered.slice(0, 6)} onOpen=${openNote} />
          <${TableInbox} onCreate=${openNote} />
        </div>
      </div>

      ${loading
        ? html`<div class="fixed bottom-4 right-4 bg-amber-700 text-white px-4 py-2 rounded-lg shadow">Loading card…</div>`
        : null}
      ${showEdit && currentNote ? html`<${EditPanel} note=${currentNote} onClose=${() => setShowEdit(false)} />` : null}
    </div>
  `;
}

createRoot(rootEl).render(html`<${App} />`);
