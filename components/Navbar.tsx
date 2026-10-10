import Link from "next/link";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationLink } from "./NavigationLink";
import { businessInfo } from "@/lib/business-info";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Story" },
  { href: "/visit", label: "Visit Us" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-hairline bg-canvas-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="navigation-control inline-flex min-h-11 min-w-0 items-center rounded-lg text-sm font-bold tracking-tight text-espresso-ink hover:text-primary sm:text-base">
          A&amp;J’s Bean Machine
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavigationLink key={link.href} href={link.href}>
              {link.label}
            </NavigationLink>
          ))}
        </nav>
        <a
          className="navigation-control navigation-control-filled hidden min-h-11 shrink-0 lg:inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wider text-white sm:px-4"
          href={businessInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to A&J’s Bean Machine on Google Maps"
        >
          Get Directions
        </a>
        <MobileNavigation links={links} mapsUrl={businessInfo.mapsUrl} />
      </div>
    </header>
  );
}
