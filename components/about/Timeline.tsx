'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Phase {
  title: string
  timeRange: string
  description: string[]
  learning: string
}

const phases: Phase[] = [
  {
    title: 'Curiosity & Foundations',
    timeRange: 'Early years',
    description: [
      'Explored multiple domains—music, mathematics, technology—without forcing specialization.',
      'Developed a habit of questioning assumptions and seeking first principles.',
    ],
    learning: 'Learning that curiosity is a discipline, not a trait.',
  },
  {
    title: 'Engineering & Systems Thinking',
    timeRange: 'Mid journey',
    description: [
      'Built systems that required understanding architecture, constraints, and trade-offs.',
      'Recognized that technical decisions are fundamentally product decisions.',
    ],
    learning: 'Systems thinking is the foundation of effective problem-solving.',
  },
  {
    title: 'Transition into Product & UX',
    timeRange: 'Recent years',
    description: [
      'Shifted focus from building features to framing problems and understanding users.',
      'Learned that great products emerge from clear constraints and user empathy.',
    ],
    learning: 'Product thinking is the bridge between possibility and impact.',
  },
  {
    title: 'Leadership, Collaboration & Scale',
    timeRange: 'Ongoing',
    description: [
      'Led cross-functional teams, recognizing that direction matters more than speed.',
      'Understood that scale requires systems thinking applied to people and processes.',
    ],
    learning: 'Leadership is clarity, not authority.',
  },
  {
    title: 'Creativity, Music & Human Expression',
    timeRange: 'Throughout',
    description: [
      'Maintained creative practice as a musician, understanding rhythm, harmony, and structure.',
      'Recognized that creativity and logic are complementary, not opposing forces.',
    ],
    learning: 'Creative practice sharpens analytical thinking.',
  },
]

export default function Timeline() {
  const [activePhase, setActivePhase] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const phaseElements = document.querySelectorAll('[data-phase]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      phaseElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActivePhase(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-24 md:space-y-32">
            {phases.map((phase, index) => (
              <PhaseItem
                key={phase.title}
                phase={phase}
                index={index}
                isActive={activePhase === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhaseItem({
  phase,
  index,
  isActive,
}: {
  phase: Phase
  index: number
  isActive: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      data-phase
      className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-12 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/20 z-10 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 rounded-full bg-accent"
          animate={{ scale: isActive ? 1.5 : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div
        className={`flex-1 ml-16 md:ml-0 ${
          isEven ? 'md:text-right md:mr-auto md:max-w-[45%]' : 'md:text-left md:ml-auto md:max-w-[45%]'
        }`}
      >
        <div className="mb-2">
          <span className="text-xs md:text-sm text-accent font-light tracking-wide">
            {phase.timeRange}
          </span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl mb-4 text-white">
          {phase.title}
        </h2>

        <div className="space-y-3 mb-6">
          {phase.description.map((line, i) => (
            <p
              key={i}
              className="text-sm md:text-base text-white/60 font-light leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Key learning */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-white/50 font-light italic">
            {phase.learning}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

