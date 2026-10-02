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
export type Shot = { src: string; alt: string; width: number; height: number };
export type MockId = "health" | "dashboard" | "transit" | "system" | "property" | "assist";

/** One paragraph, or several. */
export type Text = string | string[];

export type ProcessStep = {
  title: string;
  body: Text;
  bullets?: string[];
  quote?: string;
  flow?: string[];
  after?: Text;
};

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
  /** A real product screenshot in /public. When set, it replaces the coded mock. */
  image?: Shot;
  annotations: Annotation[];
  overview?: Text;
  areas?: string[];
  decisions?: { title: string; body: string }[];
  problem: Text;
  founders: Text;
  users: Text;
  myRole: Text;
  process: ProcessStep[];
  solution: Text;
  outcome: {
    metrics?: { label: string; value: string }[];
    items?: { title: string; body: string }[];
    qualitative?: string;
  };
  lessons: (string | { title: string; body: Text })[];
};

export function paragraphs(text: Text) {
  return Array.isArray(text) ? text : [text];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aidego",
    title: "AideGo Limited",
    sector: "Healthcare",
    summary:
      "Building an assisted medical transportation platform that connects patients with wheelchair accessible vehicles and trained aides for safer, more reliable healthcare transportation.",
    role: "Product Manager",
    timeline: "July 2026 — Present",
    team: "Founders, Product/Design, Engineering, Healthcare & Operations Partners",
    platform: "Web + Mobile",
    status: "Website live; mobile products in development",
    mock: "assist",
    image: {
      src: "/work/aidego.jpg",
      alt: "AideGo website hero: \u201cSafe rides with extra care\u201d, with Book a Ride and Become an Aide actions",
      width: 1024,
      height: 489,
    },
    annotations: [
      { x: 31, y: 89, label: "Booking flow", side: "left" },
      { x: 22, y: 77, label: "Patient requirements", side: "left" },
    ],
    overview: [
      "AideGo is an assisted medical transportation platform designed to make getting to and from healthcare facilities safer and more accessible for people who need additional mobility support.",
      "The product combines transportation, trained aides and healthcare coordination to address the gaps between traditional ride services and the specific needs of patients requiring assisted transportation.",
    ],
    areas: [
      "Accounts",
      "Booking",
      "Patient profiles",
      "Trip management",
      "Aide assignment",
      "Driver/vehicle management",
      "Healthcare coordination",
      "Payments",
      "Notifications",
    ],
    decisions: [
      {
        title: "Booking flow",
        body: "Designed around the specific needs of assisted transportation rather than a standard ride-hailing experience, allowing relevant patient and mobility requirements to be captured before a trip.",
      },
      {
        title: "Patient requirements",
        body: "Made accessibility and assistance needs part of the core booking experience so that the right vehicle and support can be assigned to each trip.",
      },
      {
        title: "Operations management",
        body: "Structured the operational experience around trips, drivers, vehicles and aides, giving the team a clearer way to coordinate transportation from booking through completion.",
      },
    ],
    problem: [
      "Traditional transportation options often aren't designed for people who need assistance getting to healthcare facilities.",
      "Patients using wheelchairs or requiring physical assistance can face difficulties finding suitable vehicles, coordinating support and getting reliable transportation to appointments. At the same time, healthcare providers and families need greater confidence that patients can move safely between home and healthcare facilities.",
      "AideGo was created to address this gap by combining accessible transportation with human assistance.",
    ],
    founders: [
      "The founders needed to turn the concept into a practical product that could support patients, families, healthcare partners and transportation operators while remaining scalable as the business grew.",
      "A major constraint was balancing the complexity of assisted medical transportation with a product experience that remained simple for patients and their families.",
    ],
    users: [
      "The primary users are patients who need assisted transportation, their families or caregivers, and the operational teams responsible for coordinating trips.",
      "Unlike a conventional ride-hailing user, an AideGo customer may have specific mobility, accessibility or assistance requirements that need to be understood before a trip can be fulfilled.",
    ],
    myRole: [
      "As Product Manager, I worked across product strategy, requirements, user flows and execution.",
      "I helped translate the business idea into product requirements, define core workflows, prioritize features and work with design and engineering to move the product from concept toward a usable platform.",
      "I also considered the operational side of the product, including how transportation, aides, vehicles and healthcare partnerships would work together.",
    ],
    process: [
      {
        title: "Discover",
        body: [
          "I started by understanding the problem from both the patient and business perspective.",
          "This involved examining:",
        ],
        bullets: [
          "The transportation challenges faced by people requiring mobility assistance",
          "The needs of families and caregivers",
          "The operational requirements for accessible vehicles and aides",
          "How healthcare facilities could interact with the service",
          "The business model and potential partnership opportunities",
        ],
        after:
          "The goal was to understand the complete service rather than treating AideGo as simply another transportation app.",
      },
      {
        title: "Define",
        body: "I framed the core product challenge as:",
        quote:
          "How might we make assisted medical transportation easier to request, coordinate and fulfil while giving the business enough operational visibility to deliver the service reliably?",
        after: "This helped separate the essential product experience from features that could be introduced later.",
      },
      {
        title: "Prioritize",
        body: "The initial focus was on the core transportation journey:",
        flow: ["Patient", "Booking", "Requirements", "Assignment", "Trip", "Completion"],
        after: [
          "Features that did not directly support this journey were deprioritized while the foundational experience was being developed.",
          "This allowed the team to focus on validating the core service before expanding the product.",
        ],
      },
      {
        title: "Design & build",
        body: [
          "I worked with design and engineering to translate the product requirements into user flows, interfaces and functional requirements.",
          "Key areas included:",
        ],
        bullets: [
          "Patient onboarding",
          "Assisted transportation booking",
          "Accessibility and mobility requirements",
          "Driver and vehicle management",
          "Aide assignment",
          "Trip management",
          "Operational workflows",
          "Healthcare coordination",
        ],
        after:
          "I worked through product decisions with the team as designs evolved, making sure the experience reflected both user needs and the realities of operating an assisted transportation service.",
      },
    ],
    solution: [
      "AideGo evolved into a digital platform connecting patients who require assisted transportation with accessible vehicles and trained aides.",
      "The product is designed around the complete transportation journey rather than just the act of requesting a ride.",
      "By bringing patient requirements, transportation, aides and trip coordination into one workflow, AideGo creates a foundation for a more reliable assisted transportation service.",
    ],
    outcome: {
      items: [
        {
          title: "Website launched",
          body: "AideGo's web presence is live, providing the foundation for the product and business.",
        },
        {
          title: "Mobile products in development",
          body: "The mobile experience is being developed around the core patient and operational workflows.",
        },
        {
          title: "Product foundation established",
          body: "The team now has a defined product structure and clearer workflows for building the assisted transportation service and future healthcare partnerships.",
        },
      ],
    },
    lessons: [
      {
        title: "Healthcare products are service products too.",
        body: "The experience doesn't end at the interface. For AideGo, the quality of the product depends heavily on what happens behind the screen: vehicles, aides, scheduling, healthcare facilities and operations all have to work together.",
      },
      {
        title: "The edge cases are part of the core experience.",
        body: [
          "In conventional transportation, a ride request can be relatively straightforward. In assisted medical transportation, accessibility and assistance requirements can fundamentally change how a trip needs to be fulfilled.",
          "That means these requirements cannot be treated as secondary features.",
        ],
      },
      {
        title: "Product decisions need to account for the business model.",
        body: [
          "Building AideGo taught me to think beyond what users want to do and consider how the business can reliably deliver that experience.",
          "The strongest product decisions sit at the intersection of user needs, operational reality and business sustainability.",
        ],
      },
    ],
  },
  {
    slug: "hoydoon",
    title: "Hoydoon",
    sector: "Real Estate",
    summary:
      "End-to-end product design for a real estate marketplace connecting property seekers and agents across Nigeria, Somalia and Kenya.",
    role: "Product Designer",
    timeline: "August 2024 — Present",
    team: "Founders, Product, Design, Engineering and Growth",
    platform: "Web + Mobile",
    status: "Shipped",
    mock: "property",
    image: {
      src: "/work/hoydoon.jpg",
      alt: "Hoydoon homepage: \u201cFind a home you'll love\u201d, with Buy, Rent and Sell search and Nigeria, Somalia and Kenya shortcuts",
      width: 1024,
      height: 386,
    },
    annotations: [
      { x: 18, y: 59, label: "Property discovery", side: "left" },
      { x: 33, y: 70, label: "Multi-country experience", side: "left" },
    ],
    decisions: [
      {
        title: "Property discovery",
        body: "Designed the marketplace around the way people naturally search for property, making location, property type, budget and listing status easy to access without overwhelming the user.",
      },
      {
        title: "Multi-country experience",
        body: "Created a marketplace structure that could support Nigeria, Somalia and Kenya while keeping the experience consistent across markets.",
      },
      {
        title: "Listing experience",
        body: "Designed property listing flows that give agents a structured way to present important information, while giving property seekers the details they need to evaluate a property before making contact.",
      },
    ],
    problem: [
      "Finding and listing property across emerging real estate markets can be fragmented.",
      "Property seekers often have to search across different platforms, social media and informal channels, while agents need a reliable way to publish properties and reach potential tenants or buyers.",
      "Hoydoon needed a marketplace that could bring these experiences into one product while supporting different markets, property types and user behaviours.",
      "The challenge was to make property discovery simple for users while building enough structure into the platform for agents to manage their listings effectively.",
    ],
    founders: [
      "The founders needed a scalable marketplace that could launch across multiple African markets without creating a completely different product for each country.",
      "The product also needed to support the business model of free property discovery for users and a subscription based model for agents.",
      "The key product bet was that a focused marketplace experience could make it easier for users to discover properties while giving agents a dedicated channel for reaching prospective customers.",
    ],
    users: [
      "Property seekers: people looking to rent or buy property who need to quickly narrow down properties based on location, type, budget and availability. Their main challenge was discovering relevant properties without having to navigate fragmented sources.",
      "Real estate agents: agents who need to publish and manage properties while getting their listings in front of people actively looking for property. Their needs extended beyond simply uploading a property. They needed a structured listing experience and tools for managing the status of their properties.",
    ],
    myRole: [
      "Led end-to-end product design, working closely with engineers and stakeholders throughout product development, and established and maintained the design system and brand guidelines.",
      "I also owned user flows and information architecture, the marketplace and listing experiences, responsive web and mobile experiences, wireframes and interactive prototypes, design specifications and developer handoff, product iterations based on feedback, design consistency across the platform, and UX decisions across different market requirements.",
    ],
    process: [
      {
        title: "Discover",
        body: [
          "I started by understanding how people currently search for and advertise property across the target markets.",
          "I looked at existing real estate platforms, marketplace patterns and the needs of both sides of the marketplace. I also worked closely with the founders and engineering team to understand the business model, technical constraints and requirements for launching across multiple countries.",
          "This helped identify the core marketplace journeys:",
        ],
        flow: ["Discover", "Filter", "View property", "Contact agent"],
        after: "and for agents: Create listing → Publish → Manage listing → Mark as rented/sold.",
      },
      {
        title: "Define",
        body: "The central design challenge became:",
        quote:
          "How might we make property discovery and listing management simple enough for everyday users while creating a marketplace structure that can scale across multiple countries?",
        after: "This led to a focus on strong information architecture, clear property categorization and reusable design patterns.",
      },
      {
        title: "Prioritize",
        body: "The initial product focused on the marketplace fundamentals:",
        bullets: [
          "Property discovery",
          "Search and filtering",
          "Property details",
          "Agent listings",
          "Contact and messaging",
          "Listing management",
          "Property status",
        ],
        after:
          "More advanced marketplace features were intentionally kept secondary until the core discovery and listing journeys were established.",
      },
      {
        title: "Design & build",
        body: [
          "I translated the product requirements into user flows, wireframes and high-fidelity designs before working with engineering through implementation.",
          "I designed reusable components and patterns that could work across the web and mobile products, while maintaining consistency through the design system.",
          "I also worked through edge cases such as different property types, countries, listing statuses and agent workflows.",
        ],
      },
    ],
    solution: [
      "I designed a multi-market real estate marketplace that allows users to discover properties based on location, property type and budget, while giving agents a structured system for publishing and managing their listings.",
      "The design system provided a consistent visual and interaction language across the product, while the marketplace architecture allowed Hoydoon to support Nigeria, Somalia and Kenya without creating separate experiences for each market.",
      "The result was a product that connected the two primary sides of the marketplace: property seekers looking for relevant properties, and agents looking for qualified property seekers.",
    ],
    outcome: {
      items: [
        {
          title: "Multi-market marketplace shipped",
          body: "Hoydoon launched as a real estate marketplace supporting Nigeria, Somalia and Kenya.",
        },
        {
          title: "End-to-end marketplace experience established",
          body: "Users can discover properties, review listing details and connect with agents, while agents can create and manage their property listings.",
        },
        {
          title: "Reusable design foundation created",
          body: "A design system and brand guidelines established a consistent foundation for the web and mobile products and future product development.",
        },
      ],
    },
    lessons: [
      {
        title: "Marketplace products need both sides to work.",
        body: "A great property discovery experience is not enough if agents do not have a good reason to list properties. Designing Hoydoon taught me to think about the needs of both sides of a marketplace when making product decisions.",
      },
      {
        title: "Designing for multiple markets requires flexibility.",
        body: "Nigeria, Somalia and Kenya have different property markets and user behaviours. Rather than designing three completely different products, I learned to build flexible patterns that could adapt to market differences while keeping the core experience consistent.",
      },
      {
        title: "Good information architecture reduces complexity.",
        body: [
          "Real estate can involve a lot of information: location, property type, price, bedrooms, amenities, status and agent details.",
          "The challenge was not simply showing more information. It was deciding what users needed first and structuring the experience so they could find it without unnecessary friction.",
        ],
      },
    ],
  },
  {
    slug: "raacway",
    title: "Raacway",
    sector: "Transportation",
    summary:
      "Product design for a ride-hailing and delivery platform built for Nigeria and Somalia, covering riders, drivers, couriers and operational teams.",
    role: "Product Designer",
    timeline: "August 2024 — Present",
    team: "Founders, Product, Design and Engineering",
    platform: "Mobile App + Admin Dashboard",
    status: "Shipped",
    mock: "transit",
    image: {
      src: "/work/raacway.png",
      alt: "Raacway website hero: \u201cSwift. Secure. Simple.\u201d, with a live map showing real-time dispatch and a driver arriving",
      width: 1024,
      height: 490,
    },
    annotations: [
      { x: 55, y: 72, label: "Trip tracking", side: "left" },
      { x: 68, y: 30, label: "Multi-service platform", side: "left" },
    ],
    decisions: [
      {
        title: "Trip tracking",
        body: "Designed the active trip experience around the information users need most while travelling: pickup and destination, trip status and progress.",
      },
      {
        title: "Trip history",
        body: "Created a simple history structure that separates active and completed trips, making it easy for users to understand their previous rides at a glance.",
      },
      {
        title: "Multi-service platform",
        body: "Designed the product architecture to support different transportation services, including passenger rides and delivery, while keeping the core experience familiar across services.",
      },
    ],
    problem: [
      "Transportation in emerging markets comes with a combination of user experience and operational challenges.",
      "Users need a simple way to request and track rides, while the business needs to coordinate drivers, riders, couriers, vehicles, documents, trips and payments behind the scenes.",
      "Raacway needed a product that could support these different roles without making the experience unnecessarily complicated.",
      "The product also needed to work across Nigeria and Somalia, meaning the design had to be flexible enough to support different operational requirements while maintaining a consistent product experience.",
    ],
    founders: [
      "The founders needed a transportation platform that could support multiple services and markets while giving the operations team sufficient control over the service.",
      "The product had to go beyond a basic ride booking experience and provide the infrastructure needed to manage drivers, riders, couriers, documents, rides and earnings.",
    ],
    users: [
      "Riders: people looking for a convenient way to request transportation, follow their trip and review their previous rides. Their priority was a straightforward experience with clear information at each stage of the journey.",
      "Drivers & couriers: they needed tools to manage their availability, receive and complete trips and keep track of their earnings.",
      "Operations team: they needed visibility into the transportation network, including users, drivers, couriers, documents, rides and earnings.",
    ],
    myRole: [
      "Designed the product, working closely with engineers and stakeholders throughout development.",
      "I owned the design of rider onboarding and core ride flows, pickup and destination experiences, active trip tracking, trip history, driver workflows, courier workflows, earnings experiences, document management, the admin dashboard, Nigeria and Somalia operational flows, and the design system and reusable UI patterns.",
      "I also translated operational requirements into product flows that could be understood and implemented by engineering.",
    ],
    process: [
      {
        title: "Discover",
        body: [
          "I started by understanding the different roles involved in the transportation ecosystem.",
          "Rather than designing only for the rider, I mapped the wider system:",
        ],
        flow: ["Rider", "Ride", "Driver", "Operations"],
        after: [
          "and for delivery: Customer → Delivery → Courier → Operations.",
          "I worked with the founders and engineering team to understand the business requirements, operational workflows and technical constraints. This helped identify where the experiences needed to be connected and where each user type required a dedicated workflow.",
        ],
      },
      {
        title: "Define",
        body: "The core design challenge became:",
        quote:
          "How might we create a simple transportation experience for riders while giving drivers and operations the tools required to run the service effectively?",
        after: "This meant treating the product as an interconnected system rather than a single mobile app.",
      },
      {
        title: "Prioritize",
        body: "The initial focus was on the core transportation journey:",
        flow: ["Request", "Match", "Pickup", "Trip", "Completion"],
        after: [
          "Alongside this, the operational foundation needed to support drivers, riders, couriers, documents, rides and earnings.",
          "More advanced functionality was kept secondary until the core transportation and operational workflows were established.",
        ],
      },
      {
        title: "Design & build",
        body: [
          "I translated the product requirements into user flows, wireframes, prototypes and high-fidelity screens.",
          "I worked closely with engineering during implementation, resolving design questions and refining flows as technical constraints became clearer.",
          "For the admin experience, I designed a centralized dashboard that allowed the team to manage the different parts of the transportation network from one place.",
        ],
      },
    ],
    solution: [
      "I designed Raacway as a connected transportation ecosystem rather than simply a ride-hailing app.",
      "The mobile experience gives riders a clear path from requesting a ride through completing and reviewing their trip, while dedicated driver and courier workflows support the people fulfilling those trips.",
      "The admin platform provides the operational layer needed to manage drivers, riders, couriers, documents, rides and earnings.",
      "The result is a product structure that supports both passenger transportation and delivery while maintaining a consistent experience across Nigeria and Somalia.",
    ],
    outcome: {
      items: [
        {
          title: "Transportation product shipped",
          body: "The core Raacway product and supporting operational workflows were designed and shipped.",
        },
        {
          title: "Multi-role platform established",
          body: "The product supports distinct experiences for riders, drivers, couriers and operations teams.",
        },
        {
          title: "Multi-market foundation created",
          body: "The product architecture was designed to support transportation operations across Nigeria and Somalia without creating completely separate product experiences.",
        },
      ],
    },
    lessons: [
      {
        title: "Transportation products are systems, not just apps.",
        body: "The rider only sees one part of the experience. Behind every trip are drivers, couriers, operations, documents and earnings. Designing the whole system produces a much stronger product than focusing only on the customer-facing interface.",
      },
      {
        title: "Operational complexity should stay behind the scenes.",
        body: [
          "Transportation can become complicated very quickly, but users should not have to understand that complexity to complete a ride.",
          "A key design principle was to keep the rider experience simple while giving internal teams the controls they need.",
        ],
      },
      {
        title: "Different users need different definitions of success.",
        body: [
          "A rider wants a reliable trip. A driver wants clear trip information and earnings visibility. Operations needs control and oversight.",
          "Designing Raacway taught me to consider the goals of every participant in the system rather than optimizing the product around one user group.",
        ],
      },
    ],
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
      "Designed Raacway, a ride-hailing and delivery platform for Nigeria and Somalia",
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

export const notes: { topic: string; title?: string; text: string }[] = [
  { topic: "Product", text: "Good products don't start with screens. They start with a problem worth solving." },
  {
    topic: "Design",
    text: "Design is about making complex things feel simple. I care about understanding people, finding the real problem, and creating experiences that are useful, clear, and easy to use.",
  },
  {
    topic: "Startups",
    text: "Startups have taught me to think beyond my role. You often have to wear different hats, make decisions with limited resources, and stay focused on what actually moves the product forward.",
  },
  {
    topic: "Business",
    text: "Good products need a good business behind them. I'm interested in how products create value, how customers make decisions, and how ideas become sustainable businesses.",
  },
  {
    topic: "Technology",
    text: "Technology is most interesting to me when it solves real problems. I enjoy understanding how products are built and how design, engineering, data, and business come together to create something useful.",
  },
  {
    topic: "Career",
    text: "I'm building a career at the intersection of product, technology, and business. My background in design gave me the foundation, and I'm constantly expanding into product management, commercial thinking, and customer-facing work.",
  },
  {
    topic: "Books",
    title: "Rich Dad Poor Dad",
    text: "A reminder that financial thinking is about more than earning money. It changed the way I think about assets, opportunities, and building something that can create value beyond a salary.",
  },
];

export const learning = [
  { kind: "Book", title: "Inspired", by: "Marty Cagan" },
  { kind: "Course", title: "Product Management", by: "Microsoft" },
  {
    kind: "Topic",
    title: "Product strategy, prioritization, product analytics, and building products around real customer problems.",
    by: "",
  },
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
