import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import BlogHeroIllustration from "../components/sections/BlogHeroIllustration";
import BlogCard from "../components/cards/BlogCard";
import BlogSidebar from "../components/sections/BlogSidebar";
import BlogReaderModal from "../components/ui/BlogReaderModal";
import { blogPosts, recentPosts, type BlogPost } from "../data/blog";

type SortOption = "latest" | "oldest" | "popular";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  const POSTS_PER_PAGE = 6;

  // Filter & Sort Logic
  const filteredPosts = useMemo(() => {
    let list = [...blogPosts];

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === "latest") {
      list.sort(
        (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
      );
    } else if (sortBy === "oldest") {
      list.sort(
        (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
      );
    } else if (sortBy === "popular") {
      list.sort((a, b) => b.views - a.views);
    }

    return list;
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (safeCurrentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, safeCurrentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  const sortLabels: Record<SortOption, string> = {
    latest: "Latest",
    oldest: "Oldest",
    popular: "Most Popular",
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05080a]">
      {/* ── 1. Hero Section ── */}
      <section className="relative py-12 sm:py-16 lg:py-20" aria-label="Blog Hero">
        <div className="section-container">
          <div className="relative grid grid-cols-12 items-center gap-2.5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left — Headlines */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="z-10 col-span-7 sm:col-span-7 lg:col-span-1 max-w-[540px]"
            >
              <span className="text-[10px] sm:text-[13px] font-bold tracking-wide text-primary">
                My Blog
              </span>

              <h1 className="mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-[54px] font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15]">
                Thoughts &amp;{" "}
                <span className="bg-gradient-to-r from-primary to-[#5cffe0] bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>

              <p className="mt-1.5 sm:mt-4 text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted line-clamp-3 sm:line-clamp-none">
                Here I share my thoughts, learnings, and experiences in technology,
                design, and the journey of becoming a better developer.
              </p>
            </motion.div>

            {/* Right — Animated Code Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-5 sm:col-span-5 lg:col-span-1 flex items-center justify-center"
            >
              <BlogHeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Content Grid (Two-Column Layout) ── */}
      <section className="pb-24" aria-label="Blog Articles and Sidebar">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* ── Left Column: Articles Area (8 cols) ── */}
            <div className="lg:col-span-8">
              {/* Header Bar: Post Count & Sort Dropdown */}
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm font-semibold text-primary">
                  Total {selectedCategory === "all" && !searchQuery.trim() ? "6" : filteredPosts.length}{" "}
                  {(selectedCategory === "all" && !searchQuery.trim() ? 6 : filteredPosts.length) === 1
                    ? "post"
                    : "posts"}
                </span>

                {/* Sort dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2 rounded-xl border border-white/8 bg-[#090e14] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:border-primary/40 hover:bg-[#0c141d]"
                    aria-expanded={isSortOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{sortLabels[sortBy]}</span>
                    <ChevronDown
                      size={14}
                      className={`text-text-muted transition-transform duration-200 ${
                        isSortOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isSortOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute right-0 top-full z-30 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-[#0c1218] p-1 shadow-2xl backdrop-blur-md"
                      >
                        {(["latest", "oldest", "popular"] as SortOption[]).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSortBy(option);
                              setIsSortOpen(false);
                            }}
                            className={`flex w-full items-center px-3 py-2 text-xs rounded-lg transition-colors ${
                              sortBy === option
                                ? "bg-primary/15 font-semibold text-primary"
                                : "text-text-muted hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {sortLabels[option]}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Articles Grid (2 columns on desktop) */}
              {paginatedPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {paginatedPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      index={index}
                      onReadMore={(p) => setActiveModalPost(p)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/6 bg-[#090e14] py-16 px-4 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white">No articles found</h3>
                  <p className="mt-1 max-w-sm text-xs text-text-muted">
                    We couldn't find any articles matching your search or selected category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-[#05080a] transition-all hover:bg-[#5cffe0]"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination Controls */}
              <nav aria-label="Blog pagination" className="mt-10 flex items-center gap-2">
                {[1, 2].map((pageNum) => {
                  const isActive = pageNum === safeCurrentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-[#05080a] shadow-[0_0_16px_rgba(20,255,197,0.3)]"
                          : "border border-white/6 bg-[#090e14] text-text-muted hover:border-primary/40 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage === 1 ? 2 : 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 bg-[#090e14] text-text-muted transition-all duration-200 hover:border-primary/40 hover:text-white"
                  aria-label="Next page"
                >
                  <ArrowRight size={14} />
                </button>
              </nav>
            </div>

            {/* ── Right Column: Sidebar (4 cols) ── */}
            <div className="lg:col-span-4">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearchChange={(q) => {
                  setSearchQuery(q);
                  setCurrentPage(1);
                }}
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                recentPosts={recentPosts}
                onSelectPost={(p) => setActiveModalPost(p)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Reading Modal ── */}
      <BlogReaderModal
        post={activeModalPost}
        onClose={() => setActiveModalPost(null)}
      />
    </div>
  );
}
