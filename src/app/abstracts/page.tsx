import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import Timeline from "@/components/Timeline";
import ComingSoonPanel from "@/components/ComingSoonPanel";
import { Badge } from "@/components/ui/badge";
import { AOE_NOTE, milestonesFor } from "@/lib/dates";

export const metadata = { title: "Submission | NetSciX 2027" };

const DEADLINES = milestonesFor("submission");

export default function AbstractsPage() {
  return (
    <>
      <PageHero
        title="Submission"
        subtitle="Share your work with the network science community at NetSciX 2027."
        bgImage="/images/program-bg.jpg"
      />

      <SectionNav
        items={[
          { id: "deadlines", label: "Deadlines" },
          { id: "guidelines", label: "Guidelines" },
          { id: "submit", label: "Submit" },
        ]}
      />

      {/* Deadlines */}
      <section id="deadlines" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Badge variant="amber">Calendar</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Deadlines</h2>
          <p className="mt-3 text-gray-600">{AOE_NOTE}</p>

          <div className="mt-10">
            <Timeline items={DEADLINES} accent="amber" />
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="emerald">How to submit</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            Submission guidelines
          </h2>

          <div className="mt-8">
            <ComingSoonPanel>
              Submission guidelines, including the abstract template, will be published here
              soon.
            </ComingSoonPanel>
          </div>
        </div>
      </section>

      {/* Submit */}
      <section
        id="submit"
        className="bg-gradient-to-br from-blue-50 via-white to-violet-50 border-t border-gray-200"
      >
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="blue">Submit</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            Submit your abstract
          </h2>

          <div className="mt-8">
            <ComingSoonPanel>
              Abstracts will be handled through an online submission system. The link will be
              posted here once submissions open.
            </ComingSoonPanel>
          </div>
        </div>
      </section>
    </>
  );
}
