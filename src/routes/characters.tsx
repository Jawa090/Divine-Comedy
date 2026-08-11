import { createFileRoute } from "@tanstack/react-router";
import { characters } from "@/data/dante";
import { Reveal, Label, Fog } from "@/components/atmosphere";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: "Characters — Who Dante Meets | The Divine Comedy" },
      {
        name: "description",
        content:
          "Virgil, Beatrice, Francesca, Ulysses, Ugolino, Lucifer and more — who they were, where Dante meets them, what they symbolise and why they still matter.",
      },
      { property: "og:title", content: "Characters — Who Dante Meets" },
      { property: "og:description", content: "Eleven encounters that changed European literature." },
    ],
  }),
  component: Characters,
});

function Characters() {
  return (
    <main className="relative min-h-screen bg-background">
      <Fog opacity={0.2} />
      <section className="relative mx-auto max-w-6xl px-6 pt-36 pb-20">
        <p className="caps text-primary/70">The encounters</p>
        <h1 className="display mt-6 text-6xl text-parchment sm:text-8xl">CHARACTERS</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/65">
          Dante's afterlife is populated by real people — neighbours, popes, poets, enemies — and by
          mythological figures repurposed as machinery. Every one of them is an argument.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-32">
        {characters.map((c, i) => (
          <Reveal key={c.id}>
            <article
              id={c.id}
              className="grid scroll-mt-28 gap-8 border-t border-border/50 py-16 md:grid-cols-[minmax(0,200px)_1fr]"
            >
              <header>
                <div
                  className="display grid aspect-square w-28 place-items-center border text-5xl text-primary/80"
                  style={{
                    borderColor: "oklch(0.7 0.05 80 / 0.4)",
                    background:
                      "radial-gradient(ellipse at 30% 20%, oklch(0.7 0.08 80 / 0.12), transparent 70%)",
                  }}
                >
                  {c.initial}
                </div>
                <p className="caps mt-6 text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display mt-2 text-4xl text-parchment">{c.name}</h2>
                <p className="mt-1 text-sm italic text-primary/80">{c.epithet}</p>
                <p className="caps mt-6 text-muted-foreground">{c.canto}</p>
              </header>

              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed text-foreground/80">{c.role}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <Label>Where Dante meets them</Label>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">{c.encounter}</p>
                  </div>
                  <div>
                    <Label>Symbolism</Label>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">{c.symbolism}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Label>Why they matter</Label>
                  <p className="mt-4 text-base leading-relaxed text-foreground/75">{c.matters}</p>
                </div>
                <p className="display mt-10 border-l border-primary/50 pl-6 text-2xl italic text-primary">
                  {c.message}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
