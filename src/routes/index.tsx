import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cineflix/Header";
import { Hero } from "@/components/cineflix/Hero";
import { MovieRow } from "@/components/cineflix/MovieRow";
import { Footer } from "@/components/cineflix/Footer";
import heroImage from "@/assets/cineflix-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineflix — Watch Movies & TV Shows Online" },
      { name: "description", content: "Stream unlimited movies and TV shows on Cineflix. Watch anywhere, anytime." },
      { property: "og:title", content: "Cineflix — Watch Movies & TV Shows Online" },
      { property: "og:description", content: "Stream unlimited movies and TV shows on Cineflix. Watch anywhere, anytime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const gradients = [
  "poster-red",
  "poster-amber",
  "poster-emerald",
  "poster-indigo",
  "poster-crimson",
  "poster-cyan",
] as const;

const posterGradient = (index: number): string =>
  gradients[index % gradients.length];

const trendingMovies = [
  { id: "t1", title: "Neon Horizon", year: 2026, rating: "16+", duration: "2h 14m", gradient: posterGradient(0) },
  { id: "t2", title: "The Last Outpost", year: 2025, rating: "13+", duration: "1h 58m", gradient: posterGradient(1) },
  { id: "t3", title: "Ghost Protocol", year: 2025, rating: "18+", duration: "2h 06m", gradient: posterGradient(3) },
  { id: "t4", title: "Solaris Rising", year: 2024, rating: "13+", duration: "2h 22m", gradient: posterGradient(5) },
  { id: "t5", title: "Crimson Tide", year: 2026, rating: "16+", duration: "1h 49m", gradient: posterGradient(4) },
  { id: "t6", title: "Emerald City", year: 2024, rating: "7+", duration: "2h 01m", gradient: posterGradient(2) },
];

const topMovies = [
  { id: "m1", title: "Inferno Run", year: 2026, rating: "18+", duration: "2h 30m", gradient: posterGradient(4) },
  { id: "m2", title: "Quantum Echo", year: 2025, rating: "13+", duration: "2h 12m", gradient: posterGradient(3) },
  { id: "m3", title: "Desert Flame", year: 2024, rating: "16+", duration: "1h 55m", gradient: posterGradient(1) },
  { id: "m4", title: "Midnight Heist", year: 2026, rating: "18+", duration: "2h 08m", gradient: posterGradient(0) },
  { id: "m5", title: "Abyss Diver", year: 2025, rating: "13+", duration: "2h 00m", gradient: posterGradient(5) },
  { id: "m6", title: "Verdant War", year: 2024, rating: "16+", duration: "2h 18m", gradient: posterGradient(2) },
];

const actionMovies = [
  { id: "a1", title: "Steel Reign", year: 2026, rating: "18+", duration: "2h 05m", gradient: posterGradient(4) },
  { id: "a2", title: "Rogue Signal", year: 2025, rating: "13+", duration: "1h 52m", gradient: posterGradient(3) },
  { id: "a3", title: "Burn Rate", year: 2024, rating: "16+", duration: "2h 11m", gradient: posterGradient(0) },
  { id: "a4", title: "Titan Fall", year: 2026, rating: "13+", duration: "2h 24m", gradient: posterGradient(5) },
  { id: "a5", title: "Sands of Vengeance", year: 2025, rating: "18+", duration: "2h 02m", gradient: posterGradient(1) },
  { id: "a6", title: "Night Market", year: 2024, rating: "16+", duration: "1h 47m", gradient: posterGradient(2) },
];

const newReleases = [
  { id: "n1", title: "Neon Horizon", year: 2026, rating: "16+", duration: "2h 14m", gradient: posterGradient(0) },
  { id: "n2", title: "Crimson Tide", year: 2026, rating: "16+", duration: "1h 49m", gradient: posterGradient(4) },
  { id: "n3", title: "Inferno Run", year: 2026, rating: "18+", duration: "2h 30m", gradient: posterGradient(4) },
  { id: "n4", title: "Midnight Heist", year: 2026, rating: "18+", duration: "2h 08m", gradient: posterGradient(0) },
  { id: "n5", title: "Steel Reign", year: 2026, rating: "18+", duration: "2h 05m", gradient: posterGradient(4) },
  { id: "n6", title: "Titan Fall", year: 2026, rating: "13+", duration: "2h 24m", gradient: posterGradient(5) },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="relative z-10">
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="Top 10 in Your Country" movies={topMovies} />
          <MovieRow title="New Releases" movies={newReleases} />
          <MovieRow title="Action & Adventure" movies={actionMovies} />
          <MovieRow title="Because you watched Neon Horizon" movies={trendingMovies.slice().reverse()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
