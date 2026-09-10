import { Link } from "@tanstack/react-router";
import { Search, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Movies", to: "/movies" },
  { label: "New & Popular", to: "/new-popular" },
  { label: "My List", to: "/my-list" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="text-2xl font-bold tracking-[0.12em] text-primary md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            CINEFLIX
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-foreground/90 transition-colors hover:text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className="text-foreground transition-colors hover:text-foreground/70">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Notifications" className="text-foreground transition-colors hover:text-foreground/70">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
