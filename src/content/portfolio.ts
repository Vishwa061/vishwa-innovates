import citiLogo from "@/images/Citi-Logo.png"
import mrsLogo from "@/images/MRS-Logo.png"
import pocketFlowLogo from "@/images/pocket-flow.png"

export type NavSection = {
  id: string
  label: string
}

export type HeroLink = {
  label: string
  href: string
  variant: "primary" | "secondary"
  external?: boolean
}

export type QuickStat = {
  value: string
  label: string
}

export type ExperienceEntry = {
  company: string
  role: string
  interval: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
  logo: string
  logoAlt: string
}

export type ProjectMetric = {
  label: string
  value: string
}

export type ProjectCaseStudy = {
  name: string
  subtitle: string
  description: string
  challenge: string
  approach: string
  outcome: string
  features: string[]
  tags: string[]
  image: string
  imageAlt: string
  metrics: ProjectMetric[]
  link: string
  linkLabel: string
}

export type SupportingHighlight = {
  title: string
  description: string
}

export type ContactMethod = {
  label: string
  href: string
  value: string
  external?: boolean
}

export const siteOwner = {
  name: "Vishwa Perera",
  role: "Software Engineer",
  location: "Brampton, Ontario, Canada",
  email: "vishwainnovates@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishwa-perera",
  github: "https://github.com/Vishwa061",
}

export const navSections: NavSection[] = [
  { id: "about", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "contact", label: "Contact" },
]

export const heroContent = {
  eyebrow: "Software Engineer in Brampton, Ontario",
  title: "I build dependable systems and practical product experiences.",
  summary:
    "I am a software engineer at Citi working across exchange connectivity and internal tooling. My background spans low-latency backend integration, frontend delivery, and full-stack product work for teams that need software to be fast, reliable, and clear to use.",
  supportingText:
    "I do my best work where technical complexity meets product judgment: protocol translation, controls tooling, internal platforms, and features that need to earn trust in production.",
  availability:
    "Open to software engineering opportunities and recruiter conversations.",
  links: [
    {
      label: "Email me",
      href: `mailto:${siteOwner.email}`,
      variant: "primary",
    },
    {
      label: "View LinkedIn",
      href: siteOwner.linkedin,
      variant: "secondary",
      external: true,
    },
    {
      label: "See GitHub",
      href: siteOwner.github,
      variant: "secondary",
      external: true,
    },
  ] as HeroLink[],
  stats: [
    {
      value: "3+ years",
      label:
        "Shipping production software across finance and client applications",
    },
    {
      value: "Capital markets",
      label:
        "Experience with exchange connectivity and internal controls tooling",
    },
    {
      value: "Java + TypeScript",
      label:
        "Comfortable across backend integration work and frontend delivery",
    },
    {
      value: "Full-stack",
      label:
        "Able to move from APIs and data flows to polished user interfaces",
    },
  ] as QuickStat[],
  focusAreas: [
    "Low-latency integration",
    "Internal tools",
    "Frontend systems",
    "Practical product delivery",
  ],
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Citi",
    role: "Software Engineer",
    interval: "July 2023 - Present",
    location: "Mississauga, Ontario, Canada",
    summary:
      "Build connectivity and internal tooling for capital markets workflows, balancing backend protocol integration with product-focused frontend delivery.",
    highlights: [
      "Build protocol translation layers across FIX, binary, and cross-version FIX integrations to simplify onboarding and connectivity to global exchanges.",
      "Deliver low-latency connectivity components that normalize message formats and streamline order and market-data flows across trading venues.",
      "Maintain and extend the frontend of an internal data quality and controls application using Citi's standard UI library.",
      "Revamped the UI and designed the API foundation for a team hackathon product that was approved for further development.",
    ],
    tags: [
      "Java",
      "FIX Protocol",
      "Low-Latency Systems",
      "Exchange Connectivity",
      "Python",
      "Shell Scripting",
      "Angular",
      "TypeScript",
    ],
    logo: citiLogo,
    logoAlt: "Citi logo",
  },
  {
    company: "MRS Company",
    role: "Full Stack Engineer",
    interval: "June 2021 - August 2022, January 2023 - June 2023",
    location: "Toronto, Ontario, Canada",
    summary:
      "Delivered full-stack product work across client applications, performance-sensitive workflows, and day-to-day engineering operations.",
    highlights: [
      "Built complex frontend features in React and TypeScript and backend capabilities in .NET Core, C#, and Entity Framework for client-facing products.",
      "Contributed to systems that handled large datasets and concurrency-heavy workflows, supporting both design and implementation decisions.",
      "Supported Azure DevOps delivery setup for CI/CD and bug tracking, while closing more than 100 defects across the product lifecycle.",
      "Optimized a core workflow with SQL stored procedures, reducing processing time from hours to seconds.",
      "Introduced practices that improved product definition and made it easier to customize applications for client requirements.",
    ],
    tags: [
      "React",
      "TypeScript",
      ".NET Core",
      "Entity Framework",
      "Azure DevOps",
      "SQL",
    ],
    logo: mrsLogo,
    logoAlt: "MRS Company logo",
  },
]

