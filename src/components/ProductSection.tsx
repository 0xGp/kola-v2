"use client";

import { useRef } from "react";
import { product } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function ProductSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".pm__heading, .pm__sub, .pm__body", {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
      });
      gsap.from(".flow__step", {
        opacity: 0,
        x: -12,
        stagger: 0.08,
        duration: 0.8,
        scrollTrigger: { trigger: ".flow", start: "top 75%", once: true },
      });
      gsap.from(".flow__arrow", {
        scaleY: 0,
        stagger: 0.08,
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: { trigger: ".flow", start: "top 75%", once: true },
      });
      gsap.from(".cap", {
        y: 24,
        opacity: 0,
        stagger: 0.07,
        scrollTrigger: { trigger: ".caps", start: "top 78%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section id="approach" ref={root} className="pm" aria-labelledby="pm-title">
      <div className="pm__intro">
        <div>
          <h2 id="pm-title" className="display pm__heading">
            {product.heading}
          </h2>
          <p className="pm__sub">{product.subheading}</p>
          <p className="pm__body">{product.body}</p>
        </div>

        <ol className="flow" aria-label="Product framework">
          {product.framework.map((step, i) => (
            <li key={step} className="flow__item">
              <span className="flow__step">{step}</span>
              {i < product.framework.length - 1 && <span className="flow__arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>

      <ul className="caps">
        {product.capabilities.map((c, i) => (
          <li key={c.title} className="cap">
            <span className="cap__num mono">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="cap__title">{c.title}</h3>
            <p className="cap__body">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
