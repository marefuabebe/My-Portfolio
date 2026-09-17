import { motion } from "framer-motion";
import { journeyTimeline } from "../../data/personal";

export default function JourneyTimeline() {
  return (
    <section aria-label="My journey">
      <h2 className="mb-10 text-center text-2xl font-bold text-text-light md:text-3xl">
        My Journey
      </h2>

      <div className="relative">
        {/* Horizontal line — desktop */}
        <div
          className="absolute top-5 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block"
          aria-hidden="true"
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {journeyTimeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-bg-dark shadow-[0_0_16px_rgba(92,156,230,0.4)]">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>

              <div className="glass w-full rounded-2xl p-5 text-left md:text-center">
                <span className="text-sm font-semibold text-primary">{item.period}</span>
                <h3 className="mt-2 font-semibold text-text-light">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
