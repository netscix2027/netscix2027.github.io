import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/lib/news";

// Slim strip above the hero announcing the most recent item from src/lib/news.
// Only the newest one is shown: the point is to deliver a single message to
// people who may never scroll, not to summarise the News page.
export default function AnnouncementBar() {
  const latest = NEWS[0];
  if (!latest) return null;

  return (
    <Link href="/news" className="group block border-y border-[#EADFD7] bg-[#FAF7F5] transition-colors hover:bg-[#F3EDE8]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3 text-sm">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C4695F]">
          News · {latest.date}
        </span>
        <span className="font-medium text-ink">{latest.title}</span>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[#C4695F] group-hover:text-[#A9554C]">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
