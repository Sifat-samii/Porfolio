'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CaseStudyPanel from './CaseStudyPanel'

export interface CaseStudy {
  id: string
  title: string
  problem: string
  context: 'Internal' | 'SaaS' | 'Research' | 'Tooling'
  disciplines: string[]
  timeline: string
  content: CaseStudyContent
}

export interface CaseStudyContent {
  context: {
    tldr: string
    deepDive: string[]
  }
  problem: {
    tldr: string
    deepDive: string[]
  }
  decisions: Decision[]
  execution: {
    tldr: string
    deepDive: string[]
  }
  outcome: {
    tldr: string
    deepDive: string[]
  }
  reflection: {
    tldr: string
    deepDive: string[]
  }
  artifacts?: Artifact[]
}

export interface Decision {
  title: string
  options: string[]
  tradeOff: string
  chosen: string
  reasoning: string[]
}

export interface Artifact {
  title: string
  description: string
  type: 'image' | 'diagram' | 'code' | 'document'
}

// Sample case studies
const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Product Workflow System',
    problem: 'Teams lacked visibility into product decision-making processes.',
    context: 'Internal',
    disciplines: ['Product Strategy', 'Systems Design', 'UX'],
    timeline: '6 months',
    content: {
      context: {
        tldr: 'Internal tooling project to improve product team coordination and decision transparency.',
        deepDive: [
          'Multiple product teams working on related features without shared context.',
          'Decision rationale was often lost or undocumented.',
          'Stakeholders needed better visibility into product roadmap and trade-offs.',
        ],
      },
      problem: {
        tldr: 'Lack of structured process for documenting and sharing product decisions led to misalignment and repeated discussions.',
        deepDive: [
          'Decisions were made in meetings but not captured systematically.',
          'New team members had no way to understand historical context.',
          'Stakeholders couldn\'t see the reasoning behind prioritization choices.',
        ],
      },
      decisions: [
        {
          title: 'Documentation vs. Speed',
          options: ['Lightweight templates', 'Comprehensive frameworks', 'Hybrid approach'],
          tradeOff: 'More structure slows initial decision-making but improves long-term clarity.',
          chosen: 'Hybrid approach',
          reasoning: [
            'Critical decisions require full documentation; routine ones can be lightweight.',
            'Templates reduce cognitive load while ensuring key information is captured.',
          ],
        },
        {
          title: 'Centralized vs. Distributed',
          options: ['Single source of truth', 'Team-specific tools', 'Federated system'],
          tradeOff: 'Centralization improves discoverability but creates bottlenecks.',
          chosen: 'Federated system',
          reasoning: [
            'Teams maintain autonomy while contributing to shared knowledge base.',
            'Search and discovery layer provides unified access without central control.',
          ],
        },
      ],
      execution: {
        tldr: 'Built modular system with templates, search, and integration with existing tools.',
        deepDive: [
          'Created decision templates that teams could customize.',
          'Integrated with project management and communication tools.',
          'Built search interface that surfaces relevant decisions across teams.',
        ],
      },
      outcome: {
        tldr: 'Improved decision visibility and reduced time spent re-explaining context.',
        deepDive: [
          'Teams reported 40% reduction in time spent searching for decision rationale.',
          'New team members could onboard faster with access to historical decisions.',
          'Stakeholders had better visibility into product direction and trade-offs.',
        ],
      },
      reflection: {
        tldr: 'Structure helps, but adoption requires cultural change, not just tools.',
        deepDive: [
          'Tools alone don\'t create good documentation habits; they enable them.',
          'Success required ongoing support and iteration based on team feedback.',
          'The system continues to evolve as teams discover new use cases.',
        ],
      },
    },
  },
  {
    id: '2',
    title: 'User Research Synthesis Platform',
    problem: 'Research insights were fragmented across multiple tools and formats.',
    context: 'Research',
    disciplines: ['User Research', 'Data Analysis', 'Product Strategy'],
    timeline: '4 months',
    content: {
      context: {
        tldr: 'Platform to centralize and synthesize user research across product teams.',
        deepDive: [
          'Research conducted across multiple teams with different methodologies.',
          'Findings stored in various formats: notes, recordings, surveys, analytics.',
          'No systematic way to identify patterns or contradictions across studies.',
        ],
      },
      problem: {
        tldr: 'Research insights were siloed, making it difficult to see patterns or leverage past work.',
        deepDive: [
          'Teams duplicated research efforts without knowing prior work existed.',
          'Contradictory findings weren\'t surfaced or reconciled.',
          'Strategic insights were lost in the noise of individual studies.',
        ],
      },
      decisions: [
        {
          title: 'Structure vs. Flexibility',
          options: ['Rigid taxonomy', 'Free-form tagging', 'Guided metadata'],
          tradeOff: 'Structure improves searchability but may not fit all research types.',
          chosen: 'Guided metadata',
          reasoning: [
            'Required fields ensure consistency; optional fields allow flexibility.',
            'Auto-suggestions help researchers use consistent terminology.',
          ],
        },
      ],
      execution: {
        tldr: 'Built platform with structured metadata, search, and synthesis tools.',
        deepDive: [
          'Created metadata schema that works across different research methodologies.',
          'Built search that surfaces related studies and identifies patterns.',
          'Added synthesis tools to help researchers combine findings from multiple studies.',
        ],
      },
      outcome: {
        tldr: 'Reduced duplicate research and improved cross-team learning.',
        deepDive: [
          'Teams could find relevant prior research before starting new studies.',
          'Patterns emerged that weren\'t visible when research was siloed.',
          'Strategic insights became more accessible to product leadership.',
        ],
      },
      reflection: {
        tldr: 'Metadata quality determines search quality; investment in structure pays off.',
        deepDive: [
          'Initial resistance to structured metadata decreased as benefits became clear.',
          'Search quality improved significantly with consistent tagging.',
          'The platform became more valuable as more research was added.',
        ],
      },
    },
  },
]

