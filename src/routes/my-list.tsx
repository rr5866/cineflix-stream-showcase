import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cineflix/Header";
import { Footer } from "@/components/cineflix/Footer";

export const Route = createFileRoute("/my-list")({
  head: () => ({
    meta: [
      { title: "My List — Cineflix" },
      { name: "description", content: "Your saved movies and shows on Cineflix." },
      { property: "og:title", content: "My List — Cineflix" },
      { property: "og:description", content: "Your saved movies and shows on Cineflix." },
    ],
  }),
  component: MyListPage,
});

function MyListPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-20">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            My List
          </h1>
          <p className="mt-4 text-muted-foreground">Titles you save will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
