'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ExpandableSectionProps {
  tldr: string
  deepDive: string[]
}

export default function ExpandableSection({
  tldr,
  deepDive,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <p className="text-base md:text-lg text-white/80 font-light mb-4 leading-relaxed">
        {tldr}
      </p>

      {deepDive.length > 0 && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-teal hover:text-teal/80 font-light mb-4 transition-colors duration-200"
          >
            {isExpanded ? 'Hide details' : 'Show details'} ↓
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden space-y-2 mb-4"
              >
                {deepDive.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-white/60 font-light flex items-start gap-2"
                  >
                    <span className="text-teal mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

