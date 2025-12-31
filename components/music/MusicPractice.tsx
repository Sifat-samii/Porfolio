'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface PracticeSection {
  title: string
  meaning: string
  practices: Practice[]
}

interface Practice {
  role: string
  year: string
  context: string
  details?: {
    process?: string[]
    tools?: string[]
    learned?: string[]
  }
}

const practiceSections: PracticeSection[] = [
  {
    title: 'Guitar Performance',
    meaning: 'Solo practice and performance develop technical precision and emotional expression.',
    practices: [
      {
        role: 'Solo performer',
        year: 'Ongoing',
        context: 'Classical and contemporary repertoire',
        details: {
          process: [
            'Daily practice focusing on technique and musicality',
            'Study of classical compositions and modern arrangements',
            'Performance preparation and stage presence development',
          ],
          tools: ['Classical guitar', 'Fingerstyle technique', 'Music theory'],
          learned: [
            'How technical mastery enables emotional expression',
            'The relationship between structure and improvisation',
            'The discipline required for consistent performance quality',
          ],
        },
      },
    ],
  },
  {
    title: 'Band / Collaborative Work',
    meaning: 'Playing with others teaches listening, timing, and the art of creating something greater than the sum of parts.',
    practices: [
      {
        role: 'Guitarist / Arranger',
        year: 'Various',
        context: 'Small ensemble and band settings',
        details: {
          process: [
            'Collaborative arrangement and composition',
            'Rehearsal and refinement of group dynamics',
            'Live performance coordination',
          ],
          tools: ['Electric and acoustic guitar', 'Arrangement software', 'Live sound'],
          learned: [
            'How individual parts contribute to collective expression',
            'The importance of listening and responding in real-time',
            'How constraints (time, instrumentation) drive creativity',
          ],
        },
      },
    ],
  },
  {
    title: 'Sound Design / Composition',
    meaning: 'Creating original work teaches the relationship between intention and outcome, between idea and execution.',
    practices: [
      {
        role: 'Composer / Sound designer',
        year: 'Ongoing',
        context: 'Original compositions and soundscapes',
        details: {
          process: [
            'Conceptual development and thematic exploration',
            'Layered composition and arrangement',
            'Recording, mixing, and production',
          ],
          tools: ['DAW software', 'Recording equipment', 'Synthesis and effects'],
          learned: [
            'How structure emerges from experimentation',
            'The iterative nature of creative work',
            'How technical skills serve artistic vision',
          ],
        },
      },
    ],
  },
]

export default function MusicPractice() {
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
          Music Practice
        </motion.h2>

        <div className="space-y-24">
          {practiceSections.map((section, sectionIndex) => (
            <PracticeSection
              key={section.title}
              section={section}
              index={sectionIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PracticeSection({
  section,
  index,
}: {
  section: PracticeSection
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h3 className="font-display text-xl md:text-2xl mb-3 text-white">
        {section.title}
      </h3>
      <p className="text-base md:text-lg text-white/70 font-light mb-8 leading-relaxed">
        {section.meaning}
      </p>

      <div className="space-y-8">
        {section.practices.map((practice, practiceIndex) => (
          <PracticeItem
            key={practiceIndex}
            practice={practice}
          />
        ))}
      </div>
    </motion.div>
  )
}

function PracticeItem({ practice }: { practice: Practice }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-l border-white/10 pl-6 md:pl-8 py-4">
      <div className="mb-4">
        <div className="flex flex-wrap gap-4 mb-2 text-sm text-white/50 font-light">
          <span>{practice.role}</span>
          <span className="text-white/20">·</span>
          <span>{practice.year}</span>
          <span className="text-white/20">·</span>
          <span>{practice.context}</span>
        </div>
      </div>

      {practice.details && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-copper/80 hover:text-copper font-light mb-4 transition-colors duration-300"
          >
            {isExpanded ? 'Hide' : 'Show'} details ↓
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden space-y-4"
              >
                {practice.details.process && (
                  <div>
                    <div className="text-xs text-white/40 mb-2 font-light">Process</div>
                    <ul className="space-y-2">
                      {practice.details.process.map((item, i) => (
                        <li key={i} className="text-sm text-white/60 font-light flex items-start gap-2">
                          <span className="text-copper mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {practice.details.tools && (
                  <div>
                    <div className="text-xs text-white/40 mb-2 font-light">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {practice.details.tools.map((tool, i) => (
                        <span key={i} className="text-xs text-white/50 font-light px-2 py-1 border border-white/10 bg-white/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {practice.details.learned && (
                  <div>
                    <div className="text-xs text-white/40 mb-2 font-light">What was learned</div>
                    <ul className="space-y-2">
                      {practice.details.learned.map((item, i) => (
                        <li key={i} className="text-sm text-white/60 font-light flex items-start gap-2">
                          <span className="text-copper mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

