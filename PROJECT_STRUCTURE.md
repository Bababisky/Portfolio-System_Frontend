# Portfolio System - Frontend Structure

```
portfolio-frontend/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page (landing)
│   ├── globals.css             # Global styles & Tailwind
│   ├── providers.tsx           # Client-side providers (Framer Motion)
│   ├── works/
│   │   ├── page.tsx            # Portfolio list with filters
│   │   └── [slug]/
│   │       └── page.tsx        # Portfolio detail page
│   └── teams/
│       ├── page.tsx            # Team list
│       └── [slug]/
│           └── page.tsx        # Team detail with portfolios
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Tag.tsx             # Tag/badge component
│   ├── animation/
│   │   ├── PageTransition.tsx  # Framer Motion page wrapper
│   │   ├── ScrollReveal.tsx    # GSAP scroll reveal wrapper
│   │   └── Parallax.tsx        # Parallax effect component
│   └── sections/
│       ├── Hero.tsx            # Hero section
│       ├── PortfolioGrid.tsx   # Portfolio grid with filters
│       ├── PortfolioDetail.tsx # Portfolio detail content
│       └── TeamSection.tsx     # Team showcase section
├── hooks/
│   ├── useLenis.ts             # Lenis smooth scroll hook
│   └── useScrollAnimation.ts   # GSAP ScrollTrigger hook
├── lib/
│   ├── mockData.ts             # Mock data (reflects backend shape)
│   ├── constants.ts            # App constants
│   └── animations.ts           # Animation configurations
├── public/
│   └── images/                 # Static images
├── types/
│   └── index.ts                # TypeScript types
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Folder Responsibilities

### `/app`
- Next.js 13+ App Router pages
- Each folder = route
- Server components by default
- Handles routing & data fetching

### `/components/layout`
- Header: Navigation, logo, menu
- Footer: Links, copyright, social

### `/components/ui`
- Reusable UI primitives
- Button: CTAs, links
- Tag: Skills, categories

### `/components/animation`
- Animation wrappers
- PageTransition: Route transitions
- ScrollReveal: Fade/slide on scroll
- Parallax: Depth effects

### `/components/sections`
- Page-specific sections
- Hero: Landing intro
- PortfolioGrid: Filterable grid
- PortfolioDetail: Full experience view
- TeamSection: Team showcase

### `/hooks`
- Custom React hooks
- useLenis: Smooth scroll setup
- useScrollAnimation: GSAP helpers

### `/lib`
- Utilities & data
- mockData: Backend-shaped data
- constants: Config values
- animations: Reusable motion configs

### `/types`
- TypeScript definitions
- Matches backend API shape
