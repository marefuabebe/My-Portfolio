export const personalInfo = {
  name: "Marefu Abebe",
  firstName: "Marefu",
  lastName: "Abebe",
  role: "Software Engineer | Web Developer | Problem Solver",
  roles: ["Software Engineer", "Web Developer", "Problem Solver"],
  tagline: "Turning Ideas Into Digital Experiences.",
  taglineHighlight: "Digital Experiences.",
  bio: `I'm a 4th year Software Engineering student at Wachemo University. I'm passionate about building modern web applications and creating digital solutions that make an impact. I love learning new technologies and turning ideas into real products.`,
  shortBio: `I'm a 4th year Software Engineering student at Wachemo University. I build modern, responsive and user-friendly web applications, and I blog create content and design visuals for the internet.`,
  education: "Wachemo University — College of Engineering & Technology, Department of Software Engineering (4th Year)",
  educationShort: "4th Year Software Engineering Student at Wachemo University",
  location: "Durame, Ethiopia",
  university: "Wachemo University",
  email: "abebemarefu266@gmail.com",
  phone: "+251 938 543 853",
  clientSupport: "+251 938 543 853",
  github: "https://github.com/marefuabebe",
  linkedin: "https://linkedin.com/in/marefu-abebe-a1b7b9437",
  youtube: "https://youtube.com/@marefuabebe",
  telegram: "https://t.me/marefuabebe",
  twitter: "https://x.com/Marefu_Abebe",
  cvUrl: "/cv/marefu-abebe-cv.pdf",
  portraitUrl: "/images/marefu-portrait.png",
  photoCaption: "Always learning, always building.",
};

export const stats = [
  { value: "5+", label: "Projects Completed", icon: "code-2" },
  { value: "3+", label: "Years of Learning", icon: "graduation-cap" },
  { value: "2+", label: "Happy Clients", icon: "users" },
  { value: "100%", label: "Passion", icon: "heart" },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export const socialLinks = [
  { name: "GitHub", url: personalInfo.github, icon: "github" },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { name: "YouTube", url: personalInfo.youtube, icon: "youtube" },
  { name: "Telegram", url: personalInfo.telegram, icon: "send" },
  { name: "X", url: personalInfo.twitter, icon: "twitter" },
];

export const aboutDetails = [
  { label: "Location", value: personalInfo.location, icon: "map-pin" },
  { label: "University", value: personalInfo.university, icon: "graduation-cap" },
  { label: "Email", value: personalInfo.email, icon: "mail" },
];

export const myStory = {
  paragraphs: [
    `My journey in tech started with curiosity — a simple interest in how websites and applications work. That curiosity turned into a passion, and today I'm on a mission to become a skilled Software Engineer.`,
    `I enjoy solving problems, building useful software, and continuously learning. I believe technology can create opportunities, and I want to be part of that change.`,
  ],
  quote: `"I'm not just writing code, I'm building the future."`,
  quoteAuthor: "— Marefu Abebe",
};

export const interests = [
  { label: "Coding & Development", icon: "code-2", color: "text-emerald-400" },
  { label: "Design & Creativity", icon: "palette", color: "text-pink-400" },
  { label: "Technology & AI", icon: "cpu", color: "text-cyan-400" },
  { label: "Fitness & Health", icon: "heart-pulse", color: "text-red-400" },
  { label: "Travel & Exploration", icon: "compass", color: "text-amber-400" },
  { label: "Reading & Learning", icon: "book-open", color: "text-violet-400" },
];

export const aboutSkills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

export interface EducationExperienceItem {
  period?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image?: string;
}

export const educationExperience: EducationExperienceItem[] = [
  {
    period: "2023 – Present",
    title: "Wachemo University",
    subtitle: "BSc in Software Engineering",
    description: "Currently in my 4th year, building a strong foundation in software development and computer science.",
    icon: "graduation-cap",
  },
  {
    title: "Personal & Academic Projects",
    subtitle: "Self-Learning & Practice",
    description: "Building real-world projects, improving my skills, and exploring new technologies.",
    icon: "code-2",
  },
];

export const journeyTimeline = [
  {
    period: "2018 – 2021",
    title: "Catholic Secondary & Primary School",
    description: "Completed primary and secondary education with a strong foundation in science and mathematics.",
  },
  {
    period: "2023 – Present",
    title: "Wachemo University",
    description: "Software Engineering — 4th Year, College of Engineering & Technology.",
  },
  {
    period: "Future",
    title: "More to come...",
    description: "Building my dream career one step at a time.",
  },
];
