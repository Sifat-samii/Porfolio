'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const signals = ['Product', 'Systems', 'Research', 'UX', 'Sound', 'Leadership']

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const underlineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          I build products like systems —<br />
          and systems like stories.
        </motion.h1>

        {/* Signal row */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {signals.map((signal, index) => (
            <span
              key={signal}
              className="text-xs md:text-sm text-white/40 font-light tracking-wide px-3 py-1 border border-white/10 bg-white/5"
            >
              {signal}
            </span>
          ))}
        </motion.div>

        {/* Animated underline/waveform */}
        <motion.div
          className="relative h-px bg-white/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: underlineWidth }}
          />
        </motion.div>
      </div>
    </section>
  )
}

