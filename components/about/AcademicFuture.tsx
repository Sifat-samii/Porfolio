'use client'

import { motion } from 'framer-motion'

export default function AcademicFuture() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Academic & Future Direction
        </motion.h2>

        <div className="space-y-8 text-white/70 font-light leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Academic Background
            </h3>
            <p className="text-base md:text-lg">
              My academic journey has been interdisciplinary, combining technical rigor with systems thinking and human-centered design. I've pursued studies that bridge engineering, product development, and the social implications of technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Research Interests
            </h3>
            <p className="text-base md:text-lg">
              I'm interested in how AI and intelligent systems can be designed with human values at their core, how product thinking can address complex societal challenges, and how systems architecture influences both technical and social outcomes. My focus is on building products and systems that are not only effective but also responsible and equitable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4 text-white">
              Future Study Goals
            </h3>
            <p className="text-base md:text-lg">
              I aim to deepen my understanding of product management, systems design, and the intersection of technology and society through advanced study. My goal is to contribute to research and practice that builds more thoughtful, inclusive, and impactful products and systems. I seek programs that combine academic rigor with practical application, preparing me to lead at the intersection of technology, product, and human impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

