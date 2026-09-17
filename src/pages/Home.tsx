import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HomeProjectCard from "../components/cards/HomeProjectCard";
import WhyWorkWithMe from "../components/sections/WhyWorkWithMe";
import CurrentlyBuilding from "../components/sections/CurrentlyBuilding";
import { personalInfo, socialLinks } from "../data/personal";
import { projects, type Project } from "../data/projects";
import { socialIconMap } from "../components/ui/SocialIcons";
import ProjectPreviewModal from "../components/ui/ProjectPreviewModal";

const featuredProjectIds = ["kambata-travel", "sofra-food", "boos-clothes"];

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean) as typeof projects;

function SectionHeader({
  whitePart,
  accentPart,
  subtitle,
  linkText,
  linkTo,
}: {
  whitePart: string;
  accentPart: string;
  subtitle?: string;
  linkText?: string;
  linkTo?: string;
}) {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-xl font-bold sm:text-[22px]">
          <span className="text-text-light">{whitePart} </span>
          <span className="text-primary">{accentPart}</span>
        </h2>
        {subtitle && <p className="mt-0.5 text-[13px] text-text-muted">{subtitle}</p>}
      </div>
      {linkText && linkTo && (
        <Link
          to={linkTo}
          className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-bright"
        >
          {linkText}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <div className="overflow-x-hidden bg-bg-dark">
      {/* HERO */}
      <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="Hero">
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
                  Software Engineer
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Roles sub-heading: start and end are exactly equal to bio */}
              <div className="mt-1 flex w-full max-w-[490px] items-center justify-between text-[8.5px] min-[360px]:text-[9.2px] min-[390px]:text-[10px] min-[420px]:text-[10.8px] sm:text-sm lg:text-[15px] font-semibold text-text-light/90 tracking-tight">
                <span>Software Engineer</span>
                <span className="text-primary text-[8px] sm:text-xs">•</span>
                <span>Web Developer</span>
                <span className="text-primary text-[8px] sm:text-xs">•</span>
                <span>Problem Solver</span>
              </div>

              {/* Subtitle / Bio: text-justify ensures every line starts and ends equally */}
              <p className="mt-1.5 sm:mt-3 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted text-justify [text-justify:inter-word]">
                {personalInfo.shortBio}
              </p>

              {/* CTA Buttons — matching Projects rounded-full pill button */}
              <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <Link
                  to="/projects"
                  className="ref-btn-primary inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3.5 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight size={13} className="sm:w-[15px] sm:h-[15px]" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-text-light transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Social links row */}
              <div className="mt-2.5 sm:mt-5 flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/10 text-text-muted transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon size={12} className="sm:w-4 sm:h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Marefu's Portrait Showcase Graphic */}
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

              {/* Portrait Showcase Frame */}
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
                    <div className="text-primary/75 text-[8px] sm:text-sm">Modern Web Apps</div>
                  </div>
                  {/* Curved arrow pointing down toward portrait */}
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

                {/* Marefu's Portrait with seamless edge-fade */}
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

                {/* Handwritten Annotation 2 (Bottom Right): "Clean Code → Real Impact" */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="pointer-events-none absolute -bottom-4 right-0 sm:-bottom-8 sm:right-6 z-20 flex items-center gap-1"
                >
                  {/* Curved arrow pointing up-left */}
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
                    <div>Clean Code →</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Real Impact</div>
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



      {/* FEATURED PROJECTS */}

      <section className="pb-10 sm:pb-12" aria-label="Featured projects">

        <div className="section-container">

          <div className="ref-panel rounded-xl p-5 sm:p-7">

            <SectionHeader

              whitePart="Featured"

              accentPart="Projects"

              subtitle="Some of my recent work."

              linkText="View All Projects"

              linkTo="/projects"

            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {featuredProjects.map((project, index) => (
                <HomeProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onPreview={(p) => setPreviewProject(p)}
                />
              ))}

            </div>

          </div>

        </div>

      </section>



      <WhyWorkWithMe />

      <CurrentlyBuilding />

      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}

