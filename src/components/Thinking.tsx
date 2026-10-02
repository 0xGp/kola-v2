"use client";

import { useRef } from "react";
import { T } from "./T";
import { learning, notes } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function Thinking() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".note-card", {
        y: 24,
        opacity: 0,
        stagger: 0.06,
        scrollTrigger: { trigger: ".notes", start: "top 80%", once: true },
      });
    },
    { scope: root },
  );

  const [lead, ...rest] = notes;

  return (
    <section id="thinking" ref={root} className="thinking" aria-labelledby="thinking-title">
      <div className="section-head">
        <h2 id="thinking-title" className="display section-title">
          Things I&apos;m thinking about.
        </h2>
        <p className="section-note">Notes</p>
      </div>

      <div className="notes">
        <article className="note-card note-card--lead">
          <p className="note-card__topic">{lead.topic}</p>
          <blockquote className="note-card__text">
            <T>{lead.text}</T>
          </blockquote>
        </article>
        {rest.map((n) => (
          <article key={n.topic} className="note-card">
            <p className="note-card__topic">{n.topic}</p>
            {n.title && <h3 className="note-card__title">{n.title}</h3>}
            <p className="note-card__text">
              <T>{n.text}</T>
            </p>
          </article>
        ))}
      </div>

      <aside className="learning" aria-labelledby="learning-title">
        <h3 id="learning-title" className="learning__title">
          Currently learning
        </h3>
        <ul className="learning__list">
          {learning.map((l, i) => (
            <li key={i}>
              <span className="learning__kind">{l.kind}</span>
              <span className="learning__name">
                <T>{l.title}</T>
              </span>
              {l.by && (
                <span className="learning__by">
                  <T>{l.by}</T>
                </span>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
