import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/warm-editorial-craft" },
};

export default function DesignReferenceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
