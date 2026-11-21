import type { ReactNode } from "react";
import SmoothScroll from "@/app/components/SmoothScroll";
import PatternWaves from "@/app/components/PatternWaves";
import WavingHand from "@/app/components/WavingHand";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconTerminal2,
  IconBriefcase,
  IconSchool,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export type ProjectBullet = {
  label: string;
  detail: string;
};

export type Project = {
  name: string;
  tagline: string;
  status?: string;
  highlights: ProjectBullet[];
  technologies: string[];
  github?: string;
  live?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  type?: string;
  location?: string;
  highlights: string[];
  href?: string;
};

export type Leadership = {
  position: string;
  organization: string;
  website?: string;
  duration: string;
  highlights: string[];
};

export type Education = {
  qualification: string;
  institution?: string;
  board?: string;
  duration?: string;
  year?: string;
  score: string;
  scoreLabel?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type DockIcon = "home" | "github" | "linkedin" | "mail" | "sun";

export type DockLink = {
  label: string;
  href: string;
  icon: DockIcon;
  external?: boolean;
};

export type PortfolioProps = {
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  avatarSrc?: string;
  experiences?: Experience[];
  projects?: Project[];
  skills?: string[] | SkillCategory[];
  leadership?: Leadership[];
  education?: Education[];
  dock?: DockLink[];
  onToggleTheme?: () => void;
};

/* ---------- Human-Centric, Impact-Focused Content ---------- */

const PERSONAL = {
  name: "Tejveer Singh",
  title: "Full-Stack Developer & Generative AI Engineer",
  location: "New Delhi, India",
  email: "tejveersingh.75575@gmail.com",
  github: "https://github.com/ashu75575",
  linkedin: "https://www.linkedin.com/in/tejveer755",
  avatarSrc: "/tejveer2.jpg",
};

const PROJECTS: Project[] = [
  {
    name: "ClipForge AI",
    tagline: "Turns long videos into viral, captioned short clips and auto-publishes them across platforms.",
    github: "https://github.com/ashu75575/ai-video-generator-and-post-scheduler",
    technologies: [
      "Next.js",
      "Remotion Lambda",
      "Groq (Llama 3.3 70B)",
      "Deepgram",
      "AWS S3",
      "Inngest",
      "Redis",
      "Clerk",
      "Neon",
      "Drizzle ORM",
    ],
    highlights: [
      {
        label: "Automated Clip Extraction",
        detail:
          "Transcribes raw video via Deepgram and flags viral hook moments using Groq's Llama 3.3 70B, cutting manual clip editing down to zero.",
      },
      {
        label: "Distributed Cloud Rendering",
        detail:
          "Renders 9:16 vertical clips at scale across distributed AWS Lambda functions, orchestrated by Inngest event queues with automatic retry logic.",
      },
      {
        label: "Multi-Platform Publishing",
        detail:
          "Automated cross-posting to TikTok, YouTube Shorts, and Instagram Reels via the Zernio API, backed by Clerk auth and Neon/Drizzle.",
      },
    ],
  },
  {
    name: "Excel Analytics Platform",
    tagline: "Turns complex, messy spreadsheets into interactive 2D/3D visualizations and conversational insights.",
    github: "https://github.com/ashu75575/excel-analytic-platform",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Three.js",
      "Chart.js",
      "SheetJS",
      "Gemini API",
    ],
    highlights: [
      {
        label: "Instant Spreadsheet Parsing",
        detail:
          "Processes multi-sheet workbooks in milliseconds with SheetJS, dynamically rendering responsive 2D charts and interactive Three.js 3D data models.",
      },
      {
        label: "Conversational AI Insights",
        detail:
          "Piped tabular datasets directly to the Gemini API to surface anomalies, trend summaries, and executive takeaways in plain English.",
      },
      {
        label: "Role-Based Team Dashboard",
        detail:
          "Architected state management with Redux Toolkit and built role-based access controls to safeguard confidential financial datasets in MongoDB.",
      },
    ],
  },
  {
    name: "ClauseGuard",
    tagline: "Scans legal contracts in real-time to surface hidden risks, penalties, and unfavorable clauses.",
    // status: "In Progress",
    github: "https://github.com/ashu75575/ClauseGuard",
    technologies: ["Next.js", "FastAPI", "Tesseract OCR", "Groq API", "Python"],
    highlights: [
      {
        label: "Real-Time Risk Scoring",
        detail:
          "Built a reactive Next.js frontend with a high-throughput FastAPI backend that evaluates contract language against common legal pitfalls using Groq LLMs.",
      },
      {
        label: "Resilient Fallback Pipeline",
        detail:
          "Integrated Tesseract OCR to accurately parse low-resolution scanned PDFs, paired with local model failovers when cloud API keys are absent.",
      },
    ],
  },
];