export default function CaseStudyIndex() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const filters = ['All', 'Internal', 'SaaS', 'Research', 'Tooling']
  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.context === filter)

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter bar */}
        <div className="flex gap-4 mb-12 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-light whitespace-nowrap transition-colors duration-200 ${
                filter === f
                  ? 'text-white border-b-2 border-teal'
                  : 'text-white/60 hover:text-white border-b-2 border-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case study cards */}
        <div className="space-y-4 mb-16">
          {filteredStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              isExpanded={selectedStudy === study.id}
              onToggle={() => setSelectedStudy(selectedStudy === study.id ? null : study.id)}
            />
          ))}
        </div>

        {/* Expanded case study panel */}
        <AnimatePresence>
          {selectedStudy && (
            <CaseStudyPanel
              study={caseStudies.find(s => s.id === selectedStudy)!}
              onClose={() => setSelectedStudy(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CaseStudyCard({
  study,
  isExpanded,
  onToggle,
}: {
  study: CaseStudy
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      className={`border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-200 ${
        isExpanded ? 'border-teal/50' : 'hover:border-white/20 hover:bg-white/10'
      }`}
      onClick={onToggle}
      whileHover={{ borderLeftWidth: '2px', borderLeftColor: 'rgb(95, 179, 179)' }}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="font-display text-xl md:text-2xl mb-2 text-white">
              {study.title}
            </h2>
            <p className="text-sm md:text-base text-white/70 font-light mb-3">
              {study.problem}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs text-teal font-light">
              {study.context}
            </span>
            <span className="text-xs text-white/40 font-light">
              {study.timeline}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.disciplines.map((discipline) => (
            <span
              key={discipline}
              className="text-xs text-white/50 font-light px-2 py-1 border border-white/10 bg-white/5"
            >
              {discipline}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

