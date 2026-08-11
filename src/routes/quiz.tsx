import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { quiz, quizResults } from "@/data/dante";
import { Fog, Particles } from "@/components/atmosphere";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Where Would Dante Place You? | The Divine Comedy" },
      {
        name: "description",
        content:
          "Ten honest questions about human behaviour, answered against Dante's moral architecture. Find the circle or terrace the Commedia would assign you.",
      },
      { property: "og:title", content: "Where Would Dante Place You?" },
      {
        property: "og:description",
        content: "Ten questions. One verdict, drawn from Dante's moral architecture.",
      },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);

  const done = step >= quiz.length;
  const winner =
    Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "pride";
  const result = quizResults[winner] ?? quizResults["pride"]!;

  function choose(sin: string) {
    setTally((t) => ({ ...t, [sin]: (t[sin] ?? 0) + 1 }));
    setStep((s) => s + 1);
  }

  const shareText = `Dante would place me in ${result.place} — ${result.title}. Where would he place you?`;

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Where would Dante place you?", text: shareText, url });
        return;
      } catch {
        /* fall through to copy */
      }
    }
    copy();
  }

  async function copy() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  if (done) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[oklch(0.1_0.01_30)] px-6 py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, oklch(0.35 0.14 32 / 0.5), transparent 65%), linear-gradient(180deg, oklch(0.1 0.01 30), oklch(0.07 0.008 30))",
          }}
        />
        <Particles count={30} tone="oklch(0.75 0.16 42)" />
        <div className="relative z-10 max-w-2xl text-center">
          <p className="caps text-primary/70">Your journey leads to…</p>
          <h1 className="display mt-8 text-5xl text-parchment sm:text-7xl">{result.place}</h1>
          <p className="display mt-4 text-2xl tracking-[0.3em] text-primary sm:text-3xl">
            {result.title.toUpperCase()}
          </p>
          <div className="rule-gold mx-auto my-12 w-32" />
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">{result.verdict}</p>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <button onClick={share} className="caps border border-primary/50 px-6 py-4 text-parchment hover:bg-primary/10">
              Share result
            </button>
            <button onClick={copy} className="caps border border-border px-6 py-4 text-muted-foreground hover:border-primary hover:text-primary">
              {copied ? "Copied" : "Copy result"}
            </button>
            {result.circleSlug ? (
              <Link
                to="/inferno/$slug"
                params={{ slug: result.circleSlug }}
                className="caps border border-border px-6 py-4 text-muted-foreground hover:border-primary hover:text-primary"
              >
                Explore your circle
              </Link>
            ) : (
              <Link to="/purgatorio" className="caps border border-border px-6 py-4 text-muted-foreground hover:border-primary hover:text-primary">
                Explore your terrace
              </Link>
            )}
          </div>

          <button
            onClick={() => {
              setTally({});
              setStep(0);
            }}
            className="caps mt-12 text-muted-foreground/70 hover:text-primary"
          >
            Answer again
          </button>
        </div>
      </main>
    );
  }

  const q = quiz[step]!;

  return (
    <main className="relative min-h-screen bg-background">
      <Fog opacity={0.2} />
      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-32">
        <p className="caps text-primary/70">
          Question {step + 1} of {quiz.length}
        </p>
        <div className="mt-4 h-px w-full bg-border">
          <div
            className="h-px bg-primary transition-all duration-700"
            style={{ width: `${(step / quiz.length) * 100}%` }}
          />
        </div>

        <h1 className="display mt-12 text-3xl leading-tight text-parchment sm:text-5xl">{q.q}</h1>

        <div className="mt-12">
          {q.options.map((o) => (
            <button
              key={o.label}
              onClick={() => choose(o.sin)}
              className="group flex w-full items-center justify-between border-b border-border/50 py-6 text-left transition-colors hover:border-primary"
            >
              <span className="text-lg text-foreground/80 group-hover:text-primary sm:text-xl">
                {o.label}
              </span>
              <span className="caps text-muted-foreground/50 group-hover:text-primary">Choose</span>
            </button>
          ))}
        </div>

        <p className="mt-14 text-xs text-muted-foreground">
          There are no correct answers. Dante assumed you would recognise yourself somewhere.
        </p>
      </section>
    </main>
  );
}
