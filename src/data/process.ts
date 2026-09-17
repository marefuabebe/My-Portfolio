export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "requirements",
    number: "01",
    title: "Requirements Gathering",
    description:
      "Understanding client goals, target users, and project scope through meetings, questionnaires, and documentation to define clear objectives.",
    image: "/images/process/requirements.svg",
  },
  {
    id: "analysis",
    number: "02",
    title: "Analysis & Planning",
    description:
      "Breaking down features into tasks, estimating timelines, choosing the right tech stack, and creating a structured development roadmap.",
    image: "/images/process/analysis.svg",
  },
  {
    id: "design",
    number: "03",
    title: "UI/UX & System Design",
    description:
      "Designing wireframes, prototypes, and system architecture that balance usability, performance, and scalability before writing code.",
    image: "/images/process/design.svg",
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    description:
      "Building frontend and backend components with clean, maintainable code — turning designs into fully functional web applications.",
    image: "/images/process/development.svg",
  },
  {
    id: "testing",
    number: "05",
    title: "Testing & Debugging",
    description:
      "Running unit tests, integration checks, and cross-browser validation to catch bugs early and ensure a reliable user experience.",
    image: "/images/process/testing.svg",
  },
  {
    id: "deployment",
    number: "06",
    title: "Deployment",
    description:
      "Publishing the application to production with optimized builds, environment configuration, and performance monitoring in place.",
    image: "/images/process/deployment.svg",
  },
  {
    id: "maintenance",
    number: "07",
    title: "Maintenance & Improvement",
    description:
      "Providing ongoing support, security updates, feature enhancements, and performance optimizations based on user feedback.",
    image: "/images/process/maintenance.svg",
  },
];
