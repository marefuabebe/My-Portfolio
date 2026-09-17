import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Custom responsive websites and web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.",
    icon: "code",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "User-centered interface design with wireframes, prototypes, and polished visuals that enhance usability and engagement.",
    icon: "layout",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Brand identities, social media graphics, logos, and marketing materials that communicate your message effectively.",
    icon: "palette",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Engaging digital content including blog posts, social media content, and multimedia assets for your brand presence.",
    icon: "pen-tool",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing website maintenance, performance optimization, bug fixes, and feature updates to keep your site running smoothly.",
    icon: "wrench",
  },
  {
    id: "consultation",
    title: "Consultation",
    description:
      "Technical guidance on technology choices, project planning, and digital strategy to help you make informed decisions.",
    icon: "message-circle",
  },
];

export type ServiceIconMap = Record<string, LucideIcon>;
