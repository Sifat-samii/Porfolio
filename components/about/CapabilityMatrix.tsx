'use client'

import { motion } from 'framer-motion'

interface CapabilityGroup {
  category: string
  items: string[]
}

const capabilities: CapabilityGroup[] = [
  {
    category: 'Product & Strategy',
    items: ['Problem framing', 'Roadmap planning', 'Stakeholder alignment', 'Metrics & analytics'],
  },
  {
    category: 'UX & Delivery',
    items: ['User research', 'Prototyping', 'Design systems', 'Agile practices'],
  },
  {
    category: 'Systems & Tech',
    items: ['System architecture', 'API design', 'Cloud infrastructure', 'Security principles'],
  },
  {
    category: 'Research & Communication',
    items: ['User interviews', 'Data analysis', 'Writing & documentation', 'Presentation'],
  },
  {
    category: 'Creative Practice',
    items: ['Sound design', 'Music production', 'Visual design', 'Prototyping'],
  },
]

export default function CapabilityMatrix() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-white">
          Capability Matrix
        </h2>

        <div className="space-y-6">
          {capabilities.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <div className="md:w-48 flex-shrink-0">
                <h3 className="font-display text-lg md:text-xl text-white mb-2">
                  {group.category}
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    className="text-xs md:text-sm text-white/60 font-light px-3 py-1 border border-white/10 bg-white/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + itemIndex * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

