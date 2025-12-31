'use client'

import { motion } from 'framer-motion'

const principles = [
  'Clarity over complexity',
  'Constraints enable creativity',
  'Systems before features',
  'Reflection after execution',
  'Empathy drives decisions',
  'First principles, not assumptions',
]

export default function ValuesPrinciples() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Values & Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="relative border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Line graphic */}
              <div className="mb-4">
                <div className="w-12 h-px bg-accent" />
              </div>

              <p className="text-base md:text-lg text-white font-light">
                {principle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

