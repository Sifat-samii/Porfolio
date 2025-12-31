'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

interface Phase {
  title: string
  keyShift: string
  summary: string
  deepDive: string[]
}

const phases: Phase[] = [
  {
    title: 'Foundations',
    keyShift: 'Curiosity → discipline',
    summary: 'Explored multiple domains without forcing specialization, developing a habit of questioning assumptions.',
    deepDive: [
      'Built foundational skills across music, mathematics, and technology.',
      'Learned that curiosity requires discipline to be productive.',
    ],
  },
  {
    title: 'Systems Thinking',
    keyShift: 'Engineering mindset',
    summary: 'Built systems that required understanding architecture, constraints, and trade-offs at scale.',
    deepDive: [
      'Recognized that technical decisions are fundamentally product decisions.',
      'Developed ability to see patterns and connections across complex systems.',
    ],
  },
  {
    title: 'Product Shift',
    keyShift: 'Users, workflows, outcomes',
    summary: 'Shifted focus from building features to framing problems and understanding user needs.',
    deepDive: [
      'Learned that great products emerge from clear constraints and user empathy.',
      'Began thinking in terms of outcomes, not just outputs.',
    ],
  },
  {
    title: 'Collaboration',
    keyShift: 'Teams, coordination, shipping',
    summary: 'Led cross-functional teams, recognizing that direction matters more than speed.',
    deepDive: [
      'Understood that scale requires systems thinking applied to people and processes.',
      'Developed skills in stakeholder alignment and team coordination.',
    ],
  },
  {
    title: 'Creative Practice',
    keyShift: 'Music as craft + identity',
    summary: 'Maintained creative practice as a musician, understanding rhythm, harmony, and structure.',
    deepDive: [
      'Recognized that creativity and logic are complementary, not opposing forces.',
      'Creative practice sharpens analytical thinking and problem-solving.',
    ],
  },
]

export default function FocusShiftTimeline() {
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  })

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-white">
          Focus Shift Timeline
        </h2>

        {/* Desktop: Horizontal scrollable timeline */}
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 min-w-max">
              {phases.map((phase, index) => (
                <PhaseCard
                  key={phase.title}
                  phase={phase}
                  index={index}
                  isActive={activePhase === index}
                  onActivate={() => setActivePhase(activePhase === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.title}
              phase={phase}
              index={index}
              isActive={activePhase === index}
              onActivate={() => setActivePhase(activePhase === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhaseCard({
  phase,
  index,
  isActive,
  onActivate,
}: {
  phase: Phase
  index: number
  isActive: boolean
  onActivate: () => void
}) {
  return (
    <motion.div
      className={`min-w-[320px] md:min-w-[400px] border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer ${
        isActive ? 'border-accent/50' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onActivate}
      whileHover={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
    >
      <div className="p-6 md:p-8">
        <div className="mb-4">
          <span className="text-xs text-accent font-light tracking-wide">
            {phase.keyShift}
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl mb-3 text-white">
          {phase.title}
        </h3>

        <p className="text-sm md:text-base text-white/70 font-light mb-4">
          {phase.summary}
        </p>

        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 pt-4 mt-4"
          >
            <ul className="space-y-2">
              {phase.deepDive.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-white/60 font-light flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

