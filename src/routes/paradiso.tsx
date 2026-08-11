import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import paradisoBg from "@/assets/paradiso_hero.png";
import { spheres } from "@/data/dante";
import { Reveal, Label, Particles } from "@/components/atmosphere";

export const Route = createFileRoute("/paradiso")({
  head: () => ({
    meta: [
      { title: "Paradiso — The Ten Heavens | Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "Ascend through Dante's celestial spheres — Moon to Empyrean — where light replaces landscape and understanding replaces narrative.",
      },
      { property: "og:title", content: "Paradiso — The Ten Heavens" },
      { property: "og:description", content: "The ascent toward divine understanding." },
    ],
  }),
  component: Paradiso,
});

function Paradiso() {
  const [open, setOpen] = useState(1);
  const active = spheres.find((s) => s.n === open) ?? spheres[0]!;

  return (
    <main className="realm-paradiso relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.99 0.03 90 / 0.15) 0%, oklch(0.9 0.02 85 / 0.25) 60%, oklch(0.82 0.03 80 / 0.35) 100%)",
        }}
      />

      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* real painted background */}
        <img
          src={paradisoBg}
          alt="The Celestial Rose of the Empyrean — thousands of blessed souls seated in petals of golden light"
          className="absolute inset-0 h-full w-full object-cover slow-pan"
          style={{ opacity: 0.75 }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, oklch(0.99 0.03 90 / 0.05), oklch(0.9 0.02 85 / 0.55) 60%, oklch(0.75 0.03 80 / 0.85) 100%)",
          }}
        />
        {/* shimmer rings over the image */}
        <div aria-hidden className="absolute inset-0 grid place-items-center">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: `${22 + i * 14}vmin`,
                height: `${22 + i * 14}vmin`,
                borderColor: `oklch(0.68 0.12 78 / ${0.22 - i * 0.03})`,
                animation: `shimmer-rings ${120 + i * 60}s linear ${i % 2 ? "reverse" : "normal"} infinite`,
              }}
            />
          ))}
        </div>
        <Particles count={22} tone="oklch(0.7 0.12 80)" />
        <p className="caps relative text-primary">Cantos I — XXXIII</p>
        <h1 className="display relative mt-6 text-[16vw] leading-none tracking-[0.05em] text-foreground sm:text-[8.5rem]">
          PARADISO
        </h1>
        <p className="display relative mt-4 text-lg text-foreground/70 sm:text-2xl">
          The ascent toward divine understanding.
        </p>
        <div className="rule-gold mx-auto my-8 w-24" />
        <p className="relative mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
          Here, Dante runs out of words — and keeps writing anyway. Nothing is described by shape;
          everything is described by light. Each sphere is not a place but a{" "}
          <em className="text-primary">state of understanding</em>: the closer to God, the more
          clearly a soul sees, and the more freely it loves what it sees.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-28">
        <Reveal>
          <Label>The celestial spheres</Label>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="relative grid aspect-square place-items-center">
            {spheres.map((s) => {
              const on = s.n === open;
              const size = 14 + s.n * 8.4;
              return (
                <button
                  key={s.n}
                  onClick={() => setOpen(s.n)}
                  aria-label={s.name}
                  className="absolute rounded-full border transition-all duration-500"
                  style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    borderColor: on ? "var(--primary)" : "oklch(0.62 0.09 80 / 0.35)",
                    background: on ? "oklch(0.75 0.12 80 / 0.12)" : "transparent",
                    boxShadow: on ? "0 0 60px oklch(0.8 0.12 82 / 0.35)" : "none",
                  }}
                />
              );
            })}
            <span className="display pointer-events-none absolute text-center text-sm text-primary">
              {active.n}
            </span>
          </div>

          <div className="border border-border p-8 sm:p-10">
            <p className="caps text-primary">
              Sphere {active.n} · Cantos {active.cantos}
            </p>
            <h2 className="display mt-4 text-5xl text-foreground">{active.name}</h2>
            <div className="rule-gold my-8" />
            <p className="caps text-muted-foreground">Virtue</p>
            <p className="mt-2 text-lg text-foreground/85">{active.virtue}</p>
            <p className="caps mt-7 text-muted-foreground">Who is here</p>
            <p className="mt-2 text-lg text-foreground/85">{active.souls}</p>
            <p className="caps mt-7 text-muted-foreground">The moment</p>
            <p className="mt-2 text-base leading-relaxed text-foreground/75">{active.insight}</p>

            <div className="mt-10 flex flex-wrap gap-2">
              {spheres.map((s) => (
                <button
                  key={s.n}
                  onClick={() => setOpen(s.n)}
                  className={`border px-3 py-2 text-[0.65rem] tracking-[0.15em] uppercase transition-colors ${
                    s.n === open
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-24 text-center">
          <Link
            to="/empyrean"
            className="caps inline-block border border-primary/50 px-10 py-5 text-foreground hover:bg-primary/10"
          >
            Enter the Empyrean →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
