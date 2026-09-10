import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cineflix/Header";
import { Footer } from "@/components/cineflix/Footer";

export const Route = createFileRoute("/new-popular")({
  head: () => ({
    meta: [
      { title: "New & Popular — Cineflix" },
      { name: "description", content: "See what's new and popular on Cineflix." },
      { property: "og:title", content: "New & Popular — Cineflix" },
      { property: "og:description", content: "See what's new and popular on Cineflix." },
    ],
  }),
  component: NewPopularPage,
});

function NewPopularPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-20">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            New & Popular
          </h1>
          <p className="mt-4 text-muted-foreground">The latest releases trending around the world.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
