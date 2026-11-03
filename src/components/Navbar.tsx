"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || (href === "/projects" && pathname.startsWith("/projects"));

  return (
    <header className="site-header">
      <div className="nav-shell container">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Suvajit Sahoo home">
          <span className="brand-mark"><Terminal size={17} /></span>
          <span>ss<span className="brand-dot">.</span></span>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href={profile.resume} target="_blank" className="nav-resume mobile-resume" onClick={() => setOpen(false)}>
            Resume <ArrowUpRight size={15} />
          </Link>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href={profile.resume} target="_blank" className="nav-resume desktop-resume">
            Resume <ArrowUpRight size={15} />
          </Link>
          <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
