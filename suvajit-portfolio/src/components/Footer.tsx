import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="brand footer-brand"><span className="brand-mark">ss</span><span>Suvajit Sahoo<span className="brand-dot">.</span></span></Link>
          <p className="footer-note">Building useful software with thoughtful engineering.</p>
        </div>
        <div className="footer-links">
          <Link href="/projects">Projects <ArrowUpRight size={14} /></Link>
          <Link href="/contact">Contact <ArrowUpRight size={14} /></Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Suvajit Sahoo. All rights reserved.</span>
        <span className="footer-built">Designed & built with care <MoveUpRight size={13} /></span>
      </div>
    </footer>
  );
}
