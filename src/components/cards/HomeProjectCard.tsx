import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import type { Project } from "../../data/projects";

interface HomeProjectCardProps {
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

export default function HomeProjectCard({
  project,
  index = 0,
  onPreview,
}: HomeProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const liveUrl = project.liveUrl || project.demo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-bg-card transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_24px_rgba(20,255,197,0.08)]"
    >
      <div className="relative p-3 pb-0">
        {imgError ? (
          <div className="flex h-48 sm:h-52 w-full items-center justify-center rounded-xl bg-bg-mid text-sm text-text-muted">
            {project.title}
            {project.titleHighlight}
          </div>
        ) : (
          <div
            onClick={() => onPreview && onPreview(project)}
            className="group/img relative overflow-hidden rounded-xl border border-white/10 bg-[#05080c] cursor-pointer shadow-md"
          >
            <img
              src={project.image}
              alt={`${project.title}${project.titleHighlight}`}
              className="h-48 sm:h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />

            {/* Live Indicator Badge on Image */}
            {project.isLive && (
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#061e14]/90 px-2.5 py-0.5 text-[9px] font-bold text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span>{project.statusBadge || "Live"}</span>
              </div>
            )}

            {/* Hover Actions Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
              {onPreview && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreview(project);
                  }}
                  className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/25 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-md hover:bg-primary hover:text-bg-dark transition-all shadow-sm"
                  title="View Project Details"
                >
                  <Eye size={12} />
                  <span>Details</span>
                </button>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white hover:text-bg-dark transition-all shadow-sm"
                  title="Open live site"
                >
                  <ExternalLink size={12} />
                  <span>Launch</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold tracking-wider text-primary/80 uppercase">
            {project.type}
          </span>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[10px] text-primary/80 hover:text-primary hover:underline transition-colors truncate max-w-[170px]"
            >
              <span className="truncate">{getHostname(liveUrl)}</span>
              <ExternalLink size={9} className="shrink-0" />
            </a>
          )}
        </div>

        <h3 className="mt-1 text-[15px] font-bold leading-snug">
          <span className="text-text-light">{project.title}</span>
          <span className="text-primary">{project.titleHighlight}</span>
        </h3>

        <p className="mt-2 flex-1 text-[12px] leading-relaxed text-text-muted line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/30 bg-bg-deep px-2 py-0.5 text-[10px] font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
          <div className="flex items-center gap-2">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold shadow-[0_0_12px_rgba(20,255,197,0.2)]"
              >
                <span>Live Demo</span>
                <ArrowRight size={11} aria-hidden="true" />
              </a>
            ) : (
              project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ref-btn-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
                >
                  <span>View Code</span>
                  <ArrowRight size={11} aria-hidden="true" />
                </a>
              )
            )}

            {onPreview && (
              <button
                type="button"
                onClick={() => onPreview(project)}
                className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-all hover:bg-primary/20 hover:border-primary/60"
              >
                <Eye size={11} />
                <span>Details</span>
              </button>
            )}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-text-muted hover:border-primary/40 hover:text-primary transition-colors"
              title="View GitHub Repository"
              aria-label="View GitHub Repository"
            >
              <GitHubIcon size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
