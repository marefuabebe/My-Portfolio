import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Eye, Calendar, Award, CheckCircle2 } from "lucide-react";
import { certifications, type Certification } from "../../data/certifications";
import CertificateModal from "../ui/CertificateModal";

interface CertificationsSectionProps {
  className?: string;
}

export default function CertificationsSection({ className = "" }: CertificationsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className={`pb-14 sm:pb-20 ${className}`} aria-label="Certifications and Credentials">
      <div className="section-container">
        <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck size={16} className="text-primary" />
                <span className="text-[11px] font-bold tracking-widest uppercase">
                  Verified Credentials
                </span>
              </div>
              <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                Certifications &amp; <span className="text-primary">Credentials</span>
              </h2>
              <p className="mt-1 text-[13px] text-text-muted max-w-2xl">
                Industry-recognized certifications validating core computer science fundamentals and modern Generative AI engineering.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 size={13} />
                2 Verified Badges
              </span>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
              >
                {/* Image Container with Preview Hover */}
                <div
                  className="relative h-48 sm:h-56 w-full cursor-pointer overflow-hidden border-b border-white/10 bg-[#070b0e] p-2 sm:p-3 flex items-center justify-center"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.title} Certificate`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedCert(cert);
                    }
                  }}
                >
                  {/* Ambient backdrop glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20,255,197,0.3), transparent 70%)`,
                    }}
                  />

                  {/* Certificate Image */}
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="h-full w-auto max-w-full rounded border border-white/10 object-contain shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Enlarge Hint Badge */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                      <Eye size={13} className="text-primary" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div className="space-y-2.5">
                    {/* Issuer & Date Row */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 font-bold text-primary">
                        <Award size={14} className="shrink-0" />
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                        <Calendar size={12} />
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-text-light transition-colors group-hover:text-primary">
                      {cert.title}
                    </h3>

                    {/* Partner/Program line */}
                    {cert.partner && (
                      <p className="text-xs font-medium text-text-muted">
                        {cert.partner}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-text-muted line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-5 flex items-center gap-2.5 border-t border-white/10 pt-3.5">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 py-2 px-3 text-xs font-semibold text-text-light transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <Eye size={13} />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 py-2 px-3 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-black shadow-[0_0_15px_rgba(20,255,197,0.15)]"
                    >
                      <span>Verify Online</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
