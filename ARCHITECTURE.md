# Portfolio System - Frontend Architecture

## 🏗️ System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                    BACKEND SYSTEM                        │
│  (Handles: Auth, Roles, Approval, Status Management)    │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API (Filtered Data)
                     │ status = "published"
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND (This App)                     │
│              Guest/Public Side - Read Only               │
└─────────────────────────────────────────────────────────┘
```

### Key Principles

1. **No Authentication** - Public access, no login required
2. **No Authorization** - No role checks, no permissions
3. **Pre-filtered Data** - Backend sends only published content
4. **Read-Only** - Display data as-is, no mutations
5. **Static Generation** - All pages pre-rendered at build time

## 📊 Data Architecture

### Entity Relationships

```
Department (1) ──────┐
                     │
                     ├──> Team (N) ──────┐
                     │                    │
                     │                    ├──> Experience (N)
                     │                    │         │
                     └────────────────────┘         │
                                                    │
Vendor (1) ──> Skill (N) ──────────────────────────┤
                                                    │
Asset (N) <─────────────────────────────────────────┘
```

### Data Flow

```
1. User visits page
   ↓
2. Next.js fetches data (build time or request time)
   ↓
3. Backend API returns filtered data (status="published")
   ↓
4. Frontend receives clean data
   ↓
5. Components render data
   ↓
6. User sees published content
```

### Mock Data Structure

```typescript
// All data in lib/mockData.ts follows this pattern:

Experience {
  id: string
  slug: string
  title: string
  description: string
  status: "published"  // Always published on frontend
  team: Team           // Populated relationship
  department: Department
  vendors: Vendor[]
  skills: Skill[]
  assets: Asset[]
  published_at: string
}
```

## 🎨 Component Architecture

### Component Hierarchy

```
RootLayout
├── Providers (Client)
│   ├── AnimatePresence (Framer Motion)
│   └── Lenis (Smooth Scroll)
├── Header (Client)
└── Main Content
    ├── PageTransition (Client)
    └── Page Components
        ├── Hero (Client)
        ├── ScrollReveal (Client)
        └── Content Sections
```

### Component Types

#### Server Components (Default)
- Pages (`app/**/page.tsx`)
- Layouts (`app/**/layout.tsx`)
- Static sections

**Benefits:**
- Zero JavaScript to client
- Direct data fetching
- Better SEO
- Faster initial load

#### Client Components (`'use client'`)
- Interactive UI (filters, buttons)
- Animation wrappers
- Hooks (useState, useEffect)
- Browser APIs

**When to use:**
- User interactions
- Animations
- Browser-only features

### Component Organization

```
components/
├── layout/          # Site-wide layout
│   ├── Header.tsx   # Navigation (client)
│   └── Footer.tsx   # Footer (server)
├── ui/              # Reusable primitives
│   ├── Button.tsx   # Button component
│   └── Tag.tsx      # Tag/badge component
├── animation/       # Animation wrappers (client)
│   ├── PageTransition.tsx
│   ├── ScrollReveal.tsx
│   └── Parallax.tsx
└── sections/        # Page sections
    ├── Hero.tsx
    ├── PortfolioGrid.tsx
    └── PortfolioDetail.tsx
```

## 🎬 Animation Architecture

### Three-Layer Animation System

#### Layer 1: Framer Motion (UI & Transitions)
```typescript
// Page transitions
PageTransition → AnimatePresence → Route changes

// UI animations
Button hover → Framer Motion → Scale/color change
Card enter → Framer Motion → Fade in
```

**Use for:**
- Page transitions
- UI interactions
- Layout animations
- Staggered lists

#### Layer 2: GSAP + ScrollTrigger (Scroll Animations)
```typescript
// Scroll reveals
ScrollReveal → GSAP → Fade/slide on scroll

// Parallax
Parallax → GSAP → Move on scroll
```

**Use for:**
- Scroll-triggered animations
- Parallax effects
- Complex timelines
- Precise control

#### Layer 3: Lenis (Smooth Scrolling)
```typescript
// Smooth scroll
useLenis → Lenis → Smooth page scroll
         → Sync with GSAP ScrollTrigger
```

**Use for:**
- Page-wide smooth scrolling
- Better scroll experience
- GSAP integration

### Animation Flow

```
User scrolls page
    ↓
Lenis smooths scroll
    ↓
GSAP ScrollTrigger detects position
    ↓
ScrollReveal component animates
    ↓
Element fades/slides into view
```

## 🗂️ Routing Architecture

### App Router Structure

```
app/
├── layout.tsx              # Root layout (all pages)
├── page.tsx                # Home: /
├── works/
│   ├── page.tsx            # Works list: /works
│   └── [slug]/
│       └── page.tsx        # Work detail: /works/:slug
└── teams/
    ├── page.tsx            # Teams list: /teams
    └── [slug]/
        └── page.tsx        # Team detail: /teams/:slug
```

### Static Generation

All pages use Static Site Generation (SSG):

```typescript
// Generate static paths at build time
export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

// Result: Pre-rendered HTML for each experience
// /works/ecommerce-platform-redesign.html
// /works/design-system-v2.html
// etc.
```

**Benefits:**
- Instant page loads
- No server needed
- Perfect SEO
- CDN cacheable

## 🎨 Styling Architecture

### Tailwind CSS Approach

```
Utility-first → Compose in JSX → No CSS files needed

