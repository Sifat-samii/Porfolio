'use client'

import { motion } from 'framer-motion'

export default function CaseStudiesIntro() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Product and system case studies.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          These are documented decision-making processes — not polished success stories.
        </motion.p>

        <motion.div
          className="h-px bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </section>
  )
}

