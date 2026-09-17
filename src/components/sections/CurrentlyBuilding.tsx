import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Globe,
  UtensilsCrossed,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { currentlyBuilding } from "../../data/home";

const iconMap = {
  globe: Globe,
  utensils: UtensilsCrossed,
  briefcase: Briefcase,
  "shopping-bag": ShoppingBag,
};

export default function CurrentlyBuilding() {
  return (
    <section className="pb-14 sm:pb-16" aria-label="Currently building">
      <div className="section-container">
        <div className="ref-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                <span className="text-text-light">Currently </span>
                <span className="text-primary">Building</span>
              </h2>
              <p className="mt-1 text-sm text-text-muted">Projects I&apos;m actively working on.</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-bright"
            >
              View All Projects
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentlyBuilding.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-primary/15 bg-bg-card p-3.5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 text-primary">
                    <Icon size={15} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-[13px] font-semibold text-text-light truncate">{item.title}</h3>
                      {"link" in item && item.link && (
                        <a
                          href={item.link as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-[#061e14] px-1.5 py-0.2 text-[9px] font-bold text-emerald-400 hover:border-emerald-400 transition-colors shrink-0"
                          title="View live deployment"
                        >
                          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-text-muted line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
