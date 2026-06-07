import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The stack I build with."
          description="From low-level Solidity and gas profiling to the full dApp frontend — the tools I reach for to ship secure, maintainable Web3 systems."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-surface px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
