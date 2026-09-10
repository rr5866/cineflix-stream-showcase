import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useRef } from "react";

interface Movie {
  id: string;
  title: string;
  year: number;
  rating: string;
  duration: string;
  gradient: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth * 0.65;
    current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 -mt-8 mb-10 px-4 md:px-8 lg:px-12">
      <h2 className="mb-3 text-xl font-semibold text-foreground md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>

      <div className="group relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute -left-4 top-0 z-20 hidden h-full w-12 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity hover:bg-background group-hover:opacity-100 md:-left-8 md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x gap-3 overflow-x-auto scroll-smooth py-4 pr-[30vw]"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="group/card card-zoom relative aspect-[2/3] w-32 flex-shrink-0 cursor-pointer snap-start overflow-hidden rounded-md bg-card sm:w-40 md:w-48 lg:w-56"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className={`absolute inset-0 ${movie.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="absolute left-2 top-[-2.5rem] text-5xl font-bold leading-none text-foreground/20" style={{ fontFamily: "var(--font-display)" }}>
                  {index + 1}
                </span>
                <h3 className="text-sm font-semibold text-foreground line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>
                  {movie.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-[10px] text-foreground/70">
                  <span className="rounded border border-foreground/40 px-1">{movie.rating}</span>
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                </div>
              </div>
              <div className="absolute right-2 top-2 rounded-full bg-background/60 p-1.5 text-foreground opacity-0 transition-opacity hover:bg-background group-hover/card:opacity-100">
                <Info className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute -right-4 top-0 z-20 hidden h-full w-12 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity hover:bg-background group-hover:opacity-100 md:-right-8 md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
