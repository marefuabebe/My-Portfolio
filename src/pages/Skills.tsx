import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  Smartphone,
  Cpu,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import { skillCategories } from "../data/skills";
import { TechIcon } from "../components/ui/TechIcons";

const engineeringPrinciples = [
  {
    icon: Zap,
    tag: "< 1s FCP",
    title: "Performance-Driven UI",
    description:
      "Engineered for sub-second load times using code splitting, modern bundlers (Vite), asset caching, and fluid 60fps micro-animations.",
  },
  {
    icon: Layers,
    tag: "Modular & DRY",
    title: "Clean Component Architecture",
    description:
      "Strict typing, reusable UI primitives, scalable file hierarchies, and predictable state patterns that make codebases enjoyable to scale.",
  },
  {
    icon: Smartphone,
    tag: "Fluid & WCAG",
    title: "Responsive & Accessible",
    description:
      "Crafted mobile-first for flawless experiences from small smartphones to wide 4K displays, adhering to accessible contrast and keyboard navigation.",
  },
  {
    icon: Cpu,
    tag: "Modern Tooling",
    title: "Full-Cycle Dev Workflow",
    description:
      "Translating Figma design systems into pixel-perfect code, leveraging Git branching, automated linting, and continuous delivery pipelines.",
  },
];

export default function Skills() {
  const frontendCategory = skillCategories.find((c) => c.title === "Frontend Development");
  const backendCategory = skillCategories.find((c) => c.title === "Backend Development");
  const toolsCategory = skillCategories.find((c) => c.title === "Tools & Others");

  return (
    <PageWrapper className="relative overflow-hidden">
      {/* Background ambient glow matching Home page */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 30%, rgba(20,255,197,0.06), transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Header: My Skills with green accent */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-left sm:mb-12"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
            Skills
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-text-muted">
          Technologies and tools I use to build modern web applications and create
          amazing digital experiences.
        </p>
      </motion.div>

      {/* Main Grid: Frontend & Backend on Left, Always Learning on Right, Tools & Others at Bottom */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Frontend & Backend (8 Cols) */}
        <div className="flex flex-col gap-6 lg:col-span-8 lg:gap-8">
          {/* Frontend Development Card */}
          {frontendCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-[#071017]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_35px_rgba(20,255,197,0.08)]"
            >
              <h2 className="mb-6 text-lg sm:text-xl font-bold tracking-wide text-white">
                {frontendCategory.title}
              </h2>
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4 md:grid-cols-5 sm:gap-6">
                {frontendCategory.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="group/item flex flex-col items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="relative flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover/item:drop-shadow-[0_0_16px_rgba(20,255,197,0.35)]">
                      <TechIcon name={skill.name} className="w-11 h-11 sm:w-12 sm:h-12" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-text-muted transition-colors duration-200 group-hover/item:text-white text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Backend Development Card */}
          {backendCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl border border-white/8 bg-[#071017]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_35px_rgba(20,255,197,0.08)]"
            >
              <h2 className="mb-6 text-lg sm:text-xl font-bold tracking-wide text-white">
                {backendCategory.title}
              </h2>
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4 md:grid-cols-5 sm:gap-6">
                {backendCategory.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="group/item flex flex-col items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="relative flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover/item:drop-shadow-[0_0_16px_rgba(20,255,197,0.35)]">
                      <TechIcon name={skill.name} className="w-11 h-11 sm:w-12 sm:h-12" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-text-muted transition-colors duration-200 group-hover/item:text-white text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column: Always Learning Card with Rocket (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex lg:col-span-4"
        >
          <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-[#071017]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_35px_rgba(20,255,197,0.1)]">
            {/* Soft background ambient radial gradient */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />

            <div>
              {/* Glowing Green/Cyan Lightbulb Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_25px_rgba(20,255,197,0.25)]">
                  <svg
                    className="h-7 w-7 text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.6)]"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22h8" />
                    <path d="M13 25h6" />
                    <path d="M16 6a7 7 0 0 0-5 11.9c.7.7 1 1.7 1 2.7v.4h8v-.4c0-1 .3-2 1-2.7A7 7 0 0 0 16 6z" />
                    <path d="M16 2v2" />
                    <path d="M7 7l1.5 1.5" />
                    <path d="M25 7l-1.5 1.5" />
                    <path d="M3 16h2" />
                    <path d="M27 16h2" />
                  </svg>
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Always
                <br />
                Learning
              </h2>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-text-muted">
                I&apos;m constantly exploring new technologies and improving my skills to
                build better solutions.
              </p>
            </div>

            {/* Developer Learning Setup Image */}
            <div className="group relative mt-6 overflow-hidden rounded-xl border border-white/10 shadow-lg transition-all duration-300 hover:border-primary/30">
              <img
                src="/images/skills/always-learning.jpg"
                alt="Always Learning - Developer workspace with code editor and coffee"
                className="h-44 sm:h-52 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071017]/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Full-Width Card: Tools & Others (12 Cols) */}
        {toolsCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-2xl border border-white/8 bg-[#071017]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_35px_rgba(20,255,197,0.08)] lg:col-span-12"
          >
            <h2 className="mb-6 text-lg sm:text-xl font-bold tracking-wide text-white">
              {toolsCategory.title}
            </h2>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-5 sm:gap-6">
              {toolsCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="group/item flex flex-col items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="relative flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover/item:drop-shadow-[0_0_16px_rgba(20,255,197,0.35)]">
                    <TechIcon name={skill.name} className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-text-muted transition-colors duration-200 group-hover/item:text-white text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── UNIQUE SECTION: Core Engineering Principles ── */}
      <section className="mt-20 sm:mt-24 pb-10 sm:pb-14" aria-label="Engineering Principles">
        <div className="flex items-center gap-2.5 text-primary">
          <span className="h-0.5 w-6 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-widest uppercase">
            How I Build
          </span>
        </div>

        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Engineering Principles &amp;{" "}
              <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(20,255,197,0.35)]">
                Standards
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-text-muted leading-relaxed">
              The foundational practices that ensure every application I build is fast, maintainable, and user-centric.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary">
            <Sparkles size={14} />
            <span>Built for Production</span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/8 bg-[#071017]/85 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_35px_rgba(20,255,197,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_16px_rgba(20,255,197,0.2)] transition-colors group-hover:bg-primary group-hover:text-[#05080a]">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 h-0.5 w-8 rounded-full bg-white/10 transition-all duration-300 group-hover:w-full group-hover:bg-primary/50" />
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}


