import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  MapPin,
  GraduationCap,
  Mail,
  Code2,
  Palette,
  Cpu,
  HeartPulse,
  Compass,
  BookOpen,
  Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "../components/ui/Button";
import {
  personalInfo,
  aboutDetails,
  myStory,
  interests,
  aboutSkills,
  educationExperience,
} from "../data/personal";
import CertificationsSection from "../components/sections/CertificationsSection";

/* ─── Icon maps ─── */
const detailIconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  "graduation-cap": GraduationCap,
  mail: Mail,
};

const interestIconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  palette: Palette,
  cpu: Cpu,
  "heart-pulse": HeartPulse,
  compass: Compass,
  "book-open": BookOpen,
};

const eduIconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "code-2": Code2,
};

/* ========================================================================== */
export default function About() {
  return (
    <div className="overflow-x-hidden bg-bg-dark">
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="About Hero">
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
            {/* Left — text */}
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
                  About Me
                </span>
              </div>

              <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                  {personalInfo.name}
                </span>
              </h1>

              <p className="mt-1.5 sm:mt-4 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted line-clamp-3 sm:line-clamp-none">
                {personalInfo.bio}
              </p>

              <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ref-btn-primary inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3.5 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
                >
                  <Download size={13} className="sm:w-[15px] sm:h-[15px]" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
                <Button to="/contact" variant="outline" className="!rounded-full !px-3.5 !py-1.5 !text-xs sm:!px-6 sm:!py-3 sm:!text-sm">
                  <span>Contact Me</span>
                  <ArrowRight size={13} className="sm:w-[15px] sm:h-[15px]" aria-hidden="true" />
                </Button>
              </div>
            </motion.div>

            {/* Right — 3D Showcase Frame with Portrait */}
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
                <div className="h-32 w-32 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute h-[160px] w-[160px] sm:h-[440px] sm:w-[440px] rounded-full border border-primary/10" />
                <div className="absolute h-[220px] w-[220px] sm:h-[580px] sm:w-[580px] rounded-full border border-primary/[0.04]" />
              </div>

              <div className="relative w-full max-w-[170px] sm:max-w-[380px] lg:max-w-[500px]">
                {/* Handwritten Annotation 1 (Top Right): "Build • Create • Improve" */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pointer-events-none absolute -top-5 right-0 sm:-top-10 sm:right-6 z-20 flex items-center gap-1"
                >
                  <div className="text-right font-signature text-[9px] sm:text-base lg:text-xl leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                    <div>Build &amp; Create</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Never Stop Learning</div>
                  </div>
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

                {/* Portrait image with seamless edge fade to eliminate harsh bottom and side cuts */}
                <div className="relative">
                  <img
                    src={personalInfo.portraitUrl}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.02]"
                    width={440}
                    height={520}
                    loading="eager"
                  />
                  {/* Seamless edge-fade overlay — subtly blends outer black background into page #05080a while keeping laptop crisp */}
                  <div
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{
                      background: `
                        linear-gradient(to bottom, transparent 82%, #05080a 98%),
                        linear-gradient(to right, #05080a 0%, transparent 6%, transparent 94%, #05080a 100%),
                        linear-gradient(to top, transparent 92%, #05080a 100%)
                      `,
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Handwritten Annotation 2 (Bottom Right): "Problem Solver" */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="pointer-events-none absolute -bottom-4 right-0 sm:-bottom-8 sm:right-6 z-20 flex items-center gap-1"
                >
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
                    <div>Problem Solver →</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Passionate Dev</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Row — Spans full width underneath the 2-col hero matching Project hero */}
            <div className="col-span-12 mt-4 sm:mt-10 flex items-center justify-between sm:justify-start gap-3 sm:gap-10 border-t border-white/8 pt-4 sm:pt-6">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">5+</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Projects Completed
                </div>
              </div>
              <div className="h-7 sm:h-9 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">3+</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Years of Learning
                </div>
              </div>
              <div className="h-7 sm:h-9 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary">2+</div>
                <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">
                  Happy Clients
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
        </div>
      </section>

      {/* ───────── MY STORY + INTERESTS ───────── */}
      <section className="pb-10 sm:pb-14" aria-label="My Story">
        <div className="section-container">
          <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

              {/* Left — story text + info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between gap-6"
              >
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                    My Story
                  </span>
                  <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                    A Journey of{" "}
                    <span className="text-primary">Growth</span>
                  </h2>
                  <div className="mt-4 space-y-3">
                    {myStory.paragraphs.map((p, i) => (
                      <p key={i} className="text-[13px] leading-relaxed text-text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Location / University / Email */}
                <div className="space-y-3">
                  {aboutDetails.map((detail) => {
                    const Icon = detailIconMap[detail.icon];
                    return (
                      <div key={detail.label} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                          <Icon size={15} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold tracking-widest text-text-muted uppercase">
                            {detail.label}
                          </p>
                          <p className="text-[13px] text-text-light">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right — workspace image + quote + interests */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5"
              >
                {/* Workspace image + quote side-by-side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Workspace image */}
                  <div className="group overflow-hidden rounded-xl border border-white/10 shadow-lg">
                    <img
                      src="/images/about/workspace-setup.jpg"
                      alt="Developer workspace with laptop, code, mouse, and phone"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: "4/3" }}
                      loading="lazy"
                    />
                  </div>
                  {/* Quote block */}
                  <div className="glass flex flex-col justify-center rounded-xl p-4">
                    <Quote size={22} className="mb-2 text-primary/60" aria-hidden="true" />
                    <p className="text-[12px] leading-relaxed text-text-muted italic">
                      {myStory.quote}
                    </p>
                    <p className="mt-2 text-[11px] font-bold text-primary">
                      {myStory.quoteAuthor}
                    </p>
                  </div>
                </div>

                {/* My Interests */}
                <div>
                  <h3 className="mb-3 text-base font-bold text-text-light">
                    My Interests
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {interests.map((interest, i) => {
                      const Icon = interestIconMap[interest.icon];
                      return (
                        <motion.div
                          key={interest.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="glass glass-hover flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                        >
                          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ${interest.color}`}>
                            <Icon size={14} aria-hidden="true" />
                          </div>
                          <span className="text-[12px] font-medium text-text-light">
                            {interest.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SKILLS & TOOLS ───────── */}
      <section className="pb-10 sm:pb-14" aria-label="Skills and Tools">
        <div className="section-container">
          <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                My Skills
              </span>
              <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                Skills &amp; <span className="text-primary">Tools</span>
              </h2>
              <p className="mt-1 text-[13px] text-text-muted">
                Technologies and tools I use to build modern web applications.
              </p>
            </motion.div>

            <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-8">
              {aboutSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -5, scale: 1.06 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-primary/15 bg-white/[0.04] p-3 sm:h-[68px] sm:w-[68px]">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-text-muted">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── EDUCATION & EXPERIENCE ───────── */}
      <section className="pb-14 sm:pb-20" aria-label="Education and Experience">
        <div className="section-container">
          <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
            {/* Header row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-end justify-between"
            >
              <div>
                <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                  My Journey
                </span>
                <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                  Education &amp;{" "}
                  <span className="text-primary">Experience</span>
                </h2>
              </div>
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-primary hover:text-primary-bright"
              >
                Download Resume
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>

            {/* Two-column timeline */}
            <div className="relative mt-8">
              {/* Center dot connector */}
              <div
                className="absolute top-[18px] hidden h-px w-full bg-primary/20 md:block"
                aria-hidden="true"
              >
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(20,255,197,0.6)]" />
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                {educationExperience.map((item, i) => {
                  const Icon = eduIconMap[item.icon];
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-4"
                    >
                      {/* Icon circle */}
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-bg-dark shadow-[0_0_14px_rgba(20,255,197,0.3)]">
                        <Icon size={15} className="text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        {item.period && (
                          <span className="text-[11px] font-bold text-primary">
                            {item.period}
                          </span>
                        )}
                        <h3 className="mt-0.5 text-[15px] font-bold text-text-light">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-medium text-text-muted">
                          {item.subtitle}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CERTIFICATIONS & CREDENTIALS ───────── */}
      <CertificationsSection />
    </div>
  );
}


