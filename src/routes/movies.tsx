import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cineflix/Header";
import { Footer } from "@/components/cineflix/Footer";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Movies — Cineflix" },
      { name: "description", content: "Browse movies on Cineflix." },
      { property: "og:title", content: "Movies — Cineflix" },
      { property: "og:description", content: "Browse movies on Cineflix." },
    ],
  }),
  component: MoviesPage,
});

function MoviesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-20">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Movies
          </h1>
          <p className="mt-4 text-muted-foreground">Discover blockbuster hits and hidden gems.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
