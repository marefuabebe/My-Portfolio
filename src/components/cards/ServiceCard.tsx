import {
  Code,
  Layout,
  Palette,
  PenTool,
  Wrench,
  MessageCircle,
} from "lucide-react";
import type { Service } from "../../data/services";
import GlassCard from "../ui/GlassCard";

const iconMap = {
  code: Code,
  layout: Layout,
  palette: Palette,
  "pen-tool": PenTool,
  wrench: Wrench,
  "message-circle": MessageCircle,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <GlassCard delay={index * 0.08} className="group">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-text-light">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
    </GlassCard>
  );
}
