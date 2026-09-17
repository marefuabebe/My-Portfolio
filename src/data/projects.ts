export type ProjectCategory = "all" | "web-app" | "fullstack";

export interface Project {
  id: string;
  title: string;
  titleHighlight: string;
  type: string;
  description: string;
  image: string;
  category: ProjectCategory;
  features: string[];
  tags: string[];
  github?: string;
  demo?: string;
  liveUrl?: string;
  isLive?: boolean;
  statusBadge?: string;
  featured?: boolean;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web-app", label: "Web Apps" },
  { id: "fullstack", label: "Full Stack" },
];

export const projects: Project[] = [
  {
    id: "kambata-travel",
    title: "Kambata ",
    titleHighlight: "Travel",
    type: "Web App",
    description: "A tour & travel platform for Kambata zone with booking, guides, hotels and payment integration (Chapa, Telebirr).",
    image: "/images/projects/kambata-travel.jpg",
    category: "fullstack",
    features: [
      "Tour Booking & Scheduling",
      "Hotel Management",
      "Google Maps Integration",
      "Multi-language (Amharic & English)",
    ],
    tags: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/marefuabebe/kambata-travel",
    demo: "https://kambata-travel.vercel.app/",
    liveUrl: "https://kambata-travel.vercel.app/",
    isLive: true,
    statusBadge: "Live on Vercel",
    featured: true,
  },
  {
    id: "sofra-food",
    title: "SOFRA | Restaurant ",
    titleHighlight: "SaaS",
    type: "SaaS Platform",
    description: "Modern multi-tenant restaurant operating system & food ordering SaaS platform with QR dine-in menus, real-time kitchen tickets, Chapa payments, KYC verification, and automated email alerts.",
    image: "/images/projects/sofra-saas.jpg",
    category: "fullstack",
    features: [
      "Multi-tenant Restaurant OS",
      "QR Dine-in Digital Menus",
      "Real-time Kitchen Tickets (KDS)",
      "Chapa Payment Integration",
      "KYC Verification & Email Alerts",
    ],
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Chapa"],
    github: "https://github.com/marefuabebe/sofra-food",
    demo: "https://sofra-saas.vercel.app/",
    liveUrl: "https://sofra-saas.vercel.app/",
    isLive: true,
    statusBadge: "Live on Vercel",
    featured: true,
  },
  {
    id: "boos-clothes",
    title: "Boss ",
    titleHighlight: "Clothe",
    type: "Modern E-Commerce Store",
    description: "Boss Clothe is a modern React-based online fashion store featuring a stylish UI, product listings, category filtering, cart management, and responsive design. Built for fast performance and a smooth shopping experience.",
    image: "/images/projects/boss-clothes.jpg",
    category: "web-app",
    features: [
      "React 18 & Vite Scalable Frontend",
      "Smart Category & Price Filtering",
      "Seamless Cart Management (Context API)",
      "Fluid Animations with Framer Motion",
      "Multi-device Responsive UI (Tailwind CSS)",
      "Smooth Navigation with React Router",
    ],
    tags: [
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Context API",
      "React Router",
    ],
    github: "https://github.com/marefuabebe/boss-cloth",
    demo: "https://bosscloth.vercel.app/",
    liveUrl: "https://bosscloth.vercel.app/",
    isLive: true,
    statusBadge: "Live on Vercel",
    featured: true,
  },
  {
    id: "jobify-platform",
    title: "Jobify | Freelance ",
    titleHighlight: "Platform",
    type: "Full Stack Platform",
    description: "A full-stack Spring Boot freelance job portal connecting clients and freelancers. Features Google OAuth, Stripe payments, real-time messaging, and secure email verifications.",
    image: "/images/projects/jobify-platform.jpg",
    category: "fullstack",
    features: [
      "Spring Boot & React Architecture",
      "Google OAuth & Email Verifications",
      "Stripe Payment Gateway Integration",
      "Real-time Client-Freelancer Messaging",
      "Job Proposals & Talent Bidding",
    ],
    tags: ["Spring Boot", "React", "MySQL", "Stripe", "OAuth2"],
    github: "https://github.com/marefuabebe/jobify-platform",
    demo: "https://jobify-platform.onrender.com/",
    liveUrl: "https://jobify-platform.onrender.com/",
    isLive: true,
    statusBadge: "Live on Render",
    featured: false,
  },
  {
    id: "portfolio-website",
    title: "Portfolio ",
    titleHighlight: "Website",
    type: "Developer Portfolio",
    description: "Personal engineering portfolio showcasing full-stack projects, deployed web applications, and verified industry credentials. Engineered with React 18, TypeScript, Tailwind CSS, and Framer Motion.",
    image: "/images/projects/portfolio-website.jpg",
    category: "web-app",
    features: [
      "Modern & Responsive Dark UI/UX",
      "Fluid Micro-Animations with Framer Motion",
      "Interactive Live App Case Study Modals",
      "Verified Industry Certifications Showcase",
      "Clean Modular Architecture with Vite & TypeScript",
    ],
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/marefuabebe/portfolio",
    demo: "https://marefuabebe.vercel.app/",
    liveUrl: "https://marefuabebe.vercel.app/",
    isLive: true,
    statusBadge: "Live on Vercel",
    featured: false,
  },
];
