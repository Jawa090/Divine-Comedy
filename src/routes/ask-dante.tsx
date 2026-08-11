import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { askDante } from "@/lib/ask-dante.functions";
import { Fog } from "@/components/atmosphere";

export const Route = createFileRoute("/ask-dante")({
  head: () => ({
    meta: [
      { title: "Ask Dante — A Literary Guide to the Divine Comedy" },
      {
        name: "description",
        content:
          "Ask questions about the Divine Comedy and receive answers grounded in the poem and in scholarship — why fraud is punished so deeply, why Lucifer is frozen, who Virgil is.",
      },
      { property: "og:title", content: "Ask Dante — A Literary Guide" },
      { property: "og:description", content: "Speak with a guide through the Commedia." },
    ],
  }),
  component: AskDante,
});

const suggested = [
  "Why is treachery the deepest sin?",
  "Why does Dante meet Virgil and not someone else?",
  "What does Beatrice represent?",
  "Why is Lucifer frozen rather than burning?",
  "Why is fraud punished below violence?",
];

type Msg = { role: "user" | "assistant"; content: string };

function AskDante() {
  const call = useServerFn(askDante);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    setError(null);
    setInput("");
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await call({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: res.reply }]);
    } catch {
      setError("The guide is in contemplation. Try asking another question about the Commedia.");
    } finally {
      setBusy(false);
      requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
    }
  }

  return (
    <main className="relative min-h-screen bg-background">
      <Fog opacity={0.18} />
      <section className="relative mx-auto max-w-3xl px-6 pt-36 pb-28">
        <p className="caps text-primary/70">A conversation across seven centuries</p>
        <h1 className="display mt-6 text-6xl text-parchment sm:text-7xl">ASK DANTE</h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/60">
          Answers are grounded in the Commedia and in mainstream scholarship. Interpretation is marked as
          interpretation — nothing here is presented as Dante's own words unless it is quoted as such.
        </p>

        <div className="rule-gold my-12" />

        {messages.length === 0 && (
          <div className="space-y-3">
            {suggested.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="block w-full border-b border-border/50 py-4 text-left transition-colors hover:border-primary"
              >
                <span className="display text-xl text-foreground/80 sm:text-2xl">{s}</span>
              </button>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {messages.map((m, i) =>
            m.role === "user" ? (
              <p key={i} className="display border-l border-primary/60 pl-6 text-2xl text-parchment">
                {m.content}
              </p>
            ) : (
              <div key={i} className="whitespace-pre-line text-base leading-relaxed text-foreground/80">
                {m.content}
              </div>
            ),
          )}
          {busy && <p className="caps animate-pulse text-primary/70">The guide is considering…</p>}
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div ref={endRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="sticky bottom-6 mt-14 flex items-center gap-4 border-b border-border bg-background/80 py-3 backdrop-blur"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a soul, a circle, a line…"
            className="flex-1 bg-transparent py-2 text-lg text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="caps border border-border px-5 py-3 text-foreground/80 disabled:opacity-40 hover:border-primary hover:text-primary"
          >
            Ask
          </button>
        </form>
      </section>
    </main>
  );
}
