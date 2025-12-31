import LeadershipOpening from '@/components/leadership/LeadershipOpening'
import LeadershipImpact from '@/components/leadership/LeadershipImpact'
import AcademicFoundation from '@/components/leadership/AcademicFoundation'
import FutureDirection from '@/components/leadership/FutureDirection'
import ContributionStatement from '@/components/leadership/ContributionStatement'
import LeadershipClosing from '@/components/leadership/LeadershipClosing'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Leadership() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <LeadershipOpening />
      <LeadershipImpact />
      <AcademicFoundation />
      <FutureDirection />
      <ContributionStatement />
      <LeadershipClosing />
      <Footer />
    </main>
  )
}

