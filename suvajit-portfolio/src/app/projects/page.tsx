import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Projects</span></div><span className="eyebrow"><span className="eyebrow-line" />SELECTED WORK</span><h1>Ideas made into<br /><span className="gradient-text">working software.</span></h1><p>Explore academic research, backend engineering, full-stack application work, and practical frontend utilities.</p></div></section>
      <section className="section-sm"><div className="container"><SectionHeading eyebrow="PROJECT ARCHIVE" title="Featured projects" description="Open a project to explore its goals, technology choices, and implementation details." /><div className="project-grid">{projects.map((project) => <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>)}</div></div></section>
    </>
  );
}
