// Registration fees.
// Source: organizers' "website_updates_august07" brief.
// Tier windows follow the registration deadlines in `@/lib/dates`.

export type Tier = "early" | "regular";

export const TIERS: Tier[] = ["early", "regular"];

export const TIER_LABEL: Record<Tier, string> = {
  early: "Early bird",
  regular: "Regular",
};

export const TIER_WINDOW: Record<Tier, string> = {
  early: "until Nov 30, 2026",
  regular: "after Nov 30, 2026",
};

export type Category = "student" | "faculty" | "industry";

export const CATEGORY_LABEL: Record<Category, string> = {
  student: "Students",
  faculty: "Faculty",
  industry: "Industry",
};

export const FEES: Record<Category, Record<Tier, number>> = {
  student: { early: 275, regular: 325 },
  faculty: { early: 475, regular: 550 },
  industry: { early: 700, regular: 750 },
};

export const CATEGORIES: Category[] = ["student", "faculty", "industry"];

export function formatFee(amount: number): string {
  return `$${amount}`;
}

/**
 * Online attendance fee, as a share of the regular registration fee.
 * Source: organizers' "website_updates_august12" brief.
 */
export const ONLINE_FEE_SHARE = "15%";
