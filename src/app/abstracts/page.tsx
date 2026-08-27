import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import Timeline from "@/components/Timeline";
import ComingSoonPanel from "@/components/ComingSoonPanel";
import { Badge } from "@/components/ui/badge";
import { AOE_NOTE, milestonesFor } from "@/lib/dates";

export const metadata = { title: "Submission | NetSciX 2027" };

const DEADLINES = milestonesFor("submission");

// Abstract templates. The hrefs are deliberately blank until the files are
// hosted; each entry renders as plain text with a "link coming soon" note
// until its href is filled in. Same for SUBMISSION_SYSTEM below.
const TEMPLATES: { label: string; href: string }[] = [
  { label: "LaTeX template (.tex)", href: "" },
  { label: "Word template (.docx)", href: "" },
  { label: "Example rendered PDF", href: "" },
];

const SUBMISSION_SYSTEM = { name: "EasyChair", href: "" };

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
              affiliations, keywords, submission topic(s), and the abstract body (approx.
              700–900 words).
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

          {/* Anonymity */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">
            Anonymity (double-blind review)
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            All submissions are reviewed double-blind. Authors must:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              Omit author names and affiliations from the PDF (use the placeholder text provided
              in the template).
            </li>
            <li>
              Avoid self-identifying language (e.g. &ldquo;in our previous work [X],
              we&hellip;&rdquo; — rephrase in the third person).
            </li>
            <li>
              Remove identifying metadata from the PDF file (check File Properties before
              upload).
            </li>
          </ul>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Non-anonymised submissions will be rejected without review.
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

          {/* Content requirements */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Content requirements</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-medium text-ink">Keywords.</span> 3–5 terms.
            </li>
            <li>
              <span className="font-medium text-ink">Citations.</span> Any consistent numbered
              or author-date style is accepted; the reference list must appear on page 2 only.
            </li>
            <li>
              <span className="font-medium text-ink">Ethics statement.</span> If your work
              involves human subjects data, sensitive attributes, or dual-use concerns, include
              a one- or two-sentence note on ethical considerations within the abstract body.
            </li>
            <li>
              <span className="font-medium text-ink">Data and code availability.</span> Where
              applicable, note whether data and code are publicly available (a link may be
              included in the references).
            </li>
          </ul>

          {/* AI writing tools */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Use of AI writing tools</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The use of large language models is permitted for editorial support only (wording,
            grammar, formatting). LLMs may not be used for autonomous content generation or to
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

          {/* Review process */}
          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Review process</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Both completed work and ongoing research with preliminary results are welcome.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Each submission will receive a minimum of two anonymous reviews. Submissions will be
            assessed on relevance to the conference topics, scientific quality, potential
            impact, and suitability for the requested presentation format.
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
            At least one author of each accepted submission must register for the main
            conference and present in person.
          </p>
        </div>
      </section>
    </>
  );
}
