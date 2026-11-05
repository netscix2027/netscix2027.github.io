import Link from "next/link";

// Single source of truth for announcements. The /news page renders the whole
// list. The homepage bar shows only the entries marked `announce`, and the
// header's News dot is on whenever the list is non-empty.
//
// This file is .tsx rather than .ts because item bodies carry markup.

// `date` is what the page shows (same format as src/lib/dates.ts); `iso` is
// the machine-readable value for the <time> element. Both are written by hand
// so an announcement never shifts with the reader's time zone.
// `announce` puts the item on the homepage bar. The bar is not "the newest
// few": items are chosen one by one, so it can skip entries in between.
export type NewsItem = {
  iso: string;
  date: string;
  title: string;
  body: React.ReactNode;
  announce?: boolean;
};

// Newest first — this is the order the page renders in.
//
// Each entry is a record of what was announced on its date, so leave published
// items alone when the underlying details change later: add a new item instead.
// That also means the dates quoted in an item's body are deliberately literal
// rather than read from src/lib/dates.ts, which always holds the current values.
export const NEWS: NewsItem[] = [
  {
    iso: "2026-11-05",
    date: "Nov 5, 2026",
    title: "Invitation letter instructions are available",
    announce: true,
    body: (
      <>
        Instructions for requesting an invitation letter are now available. See{" "}
        <Link href="/more-info#visa" className="font-medium text-brand hover:underline">
          visa support
        </Link>{" "}
        for what to send.
      </>
    ),
  },
  {
    iso: "2026-11-02",
    date: "Nov 2, 2026",
    title: "First-wave notifications postponed to November 3, 2026",
    body: (
      <>
        Due to the large number of submissions and the organizational challenges this imposes,
        delivery of acceptance notifications for first-wave submissions has been postponed to{" "}
        <strong className="text-ink">November 3, 2026</strong>.
        <br />
        The Organizing Committee would like to offer its apologies for the delay.
      </>
    ),
  },
  {
    iso: "2026-11-01",
    date: "Nov 1, 2026",
    title: "Registrations are now open",
    announce: true,
    body: (
      <>
        Registration for NetSciX 2027 is now open. See{" "}
            <Link href="/registration#register" className="font-medium text-brand hover:underline">
          registration
        </Link>{" "}
        for fees and how to sign up.
      </>
    ),
  },
  {
    iso: "2026-10-12",
    date: "Oct 12, 2026",
    title: "Travel support applications are open",
    body: (
      <>
        Applications for travel support are now open. See{" "}
        <Link
          href="/submissions#travel-support"
          className="font-medium text-brand hover:underline"
        >
          travel support
        </Link>{" "}
        for eligibility and how to apply.
      </>
    ),
  },
  {
    iso: "2026-10-08",
    date: "Oct 8, 2026",
    title: "Call for themed workshop proposals is open",
    body: (
      <>
        NetSciX 2027 invites proposals for interactive, themed workshops — hands-on tutorials,
        symposia, guided explorations, collaborative working groups, and other formats that get
        the community engaging with each other. Proposals run to at most three pages and close{" "}
        <strong className="text-ink">October 31, 2026</strong>. See the{" "}
        <Link
          href="/submissions#workshops"
          className="font-medium text-brand hover:underline"
        >
          call for proposals
        </Link>{" "}
        for the formats we welcome, what a proposal should contain, and where to send it.
      </>
    ),
  },
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
