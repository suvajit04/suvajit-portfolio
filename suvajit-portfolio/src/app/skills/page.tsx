import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillExplorer } from "@/components/SkillExplorer";

export const metadata: Metadata = { title: "Technical Skills" };

export default function SkillsPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Skills</span></div><span className="eyebrow"><span className="eyebrow-line" />MY TOOLKIT</span><h1>Technologies I use<br /><span className="gradient-text">to build and solve.</span></h1><p>A categorized view of the languages, frameworks, databases, infrastructure tools, and engineering fundamentals I have worked with. Skill levels are intentionally not represented as percentages.</p></div></section>
      <section className="section-sm"><div className="container"><SectionHeading eyebrow="TECHNICAL SKILLS" title="Explore the stack" description="Select a category to focus on the relevant technologies." /><SkillExplorer /></div></section>
    </>
  );
}
