import { ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Experience & Education"
          title="The path so far."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Experience timeline */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Experience
            </h3>
            <ol className="relative border-l border-border">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.role} delay={i * 0.06} className="mb-8 ml-6 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-display text-lg font-semibold">{job.role}</h4>
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {job.org}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">{job.org}</span>
                      )}
                      <span aria-hidden>·</span>
                      <span>{job.type}</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Education & Training
            </h3>
            <div className="space-y-3">
              {education.map((ed, i) => (
                <Reveal key={ed.program} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="font-medium">{ed.program}</h4>
                      <span className="font-mono text-xs text-muted">{ed.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-accent">{ed.org}</p>
                    <p className="mt-0.5 text-sm text-muted">{ed.location}</p>
                    {ed.note ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted">{ed.note}</p>
                    ) : null}
                    {ed.url ? (
                      <a
                        href={ed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {ed.urlLabel ?? "View profile"}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
