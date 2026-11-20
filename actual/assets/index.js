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
  X,
  Play,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "https://esm.sh/lucide-react@0.441.0?deps=react@18.2.0";

const html = htm.bind(React.createElement);

const rootElement = document.getElementById("root");
const cardsDataUrl = rootElement?.dataset?.cardsUrl;
const CARDS_URL = cardsDataUrl
  ? new URL(cardsDataUrl, window.location.href)
  : new URL("../../assets/actual-deck/cards.json", import.meta.url);

const FAMILY_META = {
  Language: { color: "bg-sky-700", accent: "text-sky-100" },
  Automation: { color: "bg-amber-700", accent: "text-amber-100" },
  Truth: { color: "bg-blue-800", accent: "text-blue-100" },
  Flow: { color: "bg-cyan-800", accent: "text-cyan-100" },
  Conviviality: { color: "bg-emerald-800", accent: "text-emerald-100" },
  "Data Integrity": { color: "bg-rose-800", accent: "text-rose-100" },
  Design: { color: "bg-teal-900", accent: "text-teal-100" },
  "Work Practice": { color: "bg-lime-800", accent: "text-lime-100" },
  Finance: { color: "bg-indigo-800", accent: "text-indigo-100" },
  Mechanism: { color: "bg-stone-700", accent: "text-stone-100" },
  Outcome: { color: "bg-orange-700", accent: "text-orange-100" },
  Metric: { color: "bg-violet-800", accent: "text-violet-100" },
  Principles: { color: "bg-fuchsia-800", accent: "text-fuchsia-100" },
  Vision: { color: "bg-slate-800", accent: "text-slate-100" }
};

function canonicalFamilyKey(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();
}

const FAMILY_META_BY_CANON = Object.fromEntries(
  Object.entries(FAMILY_META).map(([family, meta]) => [canonicalFamilyKey(family), meta])
);

function getFamilyMeta(family) {
  return FAMILY_META_BY_CANON[canonicalFamilyKey(family)] || {};
}

const AUDIENCE_PRESETS = {
  All: [],
  Workers: [
    "language-provenance",
    "automation-automate-constraint",
    "truth-395",
    "prin-003",
    "convivial-tools",
    "design-integrity-by-design",
    "convivial-reduce-load",
    "field-005",
    "metric-cognitive-load",
    "work-001",
    "work-002"
  ],
  Engineering: [
    "language-provenance",
    "automation-automate-constraint",
    "automation-necessary-not-sufficient",
    "prin-003",
    "design-integrity-by-design",
    "mechanism-edge-autonomy"
  ],
  Finance: [
    "language-provenance",
    "truth-395",
    "design-integrity-by-design",
    "field-005"
  ],
  Leadership: [
    "automation-necessary-not-sufficient",
    "convivial-reduce-load",
    "convivial-tools",
    "truth-395"
  ],
  Partners: [
    "mechanism-edge-autonomy",
    "design-integrity-by-design",
    "automation-automate-constraint"
  ]
};

function Chip({ children, onClick, active }) {
  const classes = `px-3 py-1 rounded-full text-xs font-medium border ${
    active ? "bg-black text-white border-black" : "bg-white/80 text-black border-black/20"
  }`;
  return html`<button onClick=${onClick} className=${classes}>${children}</button>`;
}

