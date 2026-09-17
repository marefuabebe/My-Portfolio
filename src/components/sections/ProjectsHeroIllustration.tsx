import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, content: "const project = {", color: "text-text-light" },
  { indent: 1, content: "name:", color: "text-purple-400", value: '"Kambata Travel"', valueColor: "text-yellow-300" },
  { indent: 1, content: "stack:", color: "text-purple-400", value: '["React", "Node"]', valueColor: "text-green-400" },
  { indent: 1, content: "status:", color: "text-purple-400", value: '"shipped 🚀"', valueColor: "text-orange-400" },
  { indent: 0, content: "}", color: "text-text-light" },
  { indent: 0, content: "", color: "" },
  { indent: 0, content: "project.deploy()", color: "text-primary" },
];

export default function ProjectsHeroIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px]">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 55% 45%, rgba(20,255,197,0.06), transparent 70%)",
        }}
      />

      {/* Laptop frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-[260px] sm:w-[300px]"
        style={{ filter: "drop-shadow(0 8px 32px rgba(20,255,197,0.12))" }}
      >
        {/* Screen */}
        <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-[#0d1117]">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 bg-[#161b22] px-3 py-2 border-b border-white/5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-[9px] text-text-muted/50 font-mono">project.ts</span>
          </div>

          {/* Code area */}
          <div className="px-4 py-4 font-mono text-[10px] leading-[1.8] space-y-0.5">
            {/* Line numbers + code */}
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="w-4 shrink-0 text-right text-white/15 select-none">{i + 1}</span>
                <span className={`${line.color}`} style={{ paddingLeft: `${line.indent * 12}px` }}>
                  {line.content}
                  {line.value && (
                    <span className={`ml-1 ${line.valueColor}`}>{line.value}</span>
                  )}
                </span>
              </motion.div>
            ))}

            {/* Blinking cursor */}
            <motion.div
              className="flex items-center gap-3"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <span className="w-4 shrink-0 text-right text-white/15 select-none">{codeLines.length + 1}</span>
              <span className="inline-block h-[12px] w-[6px] bg-primary rounded-sm" />
            </motion.div>
          </div>

          {/* Bottom status bar */}
          <div className="flex items-center justify-between bg-primary/10 px-3 py-1 border-t border-primary/20">
            <span className="text-[9px] font-mono text-primary/70">● TypeScript</span>
            <motion.span
              className="text-[9px] font-mono text-primary/70"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              compiled ✓
            </motion.span>
          </div>
        </div>

        {/* Laptop base */}
        <div className="mx-auto mt-0.5 h-2 w-[90%] rounded-b-lg bg-[#161b22] border border-primary/10 border-t-0" />
        <div className="mx-auto h-1.5 w-[110%] rounded-b-xl bg-[#0d1117] border border-white/5" />
      </motion.div>

      {/* Code mug — right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute right-2 bottom-4 sm:right-6"
      >
        {/* Steam */}
        {[0, 1, 2].map((j) => (
          <motion.div
            key={j}
            className="absolute -top-5 w-0.5 rounded-full bg-primary/30"
            style={{ left: `${6 + j * 8}px`, height: "12px" }}
            animate={{ y: [-2, -8, -2], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 + j * 0.3, delay: j * 0.2 }}
          />
        ))}

        {/* Mug body */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-b-xl rounded-t-lg border border-primary/30 bg-[#0d1117] shadow-[0_0_16px_rgba(20,255,197,0.15)]">
          <span className="font-mono text-[11px] font-black text-primary">&lt;/&gt;</span>
        </div>
        {/* Handle */}
        <div className="absolute top-2 -right-3 h-8 w-3 rounded-r-full border border-primary/20 border-l-0" />
        {/* Mug base */}
        <div className="mx-auto h-1 w-[110%] rounded-full bg-primary/10" />
      </motion.div>

      {/* Plant — far right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute right-0 top-4 sm:-right-2"
        aria-hidden="true"
      >
        {/* Stem */}
        <div className="relative mx-auto w-1 h-10 bg-green-800/60 rounded-full">
          {/* Leaves */}
          <motion.div
            className="absolute -left-5 top-1 h-5 w-7 rounded-full bg-green-700/60 origin-right"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ transform: "rotate(-20deg)" }}
          />
          <motion.div
            className="absolute -right-5 top-4 h-4 w-6 rounded-full bg-green-600/60 origin-left"
            animate={{ rotate: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            style={{ transform: "rotate(20deg)" }}
          />
          <motion.div
            className="absolute -left-4 top-7 h-3 w-5 rounded-full bg-green-500/50 origin-right"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            style={{ transform: "rotate(-10deg)" }}
          />
        </div>
        {/* Pot */}
        <div className="mx-auto mt-0.5 h-5 w-6 rounded-b-lg bg-[#2a1a0e]/80 border border-orange-900/30" />
      </motion.div>

      {/* Floating particles */}
      {[
        { x: "10%", y: "15%", delay: 0 },
        { x: "85%", y: "30%", delay: 0.4 },
        { x: "20%", y: "75%", delay: 0.8 },
        { x: "75%", y: "80%", delay: 1.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/40"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [-4, 4, -4], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.5, delay: p.delay }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
