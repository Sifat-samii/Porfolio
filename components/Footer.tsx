'use client'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()}
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
            <a
              href="mailto:hello@example.com"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <button
              className="text-white/40 cursor-not-allowed"
              disabled
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

