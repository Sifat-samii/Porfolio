'use client'

import { motion } from 'framer-motion'

export default function FutureDirection() {
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
          Future Academic & Professional Direction
        </motion.h2>

        <motion.div
          className="space-y-6 text-white/80 font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-base md:text-lg">
            I aim to deepen my understanding of product management, systems design, and the intersection of technology and society through advanced study. My long-term goal is to contribute to research and practice that builds more thoughtful, inclusive, and impactful products and systems.
          </p>

          <p className="text-base md:text-lg">
            My interdisciplinary background—spanning engineering, product development, and creative practice—provides a foundation for research that bridges technical and human dimensions. I am particularly interested in how systems thinking, product methodologies, and human-centered design can be applied to address complex challenges in technology and society.
          </p>

          <p className="text-base md:text-lg">
            I seek programs that combine academic rigor with practical application, preparing me to lead at the intersection of technology, product, and human impact. My goal is to contribute to both academic knowledge and practical implementation, working with institutions and teams to build systems that are effective, responsible, and equitable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

