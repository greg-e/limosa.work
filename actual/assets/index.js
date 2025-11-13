import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import htm from "https://esm.sh/htm@3.1.1";
import {
  Search,
  Layers3,
  Users2,
  Plus,
  Trash2,
  Rotate3D,
  FlipHorizontal2,
  Edit3,
  Save,
  X,
  Play,
  ArrowLeft,
  ArrowRight,
  Download
} from "https://esm.sh/lucide-react@0.441.0?deps=react@18.2.0";

const html = htm.bind(React.createElement);

const rootElement = document.getElementById("root");
const cardsDataUrl = rootElement?.dataset?.cardsUrl;
const CARDS_URL = cardsDataUrl
  ? new URL(cardsDataUrl, window.location.href)
  : new URL("../../assets/actual-deck/cards.json", import.meta.url);

const FAMILY_META = {
  Language: { color: "bg-slate-800", accent: "text-slate-300" },
  Automation: { color: "bg-amber-700", accent: "text-amber-100" },
  Truth: { color: "bg-blue-800", accent: "text-blue-100" },
  Flow: { color: "bg-cyan-800", accent: "text-cyan-100" },
  Conviviality: { color: "bg-emerald-800", accent: "text-emerald-100" },
  Design: { color: "bg-neutral-900", accent: "text-neutral-200" },
  Mechanism: { color: "bg-zinc-800", accent: "text-zinc-100" },
  Outcome: { color: "bg-orange-700", accent: "text-orange-100" },
  Metric: { color: "bg-violet-800", accent: "text-violet-100" },
  Vision: { color: "bg-yellow-600", accent: "text-neutral-600", border: "border" },

  // new Actual Deck families
  Principles: { color: "bg-blue-800", accent: "text-blue-100" },
  "Field Practice": { color: "bg-emerald-800", accent: "text-emerald-100" },
  "Automation & Mechanisms": { color: "bg-amber-700", accent: "text-amber-100" },
  "Data Integrity & Provenance": { color: "bg-slate-800", accent: "text-slate-300" },
  "Flow & Operations": { color: "bg-cyan-800", accent: "text-cyan-100" },
  "Finance & Reconciliation": { color: "bg-violet-800", accent: "text-violet-100" },
  "Vision & Alignment": { color: "bg-yellow-600", accent: "text-neutral-600", border: "border" }
};

const AUDIENCE_PRESETS = {
  Field: [
    "principles-truth-you-can-stand-on",
    "principles-keep-the-work-moving",
    "field-practice-effortless-proof",
    "field-practice-context-without-effort",
    "field-practice-get-paid-right",
    "field-practice-presence-becomes-proof",
    "flow-operations-critical-flow",
    "flow-operations-clarity-beats-supervision"
  ],

  Engineering: [
    "automation-mechanisms-edge-autonomy",
    "automation-mechanisms-store-and-forward",
    "automation-mechanisms-smart-intervals",
    "automation-mechanisms-passive-association",
    "automation-mechanisms-no-app-no-terminal",
    "data-integrity-integrity-by-design",
    "data-integrity-provenance-of-truth"
  ],

  Finance: [
    "principles-395-exactly",
    "field-practice-get-paid-right",
    "finance-precision-finance",
    "finance-recognition-built-on-proof",
    "data-integrity-lineage-is-the-ledger",
    "data-integrity-no-edits-without-evidence"
  ],

  Leadership: [
    "principles-necessary-but-not-sufficient",
    "principles-convivial-tools",
    "flow-operations-real-time-reflection",
    "flow-operations-flow-multiplied",
    "vision-lead-by-knowing-not-assuming",
    "vision-truth-as-infrastructure"
  ],

  Partners: [
    "finance-recognition-built-on-proof",
    "data-integrity-provenance-of-truth",
    "automation-mechanisms-passive-association",
    "principles-automate-the-constraint",
    "vision-the-living-map-of-work"
  ]
};


function Chip({ children, onClick, active }) {
  const classes = `px-3 py-1 rounded-full text-xs font-medium border ${
    active ? "bg-black text-white border-black" : "bg-white/80 text-black border-black/20"
  }`;
  return html`<button onClick=${onClick} className=${classes}>${children}</button>`;
}

