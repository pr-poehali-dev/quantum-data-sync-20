import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, bullets, slideNumber, isActive }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {slideNumber && (
        <motion.span
          className="text-cyan-500/30 text-[8rem] md:text-[12rem] font-bold absolute top-4 right-8 md:right-16 select-none pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {slideNumber}
        </motion.span>
      )}

      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {bullets && (
        <motion.ul
          className="mt-8 space-y-3 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bullets.map((bullet, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-lg md:text-xl text-neutral-300"
              initial={{ opacity: 0, x: -30 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              {bullet}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {content && (
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mt-8 text-cyan-300 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {content}
        </motion.p>
      )}
    </section>
  )
}
