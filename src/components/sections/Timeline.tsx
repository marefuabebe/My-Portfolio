import { motion } from "framer-motion";
import type { ExperienceItem } from "../../data/experience";

interface TimelineProps {
  items: ExperienceItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col gap-4 md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="hidden flex-1 md:block" />

            <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-bg-dark md:left-1/2">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(92,156,230,0.6)]" />
            </div>

            <div className="ml-12 flex-1 md:ml-0">
              <div className="glass glass-hover rounded-2xl p-6">
                <span className="text-sm font-medium text-primary">{item.period}</span>
                <h3 className="mt-1 text-lg font-semibold text-text-light">{item.title}</h3>
                <p className="mt-1 text-sm text-primary/80">{item.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                <span className="mt-3 inline-block rounded-full bg-white/5 px-3 py-1 text-xs capitalize text-text-muted">
                  {item.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
