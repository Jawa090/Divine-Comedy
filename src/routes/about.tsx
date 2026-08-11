import { createFileRoute, Link } from "@tanstack/react-router";
import { journeyStops } from "@/data/dante";
import { Reveal, Label } from "@/components/atmosphere";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Poem — Dante's Divine Comedy" },
      {
        name: "description",
        content:
          "Who Dante was, why he wrote the Commedia in exile, how the poem is built, and how this experience separates his text from modern interpretation.",
      },
      { property: "og:title", content: "About the Poem — Dante's Divine Comedy" },
      { property: "og:description", content: "Exile, structure, and the honest limits of interpretation." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-6 pt-36 pb-16">
        <p className="caps text-primary/70">Florence, 1265 — Ravenna, 1321</p>
        <h1 className="display mt-6 text-5xl text-parchment sm:text-7xl">ABOUT THE POEM</h1>
        <p className="mt-10 text-lg leading-relaxed text-foreground/80">
          Dante Alighieri wrote the <em>Commedia</em> while banished from Florence under threat of being
          burned alive if he returned. He never went back. The poem is fourteen thousand two hundred and
          thirty-three lines in <em>terza rima</em>, one hundred cantos, three realms — and it is, among
          other things, the revenge of a man who had lost everything except his judgment.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <Reveal>
          <Label>The timeline of the journey</Label>
        </Reveal>
        <ol className="mt-8">
          {journeyStops.map((s, i) => (
            <Reveal key={s.key} delay={i * 80}>
              <li className="flex gap-6 border-b border-border/50 py-6">
                <span className="display w-10 shrink-0 text-lg text-primary/70">{i + 1}</span>
                <span>
                  <Link to={s.to} className="display block text-2xl text-parchment hover:text-primary">
                    {s.label}
                  </Link>
                  <span className="caps mt-1 block text-muted-foreground">{s.cantos}</span>
                  <span className="mt-2 block text-sm text-foreground/65">{s.theme}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <Reveal>
          <Label>How this experience handles the text</Label>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/75">
            <p>
              <span className="text-primary">Dante's words</span> appear only as short, well-known quotations,
              always attributed to a canto — in Italian where the sound matters, with a plain English gloss.
            </p>
            <p>
              <span className="text-primary">Summary and explanation</span> describe what happens in the poem
              and what the punishments literally are. These follow standard scholarly readings.
            </p>
            <p>
              <span className="text-primary">Reflection</span> — every "what Dante wants you to see" and every
              modern question — is interpretation written for this site. It is not Dante speaking, and it is
              never presented as such.
            </p>
            <p className="text-muted-foreground">
              For the full text in translation, the Princeton Dante Project and the Digital Dante archive at
              Columbia are the standard open resources.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/journey" className="caps border border-border px-6 py-4 text-foreground/80 hover:border-primary hover:text-primary">
            The journey map
          </Link>
          <Link to="/search" className="caps border border-border px-6 py-4 text-muted-foreground hover:border-primary hover:text-primary">
            Search the poem
          </Link>
          <Link to="/quiz" className="caps border border-border px-6 py-4 text-muted-foreground hover:border-primary hover:text-primary">
            Where would Dante place you?
          </Link>
        </div>
      </section>
    </main>
  );
}
