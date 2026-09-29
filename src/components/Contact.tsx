"use client";

import { useRef, useState } from "react";
import { activeLinks, contact, conversation, site } from "@/lib/content";

const cta = conversation();
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<"idle" | "done" | "error">("idle");
  const links = activeLinks();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".contact__heading, .contact__copy, .contact__actions > *, .contact__links li", {
        y: 32,
        opacity: 0,
        stagger: 0.07,
        duration: 1.2,
        scrollTrigger: { trigger: root.current, start: "top 68%", once: true },
      });
    },
    { scope: root },
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied("done");
    } catch {
      setCopied("error");
    }
    window.setTimeout(() => setCopied("idle"), 2400);
  }

  const arrow = (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  return (
    <section id="contact" ref={root} className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="display contact__heading">
        {contact.heading}
      </h2>
      <p className="contact__copy">{contact.copy}</p>

      <div className="contact__actions">
        {site.email ? (
          <>
            <a
              href={cta.href}
              className="btn-primary btn-primary--lg"
              {...(cta.external && { target: "_blank", rel: "noreferrer" })}
            >
              <span>{contact.cta}</span>
              {arrow}
            </a>
            <button type="button" className="btn-ghost" onClick={copy}>
              <span aria-live="polite">
                {copied === "done" ? "Copied" : copied === "error" ? "Copy failed" : site.email}
              </span>
            </button>
          </>
        ) : (
          <>
            <span className="btn-primary btn-primary--lg is-disabled" aria-disabled="true">
              <span>{contact.cta}</span>
              {arrow}
            </span>
            <p className="ph contact__missing">[Add your email in src/lib/content.ts to enable this button]</p>
          </>
        )}
      </div>

      {links.length > 0 && (
        <ul className="contact__links">
          {links.map((l) => (
            <li key={l.key}>
              <a href={l.href} target="_blank" rel="noreferrer" className="ext-link">
                <span>{l.label}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M5 11L11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
