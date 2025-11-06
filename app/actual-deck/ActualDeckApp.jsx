import React, { useEffect, useMemo, useState } from "react";

function Card({ c, onAdd }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#172133] text-white p-6 shadow-sm max-w-3xl">
      <div className="text-xs tracking-wide opacity-70 mb-2">{c.family?.toUpperCase() || "CARD"}</div>
      <div className="text-2xl font-semibold mb-2">{c.title}</div>
      {c.tagline && <p className="text-white/90 mb-6">{c.tagline}</p>}
      <button className="text-xs bg-black text-white px-3 py-1 rounded-lg hover:bg-neutral-800" onClick={() => onAdd?.(c)}>+ Add</button>
    </div>
  );
}

export default function ActualDeckApp() {
  const [cards, setCards] = useState([]);
  const [presets, setPresets] = useState({});
  const [audience, setAudience] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [c, p] = await Promise.all([
          fetch("/actual-deck/cards.json"),
          fetch("/actual-deck/presets.json")
        ]);
        if (c.ok) setCards(await c.json());
        if (p.ok) setPresets(await p.json());
      } catch (_) {
        // fallback: nothing
      }
    }
    load();
  }, []);

  const presetIds = useMemo(() => new Set(presets?.[audience] || []), [presets, audience]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cards.filter((c) => {
      const hasPreset = presetIds.size > 0;
      const openAudience = !c.audiences || c.audiences.length === 0;
      const inAud = !hasPreset ? true : presetIds.has(c.id) || openAudience || (c.audiences || []).includes(audience);
      const inQuery =
        !q ||
        c.title?.toLowerCase().includes(q) ||
        c.tagline?.toLowerCase().includes(q) ||
        c.family?.toLowerCase().includes(q);
      return inAud && inQuery;
    });
  }, [cards, presetIds, audience, query]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 px-6 py-4">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <input
              className="w-full rounded-xl px-4 py-3 bg-neutral-100 outline-none"
              placeholder="Search cards"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-black text-white" onClick={() => { setAudience("All"); setQuery(""); }}>
            Clear
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm">Audience preset:</div>
          <select
            className="rounded-lg border px-3 py-2 bg-white"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          >
            {Object.keys(presets).length === 0 ? ["All","Field","Engineering","Finance","Leadership","Partners"] : Object.keys(presets)}
              .map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>

        <div className="grid gap-6">
          {filtered.map((c) => (
            <Card key={c.id} c={c} onAdd={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}
