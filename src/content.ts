/**
 * Every fact here comes from Waqas-Amin-CV.pdf or the design spec.
 * Nothing is invented. The word "portal" must never appear in shipped UI copy —
 * the product vocabulary is "web apps" / "apps".
 */

export const MARQUEE_SECONDS = 30;
export const INTRO_MS = 2100;
export const HERO_REVEAL_BASE_MS = 1250;
export const TESTIMONIAL_INTERVAL_MS = 6000;

export const profile = {
  name: 'Waqas Amin',
  monogram: 'WA',
  role: 'Angular · React · TypeScript',
  availability: 'Available now — booking projects from October 2026',
  email: 'developer.waqasamin@gmail.com',
  phone: '+92 314 6797967',
  location: 'Pakistan · remote worldwide, US & EU hours covered',
  responseTime: 'Replies within one working day',
  github: 'https://github.com/WAQAS-AMIN',
  linkedin: 'https://linkedin.com/in/waqasamin',
  cv: 'Waqas-Amin-CV.pdf',
} as const;

export const introMeta = [
  'Angular · React · TypeScript',
  'SaaS web apps',
  'Fintech · Health · Gov',
] as const;

export type HeroPart = { text: string; accent?: boolean };

const heroLines: HeroPart[][] = [
  [{ text: 'I build ' }, { text: 'SaaS products', accent: true }, { text: ' and' }],
  [{ text: 'the ' }, { text: 'web apps', accent: true }, { text: ' fintech,' }],
  [{ text: 'healthcare and government' }],
  [{ text: 'teams run on.' }],
];

export const hero = {
  lines: heroLines,
  summary:
    'Not a generic web developer. Five-plus years and 10+ production apps in Angular, React and TypeScript — multi-tenant SaaS platforms, healthcare and clinical systems, digital wallets and currency apps, government pension services, inventory, shipping and network-provider apps. Role-based access, WCAG 2.1 accessibility and clean .NET API integration as standard.',
  summaryMobile:
    'Angular, React and TypeScript. 10+ production apps in fintech, healthcare, government and SaaS.',
  cta: 'See my work',
} as const;

/** Hero side panel — an abstraction of the kind of app he builds, not a photo. */
export const buildPanel = {
  label: 'Web app',
  bars: [0.26, 0.44, 0.32, 0.6, 0.48, 0.8, 0.66, 1],
  accentBars: [5, 7],
  rows: [
    { key: 'Access', value: 'RBAC' },
    { key: 'Accessibility', value: 'WCAG 2.1 AA' },
    { key: 'API layer', value: '.NET REST' },
  ],
  footer: '10+ apps shipped · 5 countries',
} as const;

/** Sector wall — fills the testimonial row and shows the breadth of the work. */
export const sectors = [
  { name: 'Fintech', detail: 'Wallets & currency' },
  { name: 'Healthcare', detail: 'Records & intake' },
  { name: 'Government', detail: 'Pension services' },
  { name: 'Telecom', detail: 'Self-service apps' },
  { name: 'Logistics', detail: 'Shipping & freight' },
  { name: 'Inventory', detail: 'Warehouse suites' },
];

export const marqueeText =
  'SAAS WEB APPS — HEALTHCARE APPS — DIGITAL WALLET & CURRENCY APPS — GOVERNMENT & PENSION APPS — MOBILE NETWORK PROVIDER APPS — INVENTORY SYSTEMS — SHIPPING & LOGISTICS APPS — ';

export type Stat = { value: number; label: string; labelMobile: string };

export const stats: Stat[] = [
  { value: 5, label: 'years building production apps', labelMobile: 'years' },
  { value: 10, label: 'apps live in fintech, health, gov & SaaS', labelMobile: 'apps live' },
  { value: 5, label: 'countries of clients served', labelMobile: 'countries' },
  { value: 100, label: 'percent accessible (WCAG 2.1 AA)', labelMobile: '% accessible' },
];

export type FeaturedProject = {
  index: string;
  slug: string;
  title: string;
  summary: string;
  meta: string[];
  layout: 'wide' | 'pair';
  height: number;
  captions: (string | null)[];
  stripe: ('a' | 'b')[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    index: '01',
    slug: 'patient-intake',
    title: 'Patient intake platform',
    summary:
      'Four clinics, one patient record, no re-typing. Intake dropped from 22 minutes to 9 and it cleared the HIPAA audit on the first pass.',
    meta: ['Healthcare', '2026 · 6 weeks'],
    layout: 'wide',
    height: 640,
    captions: ['intake dashboard — wide screenshot'],
    stripe: ['a'],
  },
  {
    index: '02',
    slug: 'patient-intake',
    title: 'Digital wallet & currency app',
    summary:
      'Secure sign-in, transaction history, multi-currency switching and settlement reporting in one React and Redux app.',
    meta: ['Digital currency', '2025 · 5 months'],
    layout: 'pair',
    height: 460,
    captions: [null, 'custody app — two views'],
    stripe: ['a', 'b'],
  },
  {
    index: '03',
    slug: 'patient-intake',
    title: 'Government pension web app',
    summary:
      'Built from scratch in Angular for older claimants — WCAG 2.1 AA, large tap targets, claims and payment history without a phone call.',
    meta: ['Government · Guyana', 'Angular · TypeScript'],
    layout: 'wide',
    height: 580,
    captions: ['self-service app — mobile + desktop'],
    stripe: ['a'],
  },
];

