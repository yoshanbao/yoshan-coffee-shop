"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavigationLink } from "./NavigationLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu & Specialties" },
  { href: "/story", label: "Our Story" },
  { href: "/visit", label: "Visit Us" },
];

export function FooterNavigation() {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | null>(null);
  const pendingDestination = useRef<string | null>(null);

  useEffect(() => {
    // Retain a footer selection for its own navigation, then clear it when
    // another part of the site navigates to a different page.
    setSelected(pendingDestination.current === pathname ? pathname : null);
    pendingDestination.current = null;
  }, [pathname]);

  return (
    <nav aria-label="Footer navigation" className="mt-3 flex flex-col gap-2 text-sm">
      {links.map((link) => (
        <NavigationLink
          key={link.href}
          href={link.href}
          variant="footer"
          selected={selected === link.href}
          onClick={(event) => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            pendingDestination.current = pathname === link.href ? null : link.href;
            setSelected(link.href);
          }}
        >
          {link.label}
        </NavigationLink>
      ))}
    </nav>
  );
}
