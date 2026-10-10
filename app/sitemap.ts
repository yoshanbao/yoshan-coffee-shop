import type { MetadataRoute } from "next";
import { hasPublicSiteUrl, siteUrl } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasPublicSiteUrl) return [];
  const publicPages = ["/", "/menu", "/menu/lemonade", "/menu/customize", "/story", "/visit", "/privacy", "/terms"];
  return publicPages.map((path) => ({ url: new URL(path, siteUrl).href }));
}
