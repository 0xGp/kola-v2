// Only the name, role, location and copy Kolapo supplied are real.
// Anything wrapped in [square brackets] is a placeholder: it renders with a
// placeholder style so it can't be mistaken for a real claim. Replace it,
// and leave link fields empty ("") to hide them.

export const site = {
  placeholder: true,
  name: "Kolapo Ayodele",
  firstName: "Kolapo",
  role: "Product Designer + Product Manager",
  location: "Lagos, Nigeria",
  timeZone: "Africa/Lagos",
  url: "https://example.com",
  title: "Kolapo Ayodele | Product Designer & Product Manager",
  description:
    "Portfolio of Kolapo Ayodele, a Product Designer and Product Manager working across product strategy, UX/UI design, product discovery, and digital products.",
  email: "kolapoayodele@hotmail.com",
  // International format, digits only, no "+" or leading 0 (e.g. "2348012345678").
  // When set, "Start a conversation" opens WhatsApp; otherwise it falls back to email.
  whatsapp: "2347017837858",
  photo: "/kolapo.jpg",
  links: {
    linkedin: "",
    x: "",
    behance: "",
    dribbble: "",
    github: "",
  },
};

export const socialLabels: Record<keyof typeof site.links, string> = {
  linkedin: "LinkedIn",
  x: "X / Twitter",
  behance: "Behance",
  dribbble: "Dribbble",
  github: "GitHub",
};

export const hero = {
  lines: ["I design products", "and think about", "why they exist."],
  intro:
    "Product designer and product manager in Lagos, turning ambiguous problems into products people can actually use.",
};

export type Annotation = { x: number; y: number; label: string; side: "left" | "right" };
export type MockId = "health" | "dashboard" | "transit" | "system" | "property";

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  platform: string;
  status: string;
  mock: MockId;
  annotations: Annotation[];
  problem: string;
  founders: string;
  users: string;
  myRole: string;
  process: { title: string; body: string }[];
  solution: string;
  outcome: { metrics: { label: string; value: string }[]; qualitative: string };
  lessons: string[];
};

const processTemplate = [
  { title: "Discover", body: "[What did you learn from users, founders and data? Which methods did you use?]" },
  { title: "Define", body: "[How did you frame the problem and decide what success looks like?]" },
  { title: "Prioritize", body: "[What did you choose to build first, and what did you deliberately leave out?]" },
  { title: "Design & build", body: "[Key flows, prototypes and how you worked with engineers to ship.]" },
];

const outcomeTemplate = {
  metrics: [
    { label: "[Metric, e.g. signups]", value: "[—]" },
    { label: "[Metric, e.g. conversion]", value: "[—]" },
    { label: "[Metric, e.g. time saved]", value: "[—]" },
  ],
  qualitative:
    "[If numbers aren't available, describe the outcome in words: launch status, what changed for users, what the team could do afterwards. Don't estimate figures.]",
};

