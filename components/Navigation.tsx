'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-white transition-colors duration-300"
        >
          Portfolio
        </Link>
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className={`transition-colors duration-300 ${
              pathname === '/'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors duration-300 ${
              pathname === '/about'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            href="/case-studies"
            className={`transition-colors duration-300 ${
              pathname === '/case-studies'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Case Studies
          </Link>
          <Link
            href="/music"
            className={`transition-colors duration-300 ${
              pathname === '/music'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Music
          </Link>
          <Link
            href="/leadership"
            className={`transition-colors duration-300 ${
              pathname === '/leadership'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Leadership
          </Link>
        </div>
      </div>
    </nav>
  )
}

