'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LeadershipClosing() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-lg md:text-xl text-white/70 font-light mb-12 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Building impactful systems requires continuous learning, reflection, and a commitment to understanding both the technical and human dimensions of what we create.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className="px-6 py-3 border border-white/20 bg-white/5 text-white/60 font-light cursor-not-allowed"
            disabled
          >
            Download Academic CV
          </button>
          <Link
            href="/case-studies"
            className="px-6 py-3 border border-white/20 bg-white/5 text-white font-light hover:bg-white/10 transition-colors duration-300"
          >
            View Case Studies
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="px-6 py-3 border border-white/20 bg-white/5 text-white font-light hover:bg-white/10 transition-colors duration-300"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

