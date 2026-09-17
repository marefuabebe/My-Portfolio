import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, projectCategories, type Project, type ProjectCategory } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import ProjectPreviewModal from "../components/ui/ProjectPreviewModal";

const devProcess = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Plan & Research",
    description: "Define the problem, research users, and outline the full feature scope before writing a single line of code.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design & Wireframe",
    description: "Sketch UI flows, create wireframes, and finalize a design system with colors, typography, and components.",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build & Iterate",
    description: "Develop frontend and backend incrementally, writing clean code, unit tests, and continuous refactoring.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deploy & Ship",
    description: "CI/CD pipeline, performance optimization, SEO tuning, and launch — then gather feedback and iterate.",
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-x-hidden bg-bg-dark">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20" aria-label="Projects Hero">
        {/* Background ambient lighting */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 45%, rgba(20,255,197,0.07), transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="section-container">
          <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-8 lg:gap-8">
            {/* Left Column: Headlines & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="col-span-7 sm:col-span-7 lg:col-span-6 xl:col-span-5"
            >
              {/* Badge with line */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 text-primary">
                <span className="h-0.5 w-4 sm:w-6 rounded-full bg-primary" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  My Projects
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                Turning Ideas Into{" "}
                <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                  Real Solutions
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-1.5 sm:mt-4 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted line-clamp-3 sm:line-clamp-none">
                A collection of projects where I&apos;ve designed, developed, and brought
                ideas to life. Each project represents a unique challenge, a learning
                journey, and a step forward in my growth.
              </p>

              {/* View All Projects Button */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("projects-tabs")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="ref-btn-primary mt-3 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={13} className="sm:w-[15px] sm:h-[15px]" />
              </button>
            </motion.div>

            {/* Right Column: 3D Floating Project Screens Showcase Image */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-5 sm:col-span-5 lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end"
            >
              {/* Subtle background ambient glow & concentric orbit rings */}
              <div
                className="pointer-events-none absolute -inset-2 sm:-inset-6 -z-10 flex items-center justify-center"
                aria-hidden="true"
              >
                {/* Soft ambient cyan glow */}
                <div className="h-32 w-32 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-3xl" />
                {/* Thin orbit rings */}
                <div className="absolute h-[160px] w-[160px] sm:h-[440px] sm:w-[440px] rounded-full border border-primary/10" />
                <div className="absolute h-[220px] w-[220px] sm:h-[580px] sm:w-[580px] rounded-full border border-primary/[0.04]" />
              </div>

              {/* Floating Screens Showcase Frame */}
              <div className="relative w-full max-w-[170px] sm:max-w-[380px] lg:max-w-[660px]">
                {/* Handwritten Annotation 1 (Top Right): "Real Projects / Real Impact" */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pointer-events-none absolute -top-5 right-0 sm:-top-10 sm:right-6 z-20 flex items-center gap-1"
                >
                  <div className="text-right font-signature text-[9px] sm:text-base lg:text-xl leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                    <div>Real Projects</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Real Impact</div>
                  </div>
                  {/* Curved arrow pointing down toward cards */}
                  <svg
                    className="w-3.5 h-3.5 sm:w-8 sm:h-8 text-primary/70 -rotate-12 transform"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 8 C 24 10, 30 18, 28 30" />
                    <path d="M 22 24 L 28 30 L 34 24" />
                  </svg>
                </motion.div>

                {/* Clean transparent 3D floating Kambata screens */}
                <img
                  src="/images/projects/kambata-showcase-screens.png"
                  alt="Kambata Explorer - Multi-Device Floating Screens Showcase"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.02]"
                  width={1024}
                  height={627}
                  loading="eager"
                />

                {/* Handwritten Annotation 2 (Bottom Right): "Ideas → / Products" */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="pointer-events-none absolute -bottom-4 right-0 sm:-bottom-8 sm:right-6 z-20 flex items-center gap-1"
                >
                  {/* Curved arrow pointing up-left toward cards */}
                  <svg
                    className="w-3.5 h-3.5 sm:w-8 sm:h-8 text-primary/70 rotate-12 transform"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 32 30 C 26 22, 18 16, 10 12" />
                    <path d="M 18 10 L 10 12 L 12 20" />
                  </svg>
                  <div className="text-left font-signature text-[9px] sm:text-base lg:text-xl leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                    <div>Ideas →</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Products</div>
                  </div>
                </motion.div>

                {/* Floating Live Deployment Pill for Kambata Travel */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="mt-3 flex items-center justify-center"
                >
                  <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary/30 bg-[#080d14]/90 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(20,255,197,0.18)]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-semibold text-text-light">
                      Live App:
                    </span>
                    <a
                      href="https://kambata-travel.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] font-bold text-primary hover:underline"
                    >
                      kambata-travel.vercel.app
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        const kambata = projects.find((p) => p.id === "kambata-travel");
                        if (kambata) setPreviewProject(kambata);
                      }}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary hover:bg-primary hover:text-bg-dark transition-all cursor-pointer"
                    >
                      <span>Preview</span>
                      <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Row — Spans full width underneath the 2-col hero */}
            <div className="col-span-12 mt-4 sm:mt-10 flex items-center justify-between sm:justify-start gap-4 sm:gap-10 border-t border-white/8 pt-4 sm:pt-6">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">8+</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Projects Completed
                </div>
              </div>
              <div className="h-7 sm:h-9 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">5+</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Technologies
                </div>
              </div>
              <div className="h-7 sm:h-9 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">100%</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Passion
                </div>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <motion.div
            id="projects-tabs"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-2 scroll-mt-24"
            role="tablist"
            aria-label="Project categories"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-[12px] font-semibold transition-all ${activeCategory === cat.id
                    ? "ref-btn-primary text-bg-dark shadow-[0_0_16px_rgba(20,255,197,0.3)]"
                    : "border border-white/10 text-text-muted hover:border-primary/30 hover:text-text-light"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid (3-col) ── */}
      <section className="pb-10" aria-label="Projects list">
        <div className="section-container">
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onPreview={(p) => setPreviewProject(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="py-16 text-center text-text-muted">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ── My Dev Process (Unique Section) ── */}
      <section className="py-12 sm:py-16" aria-label="Development Process">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
              How I Work
            </span>
            <h2 className="mt-2 text-2xl font-bold text-text-light sm:text-3xl">
              My Dev <span className="text-primary">Process</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[480px] text-[13px] text-text-muted">
              From blank page to shipped product — here's how I turn ideas into reality.
            </p>
          </motion.div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line on desktop */}
            <div
              className="pointer-events-none absolute top-[38px] left-[12.5%] hidden h-px w-[75%] lg:block"
              aria-hidden="true"
              style={{
                background: "linear-gradient(to right, transparent, rgba(20,255,197,0.3) 20%, rgba(20,255,197,0.3) 80%, transparent)",
              }}
            />

            {devProcess.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass glass-hover relative flex flex-col items-center rounded-2xl p-5 text-center"
                >
                  {/* Step number badge */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bg-dark px-2.5 py-0.5 text-[10px] font-black tracking-widest text-primary border border-primary/30">
                    {step.step}
                  </span>

                  {/* Icon */}
                  <div className={`mt-3 flex h-12 w-12 items-center justify-center rounded-xl border ${step.bg}`}>
                    <Icon size={22} className={step.color} aria-hidden="true" />
                  </div>

                  <h3 className="mt-3 text-[14px] font-bold text-text-light">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-16 sm:pb-20" aria-label="Call to action">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass relative overflow-hidden rounded-2xl p-8 text-center sm:p-10"
          >
            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(20,255,197,0.15), transparent)",
              }}
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold text-text-light sm:text-3xl">
              Have a <span className="text-primary">project idea?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[440px] text-[13px] text-text-muted">
              I'm always open to collaborating on interesting projects or freelance work. Let's turn your idea into reality.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="ref-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-bold"
              >
                Let's Talk
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <a
                href="https://github.com/marefuabebe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-[13px] font-semibold text-text-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Project Preview Modal */}
      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
