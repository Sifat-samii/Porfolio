'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PhilosophyBlock {
  title: string
  statement: string
  deepDive?: string
}

const philosophies: PhilosophyBlock[] = [
  {
    title: 'Discipline over inspiration',
    statement: 'Creative practice is built through consistency, not waiting for the right moment.',
    deepDive: 'The daily commitment to practice—even when uninspired—develops the muscle memory and intuition that enable breakthrough moments.',
  },
  {
    title: 'Practice as process',
    statement: 'The process of learning and refining is the work itself, not preparation for it.',
    deepDive: 'Each session teaches something new about the instrument, the music, and oneself. The journey is the destination.',
  },
  {
    title: 'Sound as structure',
    statement: 'Music reveals how structure and emotion can coexist—how constraints create beauty.',
    deepDive: 'Understanding harmony, rhythm, and form teaches that limitations are not restrictions but frameworks for expression.',
  },
  {
    title: 'Emotion through constraints',
    statement: 'The most powerful expression often comes from working within defined boundaries.',
    deepDive: 'A simple chord progression or a limited scale can convey more than complexity when approached with intention and attention.',
  },
]

export default function CreativePhilosophy() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {philosophies.map((philosophy, index) => (
            <PhilosophyBlock
              key={philosophy.title}
              philosophy={philosophy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophyBlock({
  philosophy,
  index,
}: {
  philosophy: PhilosophyBlock
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="border-l border-copper/30 pl-8 md:pl-12 py-6">
        <h2 className="font-display text-2xl md:text-3xl mb-4 text-white">
          {philosophy.title}
        </h2>
        <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-4">
          {philosophy.statement}
        </p>
        {philosophy.deepDive && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-copper/80 hover:text-copper font-light transition-colors duration-300"
            >
              {isExpanded ? 'Hide' : 'Read more'} ↓
            </button>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-sm md:text-base text-white/60 font-light leading-relaxed mt-4 overflow-hidden"
              >
                {philosophy.deepDive}
              </motion.p>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

