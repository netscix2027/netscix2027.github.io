import PageHero from "@/components/PageHero";
import MilestoneCard from "@/components/MilestoneCard";
import { AOE_NOTE, GROUPS, milestonesInGroup } from "@/lib/dates";

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
          {/* Three across at lg: with five blocks that splits 3 + 2, where four
              across would strand the fifth alone on its own row. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {GROUPS.map((g) => (
              <MilestoneCard
                key={g.id}
                title={g.title}
                milestones={milestonesInGroup(g.id)}
              />
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
