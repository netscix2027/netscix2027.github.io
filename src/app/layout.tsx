import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HashScroller from "@/components/HashScroller";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  // Lets Next resolve relative metadata URLs against the published origin,
  // which is what makes the per-page canonical below absolute.
  metadataBase: new URL(SITE_URL),
  title: "NetSciX 2027 — International School and Conference on Network Science",
  description:
    "NetSciX 2027 — International School and Conference on Network Science. January 24–27, 2027, Hong Kong SAR.",
  // "./" resolves to each page's own URL, so every page gets a canonical
  // pointing at itself rather than all of them claiming the homepage.
  alternates: { canonical: "./" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <HashScroller />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
