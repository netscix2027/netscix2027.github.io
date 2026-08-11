import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { AOE_NOTE, MILESTONES } from "@/lib/dates";

export const metadata = { title: "Key Dates | NetSciX 2027" };

export default function KeyDatesPage() {
  return (
    <>
      <PageHero
        title="Key Dates"
        subtitle="Submission deadlines and registration milestones for NetSciX 2027."
        bgImage="/images/program-bg.jpg"
      />

      {/* Milestones timeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl font-bold text-ink mb-8">Important Dates</h2>
          <Timeline items={MILESTONES} />
          <p className="mt-10 text-sm text-muted">{AOE_NOTE}</p>
        </div>
      </section>
    </>
  );
}
