import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've shipped."
          description="A selection of smart-contract systems and dApps — from a national voting protocol to peer-to-peer microinsurance. Open the case study for the full technical breakdown."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
