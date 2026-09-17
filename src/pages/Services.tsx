import { motion } from "framer-motion";
import PageWrapper from "../components/layout/PageWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/cards/ServiceCard";
import Button from "../components/ui/Button";
import { services } from "../data/services";

export default function Services() {
  return (
    <PageWrapper>
      <SectionTitle
        title="Services"
        subtitle="Professional services I offer to help bring your digital vision to life."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mt-16 rounded-3xl p-8 text-center md:p-12"
      >
        <h3 className="text-2xl font-bold text-text-light">
          Have a project in mind? Let&apos;s work together...
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-text-muted">
          Whether you need a new website, a redesign, or ongoing support, I&apos;m here to help
          you achieve your goals.
        </p>
        <Button to="/contact" className="mt-8">
          Get In Touch
        </Button>
      </motion.div>
    </PageWrapper>
  );
}
