"use client";

import Link from "next/link";
import { useRef } from "react";
import { Measure } from "./Measure";
import { onAnchorClick } from "./Nav";
import { conversation, hero, site } from "@/lib/content";

const cta = conversation();
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(".reveal-line > span", { yPercent: 105, y: 0 }, { yPercent: 0, duration: 1.4, stagger: 0.09 })
        .from(".hero__role", { opacity: 0, y: 12, duration: 0.9 }, 0.2)
        .from(".hero__foot > *", { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.6);

      gsap.to(".hero__title", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__stage">
        <p className="hero__role">{site.role}</p>
        <Measure axis="y" className="hero__measure-y" delay={1.1}>
          <Measure axis="x" fit delay={0.9}>
            <h1 id="hero-title" className="hero__title display">
              <span className="sr-only">{site.name}, {site.role}. </span>
              {hero.lines.map((line) => (
                <span key={line} className="reveal-line" aria-hidden="true">
                  <span>{line}</span>
                </span>
              ))}
              <span className="sr-only">{hero.lines.join(" ")}</span>
            </h1>
          </Measure>
        </Measure>
      </div>

      <div className="hero__foot">
        <p className="hero__intro">{hero.intro}</p>
        <div className="hero__actions">
          <Link href="/#work" className="arrow-link" onClick={onAnchorClick}>
            <span>View work</span>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <a
            href={cta.href}
            className="btn-primary"
            {...(cta.external && { target: "_blank", rel: "noreferrer" })}
          >
            <span>Start a conversation</span>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
