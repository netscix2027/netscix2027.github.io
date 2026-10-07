import type { Milestone } from "@/lib/dates";

// One card of dated milestones, shared by /key-dates and the Deadlines
// sections of /submissions and /registration. The grid that lays several cards
// out stays with the page: they differ in how many groups they show.
export default function MilestoneCard({
  title,
  milestones,
}: {
  title: string;
  milestones: Milestone[];
}) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-xl font-bold text-ink">{title}</h3>
      <dl className="mt-5 space-y-5">
        {milestones.map((m) => (
          <div key={m.label}>
            <dt className="font-mono text-sm uppercase tracking-wide text-brand">
              <DateValue milestone={m} />
            </dt>
            <dd className="mt-1 text-ink">
              {m.label}
              {m.note && <span className="mt-1 block text-sm text-muted">{m.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

// A changed date keeps the old one struck through beside it, so readers who
// planned around it can see what moved rather than wondering.
function DateValue({ milestone }: { milestone: Milestone }) {
  if (!milestone.previousDate) return <>{milestone.date}</>;

  // Each date is kept whole: in a narrow card the pair wraps between them
  // rather than splitting a date across lines.
  return (
    <>
      <del className="mr-2 whitespace-nowrap text-muted">{milestone.previousDate}</del>
      <span className="whitespace-nowrap">{milestone.date}</span>
      <span className="sr-only"> (extended)</span>
    </>
  );
}
