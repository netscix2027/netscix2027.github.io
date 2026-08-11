import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import Timeline from "@/components/Timeline";
import ComingSoonPanel from "@/components/ComingSoonPanel";
import { Badge } from "@/components/ui/badge";
import { AOE_NOTE, milestonesFor } from "@/lib/dates";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  FEES,
  TIERS,
  TIER_LABEL,
  TIER_WINDOW,
  formatFee,
} from "@/lib/fees";

export const metadata = { title: "Registration | NetSciX 2027" };

const DEADLINES = milestonesFor("registration");

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Registration"
        subtitle="Fees and deadlines for NetSciX 2027 in Hong Kong."
        bgImage="/images/conference-room.jpeg"
      />

      <SectionNav
        items={[
          { id: "deadlines", label: "Deadlines" },
          { id: "fees", label: "Fees" },
          { id: "register", label: "Register" },
        ]}
      />

      {/* Deadlines */}
      <section id="deadlines" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Badge variant="amber">When</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Deadlines</h2>
          <p className="mt-3 text-gray-600">{AOE_NOTE}</p>

          <div className="mt-10">
            <Timeline items={DEADLINES} accent="amber" />
          </div>
        </div>
      </section>

      {/* Fees */}
      <section
        id="fees"
        className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-t border-gray-200"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Badge variant="blue">How much</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Fees</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            All fees are in US dollars. The tier is set by the date payment is received.
          </p>

          <div className="mt-8 hidden md:block overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-5 py-4 font-medium text-sm">Category</th>
                  {TIERS.map((tier) => (
                    <th key={tier} className="px-5 py-4 font-medium text-sm">
                      {TIER_LABEL[tier]}
                      <div className="text-[11px] font-normal text-white/70">
                        {TIER_WINDOW[tier]}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {CATEGORIES.map((category) => (
                  <tr key={category} className="text-sm">
                    <td className="px-5 py-4 align-top font-medium text-ink">
                      {CATEGORY_LABEL[category]}
                    </td>
                    {TIERS.map((tier) => (
                      <td
                        key={tier}
                        className={
                          "px-5 py-4 align-top font-mono " +
                          (tier === "early" ? "text-blue-700" : "text-ink")
                        }
                      >
                        {formatFee(FEES[category][tier])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 md:hidden grid gap-4">
            {CATEGORIES.map((category) => (
              <article
                key={category}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="font-medium text-ink">{CATEGORY_LABEL[category]}</div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm">
                  {TIERS.map((tier) => (
                    <Tier
                      key={tier}
                      label={TIER_LABEL[tier]}
                      value={formatFee(FEES[category][tier])}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="brand">Sign up</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">Register</h2>

          <div className="mt-8">
            <ComingSoonPanel>
              Registration will be handled through an online registration system. The link will
              be posted here once registration opens.
            </ComingSoonPanel>
          </div>
        </div>
      </section>
    </>
  );
}

function Tier({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-blue-50 border border-blue-200 py-2">
      <div className="text-[10px] uppercase tracking-widest text-blue-700">{label}</div>
      <div className="mt-1 font-mono text-ink text-sm">{value}</div>
    </div>
  );
}
