import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Braces, Database, Github, Layers3, Mail, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillExplorer } from "@/components/SkillExplorer";
import { profile, projects, experience, education, certification } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <div className="availability"><span className="availability-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <p className="hero-kicker">SOFTWARE ENGINEER · FULL STACK DEVELOPER</p>
            <h1>Hi, I&apos;m<br /><span className="gradient-text">Suvajit Sahoo.</span></h1>
            <p className="hero-role">I build reliable systems and meaningful digital experiences.</p>
            <p className="hero-copy">Computer Science graduate focused on backend engineering, REST APIs, microservices, and full-stack applications. I also explore deep learning through academic research in computational pathology.</p>
            <div className="hero-buttons">
              <Link href="/projects" className="button button-primary">Explore my work <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="button button-secondary">Let&apos;s talk <Mail size={15} /></Link>
              <a href={profile.resume} download className="button button-quiet">Download CV <ArrowDownRight size={15} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <span className="hero-social-divider" />
              <a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a>
              <span className="hero-social-divider" />
              <span><MapPin size={14} /> West Bengal, India</span>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hero-art-wrap">
            <div className="hero-art">
              <div className="orbit"><span className="orbit-node" /></div>
              <span className="floating-chip chip-react">React.js</span>
              <span className="floating-chip chip-node">Node.js</span>
              <span className="floating-chip chip-db">TypeScript</span>
              <div className="profile-glass">
                <div className="profile-top"><span>DEVELOPER PROFILE</span><span>01 / 26</span></div>
                <div className="avatar-mark">SS</div>
                <h3>Suvajit Sahoo</h3>
                <p>Software Engineer · Backend & Full Stack</p>
                <div className="profile-meta">
                  <div><span>Currently</span><b>SDE Intern</b></div>
                  <div><span>Focus</span><b>Backend Systems</b></div>
                  <div><span>Research</span><b>Vision Transformers</b></div>
                  <div><span>Based in</span><b>West Bengal, IN</b></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-inner">
          <span className="trust-label">TECH I WORK WITH</span>
          <div className="trust-items">
            <span><Braces size={15} /> TypeScript</span>
            <span><Layers3 size={15} /> React.js</span>
            <span><Database size={15} /> MySQL / MongoDB</span>
            <span><BrainCircuit size={15} /> Deep Learning</span>
            <span><Sparkles size={15} /> Redis & BullMQ</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineering with curiosity and purpose." description="I enjoy working across the stack, with a particular interest in backend systems, clean APIs, database design, and asynchronous workflows." action={<Link href="/about" className="text-link">More about me <ArrowUpRight size={15} /></Link>} />
          <div className="intro-grid">
            <Reveal><p className="intro-large">I turn complex requirements into <em>practical software</em> that people can depend on.</p></Reveal>
            <Reveal delay={0.1}>
              <p className="intro-copy">My recent work has involved candidate and user management services, slot-booking workflows, queue-based notifications, and admin-panel functionality. Alongside industry work, my final-year research project explored Vision Transformer architectures for classifying osteosarcoma histopathology images.</p>
              <div className="info-grid">
                <div className="info-tile"><span>Education</span><b>B.Tech, Computer Science</b></div>
                <div className="info-tile"><span>Current role</span><b>Software Development Engineer Intern</b></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects built with intent." description="A mix of backend engineering, full-stack application development, practical tools, and academic AI research." action={<Link href="/projects" className="text-link">All projects <ArrowUpRight size={15} /></Link>} />
          <div className="project-grid">{projects.filter((project) => project.featured).map((project) => <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="TOOLKIT" title="Skills & technologies" description="Tools and concepts I have worked with across frontend, backend, databases, infrastructure, and machine learning." action={<Link href="/skills" className="text-link">Explore skills <ArrowUpRight size={15} /></Link>} />
          <SkillExplorer />
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading eyebrow="EXPERIENCE" title="Building in real product environments." description="Contributing to backend services, integrations, and operational workflows as a Software Development Engineer Intern." action={<Link href="/experience" className="text-link">Full experience <ArrowUpRight size={15} /></Link>} />
          <div className="experience-card">
            <div className="experience-panel">
              <div className="experience-head"><div><h3>{experience.title}</h3><p>{experience.company}</p></div><span className="period-pill">{experience.period}</span></div>
              <ul className="experience-list">{experience.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="tag-row">{experience.stack.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="EDUCATION & TRAINING" title="A foundation for continuous learning." />
          <div className="education-grid">{education.map((item, index) => <article className="education-card" key={item.title}><span>0{index + 1} / EDUCATION</span><h3>{item.title}</h3><p>{item.institution}</p><b>{item.detail} · {item.period}</b></article>)}</div>
          <div className="cert-card" style={{ marginTop: 15 }}><div><h3>{certification.title}</h3><p>{certification.period} · Data analysis, visualization, ML fundamentals, Python, SQL, and data pipelines.</p></div><span className="tech-tag">CERTIFICATION / TRAINING</span></div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band"><div className="cta-content"><div><h2>Have a role, project, or technical challenge in mind?</h2><p>I&apos;d be glad to connect and discuss how I can contribute.</p></div><Link href="/contact" className="button button-primary">Get in touch <ArrowUpRight size={16} /></Link></div></div>
        </div>
      </section>
    </>
  );
}
