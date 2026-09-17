import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Share2, Check } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "../../data/blog";

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogReaderModal({ post, onClose }: BlogReaderModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (post) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090e15] shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/8 px-6 py-4 bg-[#0a1018]">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                {post.badgeText || post.category}
              </span>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-primary/40 hover:text-primary"
                title="Share link"
              >
                {copied ? <Check size={14} className="text-primary" /> : <Share2 size={14} />}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-6">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {post.title}
            </h2>

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Calendar size={13} className="text-primary/80" />
              <span>Published on {post.date}</span>
            </div>

            {/* Feature Image */}
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#05080c] aspect-[16/9] w-full">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="prose prose-invert max-w-none text-text-muted text-sm sm:text-base leading-relaxed space-y-4">
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-bold text-white pt-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-4 border-t border-white/8">
                <span className="text-xs text-text-muted block mb-2 font-medium">Topics:</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
