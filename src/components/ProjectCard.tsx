import Link from "next/link";
import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import type { Project } from "@/lib/data";

const visualClass: Record<string, string> = {
  hisnet: "visual-hisnet",
  "task-management": "visual-backend",
  medpulse: "visual-medpulse",
  "poy-calculator": "visual-poy",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className={`project-visual ${visualClass[project.slug] ?? ""}`} aria-label={`View ${project.title} details`}>
        <div className="visual-topline"><span>{project.category}</span><span>{project.number}</span></div>
        {project.slug === "hisnet" ? (
          <div className="hisnet-visual-content">
            <div className="brain-orbit"><span /><span /><span /><b>ViT</b></div>
            <div className="visual-caption">COMPUTATIONAL PATHOLOGY</div>
          </div>
        ) : project.slug === "task-management" ? (
          <div className="terminal-visual"><span>api / v1 / tasks</span><i>const task = await prisma.task.create( )</i><i>status: <b>200 OK</b></i><i>request_id: 8f2a...c1d</i></div>
        ) : project.slug === "medpulse" ? (
          <div className="med-visual"><div className="med-sidebar" /><div className="med-panel"><span /><span /><span /><div /></div></div>
        ) : (
          <div className="calc-visual"><span>POY / CALCULATORS</span><b>125.80</b><i>INSTANT RESULT ↗</i></div>
        )}
        <span className="visual-open"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="project-card-body">
        <div className="project-card-title"><div><span className="project-index">PROJECT {project.number}</span><h3>{project.title}</h3></div></div>
        <p>{project.description}</p>
        <div className="tag-row">{project.stack.slice(0, 5).map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
        <div className="project-card-footer">
          <Link href={`/projects/${project.slug}`} className="text-link">Explore project <ArrowUpRight size={15} /></Link>
          <div className="project-external">
            {project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={16} /></a> : null}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><Globe2 size={16} /></a> : null}
          </div>
        </div>
      </div>
    </article>
  );
}
