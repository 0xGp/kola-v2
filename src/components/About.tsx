"use client";

import Image from "next/image";
import { useRef } from "react";
import { Measure } from "./Measure";
import { about, site, skills } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".about__heading, .about__copy p, .about__interests", {
        y: 24,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
      });
      gsap.fromTo(
        ".portrait__frame",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          clearProps: "clipPath",
          scrollTrigger: { trigger: ".portrait", start: "top 80%", once: true },
        },
      );
      gsap.from(".skills__group", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: ".skills", start: "top 80%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section id="about" ref={root} className="about" aria-labelledby="about-title">
      <div className="about__grid">
        <figure className="portrait">
          <Measure axis="x">
            <div className="portrait__frame">
              {site.photo ? (
                <>
                  <Image
                    src={site.photo}
                    alt={`Portrait of ${site.name}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 36vw"
                    className="portrait__img"
                  />
                  <span className="portrait__tint" aria-hidden="true" />
                </>
              ) : (
                <div className="portrait__empty">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 42c2.5-8 9-12 16-12s13.5 4 16 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>Photo placeholder</span>
                  <span className="mono">4:5 · add to /public and set site.photo</span>
                </div>
              )}
            </div>
          </Measure>
          <figcaption className="portrait__cap">
            {site.name}, {site.location}
          </figcaption>
        </figure>

        <div className="about__text">
          <h2 id="about-title" className="display about__heading">
            {about.heading}
          </h2>
          <div className="about__copy">
            {about.copy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="about__interests">{about.interests}</p>
        </div>
      </div>

      <div className="skills" aria-labelledby="skills-title">
        <h3 id="skills-title" className="skills__title">
          Skills
        </h3>
        <div className="skills__grid">
          {skills.map((g) => (
            <div key={g.group} className="skills__group">
              <h4 className="skills__label">{g.group}</h4>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
