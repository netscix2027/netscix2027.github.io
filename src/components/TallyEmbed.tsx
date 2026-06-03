"use client";

import { useEffect } from "react";

const TALLY_SCRIPT_ID = "tally-embed-script";
const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

type Props = {
  src: string;
  title: string;
  minHeight?: number;
};

// Embeds a Tally form via iframe. Uses Tally's official embed script to
// auto-resize the iframe to fit the form's content. When `src` is still a
// TODO_xxx placeholder, renders a "form coming soon" notice instead so the
// page builds and looks intentional pre-launch.
export default function TallyEmbed({ src, title, minHeight = 600 }: Props) {
  const isPlaceholder = !src || src.startsWith("TODO");

  useEffect(() => {
    if (isPlaceholder) return;
    if (document.getElementById(TALLY_SCRIPT_ID)) {
      // Script already present — re-trigger Tally's loader so this iframe is
      // picked up on client-side route changes.
      const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
      w.Tally?.loadEmbeds();
      return;
    }
    const s = document.createElement("script");
    s.id = TALLY_SCRIPT_ID;
    s.src = TALLY_SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [isPlaceholder, src]);

  if (isPlaceholder) {
    return (
      <div
        className="rounded-lg border border-dashed border-gray-300 bg-white px-6 py-16 text-center"
        style={{ minHeight }}
      >
        <p className="font-serif text-xl text-ink">Form coming soon</p>
        <p className="mt-2 text-sm text-muted">
          The {title.toLowerCase()} form is being prepared. Please check back shortly.
        </p>
      </div>
    );
  }

  return (
    <iframe
      data-tally-src={src}
      src={src}
      width="100%"
      height={minHeight}
      title={title}
      loading="lazy"
      style={{ border: 0, display: "block", width: "100%" }}
    />
  );
}
