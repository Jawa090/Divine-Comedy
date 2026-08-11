import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cantos, characters, circles, terraces, spheres } from "@/data/dante";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "Search across characters, cantos, circles, terraces and heavens of Dante's Divine Comedy — Francesca, Circle 9, Virgil, Canto 26.",
      },
      { property: "og:title", content: "Search — Dante's Divine Comedy" },
      { property: "og:description", content: "One search across the whole poem." },
    ],
  }),
  component: Search,
});

type Hit = { kind: string; title: string; sub: string; href: string };

function Search() {
  const [q, setQ] = useState("");

  const hits = useMemo<Hit[]>(() => {
    const n = q.trim().toLowerCase();
    if (!n) return [];
    const out: Hit[] = [];
    for (const c of characters) {
      if (`${c.name} ${c.epithet} ${c.role} ${c.symbolism}`.toLowerCase().includes(n))
        out.push({ kind: "Character", title: c.name, sub: c.epithet, href: `/characters#${c.id}` });
    }
    for (const c of circles) {
      if (`${c.name} ${c.sin} ${c.tagline} circle ${c.n} ${c.roman}`.toLowerCase().includes(n))
        out.push({
          kind: "Circle",
          title: `Circle ${c.roman} — ${c.name}`,
          sub: c.tagline,
          href: `/inferno/${c.slug}`,
        });
    }
    for (const t of terraces) {
      if (`terrace ${t.name} ${t.lesson}`.toLowerCase().includes(n))
        out.push({ kind: "Terrace", title: `Terrace ${t.roman} — ${t.name}`, sub: t.lesson, href: "/purgatorio" });
    }
    for (const s of spheres) {
      if (`${s.name} ${s.virtue} ${s.souls}`.toLowerCase().includes(n))
        out.push({ kind: "Heaven", title: s.name, sub: `${s.virtue} · ${s.souls}`, href: "/paradiso" });
    }
    for (const c of cantos) {
      if (
        `${c.title} ${c.summary} ${c.location} ${c.realm} canto ${c.n} ${c.roman}`.toLowerCase().includes(n)
      )
        out.push({
          kind: `${c.realm} · Canto ${c.roman}`,
          title: c.title,
          sub: c.summary,
          href: "/cantos",
        });
    }
    return out.slice(0, 40);
  }, [q]);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-6 pt-36 pb-32">
        <h1 className="display text-5xl text-parchment sm:text-6xl">SEARCH</h1>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Francesca · Circle 9 · Virgil · Treachery · Canto 26"
          className="mt-10 w-full border-b border-border bg-transparent py-4 text-2xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
        />

        <ul className="mt-12">
          {hits.map((h, i) => (
            <li key={i} className="border-b border-border/50">
              <a
                href={h.href}
                className="block py-5 transition-colors hover:text-primary"
              >
                <span className="caps block text-primary/70">{h.kind}</span>
                <span className="display mt-1 block text-2xl text-parchment">{h.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{h.sub}</span>
              </a>
            </li>
          ))}
        </ul>

        {q && !hits.length && (
          <p className="mt-16 text-muted-foreground">Nothing found. Try a name, a sin, or a canto number.</p>
        )}
      </section>
    </main>
  );
}
