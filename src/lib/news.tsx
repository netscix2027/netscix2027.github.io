import Link from "next/link";

// Single source of truth for announcements. The /news page renders the whole
// list; the homepage announcement bar and the header's News dot read the top
// of it, so adding an item here updates every surface at once.
//
// This file is .tsx rather than .ts because item bodies carry markup.

// `date` is what the page shows (same format as src/lib/dates.ts); `iso` is
// the machine-readable value for the <time> element. Both are written by hand
// so an announcement never shifts with the reader's time zone.
export type NewsItem = { iso: string; date: string; title: string; body: React.ReactNode };

// Newest first — this is the order the page renders in, and NEWS[0] is what
// the homepage announces.
//
// Each entry is a record of what was announced on its date, so leave published
// items alone when the underlying details change later: add a new item instead.
// That also means the dates quoted in an item's body are deliberately literal
// rather than read from src/lib/dates.ts, which always holds the current values.
export const NEWS: NewsItem[] = [
  {
    iso: "2026-10-07",
    date: "Oct 7, 2026",
    title: "Submission deadline extended to October 31, 2026",
    body: (
      <>
        The deadline for submitting extended abstracts has been extended to{" "}
        <strong className="text-ink">October 31, 2026</strong>. Acceptance notifications will be
        sent in two waves: submissions received up to October 10 will be notified on October 31,
        and those received afterwards on November 15. See the{" "}
        <Link href="/submissions" className="font-medium text-brand hover:underline">
          submission page
        </Link>{" "}
        for guidelines and templates.
      </>
    ),
  },
  {
    iso: "2026-10-01",
    date: "Oct 1, 2026",
    title: "Submission deadline extended to October 10, 2026",
    body: (
      <>
        The deadline for submitting extended abstracts has been extended to{" "}
        <strong className="text-ink">October 10, 2026</strong>. See the{" "}
        <Link href="/submissions" className="font-medium text-brand hover:underline">
          submission page
        </Link>{" "}
        for guidelines and templates.
      </>
    ),
  },
];

/** Drives the header's News dot — no news, no dot. */
export const HAS_NEWS = NEWS.length > 0;
