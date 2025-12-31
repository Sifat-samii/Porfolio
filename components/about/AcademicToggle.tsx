'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function AcademicToggle() {
  const [viewMode, setViewMode] = useState<'employer' | 'academic'>('employer')

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Academic & Future Direction
          </h2>

          {/* Toggle Switch */}
          <div className="flex gap-2 border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setViewMode('employer')}
              className={`px-4 py-2 text-sm font-light transition-colors duration-300 ${
                viewMode === 'employer'
                  ? 'bg-accent/20 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Employer View
            </button>
            <button
              onClick={() => setViewMode('academic')}
              className={`px-4 py-2 text-sm font-light transition-colors duration-300 ${
                viewMode === 'academic'
                  ? 'bg-accent/20 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Academic View
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'employer' ? (
            <motion.div
              key="employer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <ul className="space-y-3">
                <li className="text-base md:text-lg text-white/70 font-light flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Led product initiatives that improved user workflows and team efficiency through systems thinking and user research.
                  </span>
                </li>
                <li className="text-base md:text-lg text-white/70 font-light flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Built technical systems and product strategies that scaled from concept to production, balancing constraints and user needs.
                  </span>
                </li>
                <li className="text-base md:text-lg text-white/70 font-light flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Collaborated across engineering, design, and business teams to ship products that solved real problems.
                  </span>
                </li>
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 text-white/70 font-light leading-relaxed"
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
                  Research Interests
                </h3>
                <p className="text-base md:text-lg">
                  I'm interested in how AI and intelligent systems can be designed with human values at their core, how product thinking can address complex societal challenges, and how systems architecture influences both technical and social outcomes. My focus is on building products and systems that are not only effective but also responsible and equitable.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
                  Thesis Focus Summary
                </h3>
                <p className="text-base md:text-lg">
                  I aim to explore the intersection of product management, systems design, and the social implications of technology. My research would examine how product thinking methodologies can be applied to address societal challenges, with a focus on creating systems that are both technically sound and socially responsible.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
                  Why This Direction Matters
                </h3>
                <p className="text-base md:text-lg">
                  As technology becomes increasingly embedded in every aspect of society, we need product leaders who understand both the technical and human dimensions of what we build. My goal is to contribute to research and practice that develops more thoughtful, inclusive, and impactful products and systems. I seek programs that combine academic rigor with practical application, preparing me to lead at the intersection of technology, product, and human impact.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

