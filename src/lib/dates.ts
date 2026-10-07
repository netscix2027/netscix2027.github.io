// Single source of truth for conference deadlines.
// Source: organizers' "website_updates_august07" brief.
// Every page selects via `group`: /key-dates renders all of them, while
// /submissions and /registration each render the two groups they own.

export type Track = "submission" | "registration";

/** The card blocks the pages group by. "conference" is the event itself, rendered apart. */
export type Group =
  | "submission"
  | "workshop"
  | "notification"
  | "registration"
  | "travel"
  | "conference";

export type Milestone = {
  date: string;
  label: string;
  tracks: Track[];
  group: Group;
  /**
   * The date this milestone used to carry. Rendered struck through next to the
   * current one, so a change stays visible to people who planned around the
   * old date instead of silently disappearing.
   */
  previousDate?: string;
  /** Small clarifying line under the label, where the date alone is ambiguous. */
  note?: string;
  /** Renders as a filled marker in the timeline — the conference itself. */
  event?: boolean;
};

// Chronological: the section pages render this order straight down a timeline.
export const MILESTONES: Milestone[] = [
  {
    date: "Sep 1, 2026",
    label: "Submissions open",
    tracks: ["submission"],
    group: "submission",
  },
  {
    date: "Oct 31, 2026",
    previousDate: "Oct 10, 2026",
    label: "Submissions close",
    tracks: ["submission"],
    group: "submission",
  },
  {
    date: "Oct 31, 2026",
    label: "Proposal submissions close",
    tracks: ["submission"],
    group: "workshop",
  },
  {
    date: "Oct 31, 2026",
    label: "First wave acceptance notification",
    note: "Covers submissions received up to Oct 10, 2026.",
    tracks: ["submission"],
    group: "notification",
  },
  {
    date: "Nov 1, 2026",
    label: "Early registration opens",
    tracks: ["registration"],
    group: "registration",
  },
  {
    date: "Nov 15, 2026",
    label: "Second wave acceptance notification",
    tracks: ["submission"],
    group: "notification",
  },
  {
    date: "Nov 15, 2026",
    label: "Travel support decision",
    tracks: ["registration"],
    group: "travel",
  },
  {
    date: "Nov 30, 2026",
    label: "Early registration closes",
    tracks: ["registration"],
    group: "registration",
  },
  {
    date: "Jan 24 – 27, 2027",
    label: "Conference & schools (Hong Kong SAR)",
    tracks: ["submission", "registration"],
    group: "conference",
    event: true,
  },
];

// Order and titles of the blocks. /key-dates renders all of them and the
// conference is absent on purpose: that page renders it as its own banner
// below the blocks. /submissions and /registration filter this list.
//
// This order is also the layout: /key-dates runs three across at lg, so the
// first three below share a row and the last two sit under them.
export const GROUPS: { id: Group; title: string }[] = [
  { id: "submission", title: "Submissions" },
  { id: "notification", title: "Acceptance" },
  { id: "registration", title: "Registration" },
  { id: "workshop", title: "Themed Workshop Proposals" },
  { id: "travel", title: "Travel support" },
];

/** Currently unused — kept with `Track`/`tracks` in case per-track lists return. */
export function milestonesFor(track: Track): Milestone[] {
  return MILESTONES.filter((m) => m.tracks.includes(track));
}

export function milestonesInGroup(group: Group): Milestone[] {
  return MILESTONES.filter((m) => m.group === group);
}

export const AOE_NOTE = "All deadlines are 23:59 Anywhere on Earth (AoE).";
