"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Portrait with the editorial monochrome filter in dark mode (.portrait-filter).
 * Until the user adds their real photo at /public/portrait.jpg, a styled CSS
 * placeholder sits behind the image — so there's never a broken-image flash,
 * and it looks intentional in both light and dark themes.
 */
export function Portrait({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The 404 can fire before hydration, so onError may be missed. After mount,
  // check whether the image actually decoded; if not, fall back to placeholder.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Always-present placeholder (covered once a real photo loads on top) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface">
        <span className="font-display text-7xl font-bold text-accent">RA</span>
        <span className="mt-3 font-mono text-[11px] text-muted">add /public/portrait.jpg</span>
      </div>

      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="portrait-filter absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      )}
    </div>
  );
}
