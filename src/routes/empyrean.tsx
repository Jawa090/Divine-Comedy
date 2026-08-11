import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import rose from "@/assets/rose.jpg";

export const Route = createFileRoute("/empyrean")({
  head: () => ({
    meta: [
      { title: "The Empyrean — The Journey Ends | Dante" },
      {
        name: "description",
        content:
          "The celestial rose, the final vision, and the questions Dante leaves behind: what do we desire, and what makes us human?",
      },
      { property: "og:title", content: "The Empyrean — The Journey Ends" },
      { property: "og:description", content: "The love that moves the sun and the other stars." },
    ],
  }),
  component: Empyrean,
});

const questions = [
  "What do we desire?",
  "What are we willing to sacrifice?",
  "What makes us human?",
  "What would Dante see in our world?",
];

function Empyrean() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = [
      window.setTimeout(() => setStep(1), 2200),
      window.setTimeout(() => setStep(2), 5200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <main className="realm-paradiso relative min-h-screen overflow-hidden bg-[oklch(0.97_0.015_88)]">
      <img
        src={rose}
        alt="An immense luminous celestial rose of concentric geometric petals of light"
        width={1600}
        height={1600}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[190vmin] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-90"
        style={{ animation: "shimmer-rings 320s linear infinite" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, oklch(1 0 0 / 0.55) 0%, transparent 45%, oklch(0.93 0.03 85 / 0.7) 100%)" }}
      />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="caps text-primary/80">Paradiso XXX — XXXIII</p>
        <h1 className="display mt-6 text-5xl tracking-[0.12em] text-foreground sm:text-7xl">
          THE EMPYREAN
        </h1>
        <div
          className={`mt-16 transition-opacity duration-[2000ms] ${step >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          <p className="display text-3xl text-foreground sm:text-5xl">THE JOURNEY ENDS.</p>
        </div>
        <div
          className={`mt-6 transition-opacity duration-[2000ms] ${step >= 2 ? "opacity-100" : "opacity-0"}`}
        >
          <p className="display text-2xl italic text-primary sm:text-4xl">
            BUT THE QUESTIONS REMAIN.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-6 pb-40">
        <div className="rule-gold mb-20" />
        {questions.map((q, i) => (
          <p
            key={q}
            className="display border-b border-border/50 py-10 text-3xl text-foreground/80 transition-colors duration-500 hover:text-primary sm:text-5xl"
            style={{ paddingLeft: `${i * 6}%` }}
          >
            {q}
          </p>
        ))}

        <blockquote className="mt-24 text-center">
          <p className="display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
            «l'amor che move il sole e l'altre stelle»
          </p>
          <footer className="mt-5 text-sm text-muted-foreground">
            the love that moves the sun and the other stars — Paradiso XXXIII, 145
          </footer>
        </blockquote>

        <div className="mt-24 flex flex-wrap justify-center gap-4">
          <Link
            to="/quiz"
            className="caps border border-primary/50 px-8 py-4 text-foreground hover:bg-primary/10"
          >
            Where would Dante place you?
          </Link>
          <Link
            to="/ask-dante"
            className="caps border border-border px-8 py-4 text-muted-foreground hover:border-primary hover:text-primary"
          >
            Ask Dante
          </Link>
        </div>
      </section>
    </main>
  );
}