function Header({ query, setQuery, audience, setAudience, onClearStack, onNewCard }) {
  return html`
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="px-3 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1 bg-black/5 rounded-xl px-3 py-2">
          <${Search} size=${18} />
          <input
            className="bg-transparent outline-none w-full text-sm"
            placeholder="Search cards, tags, quotes"
            value=${query}
            onChange=${(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none text-sm bg-black text-white px-3 py-2 rounded-xl"
            value=${audience}
            onChange=${(e) => setAudience(e.target.value)}
          >
            ${Object.keys(AUDIENCE_PRESETS).map(
              (key) => html`<option key=${key} value=${key}>${key}</option>`
            )}
          </select>
        </div>
        <button
          onClick=${onNewCard}
          className="inline-flex items-center gap-1 bg-emerald-600 text-white text-xs px-3 py-2 rounded-xl"
        >
          <${Plus} size=${14} /> New Card
        </button>
        <button
          onClick=${onClearStack}
          className="ml-1 inline-flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-2 rounded-xl"
        >
          <${Trash2} size=${14} /> Clear
        </button>
      </div>
    </div>
  `;
}

function FamilyFilters({ families, active, setActive }) {
  return html`
    <div className="px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar">
      ${families.map(
        (family) => html`
          <${Chip}
            key=${family}
            onClick=${() => setActive(active === family ? "All" : family)}
            active=${active === family}
          >
            ${family}
          <//>
        `
      )}
      <${Chip} onClick=${() => setActive("All")} active=${active === "All"}>All<//>
    </div>
  `;
}

