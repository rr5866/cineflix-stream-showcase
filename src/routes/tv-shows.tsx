import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cineflix/Header";
import { Footer } from "@/components/cineflix/Footer";

export const Route = createFileRoute("/tv-shows")({
  head: () => ({
    meta: [
      { title: "TV Shows — Cineflix" },
      { name: "description", content: "Browse TV shows on Cineflix." },
      { property: "og:title", content: "TV Shows — Cineflix" },
      { property: "og:description", content: "Browse TV shows on Cineflix." },
    ],
  }),
  component: TVShowsPage,
});

function TVShowsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-20">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            TV Shows
          </h1>
          <p className="mt-4 text-muted-foreground">Explore binge-worthy series.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