const lessonsTemplate = [
  "[Lesson one: something you'd repeat.]",
  "[Lesson two: something you'd do differently.]",
  "[Lesson three: what this taught you about users or the business.]",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "aidego",
    title: "AideGo Limited",
    sector: "[Sector]",
    summary: "[One sentence: the problem and what you shipped.]",
    role: "Project Manager",
    timeline: "July 2026 — Present",
    team: "[Team make-up]",
    platform: "[Web / Mobile]",
    status: "[Launch status]",
    mock: "dashboard",
    annotations: [
      { x: 46, y: 30, label: "[Key screen or decision]", side: "left" },
      { x: 93, y: 48, label: "[Design decision]", side: "left" },
      { x: 40, y: 84, label: "[Design decision]", side: "right" },
    ],
    problem: "[What problem did the product face? Describe the context and why it mattered.]",
    founders: "[What did the founders or business need? Goals, constraints, bets.]",
    users: "[Who were the users, what were they trying to do, and what got in their way?]",
    myRole: "[What you owned as project manager, and who you worked with.]",
    process: processTemplate,
    solution: "[What was delivered, and why it solves the problem.]",
    outcome: outcomeTemplate,
    lessons: lessonsTemplate,
  },
  {
    slug: "hoydoon",
    title: "Hoydoon",
    sector: "Real Estate",
    summary: "End-to-end product design for a real estate marketplace across Nigeria, Somalia and Kenya.",
    role: "Product Designer",
    timeline: "August 2024 — Present",
    team: "[Team make-up]",
    platform: "[Web / Mobile]",
    status: "Shipped",
    mock: "property",
    annotations: [
      { x: 56, y: 11, label: "[Key screen or decision]", side: "right" },
      { x: 30, y: 45, label: "[Design decision]", side: "right" },
      { x: 83, y: 58, label: "[Design decision]", side: "left" },
    ],
    problem: "[What problem did the product face? Describe the context and why it mattered.]",
    founders: "[What did the founders or business need? Goals, constraints, bets.]",
    users: "[Who were the users, what were they trying to do, and what got in their way?]",
    myRole:
      "Led end-to-end product design, working closely with engineers and stakeholders throughout product development, and established and maintained the design system and brand guidelines. [Add anything else you owned.]",
    process: processTemplate,
    solution: "[What you designed and shipped, and why it solves the problem.]",
    outcome: outcomeTemplate,
    lessons: lessonsTemplate,
  },
  {
    slug: "raacway",
    title: "Raacway",
    sector: "Transportation",
    summary: "Product design for a ride-hailing product for Nigeria and Somalia.",
    role: "Product Designer",
    timeline: "August 2024 — Present",
    team: "[Team make-up]",
    platform: "[Mobile app]",
    status: "Shipped",
    mock: "transit",
    annotations: [
      { x: 40, y: 80, label: "[Key screen or decision]", side: "left" },
      { x: 58, y: 36, label: "[Design decision]", side: "left" },
      { x: 74, y: 58, label: "[Design decision]", side: "left" },
    ],
    problem: "[What problem did the product face? Describe the context and why it mattered.]",
    founders: "[What did the founders or business need? Goals, constraints, bets.]",
    users: "[Who were the users, what were they trying to do, and what got in their way?]",
    myRole:
      "Designed the product, working closely with engineers and stakeholders throughout development. [Add the flows and decisions you owned.]",
    process: processTemplate,
    solution: "[What you designed and shipped, and why it solves the problem.]",
    outcome: outcomeTemplate,
    lessons: lessonsTemplate,
  },
];

export const product = {
  heading: "I don't just design screens.",
  subheading: "I think about the product behind them.",
  body: "My approach combines product thinking with design execution: understanding why a product should exist, deciding what matters most, and then shaping how it should work.",
  framework: ["Discover", "Define", "Prioritize", "Design", "Build", "Launch", "Learn"],
  capabilities: [
    { title: "Product Discovery", body: "Understanding users, business problems, market context, and opportunities." },
    { title: "Product Strategy", body: "Turning ambiguous problems into clear product direction and priorities." },
    { title: "Product Design", body: "Creating intuitive interfaces, flows, prototypes, and design systems." },
    {
      title: "Product Management",
      body: "Defining requirements, prioritizing features, coordinating execution, and thinking through product outcomes.",
    },
    { title: "Collaboration", body: "Working with founders, engineers, business teams, customers, and other stakeholders." },
    { title: "Iteration", body: "Using feedback, data, and learning to continuously improve products." },
  ],
};

export const howIWork = [
  { title: "Understand", body: "I start by understanding the user, business, market, and problem." },
  { title: "Define", body: "Turn observations into a clear product problem and opportunity." },
  { title: "Prioritize", body: "Identify what matters most and what should be built first." },
  { title: "Design", body: "Explore flows, wireframes, prototypes, and interfaces." },
  { title: "Build", body: "Work closely with engineers and stakeholders to bring the product to life." },
  { title: "Learn", body: "Use feedback, data, and real-world usage to improve the product." },
];

