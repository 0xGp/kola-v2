"use client";

import Link from "next/link";
import { onAnchorClick } from "./Nav";
import { mailto, site } from "@/lib/content";
import { scrollToTarget } from "@/lib/motion";

export function Footer() {
  const linkedin = site.links.linkedin;

  return (
    <footer className="footer">
      <div className="footer__id">
        <p className="footer__name">{site.name}</p>
        <p>{site.role}</p>
        <p>{site.location}</p>
        {site.email && (
          <p>
            <a href={mailto()} className="link">
              {site.email}
            </a>
          </p>
        )}
      </div>
      <nav aria-label="Footer" className="footer__links">
        <Link href="/#work" onClick={onAnchorClick} className="link">Work</Link>
        <Link href="/#about" onClick={onAnchorClick} className="link">About</Link>
        <Link href="/#experience" onClick={onAnchorClick} className="link">Experience</Link>
        <Link href="/#contact" onClick={onAnchorClick} className="link">Contact</Link>
        {linkedin && (
          <a href={linkedin} className="link ext" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
      </nav>
      <div className="footer__end">
        <p>© 2026 {site.name}</p>
        <button type="button" className="totop" onClick={() => scrollToTarget("body")}>
          <span>Back to top</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
