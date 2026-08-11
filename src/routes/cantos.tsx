import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cantos, type Realm } from "@/data/dante";
import { Label } from "@/components/atmosphere";

export const Route = createFileRoute("/cantos")({
  head: () => ({
    meta: [
      { title: "Canto Explorer — All 100 Cantos | Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "Search and filter every canto of the Inferno, Purgatorio and Paradiso — location, key figures and what happens, canto by canto.",
      },
      { property: "og:title", content: "Canto Explorer — All 100 Cantos" },
      { property: "og:description", content: "The whole poem, searchable, canto by canto." },
    ],
  }),
  component: Cantos,
});

const realms: { key: Realm | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "inferno", label: "Inferno" },
  { key: "purgatorio", label: "Purgatorio" },
  { key: "paradiso", label: "Paradiso" },
];

function Cantos() {
  const [q, setQ] = useState("");
  const [realm, setRealm] = useState<Realm | "all">("all");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return cantos.filter((c) => {
      if (realm !== "all" && c.realm !== realm) return false;
      if (!needle) return true;
      return (
        c.title.toLowerCase().includes(needle) ||
        c.summary.toLowerCase().includes(needle) ||
        c.location.toLowerCase().includes(needle) ||
        c.roman.toLowerCase() === needle ||
        String(c.n) === needle ||
        c.realm.includes(needle)
      );
    });
  }, [q, realm]);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="caps text-primary/70">One hundred cantos</p>
        <h1 className="display mt-6 text-6xl text-parchment sm:text-7xl">CANTO EXPLORER</h1>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a canto, a figure, a place — 'Francesca', 'ice', 'XXVI'…"
            className="w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none sm:max-w-md"
          />
          <div className="flex gap-2">
            {realms.map((r) => (
              <button
                key={r.key}
                onClick={() => setRealm(r.key)}
                className={`caps border px-4 py-2 transition-colors ${
                  realm === r.key
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{results.length} cantos</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        {(["inferno", "purgatorio", "paradiso"] as Realm[]).map((r) => {
          const group = results.filter((c) => c.realm === r);
          if (!group.length) return null;
          return (
            <div key={r} className="mb-16">
              <Label>{r}</Label>
              <ul className="mt-6">
                {group.map((c) => {
                  const key = `${c.realm}-${c.n}`;
                  const open = openKey === key;
                  return (
                    <li key={key} className="border-b border-border/50">
                      <button
                        onClick={() => setOpenKey(open ? null : key)}
                        className="flex w-full items-baseline gap-5 py-5 text-left"
                      >
                        <span className="display w-16 shrink-0 text-lg text-primary/70">{c.roman}</span>
                        <span className="flex-1">
                          <span className="display block text-2xl text-parchment">{c.title}</span>
                          <span className="caps mt-1 block text-muted-foreground">{c.location}</span>
                        </span>
                        <span className="text-xs text-muted-foreground">{open ? "−" : "+"}</span>
                      </button>
                      {open && (
                        <p className="max-w-2xl pb-8 pl-[5.25rem] text-base leading-relaxed text-foreground/75">
                          {c.summary}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {!results.length && (
          <p className="py-20 text-center text-muted-foreground">
            Nothing here. Even Hell is better organised than that.
          </p>
        )}
      </section>
    </main>
  );
}
