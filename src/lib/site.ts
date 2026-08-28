// Canonical origin of the published site. Used for metadataBase (canonical
// and Open Graph URLs), the sitemap and robots.txt. Update this if the site
// ever moves to a custom domain.
export const SITE_URL = "https://netscix2027.github.io";

// Routes listed in the sitemap. Paths carry a trailing slash to match
// `trailingSlash: true` in next.config.mjs, so the sitemap agrees with the
// canonical URLs and with what the export actually serves.
//
// /program is deliberately absent: it is a placeholder that nothing links to
// (the nav consolidates it into /more-info), so advertising it to crawlers
// would only offer them a thin, orphaned page.
export const SITEMAP_PATHS = [
  "/",
  "/key-dates/",
  "/speakers/",
  "/abstracts/",
  "/registration/",
  "/about/",
  "/more-info/",
] as const;
