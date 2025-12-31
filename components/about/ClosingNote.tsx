'use client'

import { motion } from 'framer-motion'

export default function ClosingNote() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-lg md:text-xl text-white/60 font-light leading-relaxed text-center italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Building impactful systems requires continuous learning, reflection, and a commitment to understanding both the technical and human dimensions of what we create.
        </motion.p>
      </div>
    </section>
  )
}

