'use client'

import { motion } from 'framer-motion'

const contributions = [
  {
    to: 'Academic communities',
    statement: 'I aim to contribute research that bridges theory and practice, making systems thinking and product methodologies more accessible and applicable to real-world challenges.',
  },
  {
    to: 'Collaborative teams',
    statement: 'I seek to create conditions where teams can do their best work—through clear frameworks, shared understanding, and systems that enable rather than constrain.',
  },
  {
    to: 'Society at large',
    statement: 'I am committed to building products and systems that are not only effective but also responsible, equitable, and aligned with human values.',
  },
]

export default function ContributionStatement() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-12 text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Aim to Contribute
        </motion.h2>

        <div className="space-y-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.to}
              className="border-l border-white/10 pl-6 md:pl-8 py-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-display text-lg md:text-xl mb-3 text-white">
                To {contribution.to}
              </h3>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                {contribution.statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

