import React, { useMemo, useState } from "react";
import { Search, Layers3, Users2, Plus, Trash2, Rotate3D, FlipHorizontal2 } from "lucide-react";

// ------------------------------------------------------------
// ACTUAL DECK — INTERACTIVE HTML APP (single-file React)
// - Mobile-first UI with fast filtering and audience presets
// - Card flip on tap to view back content
// - Stack Builder to compose scenarios/combinations and share
// - TailwindCSS assumed available in host environment
// - No external data fetch; inline dataset with room to extend to all 76 cards
// ------------------------------------------------------------

// --------------------------------------
// DATA MODEL
// --------------------------------------
// Card structure
// id: unique slug
// family: one of [Language, Automation, Truth, Flow, Conviviality, Design, Mechanism, Outcome, Metric, Vision]
// title: short name of the card (front)
// quote: optional line at top of card front
// tagline: short explainer
// why: one-paragraph reason to use
// how: 4–6 bullet points
// reflection: single-line conclusion
// related: array of ids
// audiences: which presets this card is relevant to
// --------------------------------------

const CARDS = [
  // --- Core 6 for field conversation ---
  {
    id: "language-provenance",
    family: "Language",
    title: "Provenance",
    quote: "Truth requires protection. update",
    tagline: "Trust comes from traceability.",
    why: "Truth in data exists only when its origin can be proven. Provenance makes security measurable — verifiable origin, verified truth.",
    how: [
      "Tag source with identity, location, timestamp",
      "Sign and encrypt each transmission",
      "Preserve lineage from badge to cloud",
      "Audit values and chain of custody",
    ],
    reflection: "When origin is provable, truth stands on its own.",
    related: ["design-integrity-by-design", "truth-395"],
    audiences: ["Field", "Engineering", "Finance", "Leadership", "Partners"],
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
      "Align downstream systems automatically",
    ],
    reflection: "Focused automation strengthens the whole.",
    related: ["truth-395", "flow-critical"],
    audiences: ["Field", "Engineering", "Leadership", "Partners"],
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
      "Let precision propagate to finance",
    ],
    reflection: "Exact counts align decisions with reality.",
    related: ["language-provenance", "design-integrity-by-design"],
    audiences: ["Field", "Engineering", "Finance", "Leadership"],
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
      "Let edge events drive system state",
    ],
    reflection: "When the edge flows, the org follows.",
    related: ["mechanism-edge-autonomy"],
    audiences: ["Field", "Engineering", "Leadership", "Partners"],
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
      "Proof emerges from activity",
    ],
    reflection: "Convivial systems reveal truth without supervision.",
    related: ["outcome-empower-crew", "convivial-reduce-load"],
    audiences: ["Field", "Leadership"],
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
      "Reproduce input from output",
    ],
    reflection: "Design that guarantees truth reduces oversight to confirmation.",
    related: ["language-provenance", "truth-395"],
    audiences: ["Engineering", "Finance", "Leadership", "Partners"],
  },

  // --- Two anchor quotes the user asked to include ---
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
      "Retire tools that add load",
    ],
    reflection: "Necessity is not sufficiency; alignment is.",
    related: ["automation-automate-constraint"],
    audiences: ["Leadership", "Engineering"],
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
      "Measure coordination overhead",
    ],
    reflection: "When tech gets lighter, teams get faster.",
    related: ["convivial-tools", "outcome-empower-crew"],
    audiences: ["Field", "Leadership"],
  },

  // --- A few additional exemplars for other families ---
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
      "No event loss; no blocked work",
    ],
    reflection: "Reliability comes from autonomy, not constant connection.",
    related: ["flow-critical", "design-integrity-by-design"],
    audiences: ["Engineering", "Field", "Partners"],
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
      "Free time for craft work",
    ],
    reflection: "Efficiency happens when workers only do value work.",
    related: ["convivial-tools", "metric-cognitive-load"],
    audiences: ["Field", "Leadership", "Finance"],
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
      "Keep ≤ 2 min/day as design guardrail",
    ],
    reflection: "Worth proven by how little it demands.",
    related: ["outcome-empower-crew", "convivial-reduce-load"],
    audiences: ["Field", "Leadership"],
  },
];

// Family ordering and colors
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
  Vision: { color: "bg-white", accent: "text-neutral-700", border: "border" },
};

// Audience presets
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
    "metric-cognitive-load",
  ],
  Engineering: [
    "language-provenance",
    "automation-automate-constraint",
    "automation-necessary-not-sufficient",
    "flow-critical",
    "design-integrity-by-design",
    "mechanism-edge-autonomy",
  ],
  Finance: [
    "language-provenance",
    "truth-395",
    "design-integrity-by-design",
    "outcome-empower-crew",
  ],
  Leadership: [
    "automation-necessary-not-sufficient",
    "convivial-reduce-load",
    "convivial-tools",
    "truth-395",
  ],
  Partners: [
    "mechanism-edge-autonomy",
    "design-integrity-by-design",
    "automation-automate-constraint",
  ],
};

// Utility: build a map for quick lookup
const CARD_MAP = CARDS.reduce((acc, c) => ((acc[c.id] = c), acc), {} as Record<string, any>);

