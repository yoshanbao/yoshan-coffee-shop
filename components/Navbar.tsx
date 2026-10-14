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
    <header className="sticky top-0 z-40 border-b border-border-hairline bg-canvas-white/[0.97] backdrop-blur-md supports-[backdrop-filter]:bg-canvas-white/[0.94]">
      <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[70px] sm:px-6 lg:px-8">
        <Link href="/" className="navigation-control inline-flex min-h-11 min-w-0 shrink-0 items-center rounded-lg" aria-label="A&J’s Bean Machine — Home">
          <span className="whitespace-nowrap font-editorial text-[18px] font-bold leading-none tracking-[-0.045em] text-espresso-ink sm:text-[20px]">
            A&amp;J’s Bean Machine
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavigationLink key={link.href} href={link.href}>
              {link.label}
            </NavigationLink>
          ))}
        </nav>
        <a
          className="btn btn-primary hidden shrink-0 px-5 lg:inline-flex"
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
