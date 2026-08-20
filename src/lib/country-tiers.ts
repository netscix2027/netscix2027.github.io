// Tiered, country-based registration pricing.
// Source: organizers' "website_updates_august12" brief. The discount applies to
// the participant's early-bird or regular fee from `@/lib/fees`.
//
// Tier membership is defined by Table E (per capita GNI classification, as of
// July 2025, p. 151) of the Statistical Annex of the UN World Economic Situation
// and Prospects (WESP) 2026 report — see WESP_TABLE_E_URL below.
// The per-country lists are no longer published on the site — see git history
// (before the Aug 2026 trim) if they need to be restored.

export type TierId = 1 | 2 | 3;

export type CountryTier = {
  id: TierId;
  label: string;
  /** The tier's income category as named in WESP Table E. */
  wespCategory: string;
  /** Discount off the corresponding early-bird or regular fee. */
  discount: string;
  /** Wording used in place of "N% discount" where a bare percentage reads badly. */
  discountNote?: string;
};

export const COUNTRY_TIERS: CountryTier[] = [
  {
    id: 1,
    label: "Tier 1",
    wespCategory: "High-income",
    discount: "0%",
    discountNote: "standard rate",
  },
  { id: 2, label: "Tier 2", wespCategory: "Upper-middle income", discount: "20%" },
  { id: 3, label: "Tier 3", wespCategory: "Lower-middle income & Low income", discount: "40%" },
];

/** Table E of the WESP 2026 Statistical Annex, which defines the categories above. */
export const WESP_TABLE_E_URL = "https://desapublications.un.org/file/21554/download";
