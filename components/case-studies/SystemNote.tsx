'use client'

import { motion } from 'framer-motion'

interface SystemNoteProps {
  children: React.ReactNode
}

export default function SystemNote({ children }: SystemNoteProps) {
  return (
    <motion.div
      className="ml-8 md:ml-12 mt-6 mb-6 pl-4 border-l border-white/10 text-sm text-white/50 font-light italic"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

