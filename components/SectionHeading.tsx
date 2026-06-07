import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 text-sm font-mono text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/60" />
        <span className="uppercase tracking-[0.2em] text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
