import {
  FaBox,
  FaDatabase,
  FaFlask,
  FaGithub,
  FaLinkedinIn,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { SiReact } from "react-icons/si";

export const navItems = [
  { label: "Highlights", href: "#recent-project" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export const skillCards = [
  {
    key: "frontend",
    title: "Frontend Engineering",
    description: "React interfaces with accessible component systems.",
    icon: SiReact,
    summary:
      "React driven frontend delivery with reusable systems and production ready UX flows.",
    items: [
      "Shipped React feature flows for onboarding, admin operations, and daily user workflows.",
      "Built responsive component patterns in Chakra UI to keep interfaces consistent and maintainable.",
      "Turned product requirements into implementation ready UI plans with clear user states.",
      "Optimized static page for efficient loading and quick interactions.",
    ],
  },
  {
    key: "backend",
    title: "Backend & API Design",
    description: "Cloud functions, API structure, and data flow design.",
    icon: FaServer,
    summary:
      "Backend and API design focused on clean integration, reliable data flow, and maintainable service logic.",
    items: [
      "Built backend connected workflows for onboarding, authorization, and admin tooling.",
      "Structured predictable read/write paths and explicit state transitions across feature surfaces.",
      "Implemented JSON based save/load systems for durable and testable application state.",
      "Designed modular server contracts and data structures to support evolving product needs and long term maintainability.",
    ],
  },
  {
    key: "firebase",
    title: "Firebase Architecture",
    description: "Auth, data modeling, and production deployment workflows.",
    icon: FaDatabase,
    summary:
      "Firebase architecture for role-aware auth, real-time collaboration data, and operational automation.",
    items: [
      "Implemented Google sign-in and role based access control for production teacher and admin workflows.",
      "Structured Firestore data access for reliable real time collaboration and low friction updates.",
      "Added Firebase Functions to support admin automation and operational tasks.",
      "Shipped Firebase backed features for real-time student progress tracking, teacher dashboards, and admin tools.",
    ],
  },
  {
    key: "quality",
    title: "Quality & Reliability",
    description: "Testing, debugging, and release confidence in production.",
    icon: FaFlask,
    summary:
      "Quality engineering through pre-release validation, structured debugging, and release-safe workflows.",
    items: [
      "Validated frontend behavior and backend integration paths before launches.",
      "Executed high frequency test passes in large scale environments.",
      "Utilized simulation scripts to test high scale interactions.",
      "Relied on version control checkpoints and review discipline to reduce regressions.",
    ],
  },
  {
    key: "product",
    title: "Product Development",
    description: "Build loops informed by real user and teacher feedback.",
    icon: FaBox,
    summary:
      "Product development that aligns user outcomes, technical constraints, and measurable performance gains.",
    items: [
      "Shipped features that improved onboarding and recurring daily workflows for real users.",
      "Reduced critical 3D mesh processing from over 10,000 CPU cycles to under 1,000.",
      "Utilized Jira, version control, and Kanban boards to manage scoped feature work and track progress against milestones.",
      "Iterated on shipped functionality using user and stakeholder feedback loops.",
    ],
  },
  {
    key: "collaboration",
    title: "Team Collaboration",
    description: "Agile delivery, documentation, and iterative refinement.",
    icon: FaUsers,
    summary:
      "Cross functional collaboration grounded in communication, mentoring, and accountable delivery.",
    items: [
      "Worked in agile cycles with scoped milestones, iterative reviews, and transparent status updates.",
      "Documented workflows and implementation decisions to support onboarding and shared ownership.",
      "Provided mentorship to junior developers on architecture choices and delivery habits.",
      "Coordinated with stakeholders to keep technical direction aligned with product priorities.",
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:helmthomas2000@gmail.com",
    icon: MdMailOutline,
  },
  {
    label: "GitHub",
    href: "https://github.com/NocturnalWisp",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-helm-dev/",
    icon: FaLinkedinIn,
  },
];
