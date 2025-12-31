# Portfolio Website

A high-end personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and utilities
├── components/
│   ├── Hero.tsx        # Hero section with headline
│   ├── IdentityTiles.tsx  # 2x2 grid of interactive tiles
│   ├── HowIThink.tsx   # Signature section with cards
│   ├── CredibilityStrip.tsx  # Keywords section
│   └── Footer.tsx      # Footer with links
└── tailwind.config.ts  # Tailwind configuration
```

## Design System

- **Background**: `#0e0e0e` (near-black)
- **Accent**: `#d4a574` (muted amber/warm gold)
- **Display Font**: Playfair Display (editorial serif)
- **Body Font**: Inter (clean sans-serif)

## Build

```bash
npm run build
```

## License

Private project.

