import MoreInfoNotice from "@/components/MoreInfoNotice";

export const metadata = { title: "Program | NetSciX 2027" };

export default function ProgramPage() {
  return <MoreInfoNotice title="Program" />;
}

// =====================================================================
// ORIGINAL CONTENT — preserved as comments; restore when finalized.
// Un-comment the block below (and remove the stub above) to bring back
// the full Program page with its sections, deadlines, FAQ, and form.
// =====================================================================

// import PageHero from "@/components/PageHero";
// 
// export const metadata = { title: "Program | NetSciX 2027" };
// 
// export default function ProgramPage() {
//   return (
//     <>
//       <PageHero
//         title="Program"
//         subtitle="The full program for NetSciX 2027 will be published closer to the conference."
//         bgImage="/images/program-bg.jpg"
//       />
// 
//       <section className="bg-white">
//         <div className="mx-auto max-w-3xl px-6 py-24 text-center">
//           <p className="text-xs uppercase tracking-[0.3em] text-brand">Coming soon</p>
//           <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
//             To be confirmed
//           </h2>
//           <p className="mt-5 text-gray-600 leading-relaxed">
//             The detailed program — keynotes, invited talks, contributed sessions, and schools — is
//             being finalized and will be announced here in due course. Please check back later.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
