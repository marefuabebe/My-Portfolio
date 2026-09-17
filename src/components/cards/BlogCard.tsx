import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "../../data/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  onReadMore?: (post: BlogPost) => void;
}

export default function BlogCard({ post, index = 0, onReadMore }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-white/6 bg-[#090e14] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-[#0c141d] hover:shadow-[0_8px_30px_rgba(20,255,197,0.06)] sm:p-5"
    >
      {/* Thumbnail */}
      <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#05080c]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090e14]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Category badge */}
      <div className="mb-2.5">
        <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-0.5 text-[11px] font-medium text-primary">
          {post.badgeText || post.category}
        </span>
      </div>

      {/* Title */}
      <h3
        onClick={() => onReadMore?.(post)}
        className="mb-2 line-clamp-2 cursor-pointer text-base font-bold text-white transition-colors duration-200 group-hover:text-primary sm:text-lg sm:leading-snug"
      >
        {post.title}
      </h3>

      {/* Date */}
      <div className="mb-3 flex items-center gap-1.5 text-xs text-text-muted">
        <Calendar size={13} className="text-primary/70" aria-hidden="true" />
        <time dateTime={post.isoDate || post.date}>{post.date}</time>
      </div>

      {/* Excerpt */}
      <p className="mb-4 flex-1 line-clamp-3 text-xs leading-relaxed text-text-muted/85 sm:text-[13px]">
        {post.excerpt}
      </p>

      {/* Read More button */}
      <button
        type="button"
        onClick={() => onReadMore?.(post)}
        className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:text-primary-bright group-hover:gap-2.5 sm:text-sm"
        aria-label={`Read article: ${post.title}`}
      >
        <span>Read More</span>
        <ArrowRight size={14} className="transition-transform duration-200" aria-hidden="true" />
      </button>
    </motion.article>
  );
}
