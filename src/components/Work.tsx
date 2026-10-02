"use client";

import Link from "next/link";
import { useRef } from "react";
import { Figure } from "./Figure";
import { T } from "./T";
import { caseStudies, site, type CaseStudy } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

function Sheet({ study, index, total }: { study: CaseStudy; index: number; total: number }) {
  const root = useRef<HTMLElement>(null);
  const href = `/work/${study.slug}`;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap
        .timeline({ scrollTrigger: { trigger: root.current, start: "top 70%", once: true } })
        .fromTo(
          ".frame",
          { clipPath: "inset(10% 6% 10% 6%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, clearProps: "clipPath" },
        )
        .from(".frame .mock", { scale: 1.06, duration: 1.6 }, 0)
        .from(".sheet__title, .sheet__sector", { y: 24, opacity: 0, stagger: 0.08 }, 0.5)
        .from(".sheet__summary, .spec > div, .sheet__more", { y: 16, opacity: 0, stagger: 0.05, duration: 0.8 }, 0.7)
        .from(".note__dot", { scale: 0, duration: 0.5, stagger: 0.15, ease: "back.out(2)" }, 1)
        .from(".note__leader", { scaleX: 0, duration: 0.5, stagger: 0.15 }, 1.1)
        .from(".note__label", { opacity: 0, duration: 0.5, stagger: 0.15 }, 1.25);

      gsap.fromTo(
        ".frame__inner",
        { yPercent: 2 },
        {
          yPercent: -2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { scope: root },
  );

  return (
    <article ref={root} className="sheet" aria-labelledby={`${study.slug}-title`}>
      <div className="sheet__info">
        <p className="sheet__index mono">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3 id={`${study.slug}-title`} className="display sheet__title">
          <Link href={href}>
            <T>{study.title}</T>
          </Link>
        </h3>
        <p className="sheet__sector">{study.sector}</p>
        <p className="sheet__summary">
          <T>{study.summary}</T>
        </p>
        <dl className="spec">
          <div>
            <dt>Role</dt>
            <dd><T>{study.role}</T></dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd><T>{study.timeline}</T></dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd><T>{study.status}</T></dd>
          </div>
        </dl>
        <Link href={href} className="sheet__more arrow-link">
          <span>View case study</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>

      <Link href={href} className="sheet__figure" tabIndex={-1} aria-hidden="true">
        <Figure
          mock={study.mock}
          image={study.image}
          label={`${study.sector} project preview`}
          annotations={study.annotations}
          placeholder={site.placeholder}
        />
      </Link>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="section-head">
        <h2 id="work-title" className="display section-title">
          Selected work
        </h2>
        <p className="section-note">Case studies</p>
      </div>
      {caseStudies.map((s, i) => (
        <Sheet key={s.slug} study={s} index={i} total={caseStudies.length} />
      ))}
    </section>
  );
}
