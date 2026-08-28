import type { Milestone } from "@/lib/dates";

// Vertical deadline timeline shared by /key-dates, /submissions and /registration.
export default function Timeline({
  items,
  accent = "ink",
}: {
  items: Milestone[];
  /** Marker/date colour: neutral on Key Dates, amber on the section pages. */
  accent?: "ink" | "amber";
}) {
  const rail = accent === "amber" ? "border-amber-300" : "border-gray-200";
  const dot = accent === "amber" ? "border-amber-500" : "border-ink";
  const dateColor = accent === "amber" ? "text-amber-700" : "text-brand";

  return (
    <ol className={`relative border-l-2 ${rail} pl-6 space-y-8`}>
      {items.map((m) => (
        <li key={m.label} className="relative">
          <span
            className={
              "absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 " +
              (m.event ? "bg-ink border-ink" : `bg-white ${dot}`)
            }
          />
          <div className={`text-sm font-mono uppercase tracking-wide ${dateColor}`}>
            {m.date}
          </div>
          <div className="mt-1 font-serif text-lg text-ink">{m.label}</div>
        </li>
      ))}
    </ol>
  );
}
