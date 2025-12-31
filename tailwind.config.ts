import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        accent: {
          DEFAULT: '#d4a574',
          light: '#e8c49a',
          dark: '#b8935a',
        },
        teal: {
          DEFAULT: '#5fb3b3',
          light: '#7fc9c9',
          dark: '#4a9a9a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

