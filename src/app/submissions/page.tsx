import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import MilestoneCard from "@/components/MilestoneCard";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AOE_NOTE, GROUPS, milestonesInGroup } from "@/lib/dates";

export const metadata = { title: "Submission | NetSciX 2027" };

// The /key-dates groups that concern authors and workshop organizers. The
// conference dates themselves are left out on purpose: this section is about
// what a submitter has to do and by when, and /key-dates carries the event.
const DEADLINE_GROUPS = GROUPS.filter(
  (g) => g.id === "submission" || g.id === "workshop" || g.id === "notification",
);

// Abstract templates, served from public/templates. An entry with a blank
// href renders as plain text with a "link coming soon" note instead of a
// dead link — same for SUBMISSION_SYSTEM below.
const TEMPLATES: { label: string; href: string }[] = [
  { label: "LaTeX template (.tex)", href: "/templates/NetSciX2027_Abstract_Template.tex" },
  {
    label: "LaTeX template output (.pdf)",
    href: "/templates/NetSciX2027_Abstract_Template_LaTeX_example.pdf",
  },
  { label: "Word template (.docx)", href: "/templates/NetSciX2027_Abstract_Template.docx" },
];

const SUBMISSION_SYSTEM = {
  name: "EasyChair",
  href: "https://easychair.org/conferences/?conf=netscix2027",
};

