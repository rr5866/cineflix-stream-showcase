import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const links = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Center", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Center", "Privacy", "Contact Us"],
];

export function Footer() {
  return (
    <footer className="mt-auto px-4 py-16 text-muted-foreground md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex gap-6">
          <a href="#" aria-label="Facebook" className="hover:text-foreground">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-foreground">
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {links.map((column, i) => (
            <ul key={i} className="space-y-3">
              {column.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <button
          type="button"
          className="mt-8 rounded border border-muted-foreground px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Service Code
        </button>
        <p className="mt-4 text-xs text-muted-foreground">&copy; 2026 Cineflix, Inc.</p>
      </div>
    </footer>
  );
}
