'use client'

import { motion } from 'framer-motion'

interface Bridge {
  creative: string
  product: string
  connection: string
}

const bridges: Bridge[] = [
  {
    creative: 'Practice',
    product: 'Iteration',
    connection: 'Daily commitment to improvement, whether in music or product, builds mastery through repetition and refinement.',
  },
  {
    creative: 'Listening',
    product: 'User empathy',
    connection: 'Understanding what others hear—or need—requires active attention and the ability to interpret subtle signals.',
  },
  {
    creative: 'Structure',
    product: 'Systems thinking',
    connection: 'Music teaches how form and function work together; products require the same understanding of interconnected parts.',
  },
  {
    creative: 'Collaboration',
    product: 'Teamwork',
    connection: 'Creating together means listening, responding, and contributing to something larger than individual parts.',
  },
]

export default function CreativeBridge() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          What music taught me about building products.
        </motion.h2>

        <div className="space-y-12">
          {bridges.map((bridge, index) => (
            <motion.div
              key={bridge.creative}
              className="border-l border-copper/30 pl-8 md:pl-12 py-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                <span className="font-display text-xl md:text-2xl text-white">
                  {bridge.creative}
                </span>
                <span className="text-white/30 text-lg">→</span>
                <span className="font-display text-xl md:text-2xl text-copper">
                  {bridge.product}
                </span>
              </div>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                {bridge.connection}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

