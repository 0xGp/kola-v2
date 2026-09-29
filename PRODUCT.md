# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, React, TypeScript) with GSAP (ScrollTrigger) for scroll-linked motion and Lenis for smooth scrolling. Chosen by the user.

## Users

- Hiring managers, design leads, and founders evaluating a senior product designer for a role or engagement. They arrive from a link (LinkedIn, a referral, a job application) and skim on desktop first, often revisiting on mobile.
- Secondary: peers and recruiters scanning for craft signals and contact details.

## Product Purpose

A personal portfolio for an independent product designer. It exists to show how the designer thinks and what they have shipped, and to turn a qualified visitor into a conversation (email / booking). Success: a visitor understands the designer's specialism within one viewport and reaches at least one case study or the contact action.

## Positioning

Kolapo Ayodele, Product Designer + Product Manager based in Lagos, Nigeria. Works across product strategy, UX/UI design and product discovery, with experience spanning startups, technology, healthcare, real estate, transportation and business products. The portfolio should show product thinking behind the screens, not only final screens.

## Operating Context

Visitors compare several portfolios in quick succession, usually in a desktop browser tab, sometimes on a phone between meetings. They scan headlines and imagery first and open one or two case studies.

## Capabilities and Constraints

- Long-scroll home (work, product approach, how I work, experience, about + skills, playground, notes, contact) plus case study pages at `/work/[slug]`.
- Smooth scroll and scroll animations must respect `prefers-reduced-motion`.
- Must stay fast: animations limited to transform/opacity where possible.

## Brand Commitments

- User pinned: dark base. Augen (augen.pro) is a loose reference for pacing (large type, long scroll, generous imagery), not an identity to copy.

## Evidence on Hand

Name, role, location, positioning copy, about copy, skills and the product framework are supplied by Kolapo. Projects, companies, dates, metrics, images, contact links and photo are not yet supplied: they render as bracketed placeholders from `src/lib/content.ts`. Never invent achievements, clients, metrics, companies, testimonials, awards or statistics.

## Product Principles

- Show the thinking, not only the pixels.
- One clear next action: start a conversation.
- Motion serves reading order; it never hides content.
- Restraint over decoration; every section earns its place.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, full keyboard navigation, visible focus, reduced-motion fallback.