const EXPERIENCES: Experience[] = [
  {
    company: "Zidio Development",
    role: "Web Developer Intern",
    period: "June 2025 – September 2025",
    type: "Internship",
    location: "Remote",
    highlights: [
      "Engineered production-grade web interfaces in React and Next.js, connecting responsive UI components to secure JWT-authenticated REST APIs.",
      "Designed and shipped interactive AI dashboard widgets, helping users make sense of complex metrics without feeling overwhelmed.",
      "Collaborated closely with backend engineers and designers to ensure fast page loads, consistent design systems, and cross-device polish.",
    ],
  },
];

const LEADERSHIP: Leadership[] = [
  {
    position: "Head of Web Development",
    organization: "Nexverse Society",
    website: "https://www.nexverse-iitm.com/",
    duration: "2024 – Present",
    highlights: [
      "Lead a team of 12+ student developers building web apps and digital experiences for our campus tech ecosystem (promoted from Co-Head).",
      "Spearheaded technical infrastructure and website operations for NexHack 1.0 (national-level hackathon, 2025); currently directing tech for NexHack 2.0 (September 2026).",
      "Run regular code reviews, mentor juniors on modern React/Next.js conventions, and establish reusable component workflows.",
    ],
  },
];

const SKILLS: string[] = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "FastAPI",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "MySQL",
  "Neon DB",
  "Docker",
  "AWS",
  "Redux Toolkit",
  "Three.js",
  "Inngest",
  "Git",
  "GitHub",
  "REST APIs",
  "Java",
  "C",
  "HTML5",
  "CSS3",
];

const EDUCATION: Education[] = [
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    institution: "Institute of Information Technology & Management (IITM), GGSIPU",
    duration: "2024 – 2027",
    score: "8.73 CGPA",
    scoreLabel: "1st & 2nd Year Cumulative",
  },
  {
    qualification: "Class XII — PCM (Physics, Chemistry, Maths)",
    board: "CBSE",
    year: "2022 – 2024",
    score: "74.8%",
    scoreLabel: "Senior Secondary",
  },
  {
    qualification: "Class X",
    board: "CBSE",
    year: "2022",
    score: "82.4%",
    scoreLabel: "Secondary School",
  },
];

const DOCK: DockLink[] = [
  { label: "Home", href: "#top", icon: "home" },
  { label: "GitHub", href: PERSONAL.github, icon: "github", external: true },
  { label: "LinkedIn", href: PERSONAL.linkedin, icon: "linkedin", external: true },
  { label: "Email", href: `mailto:${PERSONAL.email}`, icon: "mail" },
];

