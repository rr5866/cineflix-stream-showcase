import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/cineflix-hero.jpg";

export function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Featured movie backdrop"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="hero-vignette absolute inset-0" />

      <div className="absolute inset-0 flex items-end px-4 pb-24 md:px-8 lg:px-12">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            #1 in Movies Today
          </p>
          <h1 className="text-5xl font-bold leading-[0.95] text-foreground text-shadow-hero md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
            NEON HORIZON
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-foreground/90 text-shadow-hero md:text-lg">
            In a rain-soaked megacity where memories can be bought and sold, a rogue courier discovers a conspiracy that could rewrite the past — and erase the future.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              <Play className="h-5 w-5 fill-current" />
              Play
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-secondary/80 px-6 py-2.5 text-sm font-semibold text-secondary-foreground backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="absolute right-4 bottom-24 rounded-full border border-foreground/40 p-2 text-foreground transition-colors hover:bg-foreground/10 md:right-8 lg:right-12"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </section>
  );
}
