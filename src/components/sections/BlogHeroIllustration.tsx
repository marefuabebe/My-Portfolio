import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, content: "const blog = {", color: "text-text-light" },
  { indent: 1, content: "author:", color: "text-purple-400", value: '"Marefu Abebe"', valueColor: "text-yellow-300" },
  { indent: 1, content: "topics:", color: "text-purple-400", value: '["Tech", "Design", "AI"]', valueColor: "text-primary" },
  { indent: 1, content: "mission:", color: "text-purple-400", value: '"Share Insights"', valueColor: "text-orange-400" },
  { indent: 0, content: "};", color: "text-text-light" },
  { indent: 0, content: "", color: "" },
  { indent: 0, content: "blog.publishArticle();", color: "text-primary" },
];

export default function BlogHeroIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-[160px] sm:h-[290px] overflow-visible">
      {/* Background glow matching mockup */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 55% 45%, rgba(20, 255, 197, 0.12), rgba(8, 28, 24, 0.04) 50%, transparent 80%)",
        }}
      />

      <div className="relative flex items-center justify-center origin-center scale-[0.52] sm:scale-100">
        {/* Laptop frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 w-[270px] sm:w-[320px]"
          style={{ filter: "drop-shadow(0 12px 36px rgba(20, 255, 197, 0.14))" }}
        >
        {/* Screen */}
        <div className="relative rounded-xl overflow-hidden border border-primary/25 bg-[#090d12] shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 bg-[#121820] px-3.5 py-2.5 border-b border-white/8">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[10px] text-text-muted/60 font-mono tracking-wider">insights.ts</span>
          </div>

          {/* Code area */}
          <div className="px-4 py-4 font-mono text-[10.5px] leading-[1.8] space-y-0.5">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="w-4 shrink-0 text-right text-white/15 select-none">{i + 1}</span>
                <span className={`${line.color}`} style={{ paddingLeft: `${line.indent * 12}px` }}>
                  {line.content}
                  {line.value && <span className={`ml-1.5 ${line.valueColor}`}>{line.value}</span>}
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
              <span className="inline-block h-[13px] w-[7px] bg-primary rounded-xs" />
            </motion.div>
          </div>

          {/* Bottom status bar */}
          <div className="flex items-center justify-between bg-primary/10 px-3.5 py-1.5 border-t border-primary/20">
            <span className="text-[9.5px] font-mono text-primary/80 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              TypeScript
            </span>
            <span className="text-[9.5px] font-mono text-primary/80">ready to read ✓</span>
          </div>
        </div>

        {/* Laptop base */}
        <div className="mx-auto mt-0.5 h-2 w-[92%] rounded-b-lg bg-[#141b24] border border-primary/15 border-t-0" />
        <div className="mx-auto h-2 w-[112%] rounded-b-2xl bg-[#090d12] border border-white/8 shadow-md" />
      </motion.div>

      {/* Code mug — right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute right-1 bottom-3 sm:right-5 z-20"
      >
        {/* Steam */}
        {[0, 1, 2].map((j) => (
          <motion.div
            key={j}
            className="absolute -top-5 w-0.5 rounded-full bg-primary/40"
            style={{ left: `${8 + j * 9}px`, height: "14px" }}
            animate={{ y: [-2, -10, -2], opacity: [0.3, 0.9, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8 + j * 0.3, delay: j * 0.2 }}
          />
        ))}

        {/* Mug body with </> */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-b-2xl rounded-t-lg border border-primary/40 bg-[#0c1218] shadow-[0_0_20px_rgba(20,255,197,0.2)]">
          <span className="font-mono text-xs font-black text-primary">&lt;/&gt;</span>
        </div>
        {/* Handle */}
        <div className="absolute top-2.5 -right-3.5 h-9 w-3.5 rounded-r-full border border-primary/30 border-l-0 bg-[#0c1218]/40" />
        {/* Mug base reflection */}
        <div className="mx-auto mt-0.5 h-1 w-[110%] rounded-full bg-primary/20 blur-xs" />
      </motion.div>

      {/* Desk plant behind mug */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-0 top-3 sm:-right-2 z-10"
        aria-hidden="true"
      >
        <div className="relative mx-auto w-1 h-12 bg-emerald-800/60 rounded-full">
          {/* Leaves */}
          <motion.div
            className="absolute -left-6 top-1 h-6 w-8 rounded-full bg-emerald-600/70 origin-right shadow-sm"
            animate={{ rotate: [-2, 3, -2] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{ transform: "rotate(-24deg)" }}
          />
          <motion.div
            className="absolute -right-6 top-5 h-5 w-7 rounded-full bg-emerald-500/70 origin-left shadow-sm"
            animate={{ rotate: [2, -3, 2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
            style={{ transform: "rotate(24deg)" }}
          />
          <motion.div
            className="absolute -left-5 top-9 h-4 w-6 rounded-full bg-teal-400/60 origin-right shadow-sm"
            animate={{ rotate: [-1, 2, -1] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
            style={{ transform: "rotate(-12deg)" }}
          />
        </div>
        {/* Pot */}
        <div className="mx-auto mt-0.5 h-6 w-7 rounded-b-xl bg-[#1e1510] border border-orange-900/40 shadow-inner" />
      </motion.div>

      {/* Ambient floating tech particles */}
      {[
        { x: "8%", y: "15%", delay: 0 },
        { x: "86%", y: "25%", delay: 0.5 },
        { x: "15%", y: "78%", delay: 0.9 },
        { x: "78%", y: "82%", delay: 1.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_8px_rgba(20,255,197,0.8)]"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [-5, 5, -5], opacity: [0.3, 0.9, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, delay: p.delay }}
          aria-hidden="true"
        />
      ))}
      </div>
    </div>
  );
}
