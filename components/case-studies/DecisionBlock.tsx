'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Decision } from './CaseStudyIndex'

export default function DecisionBlock({ decision }: { decision: Decision }) {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="border-l-2 border-teal/30 bg-white/5 p-6">
      <h3 className="font-display text-lg md:text-xl mb-3 text-white">
        {decision.title}
      </h3>

      <button
        onClick={() => setShowOptions(!showOptions)}
        className="text-sm text-teal hover:text-teal/80 font-light mb-3 transition-colors duration-200"
      >
        {showOptions ? 'Hide' : 'Show'} options considered ↓
      </button>

      <AnimatePresence>
        {showOptions && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mb-4 space-y-1"
          >
            {decision.options.map((option, index) => (
              <li
                key={index}
                className="text-sm text-white/50 font-light pl-4"
              >
                • {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mb-4 p-3 bg-white/5 border border-white/10">
        <div className="text-xs text-white/40 mb-1 font-light">Trade-off</div>
        <p className="text-sm text-white/70 font-light">{decision.tradeOff}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs text-teal mb-2 font-light">Chosen path</div>
        <p className="text-sm md:text-base text-white font-light">
          {decision.chosen}
        </p>
      </div>

      <div>
        <div className="text-xs text-white/40 mb-2 font-light">Reasoning</div>
        <ul className="space-y-2">
          {decision.reasoning.map((reason, index) => (
            <li
              key={index}
              className="text-sm text-white/60 font-light flex items-start gap-2"
            >
              <span className="text-teal mt-1">•</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

