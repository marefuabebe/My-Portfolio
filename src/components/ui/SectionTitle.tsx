import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-2xl ${alignClass} ${className}`}
    >
      <h2 className="text-3xl font-bold text-text-light md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-text-muted md:text-lg">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
    </motion.div>
  );
}
