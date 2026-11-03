import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink, Github, FileText } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { HisnetExplorer } from "@/components/HisnetExplorer";
import { projects, hisnet } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project not found" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  if (project.slug === "hisnet") return <HisnetDetail />;

  const related = projects.filter((item) => item.slug !== slug).slice(0, 2);
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{project.title}</span></div><span className="eyebrow"><span className="eyebrow-line" />PROJECT {project.number} · {project.category.toUpperCase()}</span><h1>{project.title.split(" ").length > 2 ? project.title : <>{project.title}<br /><span className="gradient-text">{project.subtitle}</span></>}</h1><p>{project.description}</p><div className="hero-buttons">{project.github ? <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">View GitHub <Github size={15} /></a> : null}{project.demo ? <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Open live demo <ExternalLink size={15} /></a> : null}<Link href="/projects" className="button button-secondary"><ArrowLeft size={15} /> All projects</Link></div></div></section>
      <section className="section-sm"><div className="container two-col"><div className="content-block"><span className="eyebrow"><span className="eyebrow-line" />OVERVIEW</span><h3 style={{ marginTop: 12 }}>What the project does</h3><p>{project.description}</p><h3 style={{ marginTop: 26 }}>Key highlights</h3><ul className="detail-list">{project.highlights.map((item) => <li key={item}><ArrowUpRight size={14} />{item}</li>)}</ul></div><div className="content-block"><span className="eyebrow"><span className="eyebrow-line" />TECH STACK</span><h3 style={{ marginTop: 12 }}>Technologies used</h3><div className="tag-row">{project.stack.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div><div className="notice-box" style={{ marginTop: 25 }}>This portfolio presents the project based on the information available in the resume. Detailed repository or deployment links are shown only where supplied and verified.</div></div></div></section>
      <section className="section-sm"><div className="container"><SectionHeading eyebrow="MORE WORK" title="Explore other projects" /><div className="project-grid">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></div></section>
    </>
  );
}

function HisnetDetail() {
  const totalClass = hisnet.classes.reduce((sum, item) => sum + item.value, 0);
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>HisNet</span></div><span className="eyebrow"><span className="eyebrow-line" />PROJECT 01 · AI / DEEP LEARNING RESEARCH</span><h1>HisNet<br /><span className="gradient-text">Computational pathology with Vision Transformers.</span></h1><p>A final-year academic research project exploring ViT-based classification of osteosarcoma histopathology image patches into viable tumor, necrotic tumor, and non-tumor classes.</p><div className="hero-buttons"><a href={"/documents/HisNet_Final_Year_Project_Report.pdf"} target="_blank" rel="noreferrer" className="button button-primary">View full research report <FileText size={15} /></a><a href={"/documents/HisNet_Final_Year_Project_Report.pdf"} download className="button button-secondary">Download report <Download size={15} /></a><Link href="/projects" className="button button-quiet"><ArrowLeft size={15} /> Back to projects</Link></div></div></section>

      <section className="section-sm"><div className="container"><SectionHeading eyebrow="PROJECT SNAPSHOT" title="The research at a glance" description={`B.Tech final-year project at ${hisnet.institution}, guided by ${hisnet.guide}. ${hisnet.teamSize}.`} /><div className="hisnet-stats">{hisnet.dataset.map((item) => <div className="stat-card" key={item.label}><span>{item.label}</span><b>{item.value}</b><small>As documented in the project report</small></div>)}</div></div></section>

      <section className="section-sm"><div className="container"><SectionHeading eyebrow="PROBLEM & APPROACH" title="From whole slides to tissue classes" description="The project report describes an automated patch-level classification workflow intended to support analysis of osteosarcoma histology images. It is an academic research prototype, not a clinically validated diagnostic system." /><div className="two-col"><div className="content-block"><h3>Research objective</h3><p>Develop HisNet, a Vision Transformer-based framework to classify patches extracted from whole-slide images into Viable Tumor (VT), Necrotic Tumor (NEC), and Non-Tumor (NT) categories.</p></div><div className="content-block"><h3>Data augmentation</h3><div className="tag-row"><span className="tech-tag">Rotation</span><span className="tech-tag">Horizontal flipping</span><span className="tech-tag">Contrast adjustment</span><span className="tech-tag">Scaling</span></div><p style={{ marginBottom: 0 }}>These transformations are described in the report as methods to increase dataset variability and improve robustness to staining and structural variations.</p></div></div></div></section>

      <section className="section-sm"><div className="container"><SectionHeading eyebrow="MODEL PIPELINE" title="Explore the HisNet architecture" description="Select each stage to read a short explanation of its role in the model workflow, based on the submitted report." /><HisnetExplorer /></div></section>

      <section className="section-sm"><div className="container"><div className="two-col">
        <div className="content-block"><span className="eyebrow"><span className="eyebrow-line" />DATASET COMPOSITION</span><h3 style={{ marginTop: 12 }}>Patch distribution by class</h3><p>The class counts below match the dataset statistics in the report.</p><div className="class-bars">{hisnet.classes.map((item) => <div className="class-row" key={item.short}><span>{item.label}</span><div className="class-track"><div className="class-fill" style={{ width: `${(item.value / totalClass) * 100}%` }} /></div><b>{item.value.toLocaleString("en-IN")}</b></div>)}</div><p style={{ marginBottom: 0, fontSize: 10 }}>Total class patches: {totalClass.toLocaleString("en-IN")}</p></div>
        <div className="content-block"><span className="eyebrow"><span className="eyebrow-line" />REPORTED RESULTS</span><h3 style={{ marginTop: 12 }}>Model performance</h3><p>Accuracy values reproduced from the project report. These are separate training, validation, and independent test metrics.</p><div className="result-bars">{hisnet.metrics.map((item) => <div className="result-row" key={item.label}><span>{item.label}</span><div className="class-track"><div className="result-fill" style={{ width: `${item.value}%` }} /></div><b>{item.value.toFixed(2)}%</b></div>)}</div><div className="notice-box" style={{ marginTop: 19 }}>Training duration documented in the report: <strong>500 epochs</strong>. The page does not invent epoch-by-epoch data or reconstruct unavailable raw chart values.</div></div>
      </div></div></section>

      <section className="section-sm"><div className="container"><SectionHeading eyebrow="LIMITATIONS" title="Research context matters" description="The report itself identifies constraints that should be understood before interpreting the results." /><div className="content-block"><ul className="detail-list">{hisnet.limitations.map((item) => <li key={item}><ArrowUpRight size={14} />{item}</li>)}</ul><div className="notice-box" style={{ marginTop: 20 }}><strong>Important:</strong> HisNet is an academic research project. The report does not claim real-world clinical validation or approval for medical use. Reported test accuracy is not a guarantee of clinical performance.</div></div></div></section>

      <section className="section-sm"><div className="container"><SectionHeading eyebrow="ORIGINAL DOCUMENT" title="Read the complete 44-page report" description="Open the uploaded final-year project report to review the full methodology, architecture illustrations, results, and bibliography." /><div className="content-block"><div className="hero-buttons" style={{ marginTop: 0 }}><a href="/documents/HisNet_Final_Year_Project_Report.pdf" target="_blank" rel="noreferrer" className="button button-primary">Open PDF in new tab <ExternalLink size={15} /></a><a href="/documents/HisNet_Final_Year_Project_Report.pdf" download className="button button-secondary">Download PDF <Download size={15} /></a></div><iframe className="pdf-frame" title="HisNet final year project report" src="/documents/HisNet_Final_Year_Project_Report.pdf#view=FitH" style={{ marginTop: 22 }} /></div></div></section>
    </>
  );
}
