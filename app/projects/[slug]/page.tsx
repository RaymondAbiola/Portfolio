import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { getProject, projects } from "@/lib/data";
import { accentVar } from "@/lib/accent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const color = accentVar[project.accent];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <article className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          {/* Header */}
          <Reveal className="mt-8">
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color }}
            >
              {project.category}
            </span>
            <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{project.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              )}
            </div>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.05}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {project.meta.map((m) => (
                <div key={m.label} className="bg-card p-4">
                  <div className="text-xs uppercase tracking-wide text-muted">{m.label}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal delay={0.05}>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                {project.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={0.05}>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold">Key highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color }} />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Features + Stack */}
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal delay={0.05}>
              <section>
                <h2 className="font-display text-2xl font-bold">What it does</h2>
                <ul className="mt-4 space-y-2.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section>
                <h2 className="font-display text-2xl font-bold">Tech stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Next project nav */}
          <Reveal delay={0.05}>
            <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
              <Link
                href="/#projects"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                ← All projects
              </Link>
              {(() => {
                const idx = projects.findIndex((p) => p.slug === project.slug);
                const next = projects[(idx + 1) % projects.length];
                return (
                  <Link
                    href={`/projects/${next.slug}`}
                    className="group text-right text-sm transition-colors hover:text-accent"
                  >
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      Next project
                    </span>
                    <span className="font-display font-semibold">{next.name} →</span>
                  </Link>
                );
              })()}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
