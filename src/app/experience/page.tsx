import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, certification } from "@/lib/data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Experience</span></div><span className="eyebrow"><span className="eyebrow-line" />PROFESSIONAL JOURNEY</span><h1>Learning by building<br /><span className="gradient-text">real software.</span></h1><p>My current professional experience is focused on backend microservices, APIs, database operations, notification workflows, and functional testing.</p></div></section>
      <section className="section-sm"><div className="container"><SectionHeading eyebrow="WORK EXPERIENCE" title="Professional experience" /><div className="experience-card"><div className="experience-panel"><div className="experience-head"><div><span className="eyebrow"><BriefcaseBusiness size={13} /> INDUSTRY EXPERIENCE</span><h3 style={{ marginTop: 12 }}>{experience.title}</h3><p>{experience.company}</p></div><span className="period-pill">{experience.period}</span></div><ul className="experience-list">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tag-row">{experience.stack.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div></div></div></div></section>
      <section className="section-sm"><div className="container"><SectionHeading eyebrow="TRAINING" title="Additional learning" /><Reveal><div className="cert-card"><div><h3>{certification.title}</h3><p>{certification.period} · {certification.details.join(" · ")}</p></div><span className="tech-tag">TRAINING</span></div></Reveal></div></section>
      <section className="section-sm"><div className="container"><div className="cta-band"><div className="cta-content"><div><h2>Interested in my experience?</h2><p>Explore the work or get in touch about an opportunity.</p></div><Link href="/contact" className="button button-primary">Contact me <ArrowUpRight size={16} /></Link></div></div></div></section>
    </>
  );
}