<div className="card p-6 hover:shadow-lg">
  ↓
  Tailwind generates minimal CSS
  ↓
  Optimized bundle (only used classes)
```

### Style Layers

1. **Base Layer** (`@layer base`)
   - Typography defaults
   - Focus styles
   - Selection colors

2. **Component Layer** (`@layer components`)
   - Reusable patterns (`.card`, `.btn`)
   - Complex compositions
   - Shared styles

3. **Utility Layer** (`@layer utilities`)
   - Custom utilities
   - One-off helpers

### Design Tokens

```typescript
// tailwind.config.ts
colors: {
  primary: { ... },  // Brand colors
  neutral: { ... },  // Grays
}

spacing: {
  18: '4.5rem',      // Custom spacing
}

fontSize: {
  'display-lg': [...], // Custom sizes
}
```

## 🔄 State Management

### No Global State Needed

This app uses **local state only**:

```typescript
// Filter state in PortfolioGrid
const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

// No Redux, Zustand, or Context needed
```

**Why?**
- Read-only data
- No user sessions
- No complex interactions
- Simple filtering only

### State Location

```
Component State (useState)
    ↓
Filter experiences locally
    ↓
Re-render filtered list
```

## 📦 Build Architecture

### Build Process

```
1. npm run build
   ↓
2. Next.js compiles TypeScript
   ↓
3. Tailwind generates CSS
   ↓
4. Pages pre-rendered (SSG)
   ↓
5. Assets optimized
   ↓
6. Output to .next/ directory
```

### Output Structure

```
.next/
├── static/
│   ├── css/           # Optimized CSS
│   ├── chunks/        # JavaScript bundles
│   └── media/         # Optimized images
└── server/
    └── pages/         # Pre-rendered HTML
```

## 🚀 Performance Architecture

### Optimization Strategies

1. **Static Generation**
   - All pages pre-rendered
   - No server processing
   - Instant loads

2. **Code Splitting**
   - Automatic by Next.js
   - Each page = separate bundle
   - Lazy load components

3. **Image Optimization**
   - next/image component
   - Automatic WebP conversion
   - Responsive sizes
   - Lazy loading

4. **CSS Optimization**
   - Tailwind purges unused styles
   - Critical CSS inlined
   - Minimal bundle size

5. **JavaScript Optimization**
   - Server Components (zero JS)
   - Client Components only when needed
   - Tree shaking

### Performance Metrics

Target scores (Lighthouse):
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔒 Security Architecture

### Security Considerations

1. **No Authentication** - No credentials to protect
2. **Read-Only** - No data mutations
3. **Public Data** - All data already approved
4. **No API Keys** - No secrets in frontend
5. **Static Files** - No server vulnerabilities

### Best Practices

- Sanitize user input (if search added)
- Use HTTPS in production
- Set security headers
- Regular dependency updates

## 📱 Responsive Architecture

### Mobile-First Approach

```
Design for mobile (320px)
    ↓
Add tablet styles (768px)
    ↓
Add desktop styles (1024px+)
```

### Breakpoint Strategy

```typescript
// Tailwind breakpoints
sm:  640px  // Small tablets
md:  768px  // Tablets
lg:  1024px // Laptops
xl:  1280px // Desktops
2xl: 1536px // Large screens

// Usage
<div className="text-base md:text-lg lg:text-xl">
```

## 🧪 Testing Strategy

### Recommended Testing

1. **Type Safety** - TypeScript catches errors
2. **Visual Testing** - Manual QA on devices
3. **Lighthouse** - Performance audits
4. **Accessibility** - Screen reader testing

### Future Testing

- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright)
- Visual regression (Chromatic)

## 🔮 Future Architecture Considerations

### Scalability

If the app grows, consider:

1. **API Integration**
   - Replace mock data
   - Add loading states
   - Error handling

2. **Search**
   - Algolia or similar
   - Client-side search
   - Filters + search combo

3. **Pagination**
   - Infinite scroll
   - Page-based navigation
   - Virtual scrolling

4. **Caching**
   - SWR or React Query
   - Stale-while-revalidate
   - Optimistic updates

5. **Analytics**
   - Google Analytics
   - Custom events
   - Performance monitoring

## 📚 Architecture Decisions

### Why Next.js App Router?
- Modern React features
- Server Components
- Built-in optimization
- Great DX

### Why Tailwind CSS?
- Utility-first approach
- No CSS files needed
- Consistent design
- Small bundle size

### Why Framer Motion + GSAP?
- Framer Motion: UI animations
- GSAP: Scroll animations
- Best of both worlds
- Complementary strengths

### Why Static Generation?
- Public content
- No dynamic data
- Best performance
- Simple deployment

### Why TypeScript?
- Type safety
- Better DX
- Catch errors early
- Self-documenting

## 🎯 Architecture Goals Achieved

✅ **Performance** - Static generation, optimized assets
✅ **Scalability** - Clean structure, easy to extend
✅ **Maintainability** - Clear organization, TypeScript
✅ **Accessibility** - Semantic HTML, ARIA labels
✅ **SEO** - Pre-rendered HTML, meta tags
✅ **DX** - Hot reload, type safety, clear patterns
✅ **UX** - Smooth animations, responsive design
