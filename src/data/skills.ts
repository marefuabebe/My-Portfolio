export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "expressjs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
    ],
  },
];
