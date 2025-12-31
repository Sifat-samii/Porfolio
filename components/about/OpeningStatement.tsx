'use client'

import { motion } from 'framer-motion'

export default function OpeningStatement() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          A narrative of how I think, build, and grow.
        </motion.h1>

        <motion.div
          className="text-base md:text-lg text-white/70 font-light leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            My journey has been driven by curiosity—moving across disciplines to understand how systems, whether technical or human, function and evolve.
          </p>
          <p>
            From engineering foundations to product thinking, I've learned that the most meaningful work emerges at the intersection of logic, creativity, and human impact.
          </p>
          <p>
            Product thinking became the center because it demands both depth and breadth: understanding constraints, framing problems, and building solutions that matter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

