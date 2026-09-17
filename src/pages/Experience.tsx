import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../components/layout/PageWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import Timeline from "../components/sections/Timeline";
import GlassCard from "../components/ui/GlassCard";
import { experienceItems } from "../data/experience";
import CertificationsSection from "../components/sections/CertificationsSection";

export default function Experience() {
  return (
    <PageWrapper>
      <SectionTitle
        title="Experience"
        subtitle="My professional journey, education, and key project milestones."
      />

      <Timeline items={experienceItems} />

      {/* Verified Certifications Showcase */}
      <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <CertificationsSection className="!pb-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <GlassCard className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
            <Trophy size={32} className="text-primary" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-light">Still Learning, Still Growing</h3>
            <p className="mt-2 text-sm text-text-muted">
              Every project is an opportunity to learn something new. I believe in continuous
              improvement and pushing the boundaries of what I can create.
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </PageWrapper>
  );
}
