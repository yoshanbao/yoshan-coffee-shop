"use client";

import { createContext, useCallback, useContext, useMemo, useRef, type ReactNode } from "react";
import type { MenuView } from "@/lib/menu-navigation";

type CategoryScrollIntent = {
  requestScroll: (category?: MenuView) => void;
  consumeScroll: (category?: MenuView) => boolean;
};

const CategoryScrollContext = createContext<CategoryScrollIntent | null>(null);

/** Keeps an explicit category click across the Menu's separate route pages. */
export function MenuCategoryScrollProvider({ children }: { children: ReactNode }) {
  const destination = useRef<MenuView | "all" | null>(null);
  const requestScroll = useCallback((category?: MenuView) => {
    destination.current = category ?? "all";
  }, []);
  const consumeScroll = useCallback((category?: MenuView) => {
    if (destination.current !== (category ?? "all")) return false;
    destination.current = null;
    return true;
  }, []);
  const value = useMemo(() => ({ requestScroll, consumeScroll }), [requestScroll, consumeScroll]);

  return <CategoryScrollContext.Provider value={value}>{children}</CategoryScrollContext.Provider>;
}

export function useMenuCategoryScroll() {
  const intent = useContext(CategoryScrollContext);
  if (!intent) throw new Error("Menu category navigation requires MenuCategoryScrollProvider.");
  return intent;
}
