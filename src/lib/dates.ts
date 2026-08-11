// Single source of truth for conference deadlines.
// Source: organizers' "website_updates_august07" brief.
// The submission/registration pages render subsets of this list via `track`.

export type Track = "submission" | "registration";

export type Milestone = {
  date: string;
  label: string;
  tracks: Track[];
  /** Renders as a filled marker in the timeline — the conference itself. */
  event?: boolean;
};

export const MILESTONES: Milestone[] = [
  { date: "Sep 1, 2026", label: "Submissions open", tracks: ["submission"] },
  { date: "Oct 1, 2026", label: "Submissions close", tracks: ["submission"] },
  { date: "Oct 31, 2026", label: "Acceptance notification", tracks: ["submission"] },
  { date: "Nov 1, 2026", label: "Early registration opens", tracks: ["registration"] },
  { date: "Nov 15, 2026", label: "Travel support decision", tracks: ["registration"] },
  { date: "Nov 30, 2026", label: "Early registration closes", tracks: ["registration"] },
  {
    date: "Jan 24 – 27, 2027",
    label: "Conference & schools (Hong Kong SAR)",
    tracks: ["submission", "registration"],
    event: true,
  },
];

export function milestonesFor(track: Track): Milestone[] {
  return MILESTONES.filter((m) => m.tracks.includes(track));
}

export const AOE_NOTE = "All deadlines are 23:59 Anywhere on Earth (AoE).";
