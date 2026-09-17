import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Check,
  CheckCircle2,
  Sparkles,
  Layers,
  Share2,
  Maximize2,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import type { Project } from "../../data/projects";

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
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

export default function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const [copied, setCopied] = useState(false);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  const targetUrl = project?.liveUrl || project?.demo || "";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreenImage) {
          setIsFullscreenImage(false);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, isFullscreenImage]);

  const handleCopyLink = () => {
    if (!targetUrl) return;
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-[#090e15] shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/8 bg-[#0a1018] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                {project.type}
              </span>

              {project.isLive && (
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span>{project.statusBadge || "Live on Vercel"}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {targetUrl && (
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-primary/40 hover:text-primary transition-colors"
                  title={copied ? "Link copied!" : "Copy live URL"}
                >
                  {copied ? <Check size={14} className="text-primary" /> : <Share2 size={14} />}
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-white/20 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body: 2-Column Split on Desktop, Stacked on Mobile */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
              {/* Left Column: Edge-to-edge Showcase Image Area */}
              <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center bg-[#05080c] border-b lg:border-b-0 lg:border-r border-white/8 overflow-hidden p-3 sm:p-5 lg:p-6">
                {/* Ambient full-bleed blurred backdrop: covers 100% of the area with image colors */}
                <img
                  src={project.image}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-3xl scale-125 opacity-40 brightness-90"
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />

                {/* Main Showcase Image: 1:1 square naturally fills this area with ZERO cropping */}
                <div className="relative z-10 w-full max-w-[460px] aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-black/40 shadow-2xl group/img">
                  <img
                    src={project.image}
                    alt={`${project.title}${project.titleHighlight}`}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                  />

                  {/* Fullscreen / Zoom Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsFullscreenImage(true)}
                    className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-lg border border-white/20 bg-black/60 px-2 py-1 text-[11px] font-medium text-text-light backdrop-blur-md opacity-0 transition-all group-hover/img:opacity-100 hover:bg-black/80"
                    title="View full-size image"
                  >
                    <Maximize2 size={12} />
                    <span>Zoom</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Project Details, Features & Launch Actions */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between p-5 sm:p-6 lg:p-8 space-y-6">
                <div className="space-y-5">
                  {/* Title & Domain */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {project.title}
                      <span className="text-primary">{project.titleHighlight}</span>
                    </h2>

                    {targetUrl && (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-xs text-primary/80 hover:text-primary hover:underline transition-colors"
                      >
                        <span>{getHostname(targetUrl)}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {targetUrl && (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ref-btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold shadow-[0_0_20px_rgba(20,255,197,0.3)] transition-all hover:shadow-[0_0_30px_rgba(20,255,197,0.5)] active:scale-95"
                      >
                        <span>Launch Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-text-light hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        <GitHubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  {/* Overview */}
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                      <Sparkles size={13} className="text-primary" />
                      <span>About Project</span>
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-text-muted">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-2.5">
                      <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                        <Layers size={13} className="text-primary" />
                        <span>Key Features</span>
                      </h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/[0.02] p-2.5 transition-colors hover:border-primary/25"
                          >
                            <CheckCircle2 size={14} className="shrink-0 text-primary mt-0.5" />
                            <span className="text-[11px] sm:text-xs font-medium text-text-light">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Link Direct Jump Footer */}
                {targetUrl && (
                  <div className="pt-4 border-t border-white/8 flex items-center justify-between text-[11px] text-text-muted">
                    <span>Deployed &amp; Live on Vercel</span>
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Visit {getHostname(targetUrl)}</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fullscreen Image Lightbox Modal */}
        <AnimatePresence>
          {isFullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreenImage(false)}
              className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg cursor-zoom-out"
            >
              <button
                type="button"
                onClick={() => setIsFullscreenImage(false)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label="Close fullscreen image"
              >
                <X size={18} />
              </button>
              <img
                src={project.image}
                alt={`${project.title} full showcase`}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
