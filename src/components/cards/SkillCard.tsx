import { motion } from "framer-motion";
import type { Skill } from "../../data/skills";

const skillIconColors: Record<string, string> = {
  html5: "text-orange-500",
  css3: "text-blue-500",
  javascript: "text-yellow-400",
  typescript: "text-blue-400",
  react: "text-cyan-400",
  nextjs: "text-white",
  tailwind: "text-teal-400",
  bootstrap: "text-purple-500",
  vite: "text-purple-400",
  nodejs: "text-green-500",
  express: "text-gray-300",
  mongodb: "text-green-400",
  php: "text-indigo-400",
  mysql: "text-blue-300",
  git: "text-orange-400",
  github: "text-white",
  figma: "text-pink-400",
  postman: "text-orange-500",
};

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  const colorClass = skillIconColors[icon] || "text-primary";

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-lg font-bold ${colorClass}`}
      aria-hidden="true"
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  delay?: number;
}

export default function SkillCard({ title, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass glass-hover rounded-2xl p-6"
    >
      <h3 className="mb-6 text-lg font-semibold text-text-light">{title}</h3>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2 text-center">
            <SkillIcon name={skill.name} icon={skill.icon} />
            <span className="text-xs text-text-muted">{skill.name}</span>
            {skill.level !== undefined && (
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
