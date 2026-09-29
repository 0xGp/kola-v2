"use client";

import { useId, useRef, useState } from "react";
import { T } from "./T";
import { experience, type ExperienceItem } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

function Entry({ item, defaultOpen }: { item: ExperienceItem; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <li className={`tl__item${open ? " is-open" : ""}`}>
      <span className="tl__node" aria-hidden="true" />
      <p className="tl__period">
        <span className="mono tl__dates">
          {item.period.split(" — ").map((part, i) => (
            <span key={i}>
              {i > 0 && "— "}
              {part}
            </span>
          ))}
        </span>
        {item.location && <span className="tl__loc">{item.location}</span>}
      </p>
      <div className="tl__body">
        <h3 className="tl__heading">
          <button
            type="button"
            className="tl__toggle"
            aria-expanded={open}
            aria-controls={`${id}-panel`}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="tl__company">
              <T>{item.company}</T>
            </span>
            <span className="tl__role">
              <T>{item.role}</T>
            </span>
            <span className="tl__icon" aria-hidden="true" />
          </button>
        </h3>
        <ul className="tl__tags" aria-label="Areas">
          {item.sectors.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="tl__summary">
          <T>{item.summary}</T>
        </p>
        <div id={`${id}-panel`} className="tl__panel" role="region" aria-label={`${item.company} details`}>
          <div className="tl__panel-inner">
            <dl>
              <div>
                <dt>Impact / contribution</dt>
                <dd>
                  <T>{item.impact}</T>
                </dd>
              </div>
              <div>
                <dt>Details</dt>
                <dd>
                  <ul className="tl__details">
                    {item.details.map((d, i) => (
                      <li key={i}>
                        <T>{d}</T>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              {item.shipped && (
                <div className="tl__shipped">
                  <dt>What shipped</dt>
                  <dd>{item.shipped}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".tl__line", {
        scaleY: 0,
        ease: "none",
        scrollTrigger: { trigger: ".tl-wrap", start: "top 75%", end: "bottom 60%", scrub: 0.5 },
      });
      gsap.from(".tl__item", {
        y: 24,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: ".tl", start: "top 78%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section id="experience" ref={root} className="experience" aria-labelledby="exp-title">
      <div className="section-head">
        <h2 id="exp-title" className="display section-title">
          Experience across products and teams.
        </h2>
      </div>
      <div className="tl-wrap">
        <span className="tl__line" aria-hidden="true" />
        <ol className="tl">
          {experience.map((item, i) => (
            <Entry key={i} item={item} defaultOpen={i === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
