import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/lib/news";

// Slim strip above the hero announcing the most recent items from
// src/lib/news. Capped at the newest two: the point is to deliver what is
// current to people who may never scroll, not to summarise the News page.
const VISIBLE_ITEMS = 2;

export default function AnnouncementBar() {
  const latest = NEWS.slice(0, VISIBLE_ITEMS);
  if (latest.length === 0) return null;

  return (
    // The rows, not this wrapper, carry the link: each one highlights and
    // navigates on its own, and its hover still spans the full width.
    <div className="border-y border-[#EADFD7] bg-[#FAF7F5]">
      {latest.map((item, i) => (
        <Link
          key={item.iso + item.title}
          href="/news"
          className={
            "group block transition-colors hover:bg-[#F3EDE8]" +
            (i > 0 ? " border-t border-[#EADFD7]" : "")
          }
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3 text-sm">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C4695F]">
              News · {item.date}
            </span>
            <span className="font-medium text-ink">{item.title}</span>
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[#C4695F] group-hover:text-[#A9554C]">
              Read more
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