// Workshop proposals come to the organizers by email: EasyChair above is set
// up for the abstract track only.
const WORKSHOP_PROPOSAL_EMAIL = "netscix2027conf@gmail.com";

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
          { id: "submit", label: "Submit" },
          { id: "guidelines", label: "Guidelines" },
          { id: "workshops", label: "Workshop Proposals" },
        ]}
      />

      {/* Deadlines */}
      <section id="deadlines" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Badge variant="amber">Calendar</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Deadlines</h2>
          <p className="mt-3 text-gray-600">{AOE_NOTE}</p>

          {/* Three blocks across from md, so they sit on one row. */}
          <div className="mt-10 grid gap-6 md:grid-cols-3 items-start">
            {DEADLINE_GROUPS.map((g) => (
              <MilestoneCard
                key={g.id}
                title={g.title}
                milestones={milestonesInGroup(g.id)}
              />
            ))}
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

          <p className="mt-4 text-gray-600 leading-relaxed">
            Abstracts are submitted through {SUBMISSION_SYSTEM.name}. Please read the submission
            guidelines below before uploading your PDF.
          </p>

          <div className="mt-8">
            <a
              href={SUBMISSION_SYSTEM.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "brand", size: "lg" })}
            >
              Submit on {SUBMISSION_SYSTEM.name}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
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

          {/* Format */}
          <h3 className="mt-10 font-serif text-xl font-bold text-ink">Format</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Submissions take the form of a <strong className="text-ink">two-page extended
            abstract</strong>:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-medium text-ink">Page 1.</span> Title, authors and
              affiliations, keywords, and the abstract body.
            </li>
            <li>
              <span className="font-medium text-ink">Page 2.</span> Figures, tables, and
              references only. No additional body text is permitted on page 2, and no
              additional pages are permitted.
            </li>
          </ul>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Submissions must be prepared using the official LaTeX or Microsoft Word template and
            submitted as a single PDF.
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">Templates</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {TEMPLATES.map((t) => (
                <li key={t.label}>
                  {t.href ? (
                    <a
                      href={t.href}
                      className="font-medium text-brand hover:underline"
                    >
                      {t.label}
                    </a>
                  ) : (
                    <span className="text-gray-700">
                      {t.label}{" "}
                      <span className="text-muted">— link coming soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Both completed work and ongoing research with preliminary results are welcome.
          </p>

          {/* Page layout */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Page layout</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-medium text-ink">Paper size.</span> A4 (Letter is also
              accepted; do not mix sizes within the same submission).
            </li>
            <li>
              <span className="font-medium text-ink">Margins.</span> 20 mm on all sides.
            </li>
            <li>
              <span className="font-medium text-ink">Font.</span> Sans-serif (Arial or
              equivalent), 10 pt body text.
            </li>
            <li>
              <span className="font-medium text-ink">Running heads.</span> No page numbers,
              headers, or footers.
            </li>
            <li>
              <span className="font-medium text-ink">Figures and tables.</span> Must fit within
              the page-2 margins; do not use landscape orientation.
            </li>
          </ul>

          {/* AI writing tools */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Use of AI writing tools</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The use of large language models is permitted for editorial support only (wording,
            grammar, formatting). LLMs should not be used for autonomous content generation or to
            fabricate results, figures, or citations. Authors remain fully responsible for the
            accuracy and originality of their submission and must confirm that any AI-assisted
            edits reflect their own original work and intent.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This policy governs <em>how the abstract is written</em>. Submissions whose{" "}
            <em>research subject</em> is AI (e.g. studies of LLMs, graph neural networks,
            generative models) are of course welcome under the &ldquo;Network Science meets
            AI&rdquo; track — the restriction applies only to using AI tools to draft the
            submission itself.
          </p>

          {/* Presentation format */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Presentation format</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            By default, accepted submissions will be considered for an oral or poster
            presentation. The programme committee will make the final decision on presentation
            format based on fit, scientific quality, and programme balance.
          </p>

          {/* Submission system */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Submission system</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Submissions are made via{" "}
            {SUBMISSION_SYSTEM.href ? (
              <a
                href={SUBMISSION_SYSTEM.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                {SUBMISSION_SYSTEM.name}
              </a>
            ) : (
              <span className="font-medium text-ink">{SUBMISSION_SYSTEM.name}</span>
            )}
            . You will receive an automated confirmation email with a submission ID upon
            successful upload.
          </p>

          {/* Attendance */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Attendance requirement</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At least one author of each accepted submission is expected to register for the main
            conference.
          </p>

          {/* Travel support */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Travel support</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Applications for travel support will be handled at a later stage, after the
            scientific review of submissions.
          </p>
        </div>
      </section>

      {/* Themed workshop proposals — a separate call from the abstract track
          above, so it gets its own section rather than a Guidelines heading. */}
      <section id="workshops" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="violet">Get involved</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            Call for Themed Workshop Proposals
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            NetSciX 2027 invites proposals for{" "}
            <strong className="text-ink">interactive, themed workshops</strong> for community
            building, sharing perspectives, training, and generating ideas on specific and
            emerging topics in network science. We recommend a duration of no more than 3 hours.
          </p>

          {/* Formats */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Workshop formats</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We welcome proposals in a range of workshop formats that get people engaging with
            each other across the network science community. Workshops may focus on skill
            development, knowledge exchange, collaborative problem solving, community building,
            or creating shared research resources. Organizers should choose the format that best
            fits their goals. Successful proposals should clearly describe what participants will
            do, how much they are expected to participate, and what the workshop aims to
            achieve. Example formats include:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-medium text-ink">Hands-on Tutorials,</span> which teach a
              network analysis method from start to finish. They go from a research question and
              raw data, through modeling and inference, to interpreting the results, so that
              participants can apply the method to their own data.
            </li>
            <li>
              <span className="font-medium text-ink">Symposia,</span> with position papers,
              invited talks and moderated discussion on a focused research area.
            </li>
            <li>
              <span className="font-medium text-ink">Guided Exploration Workshops,</span> which
              use structured activities to examine emerging questions, build shared
              understanding, or identify future research directions.
            </li>
            <li>
              <span className="font-medium text-ink">Collaborative Working Groups,</span> where
              participants work together to produce community resources such as white papers,
              benchmark datasets, evaluation protocols, software, or research roadmaps.
            </li>
            <li>
              <span className="font-medium text-ink">Innovation Labs or Design Jams,</span> which
              support collaborative ideation and rapid prototyping of new concepts, methods or
              tools.
            </li>
            <li>
              <span className="font-medium text-ink">Other creative and interactive formats</span>{" "}
              that clearly state their objectives, what participants will experience, and the
              expected outcomes.
            </li>
          </ul>

          {/* Proposal requirements */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">
            Proposal requirements
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A workshop proposal is at most three pages and covers:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>Title, organizers (with affiliations and short bios) and a contact person</li>
            <li>Abstract (max 250 words)</li>
            <li>Objectives and expected outcomes</li>
            <li>
              Planned activities and a timed session outline, including the expected level of
              participant involvement
            </li>
            <li>Target audience, and any prerequisites or technical requirements</li>
            <li>
              Plans for recruiting participants and sharing outcomes (e.g. website, open
              materials, follow-ups)
            </li>
          </ul>

          {/* Proposal submission */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Proposal submission</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Please email your proposal to{" "}
            <a
              href={`mailto:${WORKSHOP_PROPOSAL_EMAIL}`}
              className="font-medium text-brand hover:underline"
            >
              {WORKSHOP_PROPOSAL_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
