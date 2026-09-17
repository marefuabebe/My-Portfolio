export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  credentialId?: string;
  courseCode?: string;
  program: string;
  issueDate: string;
  verificationUrl: string;
  imageUrl: string;
  description: string;
  skills: string[];
  gradient: string;
  borderHover: string;
}

export const certifications: Certification[] = [
  {
    id: "prompt-engineering-ibm",
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class",
    partner: "Powered by IBM Developer Skills Network",
    courseCode: "AI0117EN",
    program: "GenAI & LLM Prompting",
    issueDate: "July 22, 2025",
    verificationUrl: "https://courses.cognitiveclass.ai/certificates/66f969d258a04db68f58d21fef3aa557",
    imageUrl: "/images/certificates/cognitive-class-prompt-engineering.png",
    description:
      "Comprehensive certification covering modern generative AI prompt patterns, zero-shot and few-shot learning, chain-of-thought logic, and production prompt optimization with IBM Developer Skills Network.",
    skills: ["Prompt Engineering", "Generative AI", "LLMs", "AI Workflows", "IBM Skills Network"],
    gradient: "from-cyan-500/15 via-teal-500/5 to-transparent",
    borderHover: "hover:border-primary/50",
  },
  {
    id: "programming-fundamentals-udacity",
    title: "Programming Fundamentals",
    issuer: "Udacity",
    partner: "Part of Accenture",
    credentialId: "KNQFWK3V",
    program: "Verified Nanodegree Program Completion",
    issueDate: "October 6, 2024",
    verificationUrl: "https://confirm.udacity.com/KNQFWK3V",
    imageUrl: "/images/certificates/udacity-programming-fundamentals.png",
    description:
      "Rigorous Nanodegree program covering core computer science principles, modular programming architecture, algorithm design, data structures, and production-ready problem-solving.",
    skills: ["Computer Science", "Algorithms", "Data Structures", "Problem Solving", "Software Design"],
    gradient: "from-blue-600/15 via-indigo-500/5 to-transparent",
    borderHover: "hover:border-blue-400/50",
  },
];
