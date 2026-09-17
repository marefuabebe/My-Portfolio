import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto h-full min-h-[160px] sm:min-h-[280px] lg:min-h-[340px] w-full max-w-[520px] overflow-hidden lg:mx-0 lg:max-w-none flex items-center justify-center">

      {/* Floating Build / Create / Improve text */}
      <div
        className="pointer-events-none absolute top-[4%] right-[4%] sm:top-[8%] sm:right-[8%] z-30 text-right"
        aria-hidden="true"
      >
        <div className="font-signature text-xs leading-snug text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)] sm:text-2xl lg:text-3xl">
          Build
        </div>
        <div className="font-signature text-[10px] leading-snug text-primary/75 sm:text-xl lg:text-2xl">
          Create
        </div>
        <div className="font-signature text-[9px] leading-snug text-primary/50 sm:text-lg lg:text-xl">
          Improve
        </div>
      </div>

      {/* Portrait with edge fade */}
      <div className="relative z-10 mx-auto flex h-full items-center justify-center lg:justify-end">
        <div className="relative w-full max-w-[160px] sm:max-w-[340px] lg:max-w-[460px]">
          <motion.img
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            src={personalInfo.portraitUrl}
            alt={`Portrait of ${personalInfo.name}`}
            className="relative w-full object-contain"
            width={460}
            height={540}
          />
          {/* Edge-fade overlay to blend portrait's black bg with page #05080a */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 78% 78% at 50% 44%, transparent 58%, #05080a 86%),
                linear-gradient(to bottom, transparent 82%, #05080a 98%),
                linear-gradient(to top, transparent 92%, #05080a 100%),
                linear-gradient(to right, #05080a 0%, transparent 6%, transparent 94%, #05080a 100%)
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}
