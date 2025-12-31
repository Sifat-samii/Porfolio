'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CaseStudy, CaseStudyContent } from './CaseStudyIndex'
import DecisionBlock from './DecisionBlock'
import SystemNote from './SystemNote'
import ExpandableSection from './ExpandableSection'

const sections = [
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'Problem' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'execution', label: 'Execution' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'reflection', label: 'Reflection' },
]

export default function CaseStudyPanel({
  study,
  onClose,
}: {
  study: CaseStudy
  onClose: () => void
}) {
  const [activeSection, setActiveSection] = useState('context')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mt-16 border-t border-white/10 pt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Section Navigation */}
          <div className="md:w-48 flex-shrink-0">
            <nav className="sticky top-32 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-light transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-teal border-l-2 border-teal'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Content */}
          <div className="flex-1 space-y-16">
            {/* Context */}
            <div
              ref={(el) => (sectionRefs.current['context'] = el)}
              id="context"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Context
              </h2>
              <ExpandableSection
                tldr={study.content.context.tldr}
                deepDive={study.content.context.deepDive}
              />
            </div>

            {/* Problem */}
            <div
              ref={(el) => (sectionRefs.current['problem'] = el)}
              id="problem"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Problem
              </h2>
              <ExpandableSection
                tldr={study.content.problem.tldr}
                deepDive={study.content.problem.deepDive}
              />
            </div>

            {/* Decisions & Trade-offs */}
            <div
              ref={(el) => (sectionRefs.current['decisions'] = el)}
              id="decisions"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Decisions & Trade-offs
              </h2>
              <div className="space-y-6">
                {study.content.decisions.map((decision, index) => (
                  <DecisionBlock key={index} decision={decision} />
                ))}
              </div>
            </div>

            {/* Execution */}
            <div
              ref={(el) => (sectionRefs.current['execution'] = el)}
              id="execution"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Execution
              </h2>
              <ExpandableSection
                tldr={study.content.execution.tldr}
                deepDive={study.content.execution.deepDive}
              />
              <SystemNote>
                Architecture decisions were documented as they were made, creating a living record of system evolution.
              </SystemNote>
            </div>

            {/* Outcome */}
            <div
              ref={(el) => (sectionRefs.current['outcome'] = el)}
              id="outcome"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Outcome
              </h2>
              <ExpandableSection
                tldr={study.content.outcome.tldr}
                deepDive={study.content.outcome.deepDive}
              />
            </div>

            {/* Reflection */}
            <div
              ref={(el) => (sectionRefs.current['reflection'] = el)}
              id="reflection"
              className="scroll-mt-32"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-white">
                Reflection
              </h2>
              <ExpandableSection
                tldr={study.content.reflection.tldr}
                deepDive={study.content.reflection.deepDive}
              />
            </div>

            {/* Evidence & Artifacts */}
            {study.content.artifacts && study.content.artifacts.length > 0 && (
              <div className="border-t border-white/10 pt-16">
                <h2 className="font-display text-2xl md:text-3xl mb-8 text-white">
                  Evidence & Artifacts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.content.artifacts.map((artifact, index) => (
                    <div
                      key={index}
                      className="border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-xs text-teal mb-2 font-light">
                        {artifact.type}
                      </div>
                      <h3 className="text-sm font-light text-white mb-2">
                        {artifact.title}
                      </h3>
                      <p className="text-xs text-white/60 font-light">
                        {artifact.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Close button */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <button
            onClick={onClose}
            className="text-sm text-white/60 hover:text-white font-light transition-colors duration-200"
          >
            ← Back to case studies
          </button>
        </div>
      </div>
    </motion.div>
  )
}

