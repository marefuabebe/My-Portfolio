import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Lightbulb, TrendingUp } from "lucide-react";
import { whyWorkWithMe } from "../../data/home";

const iconMap = {
  layout: Layout,
  lightbulb: Lightbulb,
  trending: TrendingUp,
};

export default function WhyWorkWithMe() {
  return (
    <section className="pb-10 sm:pb-12" aria-label="Why work with me">
      <div className="section-container">
        <div className="ref-panel rounded-xl p-5 sm:p-7">
          <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-bold sm:text-[22px]">
                <span className="text-text-light">Why Work </span>
                <span className="text-primary">With Me</span>
              </h2>
              <p className="mt-0.5 text-[13px] text-text-muted">
                What makes me a reliable partner for your next project.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-bright"
            >
              Learn More About Me
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {whyWorkWithMe.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl border border-primary/15 bg-bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-text-light">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-text-muted">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
