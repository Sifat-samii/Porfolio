'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  // #region agent log
  useEffect(() => {
    if (typeof window === 'undefined') {
      fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:12',message:'SSR check - window undefined',data:{hasWindow:false},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'B'})}).catch(()=>{});
      return;
    }
    fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:14',message:'Setting up scroll listener',data:{hasWindow:true},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'B'})}).catch(()=>{});
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:17',message:'Scroll event fired',data:{scrollY:newScrollY,oldScrollY:scrollY},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      setScrollY(newScrollY);
    }
    window.addEventListener('scroll', handleScroll)
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:23',message:'Scroll listener added',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    return () => {
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:26',message:'Cleaning up scroll listener',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // #endregion

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:32',message:'scrollY state changed',data:{scrollY},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
  }, [scrollY])
  // #endregion

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with grain and grid */}
      <div className="absolute inset-0 grain-texture system-grid opacity-50" />
      
      {/* Subtle background animation based on scroll */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% ${50 + scrollY * 0.1}%, rgba(212, 165, 116, 0.05) 0%, transparent 50%)`,
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        // #region agent log
        onUpdate={(latest) => {
          fetch('http://127.0.0.1:7244/ingest/6e422441-964c-45b6-afdf-72537ee05b8c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:55',message:'Motion div opacity animation',data:{opacity:latest.opacity},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
        }}
        // #endregion
      />

      {/* Minimal navigation */}
      <Navigation />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          I design systems, products, and experiences —<br />
          <span className="text-accent">driven by logic, creativity, and human impact.</span>
        </motion.h1>
        
        <motion.p
          className="text-sm md:text-base text-white/60 font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Aspiring Product Manager · Creative Technologist · Musician
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-px h-12 bg-white/20" />
      </motion.div>
    </section>
  )
}

