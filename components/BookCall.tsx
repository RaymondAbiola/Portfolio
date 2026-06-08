"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { getCalApi } from "@calcom/embed-react";
import { CalendarDays, Clock, Globe, Video } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { calLink } from "@/lib/data";

// Theme-specific namespaces so each theme gets its OWN freshly-initialised Cal
// embed instance — avoids cal.com locking the modal background to the theme it
// first loaded in (it can't re-theme a live instance after a toggle).
const ns = (theme: string) => `book-30min-${theme}`;

const facts = [
  { Icon: Clock, label: "30 minutes" },
  { Icon: Video, label: "Video call" },
  { Icon: Globe, label: "Your timezone, auto-detected" },
];

export function BookCall() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  // Initialise the embed instance for the CURRENT theme. Each theme has its own
  // namespace, so toggling spins up a fresh instance in the right theme.
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: ns(theme) });
      cal("ui", {
        theme,
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#c2410c" },
          dark: { "cal-brand": "#b6ff3c" },
        },
      });
    })();
  }, [theme]);

  return (
    <section id="book" className="section-pad bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Book a Call"
          title="Let's talk."
          description="Grab a 30-minute slot that works for you. Pick a time and you'll get a calendar invite with a video link."
        />

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
            {/* accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">
                    30-min intro call
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {facts.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-2 text-sm text-muted">
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                data-cal-namespace={mounted ? ns(theme) : ns("light")}
                data-cal-link={calLink}
                data-cal-config='{"layout":"month_view"}'
                disabled={!mounted}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <CalendarDays className="h-4 w-4" />
                Book a 30-min call
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
