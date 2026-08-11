import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import forest from "@/assets/forest.jpg";
import { Fog, Particles } from "@/components/atmosphere";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dante — The Divine Comedy: Enter the Dark Wood" },
      {
        name: "description",
        content:
          "A journey through Hell, Purgatory and Paradise. Begin in the dark wood and descend through Dante's nine circles in an interactive cinematic experience.",
      },
      { property: "og:title", content: "Dante — The Divine Comedy: An Interactive Journey" },
      {
        property: "og:description",
        content: "Nine circles. Seven terraces. Ten heavens. Enter Dante's afterlife.",
      },
    ],
  }),
  component: Landing,
});

const copy = {
  en: {
    sub: "A journey through Hell, Purgatory, and Paradise.",
    cta: "Begin the journey",
    opening: "Midway through the journey of our life\nI found myself in a dark wood,\nfor the straight way was lost.",
  },
  it: {
    sub: "Un viaggio attraverso l'Inferno, il Purgatorio e il Paradiso.",
    cta: "Inizia il viaggio",
    opening: "Nel mezzo del cammin di nostra vita\nmi ritrovai per una selva oscura,\nché la diritta via era smarrita.",
  },
};

function Landing() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"en" | "it">("en");
  const [phase, setPhase] = useState<"hero" | "dark" | "verse">("hero");

  function begin() {
    setPhase("dark");
    window.setTimeout(() => setPhase("verse"), 1600);
    window.setTimeout(() => navigate({ to: "/journey" }), 8200);
  }

  return (
    <main className="relative h-screen overflow-hidden bg-[oklch(0.08_0.006_60)]">
      <div className="absolute inset-0">
        <img
          src={forest}
          alt="A dark misty forest at night with a distant mountain, in the manner of a Renaissance painting"
          width={1920}
          height={1088}
          className="slow-pan h-full w-full object-cover opacity-90"
        />
      </div>
      <Fog opacity={0.55} />
      <Particles count={30} tone="oklch(0.85 0.05 80)" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 20%, oklch(0.06 0.004 60 / 0.85) 85%)",
        }}
      />

      {/* hero */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-all duration-[1400ms] ${
          phase === "hero" ? "opacity-100" : "pointer-events-none scale-[0.98] opacity-0"
        }`}
      >
        <p className="caps text-primary/70">MCCC · Firenze</p>
        <h1 className="display mt-8 text-[18vw] leading-[0.85] tracking-[0.06em] text-parchment sm:text-[9rem]">
          DANTE
        </h1>
        <p className="display mt-2 text-xl tracking-[0.42em] text-parchment/70 sm:text-2xl">
          THE DIVINE COMEDY
        </p>
        <div className="rule-gold mt-10 w-40" />
        <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/65 sm:text-base">
          {copy[lang].sub}
        </p>

        <button
          onClick={begin}
          className="group mt-14 border border-primary/40 px-10 py-4 transition-all duration-500 hover:border-primary hover:bg-primary/10"
        >
          <span className="caps text-parchment group-hover:text-primary">{copy[lang].cta}</span>
        </button>

        <div className="mt-12 flex items-center gap-4 text-[0.65rem] tracking-[0.25em]">
          {(["en", "it"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={l === lang ? "text-primary" : "text-muted-foreground hover:text-foreground"}
            >
              {l === "en" ? "ENGLISH" : "ITALIANO"}
            </button>
          ))}
        </div>

        <Link
          to="/journey"
          className="absolute bottom-8 caps text-muted-foreground/70 hover:text-primary"
        >
          Skip to the map
        </Link>
      </div>

      {/* cinematic descent */}
      <div
        className={`absolute inset-0 z-20 bg-[oklch(0.04_0_0)] transition-opacity duration-[1600ms] ${
          phase === "hero" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center px-6 transition-opacity duration-[2400ms] ${
          phase === "verse" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="max-w-2xl text-center">
          <p className="display whitespace-pre-line text-2xl leading-[1.5] italic text-parchment/90 sm:text-4xl">
            {copy.it.opening}
          </p>
          <div className="rule-gold mx-auto my-10 w-24" />
          <p className="whitespace-pre-line text-sm font-light leading-relaxed text-foreground/55 sm:text-base">
            {copy.en.opening}
          </p>
          <p className="caps mt-14 animate-pulse text-primary/60">Entering the journey…</p>
        </div>
      </div>
    </main>
  );
}