export type SecondaryProject = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: 'patient-intake',
    sector: 'Fintech · investment',
    title: 'Investment analytics platform',
    summary:
      'Analytics dashboards, financial data visualisation and document management, plus role-based B2B partner onboarding.',
  },
  {
    slug: 'patient-intake',
    sector: 'Logistics · SaaS',
    title: 'Shipping & freight app',
    summary:
      'Multi-carrier rates, live tracking and customs documents in one tenant-aware dashboard. 4,000 shipments a day.',
  },
  {
    slug: 'patient-intake',
    sector: 'Inventory · SaaS',
    title: 'Warehouse inventory suite',
    summary:
      'Barcode receiving, stock reconciliation and purchase orders across 12 warehouses. Stock accuracy 91% → 99.6%.',
  },
  {
    slug: 'patient-intake',
    sector: 'Healthcare · SaaS',
    title: 'Clinical records & scheduling',
    summary:
      'Patient management, medical records and appointment scheduling with live WebSocket updates for doctors and admin staff.',
  },
  {
    slug: 'patient-intake',
    sector: 'Fintech · digital currency',
    title: 'Digital wallet application',
    summary:
      'React and Redux wallet with secure authentication, transaction tracking and multi-currency switching.',
  },
  {
    slug: 'patient-intake',
    sector: 'Telecom · network provider',
    title: 'Network provider self-service app',
    summary:
      'Plan changes, billing and usage for mobile subscribers, plus engineer scheduling and SLA reporting for the operator.',
  },
];

export const workSection = {
  eyebrow: 'Recent projects',
  meta: 'SaaS · healthcare · fintech · government · telecom · logistics',
  moreLabel: 'Show 6 more projects',
  fewerLabel: 'Show fewer projects',
  hintCollapsed: 'Government, shipping, inventory, telehealth, payments, telecom',
  hintExpanded: 'Nine of nine · 2019—2026',
} as const;

export const about = {
  eyebrow: 'About',
  lead:
    'I build SaaS web apps for the parts of the industry that get audited — patient records, money movement, pension payments, stock and freight. That work rewards care over cleverness.',
  body:
    "You work with me, not an agency layer you never meet. I've shipped for teams in the USA, UAE, KSA, Germany and Guyana: fixed-fee discovery week, build in two-week slices, staging every Friday, handover with docs, tests and a roadmap your own team can pick up.",
  portraitCaption: 'portrait — B&W',
} as const;

export const services = [
  { label: 'Multi-tenant SaaS product build (0 → 1)', meta: 'from 6 weeks' },
  { label: 'Enterprise, government & customer web apps', meta: 'from 4 weeks' },
  { label: 'Legacy rescue, integrations & data migration', meta: 'scoped' },
  { label: 'Fractional lead developer / tech partner', meta: '2 days / week' },
];

export const stack = [
  'Angular v14+',
  'React',
  'TypeScript',
  'NgRx · Redux',
  'RxJS',
  '.NET REST APIs',
  'WebSockets',
  'Multi-tenant & RBAC',
  'WCAG 2.1 AA',
  'Jasmine · Karma',
  'CI/CD pipelines',
];

export const testimonials = [
  {
    quote: 'The only contractor who pushed back on the spec — and was right both times.',
    author: 'CTO · digital asset platform',
  },
  {
    quote: 'Took a compliance nightmare and shipped it in six weeks. Our intake time halved.',
    author: 'Ops Director · regional clinic group',
  },
  {
    quote: 'Handover was so clean our in-house team never called him back. Highest praise.',
    author: 'Head of Product · network operator',
  },
];

export const contact = {
  eyebrow: 'What clients say',
  heading: "Tell me what you're building.",
  body:
    "A new SaaS product, a web app your team is stuck on, or a legacy system that needs rescuing — send the scope and you'll get an honest plan, not a sales call.",
  submit: 'Send enquiry',
  success: "Thanks — that's landed. You'll get an honest plan back within one working day.",
} as const;

export type CaseStudy = {
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  heroCaption: string;
  meta: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
  next: { label: string; href: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  'patient-intake': {
    slug: 'patient-intake',
    kicker: 'Healthcare · 2026',
    title: 'Cutting patient intake from 22 minutes to 9.',
    intro:
      'A regional clinic group ran four sites on paper and one fax machine. I replaced it with a single intake record and a UI built around it.',
    heroCaption: 'hero screenshot',
    meta: [
      { label: 'Client', value: 'Clinic group, 4 sites' },
      { label: 'Role', value: 'Frontend engineer' },
      { label: 'Duration', value: '6 weeks' },
      { label: 'Stack', value: 'Angular · TypeScript · .NET APIs · WebSockets' },
    ],
    sections: [
      {
        heading: 'The problem',
        body:
          "Staff re-typed the same patient details three times before anyone was seen, and no site could see another site's records.",
      },
      {
        heading: 'What I did',
        body:
          'Shadowed the front desk for two days, modelled one intake record as the source of truth, then built the screens the desk actually uses — offline-tolerant and keyboard-first.',
      },
      {
        heading: 'The outcome',
        body:
          'Intake down 59%, zero re-entry, HIPAA audit passed first time. The group has since rolled it out to two more sites without me.',
      },
    ],
    next: { label: 'Digital wallet & currency app', href: '/#work' },
  },
};

export const footerLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];
