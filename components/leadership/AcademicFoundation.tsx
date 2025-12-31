'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AcademicFoundation() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-12 text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Research & Academic Foundation
        </motion.h2>

        <div className="space-y-8 text-white/80 font-light leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Academic Background
            </h3>
            <p className="text-base md:text-lg mb-6">
              My academic journey has been interdisciplinary, combining technical depth with systems thinking and human-centered design. I have pursued studies that bridge engineering, product development, and the social implications of technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Thesis Focus
            </h3>
            <p className="text-base md:text-lg mb-4">
              <span className="font-medium">"Systems Thinking in Product Development: Bridging Technical Architecture and User Experience"</span>
            </p>
            <p className="text-base md:text-lg mb-4">
              This work examined how systems thinking methodologies can be applied to product development, exploring the relationship between technical architecture decisions and user experience outcomes. The research investigated how product teams can make more informed decisions by understanding systems-level implications.
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-stone hover:text-stone/80 font-light transition-colors duration-200 mb-4"
            >
              {showDetails ? 'Hide' : 'Show'} details ↓
            </button>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-3 mt-4 pl-4 border-l border-white/10"
              >
                <p className="text-sm text-white/60">
                  Research methods included case study analysis, interviews with product leaders, and synthesis of systems thinking frameworks. The work contributed to understanding how product teams can better navigate complexity and make decisions that consider both technical and human factors.
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Research Interests
            </h3>
            <p className="text-base md:text-lg mb-4">
              My research interests center on the intersection of product management, systems design, and the social implications of technology. Specifically:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="text-base text-white/70 font-light flex items-start gap-2">
                <span className="text-stone mt-1">•</span>
                <span>How AI and intelligent systems can be designed with human values at their core</span>
              </li>
              <li className="text-base text-white/70 font-light flex items-start gap-2">
                <span className="text-stone mt-1">•</span>
                <span>How product thinking methodologies can address complex societal challenges</span>
              </li>
              <li className="text-base text-white/70 font-light flex items-start gap-2">
                <span className="text-stone mt-1">•</span>
                <span>How systems architecture influences both technical and social outcomes</span>
              </li>
              <li className="text-base text-white/70 font-light flex items-start gap-2">
                <span className="text-stone mt-1">•</span>
                <span>The role of interdisciplinary approaches in building responsible technology</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

