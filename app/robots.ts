import type { MetadataRoute } from "next";
import { shouldIndexSite, siteUrl } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndexSite) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/warm-editorial-craft", "/warm_editorial_craft", "/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
