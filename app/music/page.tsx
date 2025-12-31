import MusicOpening from '@/components/music/MusicOpening'
import CreativePhilosophy from '@/components/music/CreativePhilosophy'
import MusicPractice from '@/components/music/MusicPractice'
import VisualRhythmBreak from '@/components/music/VisualRhythmBreak'
import CreativeBridge from '@/components/music/CreativeBridge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Music() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <MusicOpening />
      <CreativePhilosophy />
      <MusicPractice />
      <VisualRhythmBreak />
      <CreativeBridge />
      <Footer />
    </main>
  )
}

