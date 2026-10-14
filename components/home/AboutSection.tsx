import Image from "next/image";
import Link from "next/link";

const details = [
  { title: "Friendly Approachable Service", text: "Stop in for a friendly welcome and a drink made for your day." },
  { title: "Convenient Southeast Nampa Location", text: "Right on S Happy Valley Rd, easy to stop by on your way to work or through the neighborhood." },
  { title: "Find a drink for your day", text: "Explore coffee, chai, matcha, infused Red Bull drinks, and sodas with sizes and prices listed on the menu." },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border-hairline bg-canvas-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <figure>
          <div className="relative aspect-[5/4] overflow-hidden bg-sand-surface">
            <Image src="/images/shop_house_front.jpg" alt="A&J’s Bean Machine storefront in Southeast Nampa" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-charcoal-muted">The neighborhood stand · Southeast Nampa</figcaption>
        </figure>
        <div>
          <span className="eyebrow">Neighborhood roots</span>
          <h2 className="mt-3 max-w-[580px] font-editorial text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold leading-[1.14] tracking-[-0.045em] text-espresso-ink">Coffee served with friendly local service.</h2>
          <p className="mt-5 max-w-[530px] text-[16px] leading-[1.7] text-charcoal-muted">At A&amp;J’s Bean Machine, every order is met with welcoming staff, efficient preparation, and an easygoing atmosphere right on S Happy Valley Road.</p>
          <div className="mt-7 border-t border-border-hairline">
            {details.map((detail) => (
              <div key={detail.title} className="grid gap-1 border-b border-border-hairline py-3 sm:grid-cols-[190px_1fr] sm:gap-5">
                <h3 className="text-[15px] font-semibold leading-[1.45] text-espresso-ink">{detail.title}</h3>
                <p className="text-[15px] leading-[1.55] text-charcoal-muted">{detail.text}</p>
              </div>
            ))}
          </div>
          <Link href="/story" className="navigation-control mt-6 inline-flex min-h-11 items-center border-b border-primary/50 text-[15px] font-semibold text-primary">Read our story <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </div>
    </section>
  );
}
