import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { circles, characters, terraces, spheres } from "@/data/dante";

const Input = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(30),
});

const INSTRUCTIONS = `You are the guide to an interactive digital museum of Dante Alighieri's Divine Comedy.
You speak as a learned, calm literary companion — never as a chatbot, never with bullet-point filler.

Rules:
- Ground every answer in the Commedia itself (cite realm, canto number when useful) and in mainstream scholarly consensus.
- Distinguish clearly between what Dante's text says, what tradition interprets, and what is your own reflection.
- Never invent quotations. If you quote, quote short, well-known lines and name the canto. If unsure of exact wording, paraphrase and say so.
- 120-220 words. Elegant prose, a few short paragraphs, no headings, no lists unless the user asks for one.
- End with one short question that opens the next step of the journey, when it feels natural.`;

/**
 * Intelligent literary fallback when no external AI API key is configured.
 * Uses the rich internal Dante database to provide insightful answers.
 */
function getOfflineAnswer(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("treachery") || q.includes("deepest") || q.includes("cocytus") || q.includes("ice")) {
    const c = circles.find((x) => x.slug === "treachery");
    return (
      `In Dante's vision, Treachery (Circle IX, Cocytus) is the deepest sin because betrayal freezes the warmth between people. While violent sins arise from physical impulse, treachery requires reason—the highest human gift—twisted to destroy trust.\n\n` +
      `${c?.meaning || "Treachery destroys the bond that trust makes possible."}\n\n` +
      `Who trusted you with something you have not yet honored?`
    );
  }

  if (q.includes("virgil") || q.includes("guide") || q.includes("reason")) {
    const v = characters.find((x) => x.id === "virgil");
    return (
      `Virgil represents human reason, classical culture, and Roman poetry. Sent by Beatrice from Limbo, he guides Dante through Hell and Purgatory, yet he cannot enter Heaven.\n\n` +
      `${v?.matters || "He is the best that human reason can be — and it is not enough."}\n\n` +
      `Understanding evil is not the same as being saved from it. What part of your journey requires more than logic alone?`
    );
  }

  if (q.includes("beatrice") || q.includes("love") || q.includes("grace")) {
    const b = characters.find((x) => x.id === "beatrice");
    return (
      `Beatrice represents Divine Grace, Revelation, and Theology. A Florentine woman Dante loved in life, she descends into Limbo to arrange Dante's rescue and leads him through the celestial spheres.\n\n` +
      `${b?.matters || "She rebukes Dante before she comforts him."}\n\n` +
      `The people who love you most are the ones who refuse your excuses. Who in your life demands that you tell the truth about yourself?`
    );
  }

  if (q.includes("lucifer") || q.includes("devil") || q.includes("satan")) {
    const l = characters.find((x) => x.id === "lucifer");
    return (
      `At the center of the earth, Lucifer is fixed waist-deep in ice. He is not a fiery rebel, but a mute, weeping creature whose six bat-like wings beat continuously—freezing the very lake that traps him.\n\n` +
      `${l?.matters || "He is his own paralysis."}\n\n` +
      `Dante's warning is clear: the worst thing in the universe is not powerful; it is stuck.`
    );
  }

  if (q.includes("fraud") || q.includes("malebolge") || q.includes("deceit")) {
    const c = circles.find((x) => x.slug === "fraud");
    return (
      `Fraud (Circle VIII, Malebolge) is punished below violence because violence is brute, but fraud requires reason—the faculty that makes us human—to be used against another.\n\n` +
      `${c?.meaning || "Fraud is intelligent deception."}\n\n` +
      `When did you last use intelligence to avoid being completely honest?`
    );
  }

  if (q.includes("lust") || q.includes("francesca") || q.includes("paolo")) {
    const c = circles.find((x) => x.slug === "lust");
    return (
      `Lust (Circle II) opens the lower pit. Francesca da Rimini and Paolo are swept forever in a black storm.\n\n` +
      `${c?.meaning || "Lust is appetite overrunning judgment."}\n\n` +
      `Francesca tells a beautiful, self-exculpating story. Beware the version of events that leaves you entirely blameless.`
    );
  }

  if (q.includes("purgatory") || q.includes("purgatorio") || q.includes("mountain")) {
    return (
      `Mount Purgatory is a conical island in the southern ocean with seven terraces of purification: Pride, Envy, Wrath, Sloth, Avarice, Gluttony, and Lust.\n\n` +
      `Unlike Hell, time still matters here and every soul is climbing toward restoration.\n\n` +
      `Which terrace of your own habits would require the most effort to climb?`
    );
  }

  if (q.includes("paradiso") || q.includes("heaven") || q.includes("rose")) {
    return (
      `Paradiso spans ten celestial spheres rising to the Empyrean Celestial Rose. Nothing is described by shape; everything is described by light and harmony.\n\n` +
      `As Piccarda Donati tells Dante in the Sphere of the Moon: 'In His will is our peace.'\n\n` +
      `Where in your life are you seeking a higher place rather than peace where you are?`
    );
  }

  // General query match from circles or characters
  const circleMatch = circles.find(
    (c) => q.includes(c.slug) || q.includes(c.name.toLowerCase()) || q.includes(c.sin.toLowerCase()),
  );
  if (circleMatch) {
    return (
      `In Circle ${circleMatch.roman} (${circleMatch.name} — ${circleMatch.sin}), Dante encounters: "${circleMatch.tagline}"\n\n` +
      `What Dante saw: ${circleMatch.saw}\n\n` +
      `Meaning: ${circleMatch.meaning}\n\n` +
      `Question to reflect upon: ${circleMatch.question}`
    );
  }

  const charMatch = characters.find(
    (ch) => q.includes(ch.id) || q.includes(ch.name.toLowerCase()),
  );
  if (charMatch) {
    return (
      `${charMatch.name} (${charMatch.epithet}): ${charMatch.role}\n\n` +
      `Encounter: ${charMatch.encounter} (${charMatch.canto})\n\n` +
      `Symbolism: ${charMatch.symbolism}\n\n` +
      `Core Insight: ${charMatch.message}`
    );
  }

  return (
    `The guide speaks: "You ask about '${query}'. In the Commedia, every journey begins in half-darkness.\n\n` +
    `Explore the 9 Circles of Inferno, 7 Terraces of Purgatorio, or the 10 Spheres of Paradiso through the navigation menu above to discover the exact cantos and commentary.\n\n` +
    `Which realm of the Commedia shall we examine together?"`
  );
}