export type ExperienceItem = {
  company: string;
  location?: string;
  role: string;
  period: string;
  sectors: string[];
  summary: string;
  impact: string;
  details: string[];
  shipped?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Bookmua.ng",
    role: "Project Manager",
    period: "July 2026 — Present",
    sectors: ["Startups", "Technology", "Product Management", "Product Design"],
    summary:
      "Managed the development and coordination of Bookmua.ng, working across product planning, execution, and delivery.",
    impact: "Led the project from the management side, coordinating the work required to move the product forward.",
    details: [
      "Managed product planning and execution",
      "Coordinated with the people involved in building the product",
      "Worked across product and design considerations",
      "Oversaw progress from planning through implementation",
    ],
    shipped: "Bookmua.ng",
  },
  {
    company: "Quorvix",
    location: "Ireland — Remote",
    role: "Lead Product Designer",
    period: "August 2024 — Present",
    sectors: ["Startups", "Technology", "Product Design", "Product Management"],
    summary: "Led product design across multiple technology products, including real estate and mobility platforms.",
    impact:
      "Helped turn early product ideas into structured digital products by working across research, product experience, design systems and developer handoff.",
    details: [
      "Led end-to-end product design for Hoydoon, a real estate marketplace across Nigeria, Somalia and Kenya",
      "Designed Raacway, a rider-hailing product for Nigeria and Somalia",
      "Worked closely with engineers and stakeholders throughout product development",
      "Established and maintained design systems and brand guidelines",
    ],
    shipped: "Product experiences across web and mobile, including Hoydoon and Raacway.",
  },
  {
    company: "My Pals",
    location: "Nigeria — Remote",
    role: "Product Designer",
    period: "September 2023 — November 2024",
    sectors: ["Technology", "Product Design", "User Research"],
    summary: "Designed digital experiences across the company's website, web application and mobile application.",
    impact:
      "Helped translate product requirements and user needs into usable interfaces and prototypes that could be developed into digital products.",
    details: [
      "Designed website, web app and mobile app experiences",
      "Created wireframes and interactive prototypes",
      "Conducted user research and usability testing",
      "Collaborated with developers and stakeholders",
      "Developed and maintained design systems and brand guidelines",
    ],
    shipped: "Web and mobile product experiences.",
  },
  {
    company: "Goodwill Solarge",
    location: "Nigeria — Hybrid",
    role: "Brand Designer",
    period: "November 2023 — May 2024",
    sectors: ["Brand Strategy", "Marketing", "Design"],
    summary: "Worked on the company's brand strategy, digital presence and customer engagement activities.",
    impact:
      "Helped strengthen the company's visual identity and digital presence while supporting audience growth and engagement.",
    details: [
      "Conducted market research and competitive analysis",
      "Developed brand strategies",
      "Managed social media presence",
      "Created visual and written content",
      "Planned social media campaigns",
      "Engaged with the online community and monitored performance",
    ],
    shipped: "Brand and digital marketing assets, campaigns and social media content.",
  },
  {
    company: "Kabby's Treat",
    location: "Nigeria — Remote",
    role: "Product Designer",
    period: "December 2022 — September 2023",
    sectors: ["Technology", "Product Design", "User Research"],
    summary: "Designed digital product experiences across web and mobile in the experience platforms.",
    impact:
      "Helped transform product requirements into practical, user-friendly interfaces while working closely with developers and stakeholders.",
    details: [
      "Designed website, web app and mobile experiences",
      "Created wireframes and prototypes",
      "Conducted user research and usability testing",
      "Collaborated with developers and stakeholders",
      "Developed and maintained design systems and brand guidelines",
    ],
    shipped: "Digital product interfaces and prototypes.",
  },
];