function Card({ card, onAdd, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const meta = FAMILY_META[card.family] || {};
  const frontClass = `absolute inset-0 rounded-2xl p-3 border ${
    meta.border || "border-black/10"
  } ${meta.color || "bg-neutral-800"} text-white [backface-visibility:hidden] flex flex-col`;
  return html`
    <div className="group [perspective:1000px]">
      <div
        className="relative h-56 w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-500"
        onClick=${() => setFlipped((current) => !current)}
        style=${{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className=${frontClass}>
          <div className="flex items-center justify-between mb-2">
            <span className=${`text-[10px] uppercase tracking-wider ${meta.accent || "text-white/70"}`}>
              ${card.family}
            </span>
            <${FlipHorizontal2} size=${16} className="opacity-70" />
          </div>
          ${card.quote
            ? html`<div className="text-[11px] opacity-90 leading-snug mb-1">${card.quote}</div>`
            : null}
          <div className="text-lg font-semibold leading-tight">${card.title}</div>
          <div className=${`text-[12px] mt-1 ${meta.accent || "text-white/70"}`}>${card.tagline}</div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <button
              onClick=${(e) => {
                e.stopPropagation();
                onAdd(card.id);
              }}
              className="text-xs bg-white text-black px-3 py-1 rounded-lg inline-flex items-center gap-1"
            >
              <${Plus} size=${14} /> Add to Stack
            </button>
            <button
              onClick=${(e) => {
                e.stopPropagation();
                onEdit(card.id);
              }}
              className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1"
            >
              <${Edit3} size=${14} /> Edit
            </button>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl p-3 bg-white text-black border border-black/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-wider text-black/60">Back</span>
            <${Rotate3D} size=${16} className="text-black/60" />
          </div>
          ${card.why ? html`<div className="text-[12px] leading-snug mb-2">${card.why}</div>` : null}
          <ul className="text-[12px] list-disc pl-5 space-y-1">
            ${card.how?.map((line, index) => html`<li key=${index}>${line}</li>`) || null}
          </ul>
          ${card.reflection
            ? html`<div className="mt-2 text-[12px] italic text-black/70">${card.reflection}</div>`
            : null}
        </div>
      </div>
    </div>
  `;
}

function Stack({ ids, cardMap, onRemove, onEdit, onPresent }) {
  return html`
    <div className="p-3 border-t border-black/10 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <${Layers3} size=${16} /> Stack (${ids.length})
        </div>
        ${ids.length
          ? html`<button
              onClick=${onPresent}
              className="text-xs inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-lg"
            >
              <${Play} size=${14} /> Present
            </button>`
          : null}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        ${ids.map((id) => {
          const card = cardMap[id];
          if (!card) return null;
          const meta = FAMILY_META[card.family] || {};
          const cardClass = `rounded-xl border ${meta.border || "border-black/10"} p-2`;
          return html`
            <div key=${id} className=${cardClass}>
              <div className="text-[10px] uppercase tracking-wider text-black/60">${card.family}</div>
              <div className="text-[13px] font-semibold leading-snug">${card.title}</div>
              <div className="mt-2 flex items-center gap-3 text-[11px]">
                <button onClick=${() => onEdit(id)} className="text-blue-600 inline-flex items-center gap-1">
                  <${Edit3} size=${12} /> Edit
                </button>
                <button onClick=${() => onRemove(id)} className="text-red-600 inline-flex items-center gap-1">
                  <${Trash2} size=${12} /> Remove
                </button>
              </div>
            </div>
          `;
        })}
      </div>
    </div>
  `;
}

function CardEditor({ initialCard, isEditing, onSave, onCancel, existingIds, onDownload }) {
  const [form, setForm] = useState(() => ({
    id: initialCard?.id || "",
    title: initialCard?.title || "",
    family: initialCard?.family || "Language",
    quote: initialCard?.quote || "",
    tagline: initialCard?.tagline || "",
    why: initialCard?.why || "",
    how: (initialCard?.how || []).join("\n"),
    reflection: initialCard?.reflection || "",
    audiences: (initialCard?.audiences || []).join(", "),
    related: (initialCard?.related || []).join(", ")
  }));
  const [error, setError] = useState("");

  useEffect(() => {
    setForm({
      id: initialCard?.id || "",
      title: initialCard?.title || "",
      family: initialCard?.family || "Language",
      quote: initialCard?.quote || "",
      tagline: initialCard?.tagline || "",
      why: initialCard?.why || "",
      how: (initialCard?.how || []).join("\n"),
      reflection: initialCard?.reflection || "",
      audiences: (initialCard?.audiences || []).join(", "),
      related: (initialCard?.related || []).join(", ")
    });
    setError("");
  }, [initialCard, isEditing]);

  function handleChange(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const id = form.id.trim();
    const family = form.family.trim();
    const title = form.title.trim();

    if (!id) {
      setError("Card id is required.");
      return;
    }
    if (!family) {
      setError("Family is required.");
      return;
    }
    if (!title) {
      setError("Title is required.");
      return;
    }
    if (!isEditing && existingIds && typeof existingIds.has === "function" && existingIds.has(id)) {
      setError("Choose a unique id for the new card.");
      return;
    }

    const how = form.how
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const audiences = form.audiences
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    const related = form.related
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);

    onSave({
      ...initialCard,
      id,
      family,
      title,
      quote: form.quote.trim(),
      tagline: form.tagline.trim(),
      why: form.why.trim(),
      how,
      reflection: form.reflection.trim(),
      audiences,
      related
    });
  }

  return html`
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-full overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
          <div className="text-sm font-semibold">${isEditing ? "Edit card" : "Create card"}</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick=${onDownload}
              className="text-xs inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-black/10 text-black/70 hover:text-black hover:border-black/30 disabled:opacity-50"
              disabled=${typeof onDownload !== "function"}
            >
              <${Download} size=${14} /> Download JSON
            </button>
            <button
              type="button"
              onClick=${onCancel}
              className="text-black/60 hover:text-black inline-flex items-center justify-center"
            >
              <${X} size=${18} />
            </button>
          </div>
        </div>
        <form className="flex-1 overflow-y-auto px-4 py-3 space-y-3" onSubmit=${handleSubmit}>
          ${error
            ? html`<div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">${error}</div>`
            : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
              <span>Card id</span>
              <input
                className="border border-black/20 rounded-lg px-3 py-2 text-sm"
                value=${form.id}
                onChange=${(event) => handleChange("id", event.target.value)}
                disabled=${isEditing}
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
              <span>Family</span>
              <input
                className="border border-black/20 rounded-lg px-3 py-2 text-sm"
                value=${form.family}
                onChange=${(event) => handleChange("family", event.target.value)}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Title</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.title}
              onChange=${(event) => handleChange("title", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Quote</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.quote}
              onChange=${(event) => handleChange("quote", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Tagline</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.tagline}
              onChange=${(event) => handleChange("tagline", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Why</span>
            <textarea
              className="border border-black/20 rounded-lg px-3 py-2 text-sm min-h-[96px]"
              value=${form.why}
              onChange=${(event) => handleChange("why", event.target.value)}
            ></textarea>
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>How (one bullet per line)</span>
            <textarea
              className="border border-black/20 rounded-lg px-3 py-2 text-sm min-h-[96px]"
              value=${form.how}
              onChange=${(event) => handleChange("how", event.target.value)}
            ></textarea>
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Reflection</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.reflection}
              onChange=${(event) => handleChange("reflection", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Audiences (comma separated)</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.audiences}
              onChange=${(event) => handleChange("audiences", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-black/70">
            <span>Related card ids (comma separated)</span>
            <input
              className="border border-black/20 rounded-lg px-3 py-2 text-sm"
              value=${form.related}
              onChange=${(event) => handleChange("related", event.target.value)}
            />
          </label>
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-black/10">
            <button
              type="button"
              onClick=${onCancel}
              className="text-sm px-3 py-2 rounded-lg border border-black/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm inline-flex items-center gap-1 bg-black text-white px-4 py-2 rounded-lg"
            >
              <${Save} size=${16} /> ${isEditing ? "Save changes" : "Create card"}
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function StackPresentation({ cards, index, onClose, onPrev, onNext }) {
  const card = cards[index];
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    setShowBack(false);
  }, [card?.id]);

  if (!card) return null;

  const meta = FAMILY_META[card.family] || {};
  const frontClass = `absolute inset-0 rounded-3xl p-6 border ${
    meta.border || "border-black/10"
  } ${meta.color || "bg-neutral-800"} text-white [backface-visibility:hidden] flex flex-col`;

  return html`
    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 text-white border-b border-white/10">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60">${card.family}</div>
          <div className="text-lg font-semibold leading-tight">${card.title}</div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-white/70">${index + 1} / ${cards.length}</span>
          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick=${() => setShowBack((current) => !current)}
          >
            <${FlipHorizontal2} size=${16} /> ${showBack ? "Show front" : "Show back"}
          </button>
          <button
            className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 text-white"
            onClick=${onClose}
          >
            <${X} size=${18} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4 px-6 pb-8">
        <button
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
          onClick=${onPrev}
          disabled=${cards.length <= 1}
        >
          <${ArrowLeft} size=${20} />
        </button>
        <div className="w-full max-w-md [perspective:1600px]">
          <div
            className="relative h-[26rem] [transform-style:preserve-3d] transition-transform duration-500"
            style=${{ transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            <div className=${frontClass}>
              ${card.quote
                ? html`<div className="text-sm opacity-90 leading-snug mb-3">${card.quote}</div>`
                : null}
              <div className="text-xl font-semibold leading-tight">${card.tagline || card.title}</div>
              <div className="mt-4 text-sm text-white/80">${card.why}</div>
              <div className="mt-auto text-xs text-white/60">Use the flip button to view implementation points.</div>
            </div>
            <div className="absolute inset-0 rounded-3xl p-6 bg-white text-black border border-black/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
              <div className="text-xs uppercase tracking-wider text-black/60 mb-3">How</div>
              <ul className="text-sm list-disc pl-5 space-y-2">
                ${card.how?.map((line, idx) => html`<li key=${idx}>${line}</li>`)}
              </ul>
              ${card.reflection
                ? html`<div className="mt-4 text-sm italic text-black/70">${card.reflection}</div>`
                : null}
            </div>
          </div>
        </div>
        <button
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
          onClick=${onNext}
          disabled=${cards.length <= 1}
        >
          <${ArrowRight} size=${20} />
        </button>
      </div>
    </div>
  `;
}

function ActualDeckApp() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState("Field");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [stack, setStack] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorCard, setEditorCard] = useState(null);
  const [editingExisting, setEditingExisting] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [presentationIndex, setPresentationIndex] = useState(0);

  const cardMap = useMemo(() => {
    const map = {};
    cards.forEach((card) => {
      map[card.id] = card;
    });
    return map;
  }, [cards]);

  const existingIds = useMemo(() => new Set(cards.map((card) => card.id)), [cards]);

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    const preset = new Set(AUDIENCE_PRESETS[audience] || []);
    return cards.filter((card) => {
      const matchQ =
        !q ||
        [card.title, card.quote, card.tagline, card.why, ...(card.how || [])]
          .join("\n")
          .toLowerCase()
          .includes(q);
      const matchFamily = familyFilter === "All" || card.family === familyFilter;
      const matchAudience =
        preset.size === 0 || preset.has(card.id) || (card.audiences || []).includes(audience);
      return matchQ && matchFamily && matchAudience;
    });
  }, [cards, query, familyFilter, audience]);

  const families = useMemo(() => Array.from(new Set(cards.map((card) => card.family))).sort(), [cards]);

  const stackCards = useMemo(
    () => stack.map((id) => cardMap[id]).filter(Boolean),
    [stack, cardMap]
  );

  useEffect(() => {
    let cancelled = false;

    async function loadCards() {
      try {
        setIsLoading(true);
        setLoadError("");
        const response = await fetch(CARDS_URL);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Card dataset must be an array");
        }
        if (!cancelled) {
          setCards(data);
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(error?.message || "Unable to load cards");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadCards();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setStack((current) => {
      const filtered = current.filter((id) => cardMap[id]);
      return filtered.length === current.length ? current : filtered;
    });
  }, [cardMap]);

  useEffect(() => {
    if (!stackCards.length) {
      setIsPresenting(false);
      setPresentationIndex(0);
      return;
    }
    if (presentationIndex >= stackCards.length) {
      setPresentationIndex(stackCards.length - 1);
    }
  }, [stackCards, presentationIndex]);

  function addToStack(id) {
    setStack((current) => (current.includes(id) ? current : [...current, id]));
  }

  function removeFromStack(id) {
    setStack((current) => current.filter((entry) => entry !== id));
  }

  function clearStack() {
    setStack([]);
  }

  function downloadCardsJson() {
    const blob = new Blob([JSON.stringify(cards, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cards.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function openNewCard() {
    setEditorCard(null);
    setEditingExisting(false);
    setIsEditorOpen(true);
  }

  function openEditCard(id) {
    const card = cardMap[id];
    if (!card) return;
    setEditorCard(card);
    setEditingExisting(true);
    setIsEditorOpen(true);
  }

  function handleSaveCard(card) {
    setCards((current) => {
      const index = current.findIndex((entry) => entry.id === card.id);
      if (index >= 0) {
        const next = [...current];
        next[index] = card;
        return next;
      }
      return [...current, card];
    });
    setIsEditorOpen(false);
    setEditorCard(null);
    setEditingExisting(false);
  }

  function closeEditor() {
    setIsEditorOpen(false);
    setEditorCard(null);
    setEditingExisting(false);
  }

  function startPresentation() {
    if (!stackCards.length) return;
    setPresentationIndex(0);
    setIsPresenting(true);
  }

  function goPrev() {
    if (stackCards.length <= 1) return;
    setPresentationIndex((current) => (current - 1 + stackCards.length) % stackCards.length);
  }

  function goNext() {
    if (stackCards.length <= 1) return;
    setPresentationIndex((current) => (current + 1) % stackCards.length);
  }

  return html`
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <${Header}
        query=${query}
        setQuery=${setQuery}
        audience=${audience}
        setAudience=${setAudience}
        onClearStack=${clearStack}
        onNewCard=${openNewCard}
      />
      <div className="px-3 pt-2 flex items-center gap-2 text-xs text-black/70">
        <${Users2} size=${14} /> Audience preset is <span className="font-semibold">${audience}</span>
      </div>
      <${FamilyFilters} families=${families} active=${familyFilter} setActive=${setFamilyFilter} />
      <div className="px-3 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        ${isLoading
          ? html`<div className="text-sm text-black/60 p-6">Loading cards…</div>`
          : loadError
          ? html`<div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-4">Failed to load cards. ${
              loadError
            }</div>`
          : visibleCards.length
          ? visibleCards.map(
              (card) =>
                html`<${Card}
                  key=${card.id}
                  card=${card}
                  onAdd=${addToStack}
                  onEdit=${openEditCard}
                />`
            )
          : html`<div className="text-sm text-black/60 p-6">No cards match the current filters.</div>`}
      </div>
      <div className="fixed bottom-0 inset-x-0">
        <${Stack}
          ids=${stack}
          cardMap=${cardMap}
          onRemove=${removeFromStack}
          onEdit=${openEditCard}
          onPresent=${startPresentation}
        />
      </div>
      ${isEditorOpen
        ? html`<${CardEditor}
            initialCard=${editorCard}
            isEditing=${editingExisting}
            onSave=${handleSaveCard}
            onCancel=${closeEditor}
            existingIds=${existingIds}
            onDownload=${downloadCardsJson}
          />`
        : null}
      ${isPresenting && stackCards.length
        ? html`<${StackPresentation}
            cards=${stackCards}
            index=${presentationIndex}
            onClose=${() => setIsPresenting(false)}
            onPrev=${goPrev}
            onNext=${goNext}
          />`
        : null}
      <div className="sr-only">
        Draft new content with the in-app editor, download the latest cards JSON, and replace assets/actual-deck/cards.json in source
        control when you want to publish updates.
      </div>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(
  html`<${React.StrictMode}><${ActualDeckApp} /><//>`
);
