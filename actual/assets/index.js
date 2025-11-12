import React, { useMemo, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import htm from "https://esm.sh/htm@3.1.1";
import {
  Search,
  Layers3,
  Users2,
  Plus,
  Trash2,
  Rotate3D,
  FlipHorizontal2
} from "https://esm.sh/lucide-react@0.441.0?deps=react@18.2.0";

const html = htm.bind(React.createElement);

const CARDS = [
  {
    id: "language-provenance",
    family: "Language",
    title: "Provenance",
    quote: "Truth requires protection.",
    tagline: "Trust comes from traceability.",
    why: "Truth in data exists only when its origin can be proven. Provenance makes security measurable — verifiable origin, verified truth.",
    how: [
      "Tag source with identity, location, timestamp",
      "Sign and encrypt each transmission",
      "Preserve lineage from badge to cloud",
      "Audit values and chain of custody"
    ],
    reflection: "When origin is provable, truth stands on its own.",
    related: ["design-integrity-by-design", "truth-395"],
    audiences: ["Field", "Engineering", "Finance", "Leadership", "Partners"]
  },
  {
    id: "automation-automate-constraint",
    family: "Automation",
    title: "Automate the Constraint",
    quote: "Automation is good, as long as you know exactly where to put the machine.",
    tagline: "Automate where proof depends on it.",
    why: "Automation magnifies both correctness and error. Place it at the constraint so leverage is maximized.",
    how: [
      "Identify the limiting point",
      "Capture time and presence directly",
      "Leave judgment to humans",
      "Align downstream systems automatically"
    ],
    reflection: "We’re putting automation right at the constraint — knowing with certainty who was on site, when, and for how long.",
    related: ["truth-395", "flow-critical"],
    audiences: ["Field", "Engineering", "Leadership", "Partners"]
  },
  {
    id: "truth-395",
    family: "Truth",
    title: "395… Exactly",
    quote: "‘395… exactly.’ — SGM Plumley",
    tagline: "Truth is measured, not estimated.",
    why: "Operational systems depend on exact counts — who was there, when, and for how long.",
    how: [
      "Measure presence by telemetry, not memory",
      "Make each measure atomic",
      "Verify before aggregation",
      "Let precision propagate to finance"
    ],
    reflection: "Exact counts align decisions with reality.",
    related: ["language-provenance", "design-integrity-by-design"],
    audiences: ["Field", "Engineering", "Finance", "Leadership"]
  },
  {
    id: "flow-critical",
    family: "Flow",
    title: "Critical Flow",
    quote: "Flow starts at the edge.",
    tagline: "Movement defines truth.",
    why: "Work happens at the physical edge. Systems must follow the flow of the work itself or lose fidelity.",
    how: [
      "Begin capture at the edge",
      "Store-forward when offline",
      "Sync in smart intervals",
      "Let edge events drive system state"
    ],
    reflection: "When the edge flows, the org follows.",
    related: ["mechanism-edge-autonomy"],
    audiences: ["Field", "Engineering", "Leadership", "Partners"]
  },
  {
    id: "convivial-tools",
    family: "Conviviality",
    title: "Tools for Humans",
    quote: "Most learning is not the result of instruction… — Ivan Illich",
    tagline: "Systems should serve, not steer.",
    why: "Technology must reduce cognitive load and preserve autonomy. The badge observes; people work.",
    how: [
      "Passive capture over check-ins",
      "Minimize attention cost",
      "Follow worker rhythm",
      "Proof emerges from activity"
    ],
    reflection: "Convivial systems reveal truth without supervision.",
    related: ["outcome-empower-crew", "convivial-reduce-load"],
    audiences: ["Field", "Leadership"]
  },
  {
    id: "design-integrity-by-design",
    family: "Design",
    title: "Integrity by Design",
    quote: "Presence becomes proof.",
    tagline: "The system must prove itself.",
    why: "Integrity is architectural. Each step preserves verifiability so truth propagates automatically.",
    how: [
      "Sign + timestamp every event",
      "Log transformations as transactions",
      "Detect any alteration",
      "Reproduce input from output"
    ],
    reflection: "Design that guarantees truth reduces oversight to confirmation.",
    related: ["language-provenance", "truth-395"],
    audiences: ["Engineering", "Finance", "Leadership", "Partners"]
  },
  {
    id: "automation-necessary-not-sufficient",
    family: "Automation",
    title: "Necessary but Not Sufficient",
    quote: "Technology is necessary, but rarely enough. — Eli Goldratt",
    tagline: "Tools matter only when aligned to constraint.",
    why: "Technology enables improvement but does not guarantee it. Progress occurs when it strengthens the limiting point.",
    how: [
      "Find the constraint first",
      "Relieve it with automation",
      "Measure overall flow, not local speed",
      "Retire tools that add load"
    ],
    reflection: "Necessity is not sufficiency; alignment is.",
    related: ["automation-automate-constraint"],
    audiences: ["Leadership", "Engineering"]
  },
  {
    id: "convivial-reduce-load",
    family: "Conviviality",
    title: "Reduce the Load",
    quote: "The team is the means of delivery, not the toolchain. — Team Topologies",
    tagline: "Technology should lighten thinking, not multiply it.",
    why: "People deliver value. Tools must minimize cognitive and admin burden so attention stays on work.",
    how: [
      "Audit cognitive load",
      "Automate repetitive admin",
      "Hide infra complexity",
      "Measure coordination overhead"
    ],
    reflection: "When tech gets lighter, teams get faster.",
    related: ["convivial-tools", "outcome-empower-crew"],
    audiences: ["Field", "Leadership"]
  },
  {
    id: "mechanism-edge-autonomy",
    family: "Mechanism",
    title: "Edge Autonomy",
    quote: "Work continues, even without connection.",
    tagline: "Capture locally, transmit intelligently.",
    why: "Connectivity is intermittent; work is continuous. Autonomy ensures truth is recorded where it happens.",
    how: [
      "Local store of events",
      "Integrity checks before upload",
      "Smart batches on available signal",
      "No event loss; no blocked work"
    ],
    reflection: "Reliability comes from autonomy, not constant connection.",
    related: ["flow-critical", "design-integrity-by-design"],
    audiences: ["Engineering", "Field", "Partners"]
  },
  {
    id: "outcome-empower-crew",
    family: "Outcome",
    title: "Empower the Crew",
    quote: "Less admin, more work.",
    tagline: "Automation returns time to production.",
    why: "Administrative overhead is waste. Removing repetitive confirmation increases output and morale.",
    how: [
      "Eliminate manual time capture",
      "Shift verification to telemetry",
      "Reduce reconciliation cycles",
      "Free time for craft work"
    ],
    reflection: "Efficiency happens when workers only do value work.",
    related: ["convivial-tools", "metric-cognitive-load"],
    audiences: ["Field", "Leadership", "Finance"]
  },
  {
    id: "metric-cognitive-load",
    family: "Metric",
    title: "Cognitive Load ≤ 2 min/day",
    quote: "Automation success is measured in attention saved.",
    tagline: "Less thought on system, more on work.",
    why: "Excess interaction cancels efficiency gains.",
    how: [
      "Log user interaction time",
      "Average per user per day",
      "Remove repetitive steps",
      "Keep ≤ 2 min/day as design guardrail"
    ],
    reflection: "Worth proven by how little it demands.",
    related: ["outcome-empower-crew", "convivial-reduce-load"],
    audiences: ["Field", "Leadership"]
  }
];

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
  Vision: { color: "bg-white", accent: "text-neutral-700", border: "border" }
};

