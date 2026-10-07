import PageHero from "@/components/PageHero";
import {
  AOE_NOTE,
  GROUPS,
  type Milestone,
  milestonesInGroup,
} from "@/lib/dates";

export const metadata = { title: "Key Dates | NetSciX 2027" };

const CONFERENCE = milestonesInGroup("conference");

export default function KeyDatesPage() {
  return (
    <>
      <PageHero
        title="Key Dates"
        subtitle="Submission deadlines and registration milestones for NetSciX 2027."
        bgImage="/images/program-bg.jpg"
      />

      {/* Dates grouped by what they belong to, rather than one long timeline:
          most readers come looking for one group and ignore the rest. */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* No section heading: the hero already says "Key Dates". */}
          {/* Four blocks across at lg so none is left stranded on its own row. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
            {GROUPS.map((g) => (
              <article
                key={g.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold text-ink">{g.title}</h3>
                <dl className="mt-5 space-y-5">
                  {milestonesInGroup(g.id).map((m) => (
                    <div key={m.label}>
                      <dt className="font-mono text-sm uppercase tracking-wide text-brand">
                        <DateValue milestone={m} />
                      </dt>
                      <dd className="mt-1 text-ink">
                        {m.label}
                        {m.note && (
                          <span className="mt-1 block text-sm text-muted">{m.note}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          {CONFERENCE.map((m) => (
            <div
              key={m.label}
              className="mt-6 rounded-lg bg-ink px-6 py-8 text-center text-white shadow-sm"
            >
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/70">
                {m.date}
              </p>
              <p className="mt-2 font-serif text-2xl font-bold">{m.label}</p>
            </div>
          ))}

          <p className="mt-10 text-sm text-muted">{AOE_NOTE}</p>
        </div>
      </section>
    </>
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