/* ---------- Reusable Icons & Micro Components ---------- */

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Icon({ name }: { name: DockIcon }): ReactNode {
  switch (name) {
    case "home":
      return (
        <svg {...iconProps}>
          <path d="M4 11l8-7 8 7v9H4z" />
        </svg>
      );
    case "github":
      return (
        <svg {...iconProps}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...iconProps}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...iconProps}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
        </svg>
      );
  }
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function Avatar({ src, label, size }: { src?: string; label: string; size: number }) {
  const frameClass =
    "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-neutral-700/80 bg-neutral-900 shadow-xl transition-transform duration-300 hover:scale-105";
  if (src) {
    return (
      <div className={frameClass} style={{ width: size, height: size }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover object-top scale-125 transition-transform duration-300"
        />
      </div>
    );
  }
  return (
    <div
      className={`${frameClass} font-semibold text-neutral-300`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {label.charAt(0)}
    </div>
  );
}

function TechLogo({ name }: { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 rounded-xs" fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path
          d="M11.7 10.4v1.8H9.6v6.8H7.5v-6.8H5.4v-1.8h6.3zm6.6 2.7c-.3-.5-.7-.8-1.3-1.1-.6-.3-1.2-.5-1.9-.8-.5-.2-.9-.4-1.2-.6-.2-.2-.3-.5-.3-.8 0-.3.1-.6.4-.8.3-.2.7-.3 1.2-.3.5 0 .9.1 1.2.3.3.2.5.5.6.9l1.9-.9c-.3-.7-.8-1.2-1.4-1.6-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.3.6-.6.4-1 .9-1.3 1.5-.3.6-.4 1.2-.4 1.9 0 .8.2 1.4.6 2 .4.5 1 .9 1.7 1.2.5.2 1 .4 1.5.6.5.2.9.4 1.2.6.3.2.4.5.4.9 0 .4-.2.7-.5.9-.3.2-.8.4-1.4.4-.7 0-1.3-.2-1.7-.5-.4-.4-.7-.9-.8-1.5l-2 .8c.3 1 .9 1.8 1.7 2.3.8.5 1.8.8 3 .8 1.1 0 2-.2 2.7-.7.7-.5 1.2-1.1 1.5-1.8.3-.7.5-1.5.5-2.3 0-.9-.2-1.6-.6-2.2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (normalized.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 rounded-xs" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M6.8 17.5c0 1.2.7 1.9 2 1.9 1 0 1.6-.5 1.9-1.1l-1.1-.7c-.2.4-.4.6-.8.6-.5 0-.7-.3-.7-.9V12H6.8v5.5zm6.5-1.6c.4.7 1 1.2 1.9 1.2.8 0 1.4-.4 1.4-1 0-.7-.5-.9-1.5-1.3-1.3-.5-2.2-1.1-2.2-2.3 0-1.2.9-2.1 2.3-2.1 1 0 1.7.4 2.2 1.2l-1.1.7c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .5.4.7 1.3 1.1 1.4.5 2.4 1.1 2.4 2.5 0 1.4-1.1 2.3-2.6 2.3-1.4 0-2.3-.7-2.7-1.7l1.4-.7z"
          fill="#000000"
        />
      </svg>
    );
  }

  if (normalized.includes("react")) {
    return (
      <svg viewBox="-11.5 -10.23 23 20.46" className="h-4 w-4 shrink-0">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.836 17.514l-6.852-9.155h1.996l4.856 6.559v-6.56h1.642v9.156h-1.642zm-8.836-9.155v9.156H7.358V8.359H9z" />
      </svg>
    );
  }

  if (normalized.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <path
          d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H5.8S2 6.1 2 10.5s3.3 4.3 3.3 4.3h2v-2.8s-.1-3.3 3.2-3.3h5.5s3.1.1 3.1-3.1-2.9-3.6-5.2-3.6zm-2.4 1.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9v-2H12v-.6h6.2s3.8.4 3.8-4-3.3-4.3-3.3-4.3h-2v2.8s.1 3.3-3.2 3.3H8s-3.1-.1-3.1 3.1 2.9 3.6 5.2 3.6zm2.4-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#5FA04E">
        <path d="M12 2l10 5.8v11.5L12 25l-10-5.7V7.8L12 2zm0 2.3L4 8.9v9.3l8 4.6 8-4.6V8.9l-8-4.6z" />
      </svg>
    );
  }

  if (normalized.includes("fastapi")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <circle cx="12" cy="12" r="11" fill="#05998B" />
        <path d="M13 3l-6 10h5l-2 8 8-11h-5l2-7z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
        <path d="M6 8h3v1.5H7.5V11h2v1.5h-2v1.5H9V16H6V8zm5 0h1.8l1.6 4 1.6-4H18l-2.4 5.2L18 16h-1.8l-1.7-4-1.7 4H11l2.4-4.8L11 8zm8 0h1.8v8H19V8z" />
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#06B6D4">
        <path d="M12 6c-2.7 0-4.4 1.3-5.2 4 .8-1.3 1.9-1.9 3.2-1.6 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.7 2.9 6.2 2.9 2.7 0 4.4-1.3 5.2-4-.8 1.3-1.9 1.9-3.2 1.6-1-.2-1.7-.9-2.5-1.7C16.9 7.6 15.5 6 12 6zm-7 6c-2.7 0-4.4 1.3-5.2 4 .8-1.3 1.9-1.9 3.2-1.6 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.7 2.9 6.2 2.9 2.7 0 4.4-1.3 5.2-4-.8 1.3-1.9 1.9-3.2 1.6-1-.2-1.7-.9-2.5-1.7C9.9 13.6 8.5 12 5 12z" />
      </svg>
    );
  }

  if (normalized.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#4169E1">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.9 2.2 7.2 5.5 8.9V19c-.8-.3-1.5-.7-2-1.3.8-.4 1.8-.6 2.8-.5-.2-.7-.3-1.5-.3-2.2 0-3.9 3.1-7 7-7s7 3.1 7 7c0 .8-.1 1.5-.3 2.2 1-.1 2 .1 2.8.5-.5.6-1.2 1-2 1.3v1.9c3.3-1.7 5.5-5 5.5-8.9 0-5.5-4.5-10-10-10z" />
      </svg>
    );
  }

  if (normalized.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#47A248">
        <path d="M12 1.5s-6 5.8-6 11.2c0 4.2 3.1 7.8 6 9.3 2.9-1.5 6-5.1 6-9.3C18 7.3 12 1.5 12 1.5zm.3 17.5v-6.9h-.6v6.9c-2.3-1.1-4.2-3.8-4.2-6.8 0-3.6 3.6-7.8 4.5-8.8.9 1 4.5 5.2 4.5 8.8 0 3-1.9 5.7-4.2 6.8z" />
      </svg>
    );
  }

  if (normalized.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#DC382D">
        <path d="M2.5 7.5L12 3l9.5 4.5L12 12 2.5 7.5zm0 5L12 17l9.5-4.5v3L12 20l-9.5-4.5v-3zm0 4L12 21l9.5-4.5v2L12 23l-9.5-4.5v-2z" />
      </svg>
    );
  }

  if (normalized.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#4479A1">
        <path d="M12 3C6.5 3 2 7.5 2 13s4.5 10 10 10 10-4.5 10-10S17.5 3 12 3zm4.5 13.5c-1.3.8-2.9 1-4.5.6-1.5-.4-2.8-1.5-3.5-3 .8.3 1.7.4 2.5.3-1-.9-1.5-2.2-1.3-3.5.7.5 1.5.8 2.3.8-.8-1.1-1-2.6-.4-3.8 1.1 1.6 2.9 2.6 4.9 2.7-.1-.4-.1-.9 0-1.3.4-1.5 1.9-2.5 3.5-2.1.8.2 1.5.7 2 1.3-.2 0-.4 0-.6.1.7.5 1.2 1.2 1.3 2 .2 1.5-.7 2.9-2.1 3.5-.8.3-1.6.4-2.4.4.2.4.5.8.9 1.1 1.2.9 2.8.9 4.1.3-.7 1-1.8 1.7-3 1.9z" />
      </svg>
    );
  }

  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#2496ED">
        <path d="M13.8 6.6h2.2v2h-2.2v-2zm-2.8 0h2.2v2H11v-2zm-2.8 0h2.2v2H8.2v-2zm-2.8 0h2.2v2H5.4v-2zm8.4 2.6h2.2v2h-2.2v-2zm-2.8 0h2.2v2H11v-2zm-2.8 0h2.2v2H8.2v-2zm-2.8 0h2.2v2H5.4v-2zm-2.8 0H5v2H2.6v-2zm18.8 4.2c-.4-.3-1.4-.4-2.1-.2-.2-.6-.7-1.1-1.3-1.3l-.7-.3-.4.6c-.6 1-1.7 1.6-2.9 1.6H2.5c-.3 1.5 0 3.2.9 4.5 1.4 1.9 3.7 3 6.1 3 4.8 0 8.9-3.2 10.1-7.8.8.1 1.6-.1 2.2-.4.4-.2.8-.5 1-.9l.2-.5-.4-.3z" />
      </svg>
    );
  }

  if (normalized.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#FF9900">
        <path d="M7.7 10.4c0-.7.4-1.2 1.1-1.2.5 0 .9.2 1.1.5v1.9c-.3.2-.7.3-1.1.3-.7 0-1.1-.6-1.1-1.5zm1.1-2.9c-1.7 0-2.8 1.2-2.8 2.9 0 1.8 1.1 3.1 2.8 3.1.8 0 1.5-.3 2-.9v.7h1.6V7.6h-1.6v.8c-.5-.6-1.2-.9-2-.9zm4.8 5.8h1.7l1.2-4.8 1.2 4.8h1.7l1.9-6.9h-1.6l-1.1 4.7-1.2-4.7h-1.6l-1.2 4.7-1.1-4.7h-1.7l1.8 6.9zm-9.3 5.3c5.3 2.5 11.5 2.5 16.8 0 .5-.2.9.2.6.6-4.9 3.2-11.4 3.2-16.3 0-.4-.3-.1-.8.4-.6zm17.6-.4c-.5-.4-1.5-.2-2.2 0-.2.1-.3-.1-.1-.3 1-1.1 2.3-1 2.7-.9.5.1.7.9.3 1.5-.2.2-.5.1-.7-.3z" />
      </svg>
    );
  }

  if (normalized.includes("redux")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#764ABC">
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 .7.2 1.4.5 2C5.6 9 3.5 10.3 2.5 12c1 1.7 3.1 3 5.5 3.5-.3.6-.5 1.3-.5 2a4.5 4.5 0 0 0 9 0c0-.7-.2-1.4-.5-2 2.4-.5 4.5-1.8 5.5-3.5-1-1.7-3.1-3-5.5-3.5.3-.6.5-1.3.5-2A4.5 4.5 0 0 0 12 2zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 9 12 9s-2.5-1.1-2.5-2.5S10.6 4 12 4zm0 11c1.4 0 2.5 1.1 2.5 2.5S13.4 20 12 20s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z" />
      </svg>
    );
  }

  if (normalized === "git") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.5-2.1L12.7 10v4.7c.2.2.4.4.4.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-.8.5-1.5 1.2-1.8V9.3c-.7-.3-1.2-1-1.2-1.8 0-.4.1-.7.3-1L6.8 4.2 2.4 8.6c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.5.6-1.4 0-2z" />
      </svg>
    );
  }

  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.8 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.5.1 2.8.7.7 1 1.7 1 2.8 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  if (normalized.includes("three")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
        <path d="M3 21l9-18 9 18H3zm3.8-2h10.4L12 7.6 6.8 19z" />
      </svg>
    );
  }

  if (normalized.includes("inngest")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <circle cx="12" cy="12" r="10" fill="#1E1B4B" stroke="#6366F1" strokeWidth="2" />
        <path d="M8 12l3 3 5-6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalized.includes("neon")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#00E599">
        <path d="M3 19V5h4l7 9V5h3v14h-4l-7-9v9H3z" />
      </svg>
    );
  }

  if (normalized.includes("java") && !normalized.includes("script")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#F89820">
        <path d="M9.5 15.2c-2.4-.2-4.2-.6-4.2-1.1 0-.6 2.3-1.1 5.3-1.1 3.5 0 5.8.6 5.8 1.2 0 .5-1.5.9-3.7 1.1l-.8.1-.8-.1-.8-.1c-.3 0-.5-.1-.8-.1zm-4-3.3c-1.5-.2-2.3-.5-2.3-.9 0-.6 2-1 4.7-1 2.9 0 5 .5 5 1 0 .4-1 .8-2.6.9l-.7.1-.7-.1zm11.2 5.5c-3 .5-6.5.5-9.3 0-1-.2-1.7-.4-1.7-.7 0-.4 1.1-.7 2.7-.9 2.7-.3 6.1-.3 8.8 0 1.4.2 2.2.5 2.2.8 0 .3-.9.6-2.7.8z" />
      </svg>
    );
  }

  if (normalized === "c") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#A8B9CC">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-1.8-.5-3.5-1.4-5l-2.4 1.4c.5 1.1.8 2.3.8 3.6 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c1.3 0 2.5.3 3.6.8l1.4-2.4C15.5 2.5 13.8 2 12 2z" />
      </svg>
    );
  }

  if (normalized.includes("html")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#E34F26">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.4h-9l.2 2.4h8.6l-.6 6.6-4.8 1.3-4.8-1.3-.3-3.6h2.4l.2 1.8 2.5.7 2.5-.7.3-3.1H6.7L6 4.3h12l-.4 3.1z" />
      </svg>
    );
  }

  if (normalized.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#1572B6">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.4h-9l.2 2.4h8.6l-.6 6.6-4.8 1.3-4.8-1.3-.3-3.6h2.4l.2 1.8 2.5.7 2.5-.7.3-3.1H6.7L6 4.3h12l-.4 3.1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const sectionCardClass =
  "rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8 transition-all hover:border-neutral-700/70";

const dockButton =
  "flex h-11 w-11 items-center justify-center rounded-full text-neutral-300 transition-all hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-300";

/* ---------- Main Portfolio View ---------- */

export const DEFAULT_DOCK_ITEMS = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: "#top",
  },
  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Experience",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Education",
    icon: (
      <IconSchool className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: "#education",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: PERSONAL.github,
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: PERSONAL.linkedin,
  },
  {
    title: "Email",
    icon: (
      <IconMail className="h-full w-full text-neutral-400 dark:text-neutral-300" />
    ),
    href: `mailto:${PERSONAL.email}`,
  },
];

