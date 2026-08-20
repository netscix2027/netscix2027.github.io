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
  ONLINE_FEE_SHARE,
  TIERS,
  TIER_LABEL,
  TIER_WINDOW,
  formatFee,
} from "@/lib/fees";
import { COUNTRY_TIERS, WESP_TABLE_E_URL } from "@/lib/country-tiers";

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
          { id: "online", label: "Online Participation" },
          { id: "regional-pricing", label: "Regional Pricing" },
          { id: "register", label: "Register" },
        ]}
      />

      {/* Deadlines */}
      <section id="deadlines" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
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
            Participants whose institution is in a Tier 2 or Tier 3 country receive a discount
            on these rates — see{" "}
            <a href="#regional-pricing" className="font-medium text-brand hover:underline">
              regional pricing
            </a>{" "}
            below.
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
                    <FeeCell
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

      {/* Online participation */}
      <section id="online" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Badge variant="violet">Attend remotely</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            Online participation
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            In addition to regular on-site participation, we offer the possibility of online
            participation to the conference. Online participation will grant access to keynote
            and invited talks, as well as to selected presentation tracks, to be determined.
            The online registration fee is a flat {ONLINE_FEE_SHARE} of the regular registration
            fee.
          </p>
        </div>
      </section>

      {/* Tiered, country-based pricing */}
      <section id="regional-pricing" className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Badge variant="emerald">Who pays what</Badge>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink">
            Tiered, Country-Based Registration Pricing
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
            In order to make the conference more accessible to participants from all regions,
            we offer tiered registration pricing based on the country of your institution.
            Country tiers are based on Table E (per capita GNI classification, as of July 2025)
            on page 151 of the Statistical Annex of the United Nations World Economic Situation
            and Prospects (WESP) 2026 report (
            <a
              href={WESP_TABLE_E_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              link
            </a>
            ). The discount applies to the corresponding early-bird or regular fee of each
            participant.
          </p>

          <h3 className="mt-12 font-serif text-xl font-bold text-ink">Pricing tiers</h3>
          <div className="mt-4 max-w-3xl overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-5 py-3 font-medium text-sm">Tier</th>
                  <th className="px-5 py-3 font-medium text-sm">
                    Category from WESP Statistical Annex, Table E
                  </th>
                  <th className="px-5 py-3 font-medium text-sm">Discount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COUNTRY_TIERS.map((tier) => (
                  <tr key={tier.id} className="text-sm">
                    <td className="px-5 py-3 font-medium text-ink">{tier.label}</td>
                    <td className="px-5 py-3 text-ink">{tier.wespCategory}</td>
                    <td className="px-5 py-3 font-mono text-emerald-700">
                      {tier.discount}
                      {tier.discountNote && (
                        <span className="ml-2 font-sans text-muted">({tier.discountNote})</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="bg-gray-50 border-t border-gray-200">
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

// One early-bird / regular price cell in the mobile fee cards. Named apart from
// the country tiers so the two "tier" concepts on this page stay distinguishable.
function FeeCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-blue-50 border border-blue-200 py-2">
      <div className="text-[10px] uppercase tracking-widest text-blue-700">{label}</div>
      <div className="mt-1 font-mono text-ink text-sm">{value}</div>
    </div>
  );
}
