'use client'

import { motion } from 'framer-motion'

export default function LeadershipOpening() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-4xl md:text-5xl font-normal leading-tight mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Leadership, research, and responsibility.
        </motion.h1>

        <motion.div
          className="text-base md:text-lg text-white/70 font-light leading-relaxed space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            My work is driven by a commitment to contribute to teams, institutions, and knowledge — not just to build individual success.
          </p>
          <p>
            I believe that effective leadership emerges from clarity of purpose, systems thinking, and the ability to create conditions where others can do their best work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

