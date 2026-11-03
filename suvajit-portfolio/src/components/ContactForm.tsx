"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setNotice("Clipboard access was unavailable. Please copy the email address manually.");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "Portfolio enquiry").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setNotice("Please complete all fields before continuing.");
      return;
    }
    const body = `Hi Suvajit,\n\n${message}\n\nFrom: ${name}\nReply email: ${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should open with the message prepared. Send it from your email app to complete delivery.");
    event.currentTarget.reset();
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></label>
        </div>
        <label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label>
        <label>Message<textarea name="message" required rows={6} placeholder="Tell me a little about your project, opportunity, or question..." /></label>
        <div className="form-bottom">
          <p>Opens your default email application. No message is sent by this website.</p>
          <button className="button button-primary" type="submit">Prepare email <Send size={16} /></button>
        </div>
        {notice ? <p className="form-notice" role="status">{notice}</p> : null}
      </form>
      <div className="email-copy-row">
        <span><MailIcon /> {profile.email}</span>
        <button className="copy-button" type="button" onClick={copyEmail}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "Copied" : "Copy email"}</button>
        <a href={`mailto:${profile.email}`} aria-label="Email Suvajit"><ArrowUpRight size={16} /></a>
      </div>
    </div>
  );
}

function MailIcon() {
  return <span className="mail-dot" aria-hidden="true">@</span>;
}
