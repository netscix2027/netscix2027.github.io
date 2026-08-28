import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Emits /robots.txt at build time. Crawling was already permitted (a missing
// robots.txt means "allow everything"); the point of this file is the sitemap
// pointer, which is how a crawler finds the sitemap without being told.
// Required by `output: "export"` — without it the build refuses to prerender
// this route.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
