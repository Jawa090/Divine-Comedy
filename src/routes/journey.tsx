import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { journeyStops } from "@/data/dante";
import { Fog, Particles, Reveal, Label } from "@/components/atmosphere";
import { Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Journey Map — Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "An interactive map of Dante's route: the dark wood, the nine circles of Hell, the centre of the earth, the mountain of Purgatory, the heavens and the Empyrean.",
      },
      { property: "og:title", content: "The Journey Map — Dante's Divine Comedy" },
      { property: "og:description", content: "Zoom into every stage of Dante's descent and ascent." },
    ],
  }),
  component: Journey,
});

const MIN = 0.7;
const MAX = 3;

function Journey() {
  const wrap = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<string | null>(null);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const state = useRef({ zoom, offset });
  state.current = { zoom, offset };

  const zoomAt = (px: number, py: number, next: number) => {
    const { zoom: z, offset: o } = state.current;
    const clamped = Math.min(MAX, Math.max(MIN, next));
    const k = clamped / z;
    setOffset({ x: px - (px - o.x) * k, y: py - (py - o.y) * k });
    setZoom(clamped);
  };

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const rect = el.getBoundingClientRect();
      zoomAt(e.clientX - rect.left, e.clientY - rect.top, state.current.zoom * Math.exp(-dy * 0.0015));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const step = (dir: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    zoomAt(r.width / 2, r.height / 2, state.current.zoom * (dir > 0 ? 1.3 : 1 / 1.3));
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.09 0.008 60) 0%, oklch(0.13 0.02 30) 35%, oklch(0.22 0.014 250) 68%, oklch(0.93 0.02 85) 100%)",
        }}
      />
      <Fog opacity={0.3} />
      <Particles count={20} tone="oklch(0.85 0.06 80)" />

      <section className="relative z-10 px-6 pt-32 text-center sm:pt-36">
        <p className="caps text-primary/70">The whole poem, in one view</p>
        <h1 className="display mt-6 text-5xl text-parchment sm:text-7xl">THE JOURNEY</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/60">
          One week in the spring of 1300: down through the earth, out onto a mountain in the southern
          ocean, and up beyond the stars. Drag to move. Scroll to zoom.
        </p>
      </section>

      <div
        ref={wrap}
        className="relative z-10 mx-auto mt-10 h-[68vh] max-w-5xl cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          setOffset({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
      >
        <div
          className="origin-top-left transition-transform duration-100 ease-out"
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})` }}
        >
          <div className="mx-auto w-[min(90vw,640px)] py-10">
            {journeyStops.map((s, i) => {
              const active = hover === s.key;
              return (
                <div key={s.key} className="relative">
                  <Link
                    to={s.to}
                    onMouseEnter={() => setHover(s.key)}
                    onMouseLeave={() => setHover(null)}
                    className="group flex items-center gap-5"
                  >
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-full border transition-all duration-500"
                      style={{
                        borderColor: active ? "var(--gold)" : "oklch(0.7 0.05 80 / 0.35)",
                        background: active ? "oklch(0.8 0.11 82 / 0.16)" : "transparent",
                      }}
                    >
                      <span className="display text-sm text-parchment">{i + 1}</span>
                    </span>
                    <span className="min-w-0">
                      <span className="display block text-2xl text-parchment sm:text-3xl">{s.label}</span>
                      <span className="caps block text-muted-foreground/80">{s.cantos}</span>
                    </span>
                  </Link>

                  <div
                    className={`ml-5 overflow-hidden border-l pl-9 transition-all duration-500 ${
                      active ? "max-h-40 opacity-100" : "max-h-16 opacity-45"
                    }`}
                    style={{ borderColor: "oklch(0.7 0.05 80 / 0.25)" }}
                  >
                    <div className="py-5 text-xs leading-relaxed text-foreground/70">
                      {active ? (
                        <>
                          <p>
                            <span className="text-primary/80">Figures · </span>
                            {s.characters}
                          </p>
                          <p className="mt-2">
                            <span className="text-primary/80">Theme · </span>
                            {s.theme}
                          </p>
                          <p className="mt-3 italic text-muted-foreground">Click to enter →</p>
                        </>
                      ) : (
                        <span className="text-muted-foreground/60">{s.theme}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            aria-label="Zoom in"
            onClick={() => step(1)}
            className="grid size-9 place-items-center border border-border text-foreground/70 hover:border-primary hover:text-primary"
          >
            <Plus size={14} />
          </button>
          <button
            aria-label="Zoom out"
            onClick={() => step(-1)}
            className="grid size-9 place-items-center border border-border text-foreground/70 hover:border-primary hover:text-primary"
          >
            <Minus size={14} />
          </button>
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <Label>The three realms</Label>
        </Reveal>
        <div className="mt-10 grid gap-px sm:grid-cols-3">
          {[
            { to: "/inferno", t: "Inferno", s: "Nine circles", d: "Sin seen without excuse." },
            { to: "/purgatorio", t: "Purgatorio", s: "Seven terraces", d: "Love re-ordered by effort." },
            { to: "/paradiso", t: "Paradiso", s: "Ten heavens", d: "Understanding as ascent." },
          ].map((r, i) => (
            <Reveal key={r.to} delay={i * 120}>
              <Link
                to={r.to}
                className="block h-full border border-border/60 p-8 transition-colors duration-500 hover:border-primary/60"
              >
                <p className="caps text-primary/70">{r.s}</p>
                <h2 className="display mt-4 text-3xl text-parchment">{r.t}</h2>
                <p className="mt-3 text-sm text-foreground/60">{r.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
