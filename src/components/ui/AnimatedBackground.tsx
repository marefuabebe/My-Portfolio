import { motion } from "framer-motion";

const orbs = [
  { size: 320, top: "8%", left: "70%", delay: 0, duration: 8 },
  { size: 240, top: "55%", left: "15%", delay: 1.5, duration: 10 },
  { size: 180, top: "30%", left: "45%", delay: 0.8, duration: 7 },
  { size: 140, top: "75%", left: "80%", delay: 2, duration: 9 },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 95}%`,
  top: `${(i * 23 + 10) % 90}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.5,
  duration: 4 + (i % 4),
}));

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[radial-gradient(circle,rgba(6,216,137,0.12)_0%,transparent_70%)]"
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left }}
          animate={{ y: [0, -24, 0], x: [0, 12, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#121212_0%,#1a1a1a_50%,#121212_100%)] opacity-90" />
    </div>
  );
}
