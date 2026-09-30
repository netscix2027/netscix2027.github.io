import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "News | NetSciX 2027" };

// `date` is what the page shows (same format as src/lib/dates.ts); `iso` is
// the machine-readable value for the <time> element. Both are written by hand
// so an announcement never shifts with the reader's time zone.
type NewsItem = { iso: string; date: string; title: string; body: React.ReactNode };

// Newest first — this is the order the page renders in.
//
// Each entry is a record of what was announced on its date, so leave published
// items alone when the underlying details change later: add a new item instead.
// That also means the dates quoted in an item's body are deliberately literal
// rather than read from src/lib/dates.ts, which always holds the current values.
const NEWS: NewsItem[] = [
  {
    iso: "2026-10-01",
    date: "Oct 1, 2026",
    title: "Submission deadline extended to October 11, 2026",
    body: (
      <>
        The deadline for submitting extended abstracts has been extended to{" "}
        <strong className="text-ink">October 11, 2026</strong>. See the{" "}
        <Link href="/submissions" className="font-medium text-brand hover:underline">
          submission page
        </Link>{" "}
        for guidelines and templates.
      </>
    ),
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Announcements and updates from the NetSciX 2027 organizers."
        bgImage="/images/program-bg.jpg"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          {NEWS.length === 0 ? (
            <p className="text-gray-600 leading-relaxed">
              There are no announcements yet. Updates will be posted here as the conference
              approaches.
            </p>
          ) : (
            <ol className="space-y-12">
              {NEWS.map((item) => (
                <li key={item.iso + item.title} className="border-l-2 border-gray-200 pl-6">
                  <time
                    dateTime={item.iso}
                    className="text-xs uppercase tracking-[0.25em] text-brand"
                  >
                    {item.date}
                  </time>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-ink">{item.title}</h2>
                  <div className="mt-3 text-gray-600 leading-relaxed">{item.body}</div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}
