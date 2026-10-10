import { FooterNavigation } from "@/components/FooterNavigation";
import { businessInfo } from "@/lib/business-info";
import { SocialLinks } from "@/components/SocialLinks";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline bg-sand-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold">{businessInfo.name}</h2>
          <p className="mt-3 text-sm text-charcoal-muted">Independent coffee and handcrafted drinks in Southeast Nampa, Idaho.</p>
          <div className="mt-4"><SocialLinks showIcons /></div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider">Explore</h3>
          <FooterNavigation />
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider">Hours</h3>
          <p className="mt-3 text-sm">{businessInfo.hours}<br/>{businessInfo.sundayHours}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider">Find us</h3>
          <address className="mt-3 text-sm not-italic">{businessInfo.address}</address>
          <a className="navigation-control navigation-control-outlined mt-3 inline-flex min-h-11 items-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary" href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border-hairline px-4 py-5 text-xs text-charcoal-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {businessInfo.name} · Southeast Nampa, Idaho</p>
        <nav aria-label="Site information" className="flex flex-wrap gap-x-4">
          <Link href="/privacy" className="navigation-control inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Privacy</Link>
          <Link href="/terms" className="navigation-control inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Site terms</Link>
        </nav>
      </div>
    </footer>
  );
}
