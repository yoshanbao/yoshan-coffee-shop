import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { featuredCategories } from "@/lib/featured-categories";

export function MenuPreview() {
  return (
    <section className="border-b border-border-hairline bg-primary py-12 text-on-primary sm:py-16 lg:py-24" id="menu">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg tracking-tight text-on-primary">
            Crafted drinks for your daily routine.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-md font-body-md text-on-primary-container">
            Carefully prepared morning coffees, refreshing afternoon specialties, and flavorful specialty blends in Southeast Nampa.
          </p>
        </div>

        <Carousel label="drink categories" inverse>
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/menu?category=${category.slug}`}
              className="carousel-card group flex h-full min-h-72 flex-col rounded-lg border border-border-hairline bg-canvas-white p-6 text-espresso-ink shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:scale-[1.02] active:scale-[0.98] hover:border-peach-accent hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peach-accent"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-pale-mint text-primary" aria-hidden="true">
                  <span className="material-symbols-outlined text-[25px]">{category.icon}</span>
                </span>
                <span className="material-symbols-outlined text-[20px] text-charcoal-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">north_east</span>
              </div>
              <h3 className="mb-2 text-headline-sm font-headline-sm text-espresso-ink">{category.name}</h3>
              <p className="flex-1 text-body-sm font-body-sm leading-relaxed text-charcoal-muted">{category.description}</p>
              <span className="mt-6 border-t border-border-hairline pt-5 text-label-caps font-semibold uppercase tracking-wider text-primary">
                {category.label}
              </span>
            </Link>
          ))}
        </Carousel>

        <div className="flex justify-center pt-8">
          <Link href="/menu" className="motion-control duration-300 ease-out inline-flex min-h-11 items-center justify-center gap-2 rounded bg-canvas-white px-6 py-3.5 text-label-caps font-label-caps uppercase tracking-wider text-primary transition-colors hover:bg-pale-mint">
            Explore the Menu <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