const AUDIENCE_PRESETS = {
  Field: [
    "language-provenance",
    "automation-automate-constraint",
    "truth-395",
    "flow-critical",
    "convivial-tools",
    "design-integrity-by-design",
    "convivial-reduce-load",
    "outcome-empower-crew",
    "metric-cognitive-load"
  ],
  Engineering: [
    "language-provenance",
    "automation-automate-constraint",
    "automation-necessary-not-sufficient",
    "flow-critical",
    "design-integrity-by-design",
    "mechanism-edge-autonomy"
  ],
  Finance: [
    "language-provenance",
    "truth-395",
    "design-integrity-by-design",
    "outcome-empower-crew"
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

const CARD_MAP = CARDS.reduce((acc, card) => {
  acc[card.id] = card;
  return acc;
}, {});

function Chip({ children, onClick, active }) {
  const classes = `px-3 py-1 rounded-full text-xs font-medium border ${
    active ? "bg-black text-white border-black" : "bg-white/80 text-black border-black/20"
  }`;
  return html`<button onClick=${onClick} className=${classes}>${children}</button>`;
}

function Header({ query, setQuery, audience, setAudience, onClearStack }) {
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

function Card({ card, onAdd }) {
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

function Stack({ ids, onRemove }) {
  return html`
    <div className="p-3 border-t border-black/10 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <${Layers3} size=${16} /> Stack (${ids.length})
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        ${ids.map((id) => {
          const card = CARD_MAP[id];
          if (!card) return null;
          const meta = FAMILY_META[card.family] || {};
          const cardClass = `rounded-xl border ${meta.border || "border-black/10"} p-2`;
          return html`
            <div key=${id} className=${cardClass}>
              <div className="text-[10px] uppercase tracking-wider text-black/60">${card.family}</div>
              <div className="text-[13px] font-semibold leading-snug">${card.title}</div>
              <button onClick=${() => onRemove(id)} className="mt-2 text-[11px] text-red-600">Remove</button>
            </div>
          `;
        })}
      </div>
    </div>
  `;
}

function ActualDeckApp() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState("Field");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [stack, setStack] = useState([]);

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    const preset = new Set(AUDIENCE_PRESETS[audience] || []);
    return CARDS.filter((card) => {
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
  }, [query, familyFilter, audience]);

  const families = useMemo(() => Array.from(new Set(CARDS.map((card) => card.family))), []);

  function addToStack(id) {
    setStack((current) => (current.includes(id) ? current : [...current, id]));
  }

  function removeFromStack(id) {
    setStack((current) => current.filter((entry) => entry !== id));
  }

  function clearStack() {
    setStack([]);
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
        ${visibleCards.length
          ? visibleCards.map((card) => html`<${Card} key=${card.id} card=${card} onAdd=${addToStack} />`)
          : html`<div className="text-sm text-black/60 p-6">No cards match the current filters.</div>`}
      </div>
      <div className="fixed bottom-0 inset-x-0">
        <${Stack} ids=${stack} onRemove=${removeFromStack} />
      </div>
      <div className="sr-only">
        To extend, append additional cards to CARDS with ids matching your 76-card set. Tie audience presets in AUDIENCE_PRESETS.
      </div>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(
  html`<${React.StrictMode}><${ActualDeckApp} /><//>`
);
