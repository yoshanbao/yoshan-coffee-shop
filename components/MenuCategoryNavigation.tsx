"use client";

import Link from "next/link";
import { useEffect, useId } from "react";
import { menuNavigationItems, type MenuView } from "@/lib/menu-navigation";
import { ScrollArrow } from "./ScrollArrow";
import { useScrollTrack } from "./hooks/useScrollTrack";

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
  const { trackRef, canScrollLeft, canScrollRight, scrollTo, updateEdges } = useScrollTrack();
  useEffect(() => {
    // Align the category bar after the destination renders, below the header.
    // Keep existing /menu#section links usable for direct section navigation.
    if (!window.location.hash) scrollToCategories();
  }, [activeCategory]);

  useEffect(() => {
    const track = trackRef.current;
    const active = track?.querySelector<HTMLElement>('[aria-current="page"]');
    if (track && active) {
      const trackBox = track.getBoundingClientRect();
      const activeBox = active.getBoundingClientRect();
      scrollTo(track.scrollLeft + activeBox.left - trackBox.left - (track.clientWidth - active.clientWidth) / 2, true);
      updateEdges();
    }
  }, [activeCategory, scrollTo, trackRef, updateEdges]);

  function advance(direction: number) {
    const track = trackRef.current;
    if (track) scrollTo(track.scrollLeft + direction * Math.min(300, track.clientWidth * 0.8));
  }

  const pill = "motion-control inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider";
  const selected = "border-primary bg-primary text-white";
  const idle = "border-hairline bg-white/70 text-menu-ink hover:border-primary hover:bg-pale-mint";

  return (
    <nav aria-label="Drink categories" className="sticky top-16 z-30 -mx-4 flex items-center gap-2 border-b border-hairline bg-menu-bg/95 px-4 py-2 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <ScrollArrow direction="left" label="Scroll categories left" controls={id} disabled={!canScrollLeft} onClick={() => advance(-1)} />
      <div className="relative min-w-0 flex-1">
        <div
          ref={trackRef}
          id={id}
          tabIndex={0}
          aria-label="Scroll drink categories"
          className="no-scrollbar relative flex gap-2 overflow-x-auto overscroll-x-contain px-2 py-2"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault(); advance(event.key === "ArrowLeft" ? -1 : 1);
            } else if (event.key === "Home" || event.key === "End") {
              event.preventDefault(); scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
            }
          }}
        >
          <Link href="/menu" scroll={false} onNavigate={scrollToCategories} aria-current={!activeCategory ? "page" : undefined} className={`${pill} ${!activeCategory ? selected : idle}`}>All drinks</Link>
          {menuNavigationItems.map((category) => (
            <Link key={category.slug} href={category.href} scroll={false} onNavigate={scrollToCategories} aria-current={activeCategory === category.slug ? "page" : undefined} className={`${pill} ${activeCategory === category.slug ? selected : idle}`}>
              {category.name}
            </Link>
          ))}
        </div>
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-menu-bg to-transparent transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-menu-bg to-transparent transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0"}`} />
      </div>
      <ScrollArrow direction="right" label="Scroll categories right" controls={id} disabled={!canScrollRight} onClick={() => advance(1)} />
    </nav>
  );
}
