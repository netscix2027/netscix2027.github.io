import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_PATHS } from "@/lib/site";

// Emits /sitemap.xml at build time (static export supports this route).
// Submit it in Google Search Console — it is the main discovery aid for a
// site with few inbound links.
//
// Only <loc> is emitted: Google ignores <priority> and <changefreq>, and a
// build-time <lastmod> would claim the content changed on every deploy.
// Required by `output: "export"` — without it the build refuses to prerender
// this route.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
