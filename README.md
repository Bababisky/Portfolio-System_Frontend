# Portfolio System - Frontend (Guest/Public Side)

Production-ready frontend for the Portfolio System's public-facing side. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## 🎯 System Overview

This is the **Publish/Guest side** of the Portfolio System:
- **No authentication** - Public access only
- **No role management** - Guest users view published content
- **Read-only** - All data is pre-filtered by backend (status = "published")
- **No admin features** - Approval workflows handled in separate internal system

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
portfolio-frontend/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── providers.tsx        # Client providers
│   ├── works/               # Portfolio routes
│   │   ├── page.tsx         # Portfolio list
│   │   └── [slug]/page.tsx  # Portfolio detail
│   └── teams/               # Team routes
│       ├── page.tsx         # Team list
│       └── [slug]/page.tsx  # Team detail
├── components/
│   ├── layout/              # Header, Footer
│   ├── ui/                  # Button, Tag
│   ├── animation/           # PageTransition, ScrollReveal, Parallax
│   └── sections/            # Hero, PortfolioGrid, etc.
├── hooks/                   # useLenis, useScrollAnimation
├── lib/                     # mockData, constants, animations
├── types/                   # TypeScript definitions
└── public/                  # Static assets
```

## 🎨 Tech Stack

### Core
- **Next.js 14** - App Router, Server Components, Static Generation
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Animation
- **Framer Motion** - UI animations & page transitions
- **GSAP + ScrollTrigger** - Scroll-based animations
- **Lenis** - Smooth scrolling

## 📊 Data Flow

```
Backend API (filters by status="published")
    ↓
Frontend receives only published data
    ↓
Display in UI (no permission checks needed)
```

### Mock Data Structure

All mock data in `lib/mockData.ts` reflects the backend API shape:

- **Experiences** - Published portfolio items
- **Teams** - Groups that create experiences
- **Departments** - Organizational units
- **Vendors** - External tools/services
- **Skills** - Technologies used
- **Assets** - Media files

Each entity includes detailed comments explaining:
- What it represents
- Where it comes from (database table)
- How frontend uses it

## 🎭 Key Features

### Home Page (`/`)
- Hero section with CTA
- Featured experiences (latest 3)
- Team highlights
- Smooth scroll animations

### Works Page (`/works`)
- Filterable portfolio grid
- Filter by: Team, Vendor, Skill
- Animated grid transitions
- Real-time filter updates

### Work Detail (`/works/[slug]`)
- Full experience description
- Team information
- Vendors & technologies
- Related content
- Parallax hero image

### Teams Page (`/teams`)
- Team grid with avatars
- Department tags
- Project counts

### Team Detail (`/teams/[slug]`)
- Team information
- All team projects
- Department context

## 🎬 Animation System

### Framer Motion
- Page transitions between routes
- Staggered list animations
- Interactive hover states
- Layout animations for filters

### GSAP + ScrollTrigger
- Scroll-triggered reveals
- Parallax effects
- Smooth element animations

### Lenis
- Smooth scrolling throughout
- Synced with GSAP ScrollTrigger
- Optimized performance

## 🎨 Design System

### Colors
- **Primary** - Brand blue (customizable in `tailwind.config.ts`)
- **Neutral** - Grays for text and backgrounds

### Typography
- **Display** - Headings (Clash Display or similar)
- **Sans** - Body text (Inter)
- **Mono** - Code snippets (JetBrains Mono)

### Components
- **Button** - Primary, Secondary, Ghost variants
- **Tag** - Default, Primary, Outline variants
- **Card** - Consistent card styling with hover effects

## 🔧 Configuration

### Tailwind (`tailwind.config.ts`)
- Custom colors
- Font families
- Spacing scale
- Animation keyframes

### Animations (`lib/animations.ts`)
- Framer Motion variants
- GSAP configurations
- Lenis settings
- Reusable easings

### Constants (`lib/constants.ts`)
- Site metadata
- Navigation links
- Animation durations

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-optimized interactions

## ♿ Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus visible states
- Alt text for images
- Color contrast compliance

## 🚀 Performance

- Server Components by default
- Static generation for all pages
- Optimized images (next/image)
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

## 🔄 Replacing Mock Data

To connect to real API:

1. Create API client in `lib/api.ts`
2. Replace mock data imports with API calls
3. Use Next.js data fetching:
   ```typescript
   // In page.tsx
   async function getData() {
     const res = await fetch('https://api.example.com/experiences')
     return res.json()
   }
   
   export default async function Page() {
     const data = await getData()
     return <Component data={data} />
   }
   ```

## 📝 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://portfolio.example.com
```

## 🧪 Development Tips

### Hot Reload
Changes to components auto-refresh in browser.

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🎯 Future Enhancements

- [ ] Search functionality
- [ ] Pagination for large datasets
- [ ] Image galleries with lightbox
- [ ] Social sharing
- [ ] RSS feed
- [ ] Sitemap generation
- [ ] Analytics integration

## 📄 License

Private - Internal use only

## 👥 Support

For questions or issues, contact the development team.
