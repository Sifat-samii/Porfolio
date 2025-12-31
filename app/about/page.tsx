import AboutHero from '@/components/about/AboutHero'
import ThinkingSnapshot from '@/components/about/ThinkingSnapshot'
import FocusShiftTimeline from '@/components/about/FocusShiftTimeline'
import WhatIOptimizeFor from '@/components/about/WhatIOptimizeFor'
import CapabilityMatrix from '@/components/about/CapabilityMatrix'
import AcademicToggle from '@/components/about/AcademicToggle'
import AboutClosing from '@/components/about/AboutClosing'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <AboutHero />
      <ThinkingSnapshot />
      <FocusShiftTimeline />
      <WhatIOptimizeFor />
      <CapabilityMatrix />
      <AcademicToggle />
      <AboutClosing />
      <Footer />
    </main>
  )
}

