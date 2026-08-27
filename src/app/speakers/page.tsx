import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import SpeakerAvatar from "@/components/SpeakerAvatar";

export const metadata = { title: "Speakers | NetSciX 2027" };

type Speaker = {
  name: string;
  affiliation: string;
  website?: string;
  photo?: string;
};

// Ordered alphabetically by first name.
const KEYNOTES: Speaker[] = [
  {
    name: "Christopher Moore",
    affiliation: "Santa Fe Institute, USA",
    website: "https://sites.santafe.edu/~moore/",
    photo: "/images/speakers/christopher-moore.jpg",
  },
  {
    name: "Guanrong Chen",
    affiliation: "City University of Hong Kong",
    website: "https://www.ee.cityu.edu.hk/~gchen/",
    photo: "/images/speakers/guanrong-chen.jpg",
  },
  {
    name: "Mario di Bernardo",
    affiliation: "University of Naples Federico II, Italy",
    website: "https://sites.google.com/site/dibernardogroup/home",
    photo: "/images/speakers/mario-di-bernardo.jpg",
  },
  {
    name: "Marta González",
    affiliation: "University of California, Berkeley, USA",
    website: "https://ced.berkeley.edu/people/marta-gonzalez",
    photo: "/images/speakers/marta-gonzalez.jpg",
  },
  {
    name: "Yizhou Sun",
    affiliation: "University of California, Los Angeles",
    website: "https://web.cs.ucla.edu/~yzsun/",
    photo: "/images/speakers/yizhou-sun.jpg",
  },
];

// Ordered alphabetically by first name.
const INVITED: Speaker[] = [
  {
    name: "Alice Patania",
    affiliation: "University of Vermont, USA",
    website: "https://alpatania.github.io/",
    photo: "/images/speakers/alice-patania.jpg",
  },
  {
    name: "Carlo Vittorio Cannistraci",
    affiliation: "Tsinghua University, China",
    website: "https://brain.tsinghua.edu.cn/en/info/1010/1003.htm",
    photo: "/images/speakers/carlo-cannistraci.jpg",
  },
  {
    name: "Marian Boguñá",
    affiliation: "Universitat de Barcelona",
    website: "http://complex.fmc.ub.edu/~mbogunya/",
    photo: "/images/speakers/marian-boguna.jpg",
  },
  {
    name: "Marta Sales Pardo",
    affiliation: "Universitat Rovira i Virgili",
    website: "https://www.deq.urv.cat/en/people/marta-sales/",
    photo: "/images/speakers/marta-sales-pardo.jpg",
  },
  {
    name: "Michael Small",
    affiliation: "University of Western Australia, Australia",
    website: "https://research-repository.uwa.edu.au/en/persons/michael-small/",
    photo: "/images/speakers/michael-small.jpg",
  },
  {
    name: "Xavier Bresson",
    affiliation: "National University of Singapore",
    website: "https://graphdeeplearning.github.io/authors/xavier-bresson/",
    photo: "/images/speakers/xavier-bresson.jpg",
  },
];

// Shown under both speaker grids, so readers don't infer a ranking from the order.
const ORDER_NOTE = "Speakers are ordered alphabetically by first name.";

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        title="Speakers"
        subtitle="Keynote and invited speakers for NetSciX 2027."
        bgImage="/images/victoria-harbour.jpg"
      />

      <SectionNav
        items={[
          { id: "keynotes", label: "Keynote Speakers" },
          { id: "invited", label: "Invited Speakers" },
        ]}
      />

      {/* Keynote speakers */}
      <section id="keynotes" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Featured</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-ink">
              Keynote Speakers
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEYNOTES.map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">{ORDER_NOTE}</p>
        </div>
      </section>

      {/* Invited speakers */}
      <section id="invited" className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Featured</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-ink">
              Invited Speakers
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INVITED.map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">{ORDER_NOTE}</p>
        </div>
      </section>
    </>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center transition hover:shadow-md">
      <SpeakerAvatar
        src={speaker.photo}
        name={speaker.name}
        className="w-28 h-28 rounded-full"
        textClassName="text-2xl"
      />
      <h3 className="mt-4 font-serif text-base font-bold text-ink">{speaker.name}</h3>
      <p className="mt-1 text-sm text-muted leading-snug">{speaker.affiliation}</p>
      {speaker.website && (
        <a
          href={speaker.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-sm font-medium text-brand hover:underline"
        >
          Website →
        </a>
      )}
    </article>
  );
}