function Header({ query, setQuery, audience, setAudience, onClearStack }) {
  return html`
    <div className="sticky z-10 bg-white/90 backdrop-blur border-b border-black/10" style=${{ top: "var(--site-header-h, 0px)" }}>
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
            autoComplete="off"
            value=${audience}
            onChange=${(e) => setAudience(e.target.value)}
          >
            ${Object.keys(AUDIENCE_PRESETS).map(
              (key) => html`<option key=${key} value=${key}>${key}</option>`
            )}
          </select>
        </div>
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

function cardAnchorId(id) {
  return `card-${id}`;
}

function Card({ card, onAdd, highlighted }) {
  const [flipped, setFlipped] = useState(false);
  const meta = getFamilyMeta(card.family);
  const frontTextClass = meta.text || "text-white";
  const frontClass = `absolute inset-0 rounded-2xl p-3 border ${
    meta.border || "border-black/10"
  } ${meta.color || "bg-neutral-800"} ${frontTextClass} [backface-visibility:hidden] flex flex-col`;
  return html`
    <div
      id=${cardAnchorId(card.id)}
      className=${`group [perspective:1000px] scroll-mt-24 rounded-2xl transition-shadow duration-500 ${
        highlighted ? "ring-4 ring-amber-400 ring-offset-2" : ""
      }`}
    >
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
          <div className="mt-auto flex items-center pt-2">
            <button
              onClick=${(e) => {
                e.stopPropagation();
                onAdd(card.id);
              }}
              className="text-xs bg-white text-black px-3 py-1 rounded-lg inline-flex items-center gap-1"
            >
              <${Plus} size=${14} /> Add to Stack
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

function Stack({ ids, cardMap, onRemove, onPresent, collapsed, onToggleCollapse }) {
  return html`
    <div className="p-3 border-t border-black/10 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <${Layers3} size=${16} /> Stack (${ids.length})
        </div>
        <div className="flex items-center gap-2">
          ${ids.length
            ? html`<button
                onClick=${onPresent}
                className="text-xs inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-lg"
              >
                <${Play} size=${14} /> Present
              </button>`
            : null}
          <button
            onClick=${onToggleCollapse}
            className="text-xs inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 bg-black/5"
            aria-expanded=${!collapsed}
          >
            ${collapsed
              ? html`<${ChevronUp} size=${14} /> Expand`
              : html`<${ChevronDown} size=${14} /> Collapse`}
          </button>
        </div>
      </div>
      ${collapsed
        ? null
        : html`<div className="mt-2 grid grid-cols-2 gap-2">
            ${ids.map((id) => {
              const card = cardMap[id];
              if (!card) return null;
              const meta = getFamilyMeta(card.family);
              const cardClass = `rounded-xl border ${meta.border || "border-black/10"} p-2`;
              return html`
                <div key=${id} className=${cardClass}>
                  <div className="text-[10px] uppercase tracking-wider text-black/60">${card.family}</div>
                  <div className="text-[13px] font-semibold leading-snug">${card.title}</div>
                  <div className="mt-2 flex items-center gap-3 text-[11px]">
                    <button onClick=${() => onRemove(id)} className="text-red-600 inline-flex items-center gap-1">
                      <${Trash2} size=${12} /> Remove
                    </button>
                  </div>
                </div>
              `;
            })}
          </div>`}
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

  const meta = getFamilyMeta(card.family);
  const frontTextClass = meta.text || "text-white";
  const frontClass = `absolute inset-0 rounded-3xl p-6 border ${
    meta.border || "border-black/10"
  } ${meta.color || "bg-neutral-800"} ${frontTextClass} [backface-visibility:hidden] flex flex-col`;

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
              <div className=${`mt-4 text-sm ${meta.accent || "text-white/80"}`}>${card.why}</div>
              <div className=${`mt-auto text-xs ${meta.accent || "text-white/60"}`}>
                Use the flip button to view implementation points.
              </div>
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
  const [audience, setAudience] = useState("All");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [stack, setStack] = useState([]);
  const [isStackCollapsed, setIsStackCollapsed] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [presentationIndex, setPresentationIndex] = useState(0);

  useEffect(() => {
    // Enforce the intended initial preset even if the browser restores a prior form value.
    const timerId = window.setTimeout(() => {
      setAudience("All");
    }, 250);
    return () => window.clearTimeout(timerId);
  }, []);

  const cardMap = useMemo(() => {
    const map = {};
    cards.forEach((card) => {
      map[card.id] = card;
    });
    return map;
  }, [cards]);

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    const preset = new Set(AUDIENCE_PRESETS[audience] || []);
    return cards.filter((card) => {
      const matchQ =
        !q ||
        [
          card.id,
          card.family,
          card.title,
          card.quote,
          card.tagline,
          card.why,
          ...(card.audiences || []),
          ...(card.how || [])
        ]
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
        const requestUrl = new URL(CARDS_URL.toString());
        requestUrl.searchParams.set("_ts", String(Date.now()));
        const response = await fetch(requestUrl.toString(), {
          cache: "no-store"
        });
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

  // Deep links: /actual/#<card id> scrolls to that card and highlights it.
  const [hashCardId, setHashCardId] = useState(() => decodeURIComponent(window.location.hash.slice(1)));
  const [highlightedId, setHighlightedId] = useState("");

  useEffect(() => {
    const onHashChange = () => setHashCardId(decodeURIComponent(window.location.hash.slice(1)));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (isLoading || !hashCardId || !cardMap[hashCardId]) {
      return undefined;
    }
    if (!visibleCards.some((card) => card.id === hashCardId)) {
      setQuery("");
      setAudience("All");
      setFamilyFilter("All");
      return undefined;
    }
    const el = document.getElementById(cardAnchorId(hashCardId));
    if (!el) {
      return undefined;
    }
    // Jump straight to the card, then correct once in case Tailwind styles or fonts shift the layout.
    const scrollToCard = () => {
      const target = document.getElementById(cardAnchorId(hashCardId));
      if (target) target.scrollIntoView({ behavior: "auto", block: "center" });
    };
    window.requestAnimationFrame(scrollToCard);
    window.setTimeout(scrollToCard, 400);
    setHighlightedId(hashCardId);
    setHashCardId("");
    return undefined;
  }, [isLoading, hashCardId, cardMap, visibleCards]);

  useEffect(() => {
    if (!highlightedId) {
      return undefined;
    }
    const timerId = window.setTimeout(() => setHighlightedId(""), 2500);
    return () => window.clearTimeout(timerId);
  }, [highlightedId]);

  function addToStack(id) {
    setStack((current) => (current.includes(id) ? current : [...current, id]));
  }

  function removeFromStack(id) {
    setStack((current) => current.filter((entry) => entry !== id));
  }

  function clearStack() {
    setStack([]);
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
                  highlighted=${highlightedId === card.id}
                />`
            )
          : html`<div className="text-sm text-black/60 p-6">No cards match the current filters.</div>`}
      </div>
      <div className="fixed bottom-0 inset-x-0">
        <${Stack}
          ids=${stack}
          cardMap=${cardMap}
          onRemove=${removeFromStack}
          onPresent=${startPresentation}
          collapsed=${isStackCollapsed}
          onToggleCollapse=${() => setIsStackCollapsed((current) => !current)}
        />
      </div>
      ${isPresenting && stackCards.length
        ? html`<${StackPresentation}
            cards=${stackCards}
            index=${presentationIndex}
            onClose=${() => setIsPresenting(false)}
            onPrev=${goPrev}
            onNext=${goNext}
          />`
        : null}
    </div>
  `;
}

createRoot(document.getElementById("root")).render(
  html`<${React.StrictMode}><${ActualDeckApp} /><//>`
);
