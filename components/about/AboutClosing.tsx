'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutClosing() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-xl md:text-2xl text-white/80 font-light mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          I care about building things that remain useful under real constraints.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/case-studies"
            className="px-8 py-3 border border-white/20 bg-white/5 text-white font-light hover:bg-white/10 transition-colors duration-300"
          >
            View Case Studies
          </Link>
          <button
            className="px-8 py-3 border border-white/20 bg-white/5 text-white/40 font-light cursor-not-allowed"
            disabled
          >
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  )
}

