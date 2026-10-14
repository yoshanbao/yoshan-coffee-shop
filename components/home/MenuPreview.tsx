import Link from "next/link";
import { featuredCategories } from "@/lib/featured-categories";

export function MenuPreview() {
  return (
    <section id="menu" className="border-b border-border-hairline bg-canvas-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <span className="eyebrow">The menu</span>
            <h2 className="mt-3 font-editorial text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold leading-[1.14] tracking-[-0.045em] text-espresso-ink">Crafted drinks for your daily routine.</h2>
          </div>
          <p className="max-w-[510px] text-[16px] leading-[1.7] text-charcoal-muted">Carefully prepared morning coffees, refreshing afternoon specialties, and flavorful specialty blends in Southeast Nampa.</p>
        </div>
        <ul className="mt-10 grid gap-x-14 border-t border-border-hairline sm:grid-cols-2">
          {featuredCategories.map((category) => (
            <li key={category.slug} className="border-b border-border-hairline">
              <Link href={`/menu?category=${category.slug}`} className="group flex min-h-[104px] items-center justify-between gap-5 py-5 text-espresso-ink">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">{category.label}</span>
                  <h3 className="mt-1 font-editorial text-[25px] font-bold leading-tight tracking-[-0.04em] transition-colors group-hover:text-primary">{category.name}</h3>
                  <p className="mt-1 text-[15px] leading-[1.55] text-charcoal-muted">{category.description}</p>
                </div>
                <span aria-hidden="true" className="shrink-0 text-xl text-primary transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Link href="/menu" className="btn btn-primary px-7">Explore the Menu <span aria-hidden="true" className="ml-1">→</span></Link>
        </div>
      </div>
    </section>
  );
}
