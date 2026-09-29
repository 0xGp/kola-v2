---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

Scope: home page (single long scroll). Visitor mode: Experience.
Audience: hiring managers and design leads skimming several portfolios; job: judge craft and thinking fast; action: start a conversation (email). Proof: four synthetic case studies drawn as coded interface mockups. Constraints: dark base (user-pinned), reduced-motion fallback, all content placeholder.

## Direction contract

THESIS: The portfolio is a designer's handoff sheet. Every piece of work is presented measured and annotated with live redlines, so craft is proven by precision rather than claimed. Refuses the name-hero plus card-grid portfolio.

OWN-WORLD: Graphite drawing board (#0c0d0f) with a faint 32px drafting grid, bone-white ink, one sky-blue accent (#5cc8ff) used only for measurement lines, callouts and the primary action. Expanded grotesk display (Archivo, wdth 125), same family for body, Geist Mono only for measured values. Hairline 1px rules, no cards, no shadows.

STORY: The visitor reads what the designer does in one line, sees it measured, scrolls through four pinned work sheets whose redlines draw in around each interface with spec callouts (role, timeline, team, outcome), reads the method as a spec legend, then signs off by emailing.

FIRST VIEWPORT: Top rail: name left, section links centre, availability plus local time right. Headline across full width at ~9vw expanded grotesk, three lines. A live dimension line above it reports its true pixel width; a vertical one reports cap height. Bottom-left: two-line intro. Bottom-right: sky-blue "Start a project" action.

FORM: Redline spec sheet, grounded list position 1 (user chose IMPECCABLE'S PICK over assigned #5). Seed key 6803f4d5. Signature interaction: redlines that draw on scroll and measure real DOM with ResizeObserver; a crosshair cursor reporting x/y coordinates. Motion grammar: stroke draws, then values tick in, then content settles; ease-out expo.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