export const about = {
  heading: "I'm interested in how good products come together.",
  copy: [
    "My journey started in product design, but working closely with founders, developers, customers, and business teams gradually expanded the way I think about products.",
    "Today, I approach product work from both sides: understanding how an experience should work and thinking about why the product should exist in the first place.",
    "I enjoy solving ambiguous problems, simplifying complex experiences, and working with teams to turn ideas into products people can actually use.",
  ],
  interests:
    "Outside product work, I enjoy reading, football, building ideas, and exploring businesses and technology.",
};

export const skills = [
  {
    group: "Product",
    items: ["Product Strategy", "Product Discovery", "Product Management", "Roadmapping", "Prioritization", "Requirements", "Product Thinking"],
  },
  {
    group: "Design",
    items: ["UX Design", "UI Design", "Interaction Design", "Wireframing", "Prototyping", "Design Systems", "User Research"],
  },
  {
    group: "Tools",
    items: ["Figma", "FigJam", "Adobe Illustrator", "Adobe Photoshop", "Notion", "Jira", "Linear", "Google Analytics", "Microsoft Excel"],
  },
  {
    group: "Business",
    items: ["Business Analysis", "Customer Understanding", "Stakeholder Management", "Communication", "Presentation", "Commercial Thinking"],
  },
];

export type PlaygroundItem = {
  id: string;
  title: string;
  kind: string;
  ratio: string;
  mock?: MockId;
};

export const playground: PlaygroundItem[] = [
  { id: "p1", title: "[Dashboard concept]", kind: "Dashboard concepts", ratio: "16 / 10", mock: "dashboard" },
  { id: "p2", title: "[Mobile interface]", kind: "Mobile interfaces", ratio: "4 / 5", mock: "transit" },
  { id: "p3", title: "[Landing page]", kind: "Landing pages", ratio: "3 / 4" },
  { id: "p4", title: "[Design system exploration]", kind: "UI explorations", ratio: "16 / 10", mock: "system" },
  { id: "p5", title: "[Brand exploration]", kind: "Brand explorations", ratio: "1 / 1" },
  { id: "p6", title: "[Micro-interaction]", kind: "Micro-interactions", ratio: "4 / 3" },
  { id: "p7", title: "[Design experiment]", kind: "Design experiments", ratio: "3 / 4" },
];

export const notes = [
  { topic: "Product", text: "Good products don't start with screens. They start with a problem worth solving." },
  { topic: "Design", text: "[Write a short note on design.]" },
  { topic: "Startups", text: "[Write a short note on startups.]" },
  { topic: "Business", text: "[Write a short note on business.]" },
  { topic: "Technology", text: "[Write a short note on technology.]" },
  { topic: "Career", text: "[Write a short note on career.]" },
  { topic: "Books", text: "[Write a short note on a book.]" },
];

export const learning = [
  { kind: "Book", title: "[Book title]", by: "[Author]" },
  { kind: "Course", title: "[Course name]", by: "[Provider]" },
  { kind: "Topic", title: "[Topic you're exploring]", by: "" },
];

export const contact = {
  heading: "Have a product problem to solve?",
  copy: "Whether you're building something new, improving an existing product, or looking for someone who can think across design and product, I'd be happy to hear from you.",
  cta: "Start a conversation",
};

export function mailto() {
  return `mailto:${site.email}?subject=${encodeURIComponent("Let's talk about a product")}`;
}

export function conversation() {
  const digits = site.whatsapp.replace(/\D/g, "");
  if (digits) {
    const text = encodeURIComponent("Hi Kolapo, I came across your portfolio and would like to talk about a product.");
    return { href: `https://wa.me/${digits}?text=${text}`, external: true };
  }
  return { href: mailto(), external: false };
}

export function activeLinks() {
  return (Object.keys(site.links) as (keyof typeof site.links)[])
    .filter((k) => site.links[k])
    .map((k) => ({ key: k, label: socialLabels[k], href: site.links[k] }));
}

export function isPlaceholder(text: string) {
  return text.trim().startsWith("[");
}
