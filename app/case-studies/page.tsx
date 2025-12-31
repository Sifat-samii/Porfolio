import CaseStudiesIntro from '@/components/case-studies/CaseStudiesIntro'
import CaseStudyIndex from '@/components/case-studies/CaseStudyIndex'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <CaseStudiesIntro />
      <CaseStudyIndex />
      <Footer />
    </main>
  )
}

