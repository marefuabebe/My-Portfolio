import { motion } from "framer-motion";
import { processSteps } from "../../data/process";

export default function MyProcess() {
  return (
    <section className="px-3 pb-12 sm:px-4 sm:pb-16 lg:px-6 lg:pb-20" aria-label="My process">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ref-panel ref-glow-sm rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl">
              <span className="text-text-light">My </span>
              <span className="text-primary">Process</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-text-muted">
              A structured approach I follow to deliver reliable, user-focused software from idea to launch.
            </p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative mb-8">
              <div
                className="absolute top-5 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                aria-hidden="true"
              />
              <div className="grid grid-cols-7 gap-2">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/55 bg-bg-dark text-xs font-bold text-primary ref-glow-sm">
                      {step.number}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Mobile / tablet vertical timeline */}
          <div className="lg:hidden">
            <div className="relative space-y-0">
              <div
                className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
                aria-hidden="true"
              />
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/55 bg-bg-dark text-xs font-bold text-primary ref-glow-sm">
                    {step.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <ProcessCard step={step} index={index} compact />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  compact = false,
}: {
  step: (typeof processSteps)[0];
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`group overflow-hidden rounded-2xl border border-primary/35 bg-bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(6,216,137,0.14)] ${
        compact ? "" : "flex flex-col"
      }`}
    >
      <div className={`overflow-hidden ${compact ? "h-36" : "h-40"}`}>
        <img
          src={step.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        {!compact && (
          <span className="text-xs font-bold text-primary">{step.number}</span>
        )}
        <h3 className={`font-semibold text-text-light ${compact ? "text-sm" : "mt-1 text-base"}`}>
          {step.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{step.description}</p>
      </div>
    </motion.article>
  );
}