export const askDante = createServerFn({ method: "POST" })
  .validator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const key =
      process.env["GEMINI_API_KEY"] ||
      process.env["OPENAI_API_KEY"] ||
      process.env["LOVABLE_API_KEY"] ||
      process.env["AI_API_KEY"] ||
      process.env["VITE_AI_API_KEY"];

    const lastMsg = data.messages[data.messages.length - 1]?.content || "";

    if (!key) {
      // Graceful offline fallback using rich literary database instead of error
      return { reply: getOfflineAnswer(lastMsg) };
    }

    try {
      const isLovable = key.startsWith("lov_") || !!process.env["LOVABLE_API_KEY"];
      const endpoint = isLovable
        ? "https://ai.gateway.lovable.dev/v1/responses"
        : "https://api.openai.com/v1/chat/completions";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(
          isLovable
            ? {
                model: "openai/gpt-5.6-sol",
                instructions: INSTRUCTIONS,
                input: data.messages.map((m) => ({ role: m.role, content: m.content })),
                stream: true,
              }
            : {
                model: "gpt-4o-mini",
                messages: [
                  { role: "system", content: INSTRUCTIONS },
                  ...data.messages.map((m) => ({ role: m.role, content: m.content })),
                ],
              },
        ),
      });

      if (!res.ok || !res.body) {
        return { reply: getOfflineAnswer(lastMsg) };
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let text = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const evt = JSON.parse(payload) as {
              type?: string;
              delta?: string;
              choices?: Array<{ delta?: { content?: string } }>;
              response?: { output_text?: string };
            };

            if (evt.type === "response.output_text.delta" && typeof evt.delta === "string") {
              text += evt.delta;
            } else if (evt.choices?.[0]?.delta?.content) {
              text += evt.choices[0].delta.content;
            } else if (evt.type === "response.completed" && !text && evt.response?.output_text) {
              text = evt.response.output_text;
            }
          } catch {
            /* ignore keep-alive fragments */
          }
        }
      }

      return { reply: text.trim() || getOfflineAnswer(lastMsg) };
    } catch {
      return { reply: getOfflineAnswer(lastMsg) };
    }
  });
