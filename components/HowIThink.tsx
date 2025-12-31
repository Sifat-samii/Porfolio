'use client'

import { motion } from 'framer-motion'

interface Card {
  title: string
  description: string
}

const cards: Card[] = [
  {
    title: 'Problem Framing',
    description: 'Define the question before seeking answers.',
  },
  {
    title: 'Constraints & Trade-offs',
    description: 'Limitations reveal the most elegant solutions.',
  },
  {
    title: 'Execution',
    description: 'Iteration is the bridge between vision and reality.',
  },
  {
    title: 'Reflection',
    description: 'Learning compounds when we examine what worked and why.',
  },
]

export default function HowIThink() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How I Think
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ card, index }: { card: Card; index: number }) {
  return (
    <motion.div
      className="relative border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Minimal line-based graphic */}
      <div className="mb-6">
        <div className="w-12 h-px bg-accent mb-2" />
        <div className="w-8 h-px bg-accent/50" />
      </div>

      <h3 className="font-display text-xl md:text-2xl mb-3 text-white">
        {card.title}
      </h3>

      <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  )
}

