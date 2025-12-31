'use client'

import { motion } from 'framer-motion'

export default function VisualRhythmBreak() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden border-t border-white/10">
      {/* Abstract waveform / noise texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grain-texture opacity-40" />
        
        {/* Animated waveform */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${300 + i * 20} Q300,${200 + i * 30} 600,${300 + i * 20} T1200,${300 + i * 20}`}
              fill="none"
              stroke={`rgba(184, 115, 90, ${0.15 - i * 0.015})`}
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.2 - i * 0.02,
              }}
              transition={{
                duration: 4 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Slow gradient drift */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(184, 115, 90, 0.08) 0%, transparent 60%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 40%, rgba(184, 115, 90, 0.08) 0%, transparent 60%)`,
              `radial-gradient(circle at 70% 60%, rgba(184, 115, 90, 0.08) 0%, transparent 60%)`,
              `radial-gradient(circle at 30% 40%, rgba(184, 115, 90, 0.08) 0%, transparent 60%)`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}

