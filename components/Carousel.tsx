"use client";

import { Children, useId, useRef, useState, type ReactNode, type PointerEvent } from "react";
import { ScrollArrow } from "./ScrollArrow";
import { useScrollTrack } from "./hooks/useScrollTrack";

type CarouselProps = { label: string; children: ReactNode; inverse?: boolean };

/** Server-rendered cards can be passed as children; only the track needs JavaScript. */
export function Carousel({ label, children, inverse = false }: CarouselProps) {
  const id = useId();
  const slides = Children.toArray(children);
  const { trackRef, canScrollLeft, canScrollRight, scrollTo, stopAnimation } = useScrollTrack();
  const pointer = useRef<{ id: number; x: number; scrollLeft: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const [dragging, setDragging] = useState(false);

  function advance(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const distance = first ? first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap) : 300;
    scrollTo(track.scrollLeft + direction * distance);
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    const current = pointer.current;
    pointer.current = null;
    if (!current?.moved) return;
    const track = event.currentTarget;
    setDragging(false);
    if (track.hasPointerCapture(current.id)) track.releasePointerCapture(current.id);
    const padding = parseFloat(getComputedStyle(track).paddingLeft);
    const nearest = Array.from(track.children).reduce((best, child) => {
      const position = (child as HTMLElement).offsetLeft - padding;
      return Math.abs(position - track.scrollLeft) < Math.abs(best - track.scrollLeft) ? position : best;
    }, 0);
    scrollTo(nearest);
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="min-w-0">
      <div
        ref={trackRef}
        id={id}
        tabIndex={0}
        aria-label={`${label}: swipe, drag, or use the arrow keys to browse`}
        className={`no-scrollbar relative flex snap-x snap-mandatory scroll-px-2 gap-4 overflow-x-auto overscroll-x-contain px-2 pb-7 pt-3 sm:gap-6 ${dragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            advance(event.key === "ArrowLeft" ? -1 : 1);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
          }
        }}
        onPointerDown={(event) => {
          suppressClick.current = false;
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          pointer.current = { id: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, moved: false };
        }}
        onPointerMove={(event) => {
          const current = pointer.current;
          if (!current || event.pointerId !== current.id) return;
          if (event.buttons !== 1) { finishDrag(event); return; }
          const delta = event.clientX - current.x;
          if (!current.moved && Math.abs(delta) < 8) return;
          if (!current.moved) {
            stopAnimation();
            current.moved = true;
            suppressClick.current = true;
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.style.scrollSnapType = "none";
          }
          event.preventDefault();
          event.currentTarget.scrollTo({ left: current.scrollLeft - delta, behavior: "instant" });
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {slides.map((slide, index) => (
          <div key={index} data-carousel-slide role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`} className="min-w-0 shrink-0 grow-0 basis-[85%] snap-start sm:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)]">
            {slide}
          </div>
        ))}
      </div>
      {/* Extra bottom padding on the track keeps card shadows from being clipped; spacing to the controls is unchanged. */}
      <div className="flex items-center justify-between gap-4 px-2">
        <p className={`text-xs ${inverse ? "text-on-primary-container" : "text-charcoal-muted"}`}>Swipe or use the arrows to explore.</p>
        <div className="flex shrink-0 gap-2">
          <ScrollArrow direction="left" label={`Previous ${label}`} controls={id} disabled={!canScrollLeft} onClick={() => advance(-1)} inverse={inverse} />
          <ScrollArrow direction="right" label={`Next ${label}`} controls={id} disabled={!canScrollRight} onClick={() => advance(1)} inverse={inverse} />
        </div>
      </div>
    </div>
  );
}
