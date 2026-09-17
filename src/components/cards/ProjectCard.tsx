import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, ExternalLink, Copy } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onPreview?: (project: Project) => void;
}

function getHostname(url: string): string {
  if (!url) return "";
  try {
    if (url.startsWith("/") || url === "#") {
      return "marefuabebe.vercel.app";
    }
    const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : "https://localhost");
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").split("/")[0] || url;
  }
}

export default function ProjectCard({
  project,
  index = 0,
  onPreview,
}: ProjectCardProps) {
  const [copied, setCopied] = useState(false);
  const liveUrl = project.liveUrl || project.demo;

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liveUrl) return;
    navigator.clipboard.writeText(liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="glass glass-hover group relative flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg"
    >
      {/* Image Area with Interactive Overlay */}
      <div
        onClick={() => onPreview && onPreview(project)}
        className="relative overflow-hidden bg-[#05080c] h-48 sm:h-52 shrink-0 cursor-pointer group/img"
      >
        <img
          src={project.image}
          alt={`${project.title}${project.titleHighlight} screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />

        {/* Top Badges: Type + Live Indicator */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
          <span className="rounded-full border border-primary/40 bg-bg-dark/80 px-2 py-0.5 text-[9px] font-bold tracking-wider text-primary uppercase backdrop-blur-sm shadow-sm">
            {project.type}
          </span>

          {project.isLive && (
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#061e14]/80 px-2 py-0.5 text-[9px] font-bold text-emerald-400 backdrop-blur-sm shadow-[0_0_12px_rgba(16,185,129,0.25)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>{project.statusBadge || "Live"}</span>
            </div>
          )}
        </div>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 bg-black/60 opacity-0 backdrop-blur-[3px] transition-all duration-300 group-hover:opacity-100">
          {onPreview && (
            <button
              type="button"
              onClick={() => onPreview(project)}
              className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-md transition-all hover:scale-105 hover:bg-primary hover:text-bg-dark"
              title="View Project Details"
            >
              <Eye size={13} />
              <span>Details</span>
            </button>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-bg-dark"
              title="Open live site in new tab"
            >
              <ExternalLink size={13} />
              <span>Launch</span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Title */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[15px] font-bold text-text-light leading-snug">
            {project.title}
            <span className="text-primary">{project.titleHighlight}</span>
          </h3>

          {liveUrl && (
            <button
              type="button"
              onClick={handleCopyLink}
              className="text-text-muted/60 hover:text-primary transition-colors"
              title={copied ? "Link Copied!" : "Copy project link"}
              aria-label="Copy project link"
            >
              {copied ? (
                <span className="text-[10px] font-bold text-primary">Copied!</span>
              ) : (
                <Copy size={13} />
              )}
            </button>
          )}
        </div>

        {/* Live URL Subtitle / Hostname Chip */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-mono text-primary/80 hover:text-primary hover:underline"
          >
            <span>{getHostname(liveUrl)}</span>
            <ExternalLink size={10} />
          </a>
        )}

        {/* Description */}
        <p className="mt-1.5 text-[11px] leading-relaxed text-text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features checklist — compact */}
        <ul className="mt-2.5 space-y-1 flex-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 text-[11px] text-text-muted">
              <Check size={11} className="shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Actions Footer */}
        <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold shadow-[0_0_12px_rgba(20,255,197,0.2)]"
              >
                Live Demo
                <ArrowRight size={11} aria-hidden="true" />
              </a>
            )}

            {onPreview && (
              <button
                type="button"
                onClick={() => onPreview(project)}
                className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-all hover:bg-primary/20 hover:border-primary/60"
              >
                <Eye size={11} />
                Details
              </button>
            )}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-text-muted transition-colors hover:border-primary/30 hover:text-primary"
              aria-label={`${project.title}${project.titleHighlight} on GitHub`}
            >
              <GitHubIcon size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
