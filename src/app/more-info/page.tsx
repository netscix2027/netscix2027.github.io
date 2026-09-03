import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "More Info | NetSciX 2027" };

// The Immigration Department's own requirements page. Linked rather than
// summarised on purpose: the rules differ per nationality and change without
// notice, so only the official list is safe to rely on.
const IMMD_VISA_URL =
  "https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html";

export default function MoreInfoPage() {
  return (
    <>
      <PageHero
        title="More Info"
        subtitle="Practical information for attending NetSciX 2027 in Hong Kong."
        bgImage="/images/program-bg.jpg"
      />

      {/* Visa support */}
      <section id="visa" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="violet">Before you travel</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Visa support</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Nationals of many countries may enter Hong Kong visa-free for short visits, while
            others need a visa or entry permit issued before travelling. Requirements depend on
            your nationality and are set by the Hong Kong Immigration Department — please check
            them on the{" "}
            <a
              href={IMMD_VISA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              Immigration Department website
            </a>
            . If you do need a visa, start the application well ahead of the conference:
            processing can take several weeks.
          </p>

          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Invitation letters</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Participants who need an official invitation letter in support of a visa application
            can request one once their registration is confirmed. The request procedure will be
            published here when registration opens.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            An invitation letter is a supporting document only. It does not guarantee that a visa
            will be granted, and the organizers have no influence over the decisions of the
            Immigration Department.
          </p>
        </div>
      </section>

      {/* Everything else on this page is still being finalized. */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand">Coming soon</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            More information coming soon
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Further details are being finalized and will be published here in due course.
            Please check back closer to the conference.
          </p>
        </div>
      </section>
    </>
  );
}
