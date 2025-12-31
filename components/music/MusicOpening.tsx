'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MusicOpening() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract waveform / sound texture background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 50% ${50 + scrollY * 0.05}%, rgba(184, 115, 90, 0.1) 0%, transparent 50%)`,
        }} />
        <div className="absolute inset-0 grain-texture opacity-30" />
        
        {/* Waveform pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400"
            fill="none"
            stroke="rgba(184, 115, 90, 0.1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,500 Q300,200 600,500 T1200,500"
            fill="none"
            stroke="rgba(184, 115, 90, 0.08)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Music is how I practice<br />
          attention, patience, and expression.
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-white/50 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span>Guitar</span>
          <span className="text-white/20">·</span>
          <span>Sound</span>
          <span className="text-white/20">·</span>
          <span>Composition</span>
          <span className="text-white/20">·</span>
          <span>Performance</span>
        </motion.div>
      </div>

      {/* Gentle scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-px h-16 bg-white/10"
          animate={{ height: [16, 24, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

