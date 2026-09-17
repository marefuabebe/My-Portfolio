import { useState } from "react";
import {
  Search,
  X,
  Code2,
  Palette,
  Plane,
  Briefcase,
  Wrench,
  Calendar,
  Send,
  CheckCircle2,
} from "lucide-react";
import type { BlogPost } from "../../data/blog";
import { blogCategories } from "../../data/blog";

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  recentPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

const categoryIconMap = {
  Code2,
  Palette,
  Plane,
  Briefcase,
  Wrench,
};

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  recentPosts,
  onSelectPost,
}: BlogSidebarProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <aside className="w-full space-y-6" aria-label="Blog Sidebar">
      {/* ── 1. Search Bar ── */}
      <div className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60"
          aria-hidden="true"
        />
        <input
          id="blog-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-xl border border-white/8 bg-[#090e14] py-3 pr-10 pl-10 text-xs sm:text-sm text-white placeholder:text-text-muted/50 transition-all duration-200 focus:border-primary/50 focus:bg-[#0c141d] focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
            aria-label="Clear search query"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* ── 2. Categories ── */}
      <div className="rounded-2xl border border-white/6 bg-[#090e14] p-5 sm:p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-white sm:text-lg">Categories</h3>
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => onSelectCategory("all")}
              className="text-xs text-primary hover:underline"
            >
              Reset
            </button>
          )}
        </div>

        <div className="space-y-1">
          {blogCategories.map((cat) => {
            const Icon = categoryIconMap[cat.iconName] || Code2;
            const isSelected = selectedCategory === cat.slug;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() =>
                  onSelectCategory(isSelected ? "all" : cat.slug)
                }
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm transition-all duration-200 ${
                  isSelected
                    ? "bg-primary/15 font-semibold text-primary"
                    : "text-text-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    size={16}
                    className={`transition-colors ${
                      isSelected ? "text-primary" : "text-primary/70"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{cat.label}</span>
                </span>
                <span className="font-semibold text-primary">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. Recent Posts ── */}
      <div className="rounded-2xl border border-white/6 bg-[#090e14] p-5 sm:p-6 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-white sm:text-lg">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group flex cursor-pointer items-center gap-3 transition-all duration-200"
            >
              <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-lg bg-[#05080c]">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="line-clamp-2 text-xs font-semibold leading-snug text-white transition-colors group-hover:text-primary sm:text-[13px]">
                  {post.title}
                </h4>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-text-muted">
                  <Calendar size={11} className="text-primary/70" aria-hidden="true" />
                  <time dateTime={post.isoDate || post.date}>{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── 4. Stay Updated (Newsletter) ── */}
      <div className="rounded-2xl border border-white/6 bg-[#090e14] p-5 sm:p-6 shadow-sm">
        <div className="mb-3 text-primary">
          <Send size={22} className="rotate-[-10deg]" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-base font-bold text-white sm:text-lg">Stay Updated</h3>
        <p className="mb-4 text-xs leading-relaxed text-text-muted/80 sm:text-[13px]">
          Subscribe to our newsletter to get new posts and updates directly in your inbox.
        </p>

        {subscribed ? (
          <div className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/30 p-3 text-xs text-primary font-medium">
            <CheckCircle2 size={16} />
            <span>Thank you for subscribing! 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full rounded-xl border border-white/8 bg-[#05080c] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-text-muted/50 transition-all duration-200 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-2.5 text-xs sm:text-sm font-bold text-[#05080a] transition-all duration-200 hover:bg-[#5cffe0] hover:shadow-[0_0_20px_rgba(20,255,197,0.25)] active:scale-[0.99]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
