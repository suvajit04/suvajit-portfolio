import type { Metadata } from "next";
import Link from "next/link";
import { Github, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></div><span className="eyebrow"><span className="eyebrow-line" />GET IN TOUCH</span><h1>Let&apos;s start a<br /><span className="gradient-text">conversation.</span></h1><p>Have an opportunity, project, or question? Send a note and I&apos;ll get back to you through email.</p></div></section>
      <section className="section-sm"><div className="container contact-grid">
        <aside className="contact-aside"><h2>Good work starts with a clear conversation.</h2><p>I&apos;m interested in software engineering opportunities and meaningful projects where I can contribute, learn, and grow.</p>
          <div className="contact-detail"><div className="contact-icon"><Mail size={17} /></div><div><span>Email</span><b>{profile.email}</b></div></div>
          <div className="contact-detail"><div className="contact-icon"><Phone size={17} /></div><div><span>Phone</span><b>{profile.phone}</b></div></div>
          <div className="contact-detail"><div className="contact-icon"><MapPin size={17} /></div><div><span>Location</span><b>{profile.location}</b></div></div>
          <div className="contact-detail"><div className="contact-icon"><Github size={17} /></div><div><span>GitHub</span><b><a href={profile.github} target="_blank" rel="noreferrer">github.com/suvajit04 <ArrowUpRight size={12} /></a></b></div></div>
        </aside>
        <ContactForm />
      </div></section>
    </>
  );
}
