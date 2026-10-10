"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Animate visible sections without changing attributes owned by React hydration. */
export function ScrollReveals({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = Array.from(root.current?.querySelectorAll<HTMLElement>("main section") ?? []);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const section = entry.target as HTMLElement;
          observer.unobserve(entry.target);
          if (preference.matches || section.contains(document.activeElement) || typeof section.animate !== "function") continue;
          const animation = section.animate(
            [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          );
          animations.add(animation);
          animation.addEventListener("finish", () => animations.delete(animation), { once: true });
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    for (const section of sections) {
      if (!preference.matches && section.getBoundingClientRect().top > window.innerHeight) {
        observer.observe(section);
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
