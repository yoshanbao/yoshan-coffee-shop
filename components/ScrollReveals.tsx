"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Reveal selected editorial text without moving full sections or menu content. */
export function ScrollReveals({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Use editorial motion only on the three browse-oriented pages.
    if (!["/", "/story", "/visit"].includes(window.location.pathname)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const text = Array.from(root.current?.querySelectorAll<HTMLElement>("main section h2, main section h2 + p") ?? []);
    if (!text.length || typeof IntersectionObserver === "undefined") return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          observer.unobserve(entry.target);
          if (preference.matches || element.closest("section")?.contains(document.activeElement) || typeof element.animate !== "function") continue;
          const animation = element.animate(
            [{ opacity: 0.45, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 380, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
          );
          animations.add(animation);
          animation.addEventListener("finish", () => animations.delete(animation), { once: true });
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -48px 0px" });
    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    for (const element of text) {
      if (!preference.matches && element.getBoundingClientRect().top > window.innerHeight) {
        observer.observe(element);
      }
    }
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stopMotion);
      animations.forEach((animation) => animation.cancel());
    };
  }, [children]);

  return <div ref={root} className="min-w-0">{children}</div>;
}
