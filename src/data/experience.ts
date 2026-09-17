export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Frontend Developer (Freelance)",
    organization: "Self-Employed",
    period: "2024 – Present",
    description:
      "Building responsive web applications for local businesses including hotel booking systems, food ordering platforms, and travel websites. Delivering pixel-perfect UIs with React and modern CSS frameworks.",
    type: "work",
  },
  {
    id: "exp-2",
    title: "Software Engineering Student",
    organization: "Wachemo University",
    period: "2022 – Present",
    description:
      "Pursuing a Bachelor's degree in Software Engineering with focus on web development, data structures, algorithms, and software design patterns. Active in coding clubs and hackathons.",
    type: "education",
  },
  {
    id: "exp-3",
    title: "Graphic Designer & Content Creator",
    organization: "Freelance",
    period: "2023 – Present",
    description:
      "Creating visual content, social media graphics, brand identities, and promotional materials for startups and small businesses using Figma and Adobe tools.",
    type: "work",
  },
  {
    id: "exp-4",
    title: "Web Development Intern",
    organization: "Local Tech Startup",
    period: "2024",
    description:
      "Assisted in developing and maintaining client websites, learned agile workflows, participated in code reviews, and contributed to UI component libraries.",
    type: "work",
  },
  {
    id: "exp-5",
    title: "Kambata Travel Platform",
    organization: "Personal Project",
    period: "2024",
    description:
      "Designed and developed a full-stack travel booking platform from concept to deployment, handling frontend, backend API, and database design.",
    type: "project",
  },
  {
    id: "exp-6",
    title: "StudyMate Ethiopia",
    organization: "Personal Project",
    period: "2025",
    description:
      "Built an educational collaboration platform for Ethiopian students with study groups, resource sharing, and real-time chat features.",
    type: "project",
  },
];