export function Portfolio({
  name = PERSONAL.name,
  title = PERSONAL.title,
  location = PERSONAL.location,
  email = PERSONAL.email,
  github = PERSONAL.github,
  linkedin = PERSONAL.linkedin,
  avatarSrc = PERSONAL.avatarSrc,
  experiences = EXPERIENCES,
  projects = PROJECTS,
  skills = SKILLS,
  leadership = LEADERSHIP,
  education = EDUCATION,
}: PortfolioProps) {
  const normalizedSkills: string[] = Array.isArray(skills)
    ? skills.flatMap((s) => (typeof s === "string" ? s : s.skills || []))
    : SKILLS;

  return (
    <div id="top" className="relative w-full text-neutral-100">
      <main className="relative mx-auto flex max-w-3xl flex-col gap-6 px-4 pb-36 pt-16 sm:gap-8 sm:px-6 sm:pt-24">
        {/* Hero Section */}
        <header className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/50 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8">
          <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">


              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-neutral-100">
                <WavingHand className="mr-2" /> Hey, I&apos;m {name.split(" ")[0]}
              </h1>

              <p className="mt-2 text-base font-medium text-neutral-300 sm:text-lg">
                {title}
              </p>

              {/* Location & Quick Credential */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-400 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  IITM, GGSIPU
                </span>
              </div>



              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon name="mail" />
                  <span>Say Hello</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-700/80 bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-white"
                >
                  <span>See What I&apos;ve Built</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </a>
              </div>
            </div>

            <Avatar src={avatarSrc} label={name} size={135} />
          </div>
        </header>

        {/* About Section */}
        <section id="about" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
              About
            </h2>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              Background
            </span>
          </div>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-neutral-300 sm:text-[16px]">
            <p>
              I&apos;m a Full-Stack Developer and Generative AI Engineer pursuing my BCA at IITM, GGSIPU (<strong className="text-neutral-100 font-semibold">8.73 CGPA</strong>). I specialize in building responsive frontend interfaces with Next.js alongside high-performance backend systems in Node.js and FastAPI.
            </p>
            <p>
              My focus centers on practical engineering: building end-to-end GenAI pipelines, managing distributed background jobs on AWS and Inngest, and applying strong CS foundations in Data Structures, System Design, and relational databases.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
            <span className="rounded-lg border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300">
              ⚡ Next.js & Full-Stack Web
            </span>
            <span className="rounded-lg border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300">
              🤖 GenAI Pipelines & LLMs
            </span>
            <span className="rounded-lg border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300">
              ⚙️ Distributed Systems & AWS
            </span>
          </div>
        </section>

        {/* Featured Projects (Google ABC Format: Action, Benefit, Context) */}
        <section id="projects" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
                Featured Projects
              </h2>
              <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                Real problems solved with clean architecture and practical AI.
              </p>
            </div>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              {projects.length} Shipped
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group relative rounded-xl border border-neutral-800/80 bg-neutral-950/50 p-5 transition-all hover:border-neutral-700/80 sm:rounded-2xl sm:p-6"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-bold text-neutral-100 sm:text-xl">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-1 text-xs font-medium text-neutral-300 transition hover:border-neutral-700 hover:text-white"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Icon name="github" />
                        <span>Source Code</span>
                        <ArrowUpRightIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-1 text-sm font-medium text-neutral-400">
                  {project.tagline}
                </p>

                {/* Clear Google ABC bullets */}
                <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-neutral-300">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                      <span>
                        <strong className="text-neutral-100 font-semibold">{item.label}:</strong>{" "}
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2 py-0.5 text-[11px] font-medium text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section id="skills" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
                Skills & Technologies
              </h2>
              <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                Languages, frameworks, databases, and developer tools I work with daily.
              </p>
            </div>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              {normalizedSkills.length} Tools
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
            {normalizedSkills.map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-2 rounded-xl border border-neutral-800/80 bg-neutral-950/60 px-3 py-2 text-xs font-medium text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900/90 hover:text-white hover:shadow-md sm:text-sm"
              >
                <TechLogo name={skill} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
              Work Experience
            </h2>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              Industry Experience
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {experiences.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-xl border border-neutral-800/80 bg-neutral-950/40 p-5 sm:rounded-2xl"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-base font-bold text-neutral-100 sm:text-lg">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium text-neutral-300">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 font-medium text-neutral-300">
                      {item.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-3.5 flex flex-col gap-2 text-sm leading-relaxed text-neutral-300">
                  {item.highlights.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Campus Community */}
        <section id="leadership" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
              Leadership & Community
            </h2>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              Team & Events
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {leadership.map((item) => (
              <div
                key={item.organization}
                className="rounded-xl border border-neutral-800/80 bg-neutral-950/40 p-5 sm:rounded-2xl"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-neutral-100 sm:text-lg">
                        {item.organization}
                      </h3>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white"
                          aria-label={`Visit ${item.organization} website`}
                        >
                          <span className="underline underline-offset-2">nexverse-iitm.com</span>
                          <ArrowUpRightIcon />
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-medium text-neutral-300">
                      {item.position}
                    </p>
                  </div>
                  <span className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-neutral-300">
                    {item.duration}
                  </span>
                </div>

                <ul className="mt-3.5 flex flex-col gap-2 text-sm leading-relaxed text-neutral-300">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={sectionCardClass}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
              Education
            </h2>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              Academics
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between gap-2 rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-4 sm:flex-row sm:items-center sm:p-5"
              >
                <div>
                  <h3 className="text-base font-semibold text-neutral-100">
                    {edu.qualification}
                  </h3>
                  <p className="text-xs text-neutral-400 sm:text-sm">
                    {edu.institution || edu.board} {edu.duration ? `• ${edu.duration}` : edu.year ? `• ${edu.year}` : ""}
                  </p>
                </div>
                <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0.5">
                  <span className="text-sm font-bold text-neutral-100 sm:text-base">
                    {edu.score}
                  </span>
                  {edu.scoreLabel && (
                    <span className="text-[11px] text-neutral-400">
                      {edu.scoreLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Footer Section */}
        <section id="contact" className="rounded-2xl border border-neutral-800/80 bg-neutral-900/50 p-6 text-center backdrop-blur-md sm:rounded-3xl sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-neutral-100 sm:text-2xl">
            Let&apos;s Connect & Build Something Great
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-neutral-300">
            Whether you have an internship opening, an interesting project, or just want to chat about web engineering and AI, my inbox is always open.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              <Icon name="mail" />
              <span>Email</span>
            </a>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-white"
              >
                <Icon name="github" />
                <span>GitHub</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-white"
              >
                <Icon name="linkedin" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          <p className="mt-8 text-xs text-neutral-500">
            Designed & Developed by {name}
          </p>
        </section>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen">
      {/* Interactive Background Waves */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <PatternWaves
          preset="silk"
          color="#a6aeb8"
          backgroundColor="#141518"
          fade="edges"
          interactive
          cursorSize={90}
          cursorStrength={0.6}
          pattern="square"
          markSize={1.9}
          depth={0.1}
        />
      </div>

      <SmoothScroll>
        <Portfolio />
      </SmoothScroll>

      {/* Bottom ambient blur gradient to prevent scrolling content from mixing behind the dock */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-28 bg-gradient-to-t from-[#141518] via-[#141518]/85 to-transparent backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Floating dock fixed permanently to the viewport */}
      <div className="fixed bottom-6 inset-x-0 z-50 pointer-events-none flex justify-center">
        <div className="pointer-events-auto">
          <FloatingDock
            items={DEFAULT_DOCK_ITEMS}
            desktopClassName="shadow-2xl border border-neutral-700/60 !bg-[#1c1d22]/95 backdrop-blur-2xl ring-1 ring-white/10"
            mobileClassName="fixed bottom-6 right-6 pointer-events-auto shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