// --------------------------------------
// UI COMPONENTS
// --------------------------------------
function Chip({ children, onClick, active }: { children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border ${
        active ? "bg-black text-white border-black" : "bg-white/80 text-black border-black/20"
      }`}
    >
      {children}
    </button>
  );
}

function Header({ query, setQuery, audience, setAudience, onClearStack }: any) {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="px-3 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1 bg-black/5 rounded-xl px-3 py-2">
          <Search size={18} />
          <input
            className="bg-transparent outline-none w-full text-sm"
            placeholder="Search cards, tags, quotes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none text-sm bg-black text-white px-3 py-2 rounded-xl"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          >
            {Object.keys(AUDIENCE_PRESETS).map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={onClearStack}
          className="ml-1 inline-flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-2 rounded-xl"
        >
          <Trash2 size={14} /> Clear
        </button>
      </div>
    </div>
  );
}

function FamilyFilters({ families, active, setActive }: any) {
  return (
    <div className="px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar">
      {families.map((f: string) => (
        <Chip key={f} onClick={() => setActive(active === f ? "All" : f)} active={active === f}>
          {f}
        </Chip>
      ))}
      <Chip onClick={() => setActive("All")} active={active === "All"}>
        All
      </Chip>
    </div>
  );
}

function Card({ card, onAdd }: any) {
  const [flipped, setFlipped] = useState(false);
  const meta = FAMILY_META[card.family as keyof typeof FAMILY_META] || {};
  return (
    <div className="group [perspective:1000px]">
      <div
        className="relative h-56 w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-500"
        onClick={() => setFlipped((s) => !s)}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl p-3 border ${meta.border || "border-black/10"} ${
            meta.color
          } text-white [backface-visibility:hidden] flex flex-col`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[10px] uppercase tracking-wider ${meta.accent}`}>{card.family}</span>
            <FlipHorizontal2 size={16} className="opacity-70" />
          </div>
          {card.quote && <div className="text-[11px] opacity-90 leading-snug mb-1">{card.quote}</div>}
          <div className="text-lg font-semibold leading-tight">{card.title}</div>
          <div className={`text-[12px] mt-1 ${meta.accent}`}>{card.tagline}</div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd(card.id);
              }}
              className="text-xs bg-white text-black px-3 py-1 rounded-lg inline-flex items-center gap-1"
            >
              <Plus size={14} /> Add to Stack
            </button>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-3 bg-white text-black border border-black/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-wider text-black/60">Back</span>
            <Rotate3D size={16} className="text-black/60" />
          </div>
          {card.why && <div className="text-[12px] leading-snug mb-2">{card.why}</div>}
          <ul className="text-[12px] list-disc pl-5 space-y-1">
            {card.how?.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          {card.reflection && (
            <div className="mt-2 text-[12px] italic text-black/70">{card.reflection}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Stack({ ids, onRemove }: { ids: string[]; onRemove: (id: string) => void }) {
  return (
    <div className="p-3 border-t border-black/10 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Layers3 size={16} /> Stack ({ids.length})
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {ids.map((id) => {
          const c = CARD_MAP[id];
          if (!c) return null;
          const meta = FAMILY_META[c.family as keyof typeof FAMILY_META] || {};
          return (
            <div key={id} className={`rounded-xl border ${meta.border || "border-black/10"} p-2`}>
              <div className="text-[10px] uppercase tracking-wider text-black/60">{c.family}</div>
              <div className="text-[13px] font-semibold leading-snug">{c.title}</div>
              <button onClick={() => onRemove(id)} className="mt-2 text-[11px] text-red-600">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ActualDeckApp() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState<keyof typeof AUDIENCE_PRESETS>("Field");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [stack, setStack] = useState<string[]>([]);

  // Derived card list
  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    const preset = new Set(AUDIENCE_PRESETS[audience] || []);
    return CARDS.filter((c) => {
      const matchQ = !q || [c.title, c.quote, c.tagline, c.why, ...(c.how || [])]
        .join("\n")
        .toLowerCase()
        .includes(q);
      const matchFamily = familyFilter === "All" || c.family === familyFilter;
      const matchAudience = preset.size === 0 || preset.has(c.id) || (c.audiences || []).includes(audience);
      return matchQ && matchFamily && matchAudience;
    });
  }, [query, familyFilter, audience]);

  const families = useMemo(() => {
    const all = Array.from(new Set(CARDS.map((c) => c.family)));
    return all;
  }, []);

  function addToStack(id: string) {
    setStack((cur) => (cur.includes(id) ? cur : [...cur, id]));
  }
  function removeFromStack(id: string) {
    setStack((cur) => cur.filter((x) => x !== id));
  }
  function clearStack() {
    setStack([]);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header query={query} setQuery={setQuery} audience={audience} setAudience={setAudience} onClearStack={clearStack} />

      {/* Filters */}
      <div className="px-3 pt-2 flex items-center gap-2 text-xs text-black/70">
        <Users2 size={14} /> Audience preset is <span className="font-semibold">{audience}</span>
      </div>
      <FamilyFilters families={families} active={familyFilter} setActive={setFamilyFilter} />

      {/* Card Grid */}
      <div className="px-3 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {visibleCards.map((c) => (
          <Card key={c.id} card={c} onAdd={addToStack} />
        ))}
        {visibleCards.length === 0 && (
          <div className="text-sm text-black/60 p-6">No cards match the current filters.</div>
        )}
      </div>

      {/* Stack Drawer */}
      <div className="fixed bottom-0 inset-x-0">
        <Stack ids={stack} onRemove={removeFromStack} />
      </div>

      {/* Developer Note: How to extend dataset */}
      <div className="sr-only">
        To extend, append additional cards to CARDS with ids matching your 76-card set. Tie audience presets in AUDIENCE_PRESETS.
      </div>
    </div>
  );
}
