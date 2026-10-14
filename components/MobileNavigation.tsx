"use client";

import { NavigationLink } from "./NavigationLink";
import { useEffect, useRef, useState } from "react";

export function MobileNavigation({ links, mapsUrl }: {
  links: { href: string; label: string }[];
  mapsUrl: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function finishClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    dialogRef.current?.close();
    setOpen(false);
    setClosing(false);
  }

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setClosing(false);
    // Focus the settled panel before starting its entry animation. Focusing an
    // offscreen, transformed button can otherwise scroll the dialog sideways.
    dialog.showModal();
    closeButtonRef.current?.focus({ preventScroll: true });
    setOpen(true);
  }

  function closeMenu() {
    if (closing || !dialogRef.current?.open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    setClosing(true);
    closeTimer.current = setTimeout(finishClose, 200);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) finishClose(); };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        onClick={openMenu}
        className="navigation-control navigation-control-outlined inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline bg-canvas-white text-primary shadow-card"
      >
        <span className="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const targets = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([tabindex="-1"])'));
          const first = targets[0];
          const last = targets[targets.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => { setOpen(false); setClosing(false); }}
        className={`mobile-menu-dialog fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-clip bg-transparent p-0 text-espresso-ink backdrop:bg-espresso-ink/40 backdrop:backdrop-blur-sm ${closing ? "mobile-menu-closing" : open ? "mobile-menu-opening" : ""}`}
      >
        <div className="relative h-full">
          <button type="button" tabIndex={-1} aria-label="Close navigation backdrop" onClick={closeMenu} className="absolute inset-0 h-full w-full cursor-default" />
          <div className="mobile-menu-panel absolute inset-y-0 right-0 flex h-full w-[min(90vw,24rem)] flex-col overflow-y-auto bg-canvas-white px-6 py-5 shadow-xl">
            <div className="flex items-center justify-between gap-4 border-b border-border-hairline pb-5">
              <h2 id="mobile-navigation-title" className="font-editorial text-[20px] font-bold tracking-[-0.04em]">Explore A&amp;J’s</h2>
              <button ref={closeButtonRef} type="button" aria-label="Close navigation menu" onClick={closeMenu} className="navigation-control navigation-control-outlined inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-hairline bg-canvas-white text-primary shadow-card">
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="my-6 flex flex-col gap-2">
              {links.map((link) => (
                <NavigationLink key={link.href} href={link.href} variant="mobile" onClick={closeMenu}>
                  {link.label}
                </NavigationLink>
              ))}
            </nav>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="btn btn-primary mt-auto min-h-12">
              <span className="material-symbols-outlined" aria-hidden="true">directions</span>
              Get Directions
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
