import { useEffect, useRef, useState, type ReactNode } from "react";

/** Floating dust / ember / light particles. Pure CSS, cheap. */
export function Particles({
  count = 26,
  tone = "var(--foreground)",
  size = 2,
}: {
  count?: number;
  tone?: string;
  size?: number;
}) {
  const seeds = useRef(
    Array.from({ length: count }, (_, i) => ({
      left: (i * 37) % 100,
      delay: (i * 1.7) % 22,
      dur: 20 + ((i * 5) % 26),
      s: size * (0.5 + ((i * 13) % 10) / 10),
      o: 0.18 + ((i * 7) % 5) / 12,
    })),
  ).current;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p, i) => (
        <span
          key={i}
          className="drift-up absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.s,
            height: p.s,
            background: tone,
            opacity: p.o,
            animationDuration: `${p.dur}s`,
            animationDelay: `-${p.delay}s`,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}

export function Fog({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="fog-layer" style={{ opacity }} />
      <div className="fog-layer" style={{ opacity: opacity * 0.7, animationDelay: "-18s" }} />
    </div>
  );
}

/** Scroll-triggered reveal. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${shown ? "reveal-shown" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="caps text-primary/80">{children}</span>
      <span className="rule-gold flex-1" />
    </div>
  );
}

export function Passage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-2xl py-10">
      <Label>{title}</Label>
      <p className="mt-6 text-lg leading-relaxed text-foreground/80 sm:text-xl">{children}</p>
    </Reveal>
  );
}

/** The editorial "what Dante wants you to see" block. */
export function MessageCard({
  message,
  question,
}: {
  message: string;
  question: string;
}) {
  return (
    <Reveal className="relative mx-auto my-16 max-w-3xl">
      <div className="relative overflow-hidden border-y border-border/70 px-6 py-14 sm:px-14">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 20% 0%, var(--primary), transparent 70%)" }}
        />
        <p className="caps relative text-primary/80">What Dante wants you to see</p>
        <p className="display relative mt-6 text-2xl leading-snug text-foreground sm:text-3xl">{message}</p>
        <div className="rule-gold relative my-10" />
        <p className="caps relative text-muted-foreground">A modern question</p>
        <p className="display relative mt-4 text-xl italic text-primary sm:text-2xl">{question}</p>
      </div>
    </Reveal>
  );
}
