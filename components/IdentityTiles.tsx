'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Tile {
  title: string
  philosophy: string
  anchor: string
}

const tiles: Tile[] = [
  {
    title: 'Product Thinking',
    philosophy: 'Problems are systems; solutions are interventions.',
    anchor: '#product',
  },
  {
    title: 'Technology & Systems',
    philosophy: 'Architecture is philosophy made tangible.',
    anchor: '#technology',
  },
  {
    title: 'Music & Sound',
    philosophy: 'Rhythm and harmony reveal patterns in complexity.',
    anchor: '#music',
  },
  {
    title: 'Leadership & Impact',
    philosophy: 'Direction emerges from clarity and empathy.',
    anchor: '#leadership',
  },
]

export default function IdentityTiles() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'IdentityTiles.tsx:35',message:'IdentityTiles mounted',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'D'})}).catch(()=>{});
  }, []);
  // #endregion

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {tiles.map((tile, index) => (
            <TileCard key={tile.title} tile={tile} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TileCard({ tile, index }: { tile: Tile; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      onClick={() => {
        // Smooth scroll to anchor (placeholder for now)
        document.querySelector(tile.anchor)?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <motion.div
        className="relative border border-white/10 bg-white/5 p-8 md:p-12 h-full backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle line graphic */}
        <div className="absolute top-0 left-0 w-16 h-px bg-accent/30" />
        <div className="absolute top-0 left-0 w-px h-16 bg-accent/30" />

        <h2 className="font-display text-2xl md:text-3xl mb-4 text-white">
          {tile.title}
        </h2>

        <motion.p
          className="text-sm md:text-base text-white/60 font-light leading-relaxed overflow-hidden"
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            maxHeight: isHovered ? 200 : 0,
          }}
          transition={{ duration: 0.3 }}
          // #region agent log
          onUpdate={(latest) => {
            fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'IdentityTiles.tsx:90',message:'Height animation update',data:{isHovered,maxHeight:latest.maxHeight,opacity:latest.opacity},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
          }}
          // #endregion
        >
          {tile.philosophy}
        </motion.p>

        {/* Hover accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

