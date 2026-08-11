import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { circleBySlug, circles, charactersById, type Circle } from "@/data/dante";
import { CircleScene } from "@/components/CircleScene";
import { MessageCard, Passage, Reveal, Label } from "@/components/atmosphere";
import sceneRuins from "@/assets/scene_limbo.png";
import sceneStorm from "@/assets/scene_lust.png";
import sceneTreachery from "@/assets/scene_treachery.png";

// Map scene keys to real painted images where available
const sceneImages: Partial<Record<string, string>> = {
  ruins: sceneRuins,
  storm: sceneStorm,
  ice: sceneTreachery,
};

export const Route = createFileRoute("/inferno/$slug")({
  loader: ({ params }) => {
    const circle = circleBySlug[params.slug];
    if (!circle) throw notFound();
    return { circle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Circle not found — Inferno" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.circle;
    const title = `Circle ${c.roman} — ${c.name} | Dante's Inferno`;
    return {
      meta: [
        { title },
        { name: "description", content: `${c.tagline} ${c.sin}, ${c.cantos}. What Dante saw, the punishment, and the meaning.` },
        { property: "og:title", content: title },
        { property: "og:description", content: c.tagline },
      ],
    };
  },
  component: CirclePage,
});

function CirclePage() {
  const { circle: c } = Route.useLoaderData() as { circle: Circle };
  const i = circles.findIndex((x) => x.slug === c.slug);
  const prev = circles[i - 1];
  const next = circles[i + 1];

  const sceneImg = sceneImages[c.scene];

  return (
    <main className="realm-inferno relative bg-background">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <CircleScene scene={c.scene} />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 15%, oklch(0.07 0.01 30 / 0.85) 85%)" }}
        />
        <div className="relative z-10 px-6 text-center">
          <p className="caps text-primary/70">{c.cantos}</p>
          <h1 className="display mt-6 text-6xl text-parchment sm:text-8xl">CIRCLE {c.roman}</h1>
          <p className="display mt-4 text-2xl tracking-[0.3em] text-primary sm:text-3xl">
            {c.sin.toUpperCase()}
          </p>
          <div className="rule-gold mx-auto my-10 w-28" />
          <p className="mx-auto max-w-lg text-sm italic leading-relaxed text-foreground/65 sm:text-base">
            {c.tagline}
          </p>
          {c.guardian && (
            <p className="caps mt-10 text-muted-foreground">Guardian · {c.guardian}</p>
          )}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-10">
        {/* Scene painting panel — shown for circles that have a real image */}
        {sceneImg ? (
          <Reveal>
            <div className="relative mb-2 mt-10 overflow-hidden" style={{ height: "360px" }}>
              <img
                src={sceneImg}
                alt={`${c.name} — ${c.tagline}`}
                className="h-full w-full object-cover slow-pan"
                style={{ opacity: 0.88 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.01 30) 0%, transparent 40%, transparent 60%, oklch(0.08 0.01 30) 100%)",
                }}
              />
              {/* Emotion tag overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="display text-2xl italic text-parchment/90 sm:text-3xl">
                  “{c.tagline}”
                </p>
                <p className="caps mt-2 text-primary/70">{c.sin} · {c.cantos}</p>
              </div>
            </div>
          </Reveal>
        ) : null}

        <Passage title="What Dante saw">{c.saw}</Passage>
        <Passage title="The punishment">{c.punishment}</Passage>
        <Passage title="The meaning">{c.meaning}</Passage>

        {c.zones && (
          <Reveal className="mx-auto max-w-4xl py-10">
            <Label>The three zones</Label>
            <div className="mt-8 grid gap-px md:grid-cols-3">
              {c.zones.map((z) => (
                <div key={z.label} className="border border-border/50 p-7">
                  <p className="caps text-primary/70">{z.label}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{z.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <MessageCard message={c.message} question={c.question} />

        {c.characters.length > 0 && (
          <Reveal className="mx-auto max-w-4xl py-10">
            <Label>The figures</Label>
            <div className="mt-8 grid gap-px sm:grid-cols-2">
              {c.characters.map((id) => {
                const ch = charactersById[id];
                if (!ch) return null;
                return (
                  <Link
                    key={id}
                    to="/characters"
                    hash={id}
                    className="group flex gap-6 border border-border/50 p-7 transition-colors hover:border-primary/60"
                  >
                    <span className="display grid size-14 shrink-0 place-items-center border border-border/70 text-2xl text-primary/80">
                      {ch.initial}
                    </span>
                    <span>
                      <span className="display block text-2xl text-parchment">{ch.name}</span>
                      <span className="caps block text-muted-foreground">{ch.epithet}</span>
                      <span className="mt-3 block text-sm text-foreground/65">{ch.message}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        )}

        <nav className="mt-24 flex items-center justify-between border-t border-border/50 py-10">
          {prev ? (
            <Link
              to="/inferno/$slug"
              params={{ slug: prev.slug }}
              className="caps text-muted-foreground hover:text-primary"
            >
              ← Circle {prev.roman} · {prev.name}
            </Link>
          ) : (
            <Link to="/inferno" className="caps text-muted-foreground hover:text-primary">
              ← All circles
            </Link>
          )}
          {next ? (
            <Link
              to="/inferno/$slug"
              params={{ slug: next.slug }}
              className="caps text-right text-muted-foreground hover:text-primary"
            >
              Circle {next.roman} · {next.name} →
            </Link>
          ) : (
            <Link to="/purgatorio" className="caps text-right text-muted-foreground hover:text-primary">
              Purgatorio →
            </Link>
          )}
        </nav>
      </section>
    </main>
  );
}
