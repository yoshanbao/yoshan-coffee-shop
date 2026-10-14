import Image from "next/image";
import { FooterNavigation } from "@/components/FooterNavigation";
import { businessInfo } from "@/lib/business-info";
import { SocialLinks } from "@/components/SocialLinks";
import Link from "next/link";

const headingClass = "meta";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline bg-sand-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="navigation-control inline-flex rounded-lg" aria-label="A&J’s Bean Machine — Home">
            <Image
              src="/images/ajs-bean-machine-logo.png"
              alt=""
              width={1774}
              height={887}
              sizes="192px"
              className="h-auto w-48"
            />
          </Link>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-charcoal-muted">Independent coffee and handcrafted drinks in Southeast Nampa, Idaho.</p>
          <div className="mt-5"><SocialLinks showIcons /></div>
        </div>
        <div>
          <h3 className={headingClass}>Explore</h3>
          <FooterNavigation />
        </div>
        <div>
          <h3 className={headingClass}>Hours</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-espresso-ink">{businessInfo.hours}<br/><span className="text-charcoal-muted">{businessInfo.sundayHours}</span></p>
        </div>
        <div>
          <h3 className={headingClass}>Find us</h3>
          <address className="mt-3 text-[15px] leading-relaxed not-italic text-espresso-ink">{businessInfo.address}</address>
          <a className="btn btn-outline mt-4 px-4" href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border-hairline px-4 py-4 font-mono text-[11px] tracking-[0.04em] text-charcoal-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {businessInfo.name} · Southeast Nampa, Idaho</p>
        <nav aria-label="Site information" className="flex flex-wrap gap-x-5">
          <Link href="/privacy" className="navigation-control link-quiet inline-flex min-h-11 items-center font-medium text-primary">Privacy</Link>
          <Link href="/terms" className="navigation-control link-quiet inline-flex min-h-11 items-center font-medium text-primary">Site terms</Link>
        </nav>
      </div>
    </footer>
  );
}
