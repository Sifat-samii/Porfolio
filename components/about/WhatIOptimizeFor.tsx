'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Principle {
  title: string
  meaning: string
  deepDive?: string[]
}

const principles: Principle[] = [
  {
    title: 'Clarity > complexity',
    meaning: 'Simple solutions that are easy to understand and maintain.',
    deepDive: [
      'Complexity is acceptable only when it solves a real problem.',
      'Documentation and naming reduce cognitive load for teams.',
    ],
  },
  {
    title: 'Constraints create focus',
    meaning: 'Limitations reveal the most elegant solutions.',
    deepDive: [
      'Time, budget, and technical constraints force prioritization.',
      'Working within constraints leads to more creative problem-solving.',
    ],
  },
  {
    title: 'Systems before features',
    meaning: 'Build architecture that supports growth, not just current needs.',
    deepDive: [
      'Features are temporary; systems are permanent.',
      'Good systems make adding new features easier over time.',
    ],
  },
  {
    title: 'Evidence + intuition',
    meaning: 'Balance data with informed judgment.',
    deepDive: [
      'Use data to validate, not to replace thinking.',
      'Intuition built on experience is valuable, but test assumptions.',
    ],
  },
  {
    title: 'Craft through iteration',
    meaning: 'Quality emerges from cycles of build, measure, learn.',
    deepDive: [
      'First versions are learning tools, not final products.',
      'Iteration requires discipline: ship, observe, improve.',
    ],
  },
]

export default function WhatIOptimizeFor() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-white">
          What I Optimize For
        </h2>

        <div className="space-y-4">
          {principles.map((principle, index) => (
            <PrincipleRow
              key={principle.title}
              principle={principle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PrincipleRow({
  principle,
  index,
}: {
  principle: Principle
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="border border-white/10 bg-white/5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-300"
      >
        <div className="flex-1">
          <h3 className="font-display text-lg md:text-xl mb-2 text-white">
            {principle.title}
          </h3>
          <p className="text-sm md:text-base text-white/70 font-light">
            {principle.meaning}
          </p>
        </div>
        {principle.deepDive && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/40 text-xl flex-shrink-0"
          >
            ↓
          </motion.div>
        )}
      </button>

      {principle.deepDive && isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-white/10"
        >
          <div className="px-6 pb-6 pt-4">
            <ul className="space-y-2">
              {principle.deepDive.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-white/60 font-light flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

