import Image from "next/image";
import Link from "next/link";
// import TallyEmbed from "@/components/TallyEmbed";
// ^ Restore the import together with the contact-form column in ContactSection below.

export default function HomePage() {
  return (
    <>
      {/* Hero — Location & Date */}
      <section
        className="relative text-white h-[560px] md:h-[640px] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(/images/hero-manson-yim.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6 text-center">
          <p className="font-serif text-3xl md:text-5xl leading-tight text-white drop-shadow-md">
            International School and Conference
            <br />
            on Network Science
          </p>

          <div className="mt-12 flex flex-col items-center gap-3">
            <span className="block h-px w-32 bg-white/70" />
            <p className="text-2xl md:text-3xl font-light tracking-[0.2em]">January 24–27, 2027</p>
            <p className="text-2xl md:text-3xl font-light tracking-[0.2em]">Hong Kong SAR</p>
            <span className="block h-px w-32 bg-white/70" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm shadow-md">
            <Image
              src="/images/robert-bye.jpg"
              alt="Image by Robert Bye"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand">About the Conference</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink">
              NetSciX 2027
            </h2>
            <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
              <p>
                NetSciX provides a forum for researchers working in the emergent areas of network
                science. It fosters interdisciplinary communication and collaboration in network
                science research across computer and information sciences, physics, mathematics,
                statistics, life sciences, neuroscience, environmental sciences, social sciences,
                economics and finance, arts and design.
              </p>
              <p>NetSciX 2027 will be held on January 24–27, 2027, in Hong Kong SAR.</p>
            </div>

            <div className="mt-8 rounded-lg border border-brand/30 bg-brand/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand">Special Focus</p>
              <h3 className="mt-2 font-serif text-xl font-bold text-ink">
                Network Science meets AI
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                In addition to the usual topics covered in NetSci conferences, this workshop
                features an emerging area of research — the rapidly evolving interplay between
                Network Science and AI — with the intention to promote cross-disciplinary research
                that uses network science to tackle the most challenging problems arising in
                artificial intelligence, and vice versa.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-brand pl-4">
              <p className="font-serif text-lg font-semibold text-ink">Jie Sun</p>
              <p className="text-sm text-muted">Conference Chair</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Hong Kong */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="md:order-2 relative aspect-[6/5] w-full overflow-hidden rounded-sm shadow-md">
            <Image
              src="/images/sebastien-goldberg.jpg"
              alt="Image by Sébastien Goldberg"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              NetSciX 2027 — Hong Kong
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Hong Kong is a vibrant, world-class city that perfectly embodies the
              interdisciplinary spirit of NetSci. As a global hub for commerce, innovation, and
              culture, Hong Kong offers a dynamic backdrop for networking and collaboration
              among researchers from diverse fields. The city is home to leading universities,
              cutting-edge research institutions, and a thriving tech industry, making it an
              ideal location to explore the latest advances in network science. Attendees will
              also appreciate Hong Kong&rsquo;s unique blend of East-meets-West culture, stunning
              skyline, and lush natural landscapes — from Victoria Peak to its scenic hiking
              trails. With its ease of travel, English-friendly environment, and reputation as a
              gateway to Asia, Hong Kong promises an engaging and memorable experience for the
              NetSci community.
            </p>
          </div>
        </div>
      </section>

      {/*
        Quick Links section and Contact section temporarily removed.
        The original JSX for both — and the QuickLink / ContactSection /
        InfoBlock helper functions — are preserved as line comments at
        the bottom of this file. To restore: un-comment the helpers and
        paste the corresponding JSX back into this return block.
      */}
    </>
  );
}
// =====================================================================
// ORIGINAL HELPER FUNCTIONS — preserved as comments; restore alongside
// the JSX in HomePage that was removed.
// =====================================================================

// function QuickLink({
//   title,
//   desc,
//   cta,
//   href,
// }: {
//   title: string;
//   desc: string;
//   cta: string;
//   href: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className="group p-6 rounded-lg border border-gray-200 bg-white hover:border-ink hover:shadow-md transition flex flex-col"
//     >
//       <h3 className="font-serif text-xl font-bold text-ink">{title}</h3>
//       <p className="mt-2 text-sm text-gray-600 flex-1">{desc}</p>
//       <span className="mt-4 text-sm text-brand font-medium group-hover:underline">{cta}</span>
//     </Link>
//   );
// }
// 
// function ContactSection() {
//   return (
//     <section id="contact" className="bg-gray-50 border-t border-gray-200">
//       <div className="mx-auto max-w-6xl px-6 py-20">
//         <div className="text-center mb-12">
//           <p className="text-xs uppercase tracking-[0.3em] text-brand">Get in Touch</p>
//           <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Contact</h2>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             Reach out to the NetSciX 2027 Secretariat — we are happy to help.
//           </p>
//         </div>
// 
//         <div className="max-w-md mx-auto space-y-6">
//           <InfoBlock
//             title="NetSciX 2027 Secretariat"
//             lines={[
//               "Sheraton Hong Kong Hotel & Towers",
//               "20 Nathan Road, Tsim Sha Tsui",
//               "Kowloon, Hong Kong",
//             ]}
//           />
//           <InfoBlock
//             title="Office Hours"
//             lines={["Monday to Friday", "09:00 – 16:00 (Beijing time)"]}
//           />
//         </div>
// 
//         {/*
//           Right-side contact form temporarily removed. To bring it back,
//           wrap the InfoBlocks above and the block below in a
//           <div className="grid gap-10 md:grid-cols-2 items-start"> wrapper
//           again, and re-enable the TallyEmbed import at the top of the file.
// 
//           <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
//             <h3 className="font-serif text-xl font-bold text-ink mb-4">Send us a message</h3>
//             <TallyEmbed
//               src="TODO_TALLY_CONTACT_URL"
//               title="Contact"
//               minHeight={520}
//             />
//           </div>
//         */}
// 
//         {/* Full-width map below */}
//         <div className="mt-12 h-[360px] md:h-[420px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//           <iframe
//             title="Sheraton Hong Kong Hotel & Towers map"
//             src="https://maps.google.com/maps?q=Sheraton+Hong+Kong+Hotel+%26+Towers,+20+Nathan+Road,+Tsim+Sha+Tsui&t=&z=16&ie=UTF8&iwloc=&output=embed"
//             className="w-full h-full"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// 
// function InfoBlock({ title, lines }: { title: string; lines: string[] }) {
//   return (
//     <div>
//       <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{title}</h3>
//       <div className="mt-2 space-y-1 text-gray-600">
//         {lines.map((l) => (
//           <div key={l}>{l}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

