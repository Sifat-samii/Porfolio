'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface AccordionBlockProps {
  title: string
  tldr: string
  deepDive: string[]
  defaultOpen?: boolean
}

export default function AccordionBlock({
  title,
  tldr,
  deepDive,
  defaultOpen = false,
}: AccordionBlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex justify-between items-start gap-4 hover:bg-white/5 transition-colors duration-300"
      >
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl mb-2 text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base text-white/70 font-light">
            {tldr}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/40 text-2xl flex-shrink-0"
        >
          ↓
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10">
              <ul className="space-y-3 mt-4">
                {deepDive.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-white/60 font-light flex items-start gap-3"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

