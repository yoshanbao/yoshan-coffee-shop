"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Shared bounds, interruption, and motion for carousels and compact tab tracks. */
export function useScrollTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  const [edges, setEdges] = useState({ canScrollLeft: false, canScrollRight: false });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const next = {
      canScrollLeft: track.scrollLeft > 2,
      canScrollRight: track.scrollLeft < track.scrollWidth - track.clientWidth - 2,
    };
    setEdges((current) => current.canScrollLeft === next.canScrollLeft && current.canScrollRight === next.canScrollRight ? current : next);
  }, []);

  const stopAnimation = useCallback(() => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
    if (trackRef.current) trackRef.current.style.scrollSnapType = "";
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interrupt = stopAnimation;
    const setPreference = () => { reducedMotion.current = preference.matches; interrupt(); };
    setPreference();
    updateEdges();
    const resize = new ResizeObserver(() => { stopAnimation(); updateEdges(); });
    resize.observe(track);
    Array.from(track.children).forEach((child) => resize.observe(child));
    const mutation = new MutationObserver(() => {
      resize.disconnect();
      resize.observe(track);
      Array.from(track.children).forEach((child) => resize.observe(child));
      updateEdges();
    });
    mutation.observe(track, { childList: true });
    track.addEventListener("scroll", updateEdges, { passive: true });
    track.addEventListener("wheel", interrupt, { passive: true });
    track.addEventListener("touchstart", interrupt, { passive: true });
    track.addEventListener("pointerdown", interrupt, { passive: true });
    preference.addEventListener("change", setPreference);
    return () => {
      stopAnimation();
      resize.disconnect();
      mutation.disconnect();
      track.removeEventListener("scroll", updateEdges);
      track.removeEventListener("wheel", interrupt);
      track.removeEventListener("touchstart", interrupt);
      track.removeEventListener("pointerdown", interrupt);
      preference.removeEventListener("change", setPreference);
    };
  }, [stopAnimation, updateEdges]);

  const scrollTo = useCallback((left: number, instant = false) => {
    const track = trackRef.current;
    if (!track) return;
    const startingPosition = track.scrollLeft;
    const target = Math.max(0, Math.min(left, track.scrollWidth - track.clientWidth));
    stopAnimation();
    if (instant || reducedMotion.current) {
      track.scrollTo({ left: target, behavior: "instant" });
      updateEdges();
      return;
    }
    // A critically damped spring settles without overshooting the track's bounds.
    let position = startingPosition;
    let velocity = 0;
    let previous = performance.now();
    const started = previous;
    track.style.scrollSnapType = "none";
    track.scrollTo({ left: startingPosition, behavior: "instant" });
    const step = (now: number) => {
      const elapsed = Math.min((now - previous) / 1000, 0.032);
      previous = now;
      velocity += ((target - position) * 170 - velocity * 26) * elapsed;
      position += velocity * elapsed;
      track.scrollTo({ left: position, behavior: "instant" });
      if ((Math.abs(target - position) < 0.5 && Math.abs(velocity) < 4) || now - started > 1500) {
        track.scrollTo({ left: target, behavior: "instant" });
        animationRef.current = null;
        track.style.scrollSnapType = "";
        updateEdges();
      } else {
        animationRef.current = requestAnimationFrame(step);
      }
    };
    animationRef.current = requestAnimationFrame(step);
  }, [stopAnimation, updateEdges]);

  return { trackRef, ...edges, scrollTo, stopAnimation, updateEdges };
}
