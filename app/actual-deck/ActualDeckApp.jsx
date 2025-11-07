import { useEffect, useState } from "react";

const JSON_BASE = "/data/actual-deck";

export default function ActualDeckApp() {
  const [cards, setCards] = useState([]);
  const [presets, setPresets] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`${JSON_BASE}/cards.json?cb=${__BUILD_HASH__}`).then(r => r.json()),
      fetch(`${JSON_BASE}/presets.json?cb=${__BUILD_HASH__}`).then(r => r.json()),
    ])
    .then(([c, p]) => { setCards(c); setPresets(p); })
    .catch(e => setErr(e.message));
  }, []);

  if (err) return <div className="p-4 text-red-700">Data load error: {err}</div>;
  if (!cards.length) return <div className="p-4">Loading…</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* render cards/presets here */}
      <pre className="text-xs opacity-60">cards: {cards.length} | presets: {presets.length}</pre>
    </div>
  );
}
