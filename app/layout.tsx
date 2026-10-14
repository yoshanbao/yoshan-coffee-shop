import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollReveals } from "@/components/ScrollReveals";
import { Footer } from "@/components/Footer";
import { businessInfo } from "@/lib/business-info";
import { pageMetadata, shouldIndexSite, siteUrl } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata("A&J’s Bean Machine", "Coffee, chai, matcha, and handcrafted drinks at 3209 S Happy Valley Rd in Southeast Nampa, Idaho.", "/"),
  metadataBase: siteUrl,
  title: { default: "A&J’s Bean Machine", template: "%s | A&J’s Bean Machine" },
  applicationName: businessInfo.name,
  robots: { index: shouldIndexSite, follow: shouldIndexSite },
};

export const viewport: Viewport = { themeColor: "#104141", colorScheme: "light" };

// Only confirmed business details belong in search data. Unverified ratings are
// not included in LocalBusiness structured data.
const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": new URL("/#business", siteUrl).href,
  name: businessInfo.name,
  url: siteUrl.href,
  description: "Coffee and handcrafted drinks in Southeast Nampa, Idaho.",
  image: new URL("/images/shop_house_front.jpg", siteUrl).href,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3209 S Happy Valley Rd",
    addressLocality: "Nampa",
    addressRegion: "ID",
    postalCode: "83686",
    addressCountry: "US",
  },
  hasMap: businessInfo.mapsUrl,
  hasMenu: new URL("/menu", siteUrl).href,
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "06:30",
    closes: "18:00",
  }],
  sameAs: [businessInfo.facebookUrl, businessInfo.instagramUrl],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..900;1,300..900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-w-0 overflow-x-clip antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData).replace(/</g, "\\u003c") }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-canvas-white focus:px-4 focus:py-3 focus:font-semibold focus:text-espresso-ink">
          Skip to content
        </a>
        <Navbar />
        <ScrollReveals>{children}</ScrollReveals>
        <Footer />
      </body>
    </html>
  );
}
