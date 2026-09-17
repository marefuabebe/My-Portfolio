import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, CheckCircle2, Calendar, ShieldCheck, Tag } from "lucide-react";
import type { Certification } from "../../data/certifications";

interface CertificateModalProps {
  certificate: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={`${certificate.title} Certificate Preview`}
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 flex flex-col lg:flex-row max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#090d12] shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-black/90 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Left Column: Full-View Certificate Image */}
          <div className="relative flex flex-1 items-center justify-center bg-black/40 p-4 sm:p-6 lg:p-8 min-h-[260px] sm:min-h-[380px] overflow-hidden">
            {/* Ambient colorful glow matching certificate */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20 blur-3xl"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20,255,197,0.35), transparent 70%)`,
              }}
            />

            {/* Certificate Frame */}
            <div className="relative z-10 max-h-[75vh] w-full flex items-center justify-center">
              <img
                src={certificate.imageUrl}
                alt={`${certificate.title} Certificate`}
                className="max-h-[60vh] lg:max-h-[72vh] w-auto max-w-full rounded-lg border border-white/10 object-contain shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Right Column: Metadata & Verification Actions */}
          <div className="flex w-full flex-col justify-between border-t border-white/10 bg-[#0c1117] p-5 sm:p-6 lg:w-[380px] lg:shrink-0 lg:border-t-0 lg:border-l overflow-y-auto">
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  <ShieldCheck size={13} />
                  Verified Credential
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-text-muted">
                  {certificate.program}
                </span>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl leading-snug">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-text-light flex items-center gap-1.5">
                  <Award size={15} className="text-primary shrink-0" />
                  {certificate.issuer}
                </p>
                {certificate.partner && (
                  <p className="mt-0.5 text-xs text-text-muted">
                    {certificate.partner}
                  </p>
                )}
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted flex items-center gap-1">
                    <Calendar size={11} className="text-primary" />
                    Issue Date
                  </span>
                  <span className="mt-0.5 block font-semibold text-text-light">
                    {certificate.issueDate}
                  </span>
                </div>
                {certificate.credentialId && (
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                      Credential ID
                    </span>
                    <span className="mt-0.5 block font-mono font-semibold text-text-light">
                      {certificate.credentialId}
                    </span>
                  </div>
                )}
                {certificate.courseCode && (
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                      Course Code
                    </span>
                    <span className="mt-0.5 block font-mono font-semibold text-text-light">
                      {certificate.courseCode}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted flex items-center gap-1">
                    <CheckCircle2 size={11} className="text-primary" />
                    Status
                  </span>
                  <span className="mt-0.5 block font-semibold text-emerald-400">
                    Passed &amp; Verified
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs leading-relaxed text-text-muted">
                  {certificate.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <span className="text-[11px] font-semibold text-text-light flex items-center gap-1.5 mb-2">
                  <Tag size={12} className="text-primary" />
                  Validated Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all hover:shadow-[0_0_30px_rgba(20,255,197,0.4)] cursor-pointer"
              >
                <span>Verify Credential Online</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2 px-4 text-xs font-semibold text-text-muted transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <span>Open Full Resolution Image</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
