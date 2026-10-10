import type { Metadata } from "next";

const siteName = "A&J’s Bean Machine";

function getSiteOrigin(): URL {
  const configured = process.env.SITE_URL?.trim();
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const candidate = configured || (productionHost ? `https://${productionHost}` : "http://localhost:3000");

  try {
    const url = new URL(candidate);
    const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    const validProtocol = url.protocol === "https:" || (local && url.protocol === "http:");
    if (!validProtocol || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
      throw new Error("Invalid site origin");
    }
    return url;
  } catch {
    throw new Error("SITE_URL must be an HTTPS origin such as https://example.com, without a path, query, or credentials. Localhost may use HTTP for development.");
  }
}

export const siteUrl = getSiteOrigin();
export const hasPublicSiteUrl = !["localhost", "127.0.0.1", "[::1]"].includes(siteUrl.hostname);
export const shouldIndexSite = hasPublicSiteUrl && process.env.NODE_ENV === "production" && !["preview", "development"].includes(process.env.VERCEL_ENV || "");

/** Layout metadata preserves the root title template while setting route URLs and previews. */
export function routeMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = title === siteName ? `${siteName} | Nampa Coffee` : `${title} | ${siteName}`;
  return {
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title: socialTitle,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteName} — coffee and handcrafted drinks in Southeast Nampa, Idaho` }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { ...routeMetadata(title, description, path), title };
}
