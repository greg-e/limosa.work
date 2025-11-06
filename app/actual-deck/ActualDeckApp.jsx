import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Users2, Layers3, Plus, Trash2,
  FlipHorizontal2, Rotate3D
} from "lucide-react";

const SAMPLE_CARDS = [
  {
    id: "language-provenance",
    family: "Language",
    title: "Provenance",
    quote: "Truth requires protection.",
    tagline: "Trust comes from traceability.",
    why: "Truth in data exists only when its origin can be proven.",
    how: ["Tag source with identity, time, place", "Encrypt and sign events"],
    reflection: "Origin provable = truth stands alone.",
    audiences: ["Field", "Engineering", "Finance", "Leadership", "Partners"]
  }
];
const SAMPLE_PRESETS = { Field: ["language-provenance"] };

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

function Chip({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border ${
        active ? "bg-black text-white border-black" :
        "bg-white/80 text-black border-black/20"}`
      }>
      {children}
    </button>
  );
}

function Header({ query, setQuery, audience, setAudience, onClearStack }) {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="px-3 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1 bg-black/5 rounded-xl px-3 py-2">
          <Search size={18} />
          <input
            className="bg-transparent outline-none w-full text-sm"
            placeholder="Search cards"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          className="appearance-none text-sm bg-black text-white px-3 py-2 rounded-xl"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        >
          {["Field", "Engineering", "Finance", "Leadership", "Partners"].map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <button
          onClick={onClearStack}
          className="ml-1 inline-flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-2 rounded-xl"
        >
          <Trash2 size={14}/> Clear
        </button>
      </div>
    </div>
  );
}

function Card({ card, onAdd }) {
  const [flip, setFlip] = useState(false);
  const meta = FAMILY_META[card.family] || {};
  return (
    <div className="group [perspective:1000px]">
      <div
        className="relative h-56 w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-500"
        onClick={() => setFlip(!flip)}
        style={{ transform: flip ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* front */}
        <div className={`absolute inset-0 rounded-2xl p-3 border ${meta.border || "border-black/10"} ${meta.color} text-white [backface-visibility:hidden] flex flex-col`}>
          <div className="flex justify-between mb-2">
            <span className={`text-[10px] uppercase tracking-wider ${meta.accent}`}>{card.family}</span>
            <FlipHorizontal2 size={16}/>
          </div>
          <div className="text-lg font-semibold">{card.title}</div>
          <div className={`text-[12px] mt-1 ${meta.accent}`}>{card.tagline}</div>
          <div className="mt-auto pt-2">
            <button
              onClick={(e)=>{e.stopPropagation(); onAdd(card.id);}}
              className="text-xs bg-white text-black px-3 py-1 rounded-lg inline-flex items-center gap-1"
            ><Plus size={14}/> Add</button>
          </div>
        </div>
        {/* back */}
        <div className="absolute inset-0 rounded-2xl p-3 bg-white text-black border border-black/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] uppercase tracking-wider text-black/60">Back</span>
            <Rotate3D size={16}/>
          </div>
          <div className="text-[12px] mb-2">{card.why}</div>
          <ul className="text-[12px] list-disc pl-4 space-y-1">
            {(card.how||[]).map((h,i)=><li key={i}>{h}</li>)}
          </ul>
          <div className="mt-2 text-[12px] italic text-black/70">{card.reflection}</div>
        </div>
      </div>
    </div>
  );
}

function Stack({ ids, cardMap, onRemove }) {
  return (
    <div className="p-3 border-t border-black/10 bg-white">
      <div className="flex items-center gap-2 text-sm font-medium mb-2">
        <Layers3 size={16}/> Stack ({ids.length})
      </div>
      <div className="grid grid-cols-2 gap-2">
        {ids.map(id=>{
          const c=cardMap[id]; if(!c) return null;
          const meta = FAMILY_META[c.family]||{};
          return (
            <div key={id} className={`rounded-xl border ${meta.border||"border-black/10"} p-2`}>
              <div className="text-[10px] uppercase text-black/60">{c.family}</div>
              <div className="text-[13px] font-semibold">{c.title}</div>
              <button onClick={()=>onRemove(id)} className="mt-1 text-[11px] text-red-600">Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ActualDeckApp() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState("Field");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [stack, setStack] = useState([]);
  const [cards, setCards] = useState(SAMPLE_CARDS);
  const [presets, setPresets] = useState(SAMPLE_PRESETS);

  React.useEffect(()=>{
    async function load(){
      try{
        const [c,p]=await Promise.all([
          fetch("/actual-deck/cards.json"),
fetch("/actual-deck/presets.json")

        ]);
        if(c.ok) setCards(await c.json());
        if(p.ok) setPresets(await p.json());
      }catch(e){ /* fallback to samples */ }
    }
    load();
  },[]);

  const cardMap = useMemo(()=>cards.reduce((a,c)=>{a[c.id]=c;return a;},{}),[cards]);
  const presetIds = new Set(presets[audience]||[]);
  const visible = cards.filter(c=>{
    const q=query.toLowerCase();
    const text=[c.title,c.quote,c.tagline,c.why,(c.how||[]).join(' ')].join(' ').toLowerCase();
    const inQ=!q||text.includes(q);
    const inFam=familyFilter==="All"||c.family===familyFilter;
    const inAud=presetIds.size===0||presetIds.has(c.id)||(c.audiences||[]).includes(audience);
    return inQ&&inFam&&inAud;
  });

  function addToStack(id){setStack(s=>s.includes(id)?s:[...s,id]);}
  function removeFromStack(id){setStack(s=>s.filter(x=>x!==id));}
  function clearStack(){setStack([]);}

  const families=[...new Set(cards.map(c=>c.family))];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header query={query} setQuery={setQuery} audience={audience} setAudience={setAudience} onClearStack={clearStack}/>
      <div className="px-3 pt-2 text-xs text-black/70 flex items-center gap-1">
        <Users2 size={14}/> Audience preset: <b>{audience}</b>
      </div>
      <div className="px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {families.map(f=>(
          <Chip key={f} onClick={()=>setFamilyFilter(familyFilter===f?'All':f)} active={familyFilter===f}>{f}</Chip>
        ))}
        <Chip onClick={()=>setFamilyFilter('All')} active={familyFilter==='All'}>All</Chip>
      </div>
      <div className="px-3 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {visible.map(c=><Card key={c.id} card={c} onAdd={addToStack}/>)}
      </div>
      <div className="fixed bottom-0 inset-x-0">
        <Stack ids={stack} cardMap={cardMap} onRemove={removeFromStack}/>
      </div>
      <div className="sr-only">Deck loads from /assets/actual-deck/*.json</div>
    </div>
  );
}

