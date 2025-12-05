# Ayurveda Salud

Een moderne website voor een Ayurvedisch wellness centrum, gebouwd met Next.js 15 en de App Router.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond & Nunito Sans

## Getting Started

### Prerequisites

- Node.js 18.17 of hoger
- npm, yarn, of pnpm

### Installation

1. Installeer dependencies:

```bash
npm install
```

2. Start de development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in je browser.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── not-found.tsx    # 404 pagina
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── ProductsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── providers.tsx   # Client-side providers
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
public/
└── images/             # Static images
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

- 🌿 Prachtige Ayurvedische esthetiek
- 📱 Volledig responsive design
- 🎨 Aangepaste kleurenpalet met natuurlijke tinten
- ✨ Vloeiende animaties met Framer Motion
- 🌙 Ondersteuning voor dark mode
- 📝 Contact formulier
- 🛒 Product sectie

## License

MIT
