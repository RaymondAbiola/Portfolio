import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import type { Project } from "@/lib/data";
import { accentVar } from "@/lib/accent";

export function ProjectCard({ project }: { project: Project }) {
  const color = accentVar[project.accent];

  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]"
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      <div>
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color }}
        >
          {project.category}
        </span>
        <h3 className="font-display mt-2 text-2xl font-bold">{project.name}</h3>
      </div>

      <p className="mt-3 text-sm font-medium text-foreground/90">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      {/* stack chips */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted"
          >
            {s}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      {/* footer actions */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-accent"
        >
          Case study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <div className="flex items-center gap-1">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <ExternalLink className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
