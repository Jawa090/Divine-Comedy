import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import infernoHero from "@/assets/inferno_hero.png";
import { circles } from "@/data/dante";
import { Fog, Particles, Reveal, Label } from "@/components/atmosphere";

export const Route = createFileRoute("/inferno/")({
  head: () => ({
    meta: [
      { title: "Inferno — The Nine Circles | Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "Descend through the nine circles of Dante's Hell — Limbo to the frozen lake of traitors — each with its own atmosphere, punishment and meaning.",
      },
      { property: "og:title", content: "Inferno — The Nine Circles" },
      {
        property: "og:description",
        content: "Nine circles. Nine reflections of human nature. Enter Dante's Hell.",
      },
    ],
  }),
  component: Inferno,
});

function Inferno() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const onScroll = () => setDepth(Math.min(1, window.scrollY / 900));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="realm-inferno relative min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <img
          src={infernoHero}
          alt="Dante and Virgil at the gate of Hell — three beasts block the dark wood path in a Renaissance oil painting"
          width={1600}
          height={1067}
          className="absolute inset-0 h-full w-full object-cover slow-pan"
          style={{ transform: `scale(${1.05 + depth * 0.25}) translateY(${depth * -6}%)`, opacity: 0.82 }}
        />
        {/* deep vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, transparent 10%, oklch(0.07 0.01 30 / 0.92) 80%)",
          }}
        />
        <Fog opacity={0.3} />
        <Particles count={28} tone="oklch(0.72 0.17 40)" />

        {/* Hero text */}
        <div className="relative z-10 px-6 text-center" style={{ opacity: 1 - depth }}>
          <p className="caps text-primary/70">Cantos III — XXXIV</p>
          <h1 className="display mt-6 text-[19vw] leading-none tracking-[0.05em] text-parchment sm:text-[10rem]">
            INFERNO
          </h1>
          <p className="display mt-4 text-lg text-foreground/70 sm:text-2xl">
            Nine circles. Nine reflections of human nature.
          </p>
          {/* Emotion line */}
          <div className="rule-gold mx-auto my-8 w-24" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            Dante stands lost in a dark forest at midlife — the{" "}
            <em className="text-primary/80">selva oscura</em> — three beasts barring every escape.
            Then a shade appears: Virgil, sent by Beatrice from Heaven to guide him
            through the kingdom of eternal loss.{" "}
            <span className="italic">What follows is not horror. It is recognition.</span>
          </p>
          <p className="caps mt-16 animate-pulse text-muted-foreground">Scroll to descend</p>
        </div>
      </section>

      {/* ── Scene description ── */}
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                glyph: "⚔",
                label: "The Architecture",
                text: "Hell is a funnel — an inverted cone carved into the earth beneath Jerusalem. The sins are ordered not by shock but by how deeply they corrupt reason: incontinence at the top, violence in the middle, and fraud and betrayal — sins requiring intelligence — at the very bottom.",
              },
              {
                glyph: "⚖",
                label: "The Contrapasso",
                text: "Every punishment mirrors the sin in form. The lustful are swept by a storm they once let carry them. The fraudulent are sealed in flames of their own eloquence. The traitors freeze — because betrayal kills the warmth between people.",
              },
              {
                glyph: "✦",
                label: "The Emotion",
                text: "Dante faints from pity at Francesca's story. He weeps for the diviners. He is savage toward Argenti — and Virgil praises him for it. The poem is brave enough to show its own author feeling the wrong things, then learning. So must you.",
              },
            ].map((c) => (
              <div key={c.label} className="border border-border/50 p-8">
                <span className="display text-3xl text-primary/60">{c.glyph}</span>
                <Label className="mt-4">{c.label}</Label>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Cross-section: Nine Circles ── */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <Label>The cross-section of Hell</Label>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70">
            Each circle below links to its full scene — what Dante saw, the punishment, the meaning,
            and the figures he met there. The deeper you go, the colder the light.
          </p>
        </Reveal>

        <div className="mt-16 space-y-px">
          {circles.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                to="/inferno/$slug"
                params={{ slug: c.slug }}
                className="group relative block overflow-hidden border-b border-border/50"
                style={{ paddingLeft: `${i * 2.2}%` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, oklch(${0.32 - i * 0.02} ${0.12 - i * 0.008} ${40 - i * 3} / 0.75), transparent)`,
                  }}
                />
                <div className="relative flex items-baseline gap-5 py-6 sm:gap-8">
                  <span className="display w-14 shrink-0 text-2xl text-primary/70 sm:text-3xl">
                    {c.roman}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="display block text-3xl text-parchment transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                      {c.name}
                    </span>
                    <span className="mt-2 block text-xs text-muted-foreground sm:text-sm">
                      {c.sin} · {c.cantos}
                    </span>
                  </span>
                  <span className="hidden max-w-xs shrink-0 text-right text-xs italic text-foreground/55 sm:block">
                    {c.tagline}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Link
            to="/purgatorio"
            className="caps inline-block border border-border px-8 py-4 text-foreground/80 hover:border-primary hover:text-primary"
          >
            Climb out of Hell →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
