import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="An engineer's mindset, on-chain." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Bio */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-foreground" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                I specialize in
              </p>
              <div className="flex flex-wrap gap-2">
                {about.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="font-display text-4xl font-bold text-accent">{s.value}</div>
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
