import PageHero from "@/components/PageHero";
import { NEWS } from "@/lib/news";

export const metadata = { title: "News | NetSciX 2027" };

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
