import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Globe, Send, Code2, Palette,
  Layers, User, AtSign, ChevronDown, ExternalLink, MessageSquare,
} from "lucide-react";

import { personalInfo } from "../data/personal";

// ── Contact info cards ──────────────────────────────────────────────────────
const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "marefuabebe@gmail.com",
    sub: "I usually reply within 24 hours.",
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 920 266 9801",
    sub: "Mon – Fri, 9:00 AM – 6:00 PM (UTC+3)",
    href: `tel:+251920266980`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Durame, Ethiopia",
    sub: "Central Ethiopia",
    href: undefined,
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/marefu-abebe",
    sub: "Let's connect professionally.",
    href: personalInfo.linkedin,
  },
];

// ── Services offered ────────────────────────────────────────────────────────
const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern & responsive websites and web applications.",
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Clean, user-friendly and beautiful interfaces.",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
  {
    icon: Layers,
    title: "Full-Stack Projects",
    desc: "End-to-end solutions from frontend to backend.",
    color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  },
];

// ── Subject options ─────────────────────────────────────────────────────────
const subjects = [
  "Select a subject",
  "Project Collaboration",
  "Freelance Work",
  "Job Opportunity",
  "General Inquiry",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="overflow-x-hidden bg-bg-dark">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="Contact Hero">
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
                  Get In Touch
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                Contact{" "}
                <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                  Me
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-1.5 sm:mt-4 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted">
                Have a project in mind, a question, or want to discuss a new opportunity? I&apos;d love to hear from you. Leave a message or call directly!
              </p>

              {/* CTA Buttons */}
              <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href="#contact-form"
                  className="ref-btn-primary inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3.5 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={13} className="sm:w-[15px] sm:h-[15px]" />
                </a>
                <a
                  href="tel:+251920266980"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-text-light transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <Phone size={13} className="sm:w-[15px] sm:h-[15px]" />
                  <span>Call Directly</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: User's 3D Workspace Telephone Image */}
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

              {/* Showcase Frame with User's Contact Image */}
              <div className="relative w-full max-w-[140px] sm:max-w-[270px] lg:max-w-[370px]">
                {/* Handwritten Annotation 1 (Top Right): "Always Open • Quick Response" */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pointer-events-none absolute -top-4 right-0 sm:-top-8 sm:right-3 z-20 flex items-center gap-1"
                >
                  <div className="text-right font-signature text-[8.5px] sm:text-sm lg:text-lg leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                    <div>Always Open</div>
                    <div className="text-primary/75 text-[7.5px] sm:text-xs">Quick Response</div>
                  </div>
                  <svg
                    className="w-3 h-3 sm:w-7 sm:h-7 text-primary/70 -rotate-12 transform"
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

                {/* Floating 3D telephone & desk workspace image */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <img
                    src="/images/contact-hero.png"
                    alt="Contact Desk with Telephone, Keyboard and Notes"
                    className="max-h-[130px] sm:max-h-[250px] lg:max-h-[340px] w-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.03]"
                    width={1024}
                    height={950}
                    loading="eager"
                  />
                  {/* Soft bottom-left fade overlay to blend keyboard cut-off seamlessly */}
                  <div
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{
                      background: `
                        linear-gradient(to bottom, transparent 88%, #05080a 100%),
                        linear-gradient(to right, #05080a 0%, transparent 12%)
                      `,
                    }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Handwritten Annotation 2 (Bottom Right): "Let's Connect →" */}
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
                    <div>Let&apos;s Connect →</div>
                    <div className="text-primary/75 text-[8px] sm:text-sm">Start a Project</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Info Cards Row ────────────────────────────────────────────────── */}
      <section className="pb-10" aria-label="Contact information">
        <div className="section-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass glass-hover flex flex-col gap-3 rounded-2xl p-5 h-full"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-text-muted uppercase">
                      {card.label}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-text-light leading-snug">
                      {card.value}
                    </p>
                    <p className="mt-1 text-[11px] text-text-muted leading-snug">
                      {card.sub}
                    </p>
                  </div>
                </motion.div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────────── */}
      <section className="pb-10 scroll-mt-24" id="contact-form" aria-label="Contact form">
        <div className="section-container">
          <div className="grid gap-5 lg:grid-cols-[1fr_340px]">

            {/* Left — Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-7"
            >
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                Send a Message
              </span>
              <h2 className="mt-2 text-2xl font-bold text-text-light">
                Drop Me a <span className="text-primary">Message</span>
              </h2>
              <p className="mt-1 text-[12px] text-text-muted">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-text-light">
                    Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted/50" aria-hidden="true" />
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/8 bg-white/[0.03] py-2.5 pl-9 pr-4 text-[13px] text-text-light placeholder-text-muted/50 outline-none transition focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Email + Subject row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-text-light">
                      Email <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <AtSign size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted/50" aria-hidden="true" />
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] py-2.5 pl-9 pr-4 text-[13px] text-text-light placeholder-text-muted/50 outline-none transition focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-text-light">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full appearance-none rounded-xl border border-white/8 bg-white/[0.03] py-2.5 pl-4 pr-8 text-[13px] text-text-light outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      >
                        {subjects.map((s) => (
                          <option key={s} value={s === subjects[0] ? "" : s} className="bg-bg-card text-text-light">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted/50" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-text-light">
                    Message <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={13} className="absolute left-3 top-3 text-text-muted/50" aria-hidden="true" />
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] py-2.5 pl-9 pr-4 text-[13px] text-text-light placeholder-text-muted/50 outline-none transition focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="ref-btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-bold transition-transform active:scale-95"
                  >
                    <Send size={14} aria-hidden="true" />
                    Send Message →
                  </button>
                  {submitted && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[12px] font-semibold text-primary"
                    >
                      ✓ Message sent!
                    </motion.span>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Right — Let's Work Together */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
            >
              <div>
                <h2 className="text-xl font-bold text-text-light">
                  Let's Work <span className="text-primary">Together</span>
                </h2>
                <p className="mt-2 text-[12px] leading-relaxed text-text-muted">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of something great.
                </p>
              </div>

              <div className="space-y-3">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div key={svc.title} className="flex items-start gap-3">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${svc.color}`}>
                        <Icon size={15} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-text-light">{svc.title}</p>
                        <p className="text-[11px] text-text-muted">{svc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.04] p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MessageSquare size={13} aria-hidden="true" />
                </div>
                <p className="text-[11px] leading-relaxed text-text-muted">
                  Feel free to reach out anytime.
                  <br />
                  <span className="text-text-light font-medium">I'm here to help!</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map Section ───────────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20" aria-label="Location">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass overflow-hidden rounded-2xl"
          >
            <div className="grid lg:grid-cols-[280px_1fr]">
              {/* Location info */}
              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-primary" aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                      My Location
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-text-light">
                    Durame, <span className="text-primary">Ethiopia</span>
                  </h2>
                  <p className="mt-3 text-[12px] leading-relaxed text-text-muted">
                    Based in Durame, I'm available for remote work and on-site opportunities.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Durame,Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-primary/30 px-4 py-2 text-[12px] font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  View on Google Maps
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              {/* Map embed */}
              <div className="h-56 lg:h-72 border-t border-white/5 lg:border-t-0 lg:border-l">
                <iframe
                  title="Location map — Durame, Ethiopia"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=37.8%2C7.1%2C38.0%2C7.3&layer=mapnik&marker=7.19%2C37.91"
                  className="h-full w-full grayscale-[20%] contrast-[1.1] brightness-[0.8]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
