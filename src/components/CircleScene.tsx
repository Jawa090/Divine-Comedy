import { Fog, Particles } from "./atmosphere";
import type { CircleScene } from "@/data/dante";
import sceneRuins from "@/assets/scene_limbo.png";
import sceneStorm from "@/assets/scene_lust.png";
import sceneTreachery from "@/assets/scene_treachery.png";

/**
 * Each circle gets its own atmosphere — real images for key circles,
 * cinematic CSS layers for the rest.
 */
export function CircleScene({ scene }: { scene: CircleScene }) {
  switch (scene) {
    case "ruins":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={sceneRuins}
            alt="Limbo — a noble castle lit by a single fire in eternal night, the virtuous pagans gathered in quiet sorrow"
            className="absolute inset-0 h-full w-full object-cover slow-pan"
            style={{ opacity: 0.75 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center 70%, transparent 20%, oklch(0.07 0.008 60 / 0.85) 80%)",
            }}
          />
          <Fog opacity={0.3} />
          <Particles count={14} tone="var(--gold)" />
        </div>
      );

    case "storm":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={sceneStorm}
            alt="The second circle of lust — Francesca and Paolo swept in an endless black hurricane"
            className="absolute inset-0 h-full w-full object-cover slow-pan"
            style={{ opacity: 0.7 }}
          />
          <div className="absolute inset-0 bg-[oklch(0.09_0.01_290/0.5)]" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute h-[36vh] w-[160%] -left-[30%] opacity-20"
              style={{
                top: `${i * 17}%`,
                background:
                  "linear-gradient(90deg, transparent, oklch(0.45 0.03 290 / 0.7), transparent)",
                filter: "blur(22px)",
                animation: `storm-sweep ${7 + i * 1.6}s ease-in-out ${i * 0.6}s infinite alternate`,
              }}
            />
          ))}
          <Particles count={40} tone="oklch(0.8 0.02 290)" size={1.5} />
        </div>
      );

    case "rain":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, oklch(0.16 0.01 130), oklch(0.1 0.012 100))",
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(100deg, transparent 0 6px, oklch(0.75 0.01 150 / 0.5) 6px 7px)",
              animation: "storm-sweep 3.5s linear infinite",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 opacity-70"
            style={{ background: "linear-gradient(180deg, transparent, oklch(0.18 0.03 90))" }}
          />
          <Fog opacity={0.25} />
        </div>
      );

    case "weights":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, oklch(0.14 0.014 70), oklch(0.1 0.02 60))" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: `${40 + i * 18}vmin`,
                  height: `${40 + i * 18}vmin`,
                  borderColor: "oklch(0.65 0.1 82 / 0.16)",
                  animation: `shimmer-rings ${90 + i * 40}s linear ${i % 2 ? "reverse" : "normal"} infinite`,
                  boxShadow: "inset 0 0 60px oklch(0.6 0.12 80 / 0.06)",
                }}
              />
            ))}
          </div>
          <Particles count={18} tone="var(--gold)" size={2.5} />
        </div>
      );

    case "swamp":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, oklch(0.12 0.01 200), oklch(0.09 0.02 160))" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 opacity-60"
            style={{
              background:
                "repeating-linear-gradient(0deg, oklch(0.2 0.03 160 / 0.5) 0 2px, transparent 2px 14px)",
              animation: "storm-sweep 12s ease-in-out infinite alternate",
              filter: "blur(1.5px)",
            }}
          />
          <Fog opacity={0.4} />
        </div>
      );

    case "tombs":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[oklch(0.09_0.01_35)]" />
          <div className="absolute inset-0 grid grid-cols-4 gap-6 p-10 opacity-45 sm:grid-cols-6">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="rounded-t-[40%] border border-[oklch(0.4_0.05_40/0.4)]"
                style={{
                  height: "22vh",
                  background:
                    "linear-gradient(180deg, oklch(0.5 0.16 40 / 0.28), transparent 70%)",
                  animation: `pulse-soft ${5 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
            ))}
          </div>
          <Particles count={24} tone="oklch(0.7 0.16 45)" />
        </div>
      );

    case "wood":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, oklch(0.13 0.02 30), oklch(0.16 0.06 40))" }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(92deg, transparent 0 22px, oklch(0.35 0.03 60 / 0.55) 22px 24px)",
            }}
          />
          <Particles count={34} tone="oklch(0.78 0.17 50)" size={2} />
          <Fog opacity={0.2} />
        </div>
      );

    case "bolgias":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[oklch(0.1_0.008_60)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: `${18 + i * 9}vmin`,
                  height: `${18 + i * 9}vmin`,
                  borderColor: `oklch(0.45 0.04 60 / ${0.5 - i * 0.03})`,
                  transform: "rotateX(62deg)",
                }}
              />
            ))}
          </div>
          <Fog opacity={0.3} />
        </div>
      );

    case "ice":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={sceneTreachery}
            alt="Cocytus — the frozen lake of the ninth circle, Lucifer sealed in ice at the centre of the earth"
            className="absolute inset-0 h-full w-full object-cover slow-pan"
            style={{ opacity: 0.7 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, oklch(0.16 0.02 235 / 0.6), oklch(0.08 0.02 250 / 0.7))" }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 48%, oklch(0.85 0.02 240 / 0.5) 49%, transparent 51%), linear-gradient(65deg, transparent 48%, oklch(0.85 0.02 240 / 0.35) 49%, transparent 51%)",
              backgroundSize: "180px 180px, 260px 260px",
            }}
          />
        </div>
      );
  }
}
