'use client'

const keywords = [
  'Product',
  'UX',
  'Systems',
  'Research',
  'Sound Design',
  'Leadership',
]

export default function CredibilityStrip() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-base text-white/40 font-light tracking-wide">
          {keywords.map((keyword, index) => (
            <span key={keyword} className="hover:text-white/60 transition-colors duration-300">
              {keyword}
              {index < keywords.length - 1 && (
                <span className="mx-6 text-white/20">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

