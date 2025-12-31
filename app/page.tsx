import Hero from '@/components/Hero'
import IdentityTiles from '@/components/IdentityTiles'
import HowIThink from '@/components/HowIThink'
import CredibilityStrip from '@/components/CredibilityStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IdentityTiles />
      <HowIThink />
      <CredibilityStrip />
      <Footer />
    </main>
  )
}

