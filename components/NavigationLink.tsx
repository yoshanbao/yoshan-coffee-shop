"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";

const styles = {
  desktop: "min-h-11 px-3 text-xs font-bold uppercase tracking-wider",
  mobile: "min-h-12 px-4 py-3 text-lg font-semibold",
  footer: "min-h-11 w-fit max-w-full px-3 py-2 text-sm font-semibold",
};

export function NavigationLink({ href, children, variant = "desktop", onClick, selected = false }: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selected?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      data-selected={(variant === "footer" ? selected : active) || undefined}
      className={`navigation-link inline-flex items-center rounded-lg ${styles[variant]}`}
    >
      <span className="navigation-link-label relative">{children}</span>
    </Link>
  );
}
