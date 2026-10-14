"use client";

import Link from "next/link";
import { useEffect, useId } from "react";
import { menuNavigationItems, type MenuView } from "@/lib/menu-navigation";
import { useScrollTrack } from "./hooks/useScrollTrack";
import { useMenuCategoryScroll } from "./MenuCategoryScrollProvider";

function scrollToCategories() {
  const start = document.getElementById("menu-category-start");
  if (!start) return;
  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 64;
  window.scrollTo({
    top: Math.max(0, start.getBoundingClientRect().top + window.scrollY - headerHeight),
    behavior: "instant",
  });
}

export function MenuCategoryNavigation({ activeCategory }: { activeCategory?: MenuView }) {
  const id = useId();
  const { trackRef, canScrollLeft, canScrollRight, scrollTo } = useScrollTrack();
  const { requestScroll, consumeScroll } = useMenuCategoryScroll();
  const hasMoreCategories = canScrollLeft || canScrollRight;
  useEffect(() => {
    // Only a category click requests scrolling. Initial loads and browser Back
    // keep the normal page position, including direct /menu#section links.
    if (consumeScroll(activeCategory) && !window.location.hash) scrollToCategories();
  }, [activeCategory, consumeScroll]);

  const navigateToCategory = (category?: MenuView) => {
    if (category === activeCategory) {
      scrollToCategories();
    } else {
      requestScroll(category);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    const active = track?.querySelector<HTMLElement>('[aria-current="page"]');
    if (track && active) {
      const trackBox = track.getBoundingClientRect();
      const activeBox = active.getBoundingClientRect();
      scrollTo(track.scrollLeft + activeBox.left - trackBox.left - (track.clientWidth - active.clientWidth) / 2, true);
    }
  }, [activeCategory, scrollTo, trackRef]);

  const tab = "motion-control relative inline-flex min-h-12 shrink-0 snap-start items-center justify-center whitespace-nowrap px-3 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 sm:px-4 sm:text-[14px] lg:basis-[calc((100%-3.75rem)/6)] lg:snap-none lg:px-1 lg:text-[13px] lg:tracking-[0.04em]";
  const selected = "text-white after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-gold-accent after:content-['']";
  const idle = "text-white/85 hover:text-white";

  return (
    <nav aria-label="Drink categories" className="border-y border-white/15 bg-primary">
      <div className="relative">
        <div
          ref={trackRef}
          id={id}
          tabIndex={0}
          aria-label="Scroll drink categories"
          aria-describedby={hasMoreCategories ? `${id}-hint` : undefined}
          className="no-scrollbar relative flex snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain scroll-smooth px-1 lg:flex-wrap lg:justify-center lg:gap-x-3 lg:gap-y-1 lg:overflow-visible lg:py-2 lg:snap-none"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault(); scrollTo(event.currentTarget.scrollLeft + (event.key === "ArrowLeft" ? -1 : 1) * 220);
            } else if (event.key === "Home" || event.key === "End") {
              event.preventDefault(); scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
            }
          }}
        >
          <Link href="/menu" scroll={false} onNavigate={() => navigateToCategory()} aria-current={!activeCategory ? "page" : undefined} className={`${tab} ${!activeCategory ? selected : idle}`}>All drinks</Link>
          {menuNavigationItems.map((category) => (
            <Link key={category.slug} href={category.href} scroll={false} onNavigate={() => navigateToCategory(category.slug)} aria-current={activeCategory === category.slug ? "page" : undefined} className={`${tab} ${activeCategory === category.slug ? selected : idle}`}>
              {category.name}
            </Link>
          ))}
        </div>
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-primary to-transparent transition-opacity duration-200 lg:hidden ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-primary to-transparent transition-opacity duration-200 lg:hidden ${canScrollRight ? "opacity-100" : "opacity-0"}`} />
      </div>
      {hasMoreCategories && (
        <p id={`${id}-hint`} className="pb-2 pt-1 text-center text-[13px] font-medium tracking-wide text-white/75 lg:hidden">
          {canScrollLeft && !canScrollRight ? "Swipe right to see earlier categories" : "Swipe to see more categories"} <span aria-hidden="true">·</span> Tap a category to view drinks
        </p>
      )}
    </nav>
  );
}