export const featuredProject: ProjectCaseStudy = {
  name: "Pocket Flow",
  subtitle: "Offline-first budgeting app built with Jetpack Compose and Kotlin",
  description:
    "Pocket Flow is a personal budgeting app designed for people who want a lightweight finance tool without accounts, sync, or backend setup.",
  challenge:
    "Create a budgeting experience that supports recurring expenses and useful summary views while keeping every record local to the device.",
  approach:
    "Built the app around JSON persistence in internal storage, a recurrence model inspired by calendar rules, and overview screens that expand future occurrences into practical rollups.",
  outcome:
    "Released the app on Google Play as a private, low-friction budgeting experience that works fully offline.",
  features: [
    "Offline-first data model with JSON persistence and no backend dependency",
    "Recurring expense engine with daily, weekly, monthly, and yearly rules",
    "Overview and pie-chart screens for weekly, monthly, yearly, and next-year spend visibility",
    "Category management safeguards that prevent inconsistent state when expenses already exist",
  ],
  tags: ["Android", "Jetpack Compose", "Kotlin", "Offline-first"],
  image: pocketFlowLogo,
  imageAlt: "Pocket Flow app logo featuring a pocket holding a dollar bill",
  metrics: [
    { label: "Platform", value: "Android / Jetpack Compose" },
    { label: "Release", value: "Published on Google Play" },
    { label: "Architecture", value: "Offline-first local storage" },
    { label: "Focus", value: "Recurring budgeting workflows" },
  ],
  link: "https://play.google.com/store/apps/details?id=com.pocketflow",
  linkLabel: "View on Google Play",
}

export const supportingHighlights: SupportingHighlight[] = [
  {
    title: "Internal product hackathon",
    description:
      "Revamped the UI and designed API foundations for a team concept that earned approval for continued development.",
  },
  {
    title: "Controls tooling",
    description:
      "Maintained and extended internal data quality workflows used by teams that needed clarity, consistency, and practical UX.",
  },
  {
    title: "Performance-minded delivery",
    description:
      "Built software for high-throughput, concurrency-heavy environments and improved slow data workflows where responsiveness mattered.",
  },
]

export const contactContent = {
  eyebrow: "Open to conversations",
  title:
    "Looking for an engineer who can handle systems complexity without losing sight of product quality?",
  description:
    "I am based in Brampton and interested in software engineering roles where reliability, ownership, and clean execution matter. Resume available on request.",
  primaryAction: {
    label: "Start a conversation",
    href: `mailto:${siteOwner.email}`,
  },
  secondaryAction: {
    label: "View LinkedIn",
    href: siteOwner.linkedin,
  },
}

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    href: `mailto:${siteOwner.email}`,
    value: siteOwner.email,
  },
  {
    label: "LinkedIn",
    href: siteOwner.linkedin,
    value: "linkedin.com/in/vishwa-perera",
    external: true,
  },
  {
    label: "GitHub",
    href: siteOwner.github,
    value: "github.com/Vishwa061",
    external: true,
  },
]
