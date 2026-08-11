import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import mountain from "@/assets/purgatorio_hero.png";
import { terraces } from "@/data/dante";
import { Fog, Reveal, Label, MessageCard } from "@/components/atmosphere";

export const Route = createFileRoute("/purgatorio")({
  head: () => ({
    meta: [
      { title: "Purgatorio — The Mountain of Transformation | Dante" },
      {
        name: "description",
        content:
          "Climb the seven terraces of Dante's Purgatory — pride, envy, wrath, sloth, avarice, gluttony, lust — where love is re-ordered rather than punished.",
      },
      { property: "og:title", content: "Purgatorio — The Mountain of Transformation" },
      { property: "og:description", content: "Seven terraces. The only realm where anyone is still changing." },
    ],
  }),
  component: Purgatorio,
});

function Purgatorio() {
  const [open, setOpen] = useState(1);
  const active = terraces.find((t) => t.n === open) ?? terraces[0]!;
  const light = 0.06 + (open / terraces.length) * 0.22;

  return (
    <main
      className="realm-purgatorio relative min-h-screen"
      style={{
        background: `linear-gradient(180deg, oklch(${0.18 + light} 0.014 250), oklch(${0.3 + light} 0.02 245))`,
      }}
    >
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <img
          src={mountain}
          alt="A vast mountain rising through layered mist at dawn, terraced like circular ledges"
          width={1920}
          height={1088}
          loading="lazy"
          className="slow-pan absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, oklch(0.2 0.014 250 / 0.75), transparent 45%, oklch(0.24 0.014 250 / 0.9))" }}
        />
        <Fog opacity={0.45} />
        <div className="relative z-10 px-6 text-center">
          <p className="caps text-primary">Cantos I — XXXIII</p>
          <h1 className="display mt-6 text-[16vw] leading-none tracking-[0.04em] text-[oklch(0.97_0.01_90)] sm:text-[8.5rem]">
            PURGATORIO
          </h1>
          <p className="display mt-4 text-lg text-[oklch(0.92_0.01_90)]/80 sm:text-2xl">
            The mountain of transformation.
          </p>
          <div className="rule-gold mx-auto my-8 w-24" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[oklch(0.92_0.01_90)]/60">
            A conical island in the southern ocean, terraced into seven ledges of purification.
            Unlike Hell, <em className="text-[oklch(0.82_0.09_85)]">time still matters here</em> —
            every soul is climbing, every wound is healing. The only realm where anyone is still
            changing, and where even the suffering feels like grace.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Label>The seven terraces</Label>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* the mountain */}
          <div className="flex flex-col-reverse gap-2">
            {terraces.map((t) => {
              const on = t.n === open;
              const width = 42 + (terraces.length - t.n) * 8;
              return (
                <button
                  key={t.n}
                  onClick={() => setOpen(t.n)}
                  className="mx-auto flex items-center justify-center border transition-all duration-500"
                  style={{
                    width: `${width}%`,
                    paddingBlock: on ? "1.3rem" : "0.9rem",
                    borderColor: on ? "var(--primary)" : "oklch(0.7 0.02 250 / 0.35)",
                    background: on
                      ? "oklch(0.82 0.09 85 / 0.16)"
                      : `oklch(${0.3 + t.n * 0.03} 0.014 250 / 0.5)`,
                  }}
                >
                  <span className="display text-lg text-[oklch(0.96_0.01_90)]">
                    <span className="text-primary">{t.roman}</span> · {t.name}
                  </span>
                </button>
              );
            })}
            <p className="caps mx-auto pb-4 text-muted-foreground">Ante-Purgatory · the shore</p>
          </div>

          {/* terrace detail */}
          <div className="border border-border/60 p-8 sm:p-10">
            <p className="caps text-primary">
              Terrace {active.roman} · Cantos {active.cantos}
            </p>
            <h2 className="display mt-4 text-5xl text-[oklch(0.97_0.01_90)]">{active.name}</h2>
            <div className="rule-gold my-8" />
            <p className="caps text-muted-foreground">The penance</p>
            <p className="mt-3 text-base leading-relaxed text-[oklch(0.94_0.01_90)]/80">{active.penance}</p>
            <p className="caps mt-8 text-muted-foreground">What they sing</p>
            <p className="mt-3 text-base italic leading-relaxed text-[oklch(0.94_0.01_90)]/75">
              {active.prayer}
            </p>
            <p className="caps mt-8 text-muted-foreground">The disorder of love</p>
            <p className="mt-3 text-base leading-relaxed text-[oklch(0.94_0.01_90)]/80">{active.lesson}</p>
          </div>
        </div>

        <MessageCard
          message="Purgatory is Dante's most humane invention. Every soul here committed the same sins as the damned — the difference is not the deed but whether they finally told the truth about it. The mountain hurts, and everyone on it is glad to be there."
          question="What would you be willing to carry uphill in order to be free of it?"
        />

        <Reveal className="text-center">
          <Link
            to="/paradiso"
            className="caps inline-block border border-border px-8 py-4 text-[oklch(0.95_0.01_90)]/85 hover:border-primary hover:text-primary"
          >
            Rise into Paradiso →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
