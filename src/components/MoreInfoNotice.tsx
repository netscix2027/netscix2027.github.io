import PageHero from "@/components/PageHero";

// Generic placeholder body for pages whose details are not yet finalized.
// Used by /more-info and by /program (which keeps its original implementation
// preserved as line comments at the bottom of the file).
export default function MoreInfoNotice({
  title,
  bgImage = "/images/program-bg.jpg",
}: {
  title: string;
  bgImage?: string;
}) {
  return (
    <>
      <PageHero
        title={title}
        subtitle="Detailed information will be provided closer to the conference."
        bgImage={bgImage}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
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
