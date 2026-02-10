# Portfolio System - Complete Setup Guide

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- Code editor (VS Code recommended)
- Terminal/Command line access

## 🚀 Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis

### 2. Verify Installation

Check that all packages installed correctly:

```bash
npm list --depth=0
```

You should see all dependencies from `package.json`.

### 3. Start Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

### 4. Verify Pages Work

Visit these URLs to confirm everything works:
- Home: `http://localhost:3000/`
- Works: `http://localhost:3000/works`
- Work Detail: `http://localhost:3000/works/ecommerce-platform-redesign`
- Teams: `http://localhost:3000/teams`
- Team Detail: `http://localhost:3000/teams/frontend-team`

## 🎨 Customization Guide

### Update Branding

#### 1. Site Name & Description
Edit `lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: 'Your Company Name',
  description: 'Your description',
  url: 'https://yoursite.com',
  ogImage: '/images/og-image.jpg',
}
```

#### 2. Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Change these hex values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

#### 3. Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

### Add Real Images

1. Place images in `public/images/` following the structure in `public/images/README.md`
2. Update mock data in `lib/mockData.ts` with real image paths
3. Images are automatically optimized by Next.js

### Connect to Real API

#### Option 1: Replace Mock Data Functions

Edit `lib/mockData.ts`:
```typescript
// Before (mock)
export const experiences = [...];

// After (API)
export async function getExperiences() {
  const res = await fetch('https://api.example.com/experiences');
  return res.json();
}
```

#### Option 2: Create API Client

Create `lib/api.ts`:
```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getExperiences() {
  const res = await fetch(`${API_URL}/experiences`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function getExperienceBySlug(slug: string) {
  const res = await fetch(`${API_URL}/experiences/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
```

Then update pages to use async data:
```typescript
// app/works/page.tsx
export default async function WorksPage() {
  const experiences = await getExperiences();
  return <PortfolioGrid experiences={experiences} />;
}
```

## 🎬 Animation Customization

### Adjust Animation Speed

Edit `lib/animations.ts`:
```typescript
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } // Change this
  },
};
```

### Disable Smooth Scroll

Edit `hooks/useLenis.ts`:
```typescript
// Comment out or remove useLenis() call in app/providers.tsx
```

### Change Scroll Animation Triggers

Edit `components/animation/ScrollReveal.tsx`:
```typescript
scrollTrigger: {
  trigger: element,
  start: 'top 85%', // Change when animation starts
  toggleActions: 'play none none reverse',
}
```

## 📱 Responsive Breakpoints

Tailwind breakpoints (edit in `tailwind.config.ts`):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Usage in components:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🔧 Common Tasks

### Add New Page

1. Create file in `app/` directory:
```typescript
// app/about/page.tsx
export default function AboutPage() {
  return <div>About content</div>;
}
```

2. Add to navigation in `lib/constants.ts`:
```typescript
export const NAVIGATION = {
  main: [
    { label: 'About', href: '/about' },
  ],
}
```

### Add New Component

1. Create in appropriate directory:
```typescript
// components/ui/Card.tsx
export function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

2. Import and use:
```typescript
import { Card } from '@/components/ui/Card';
```

### Add New Filter

Edit `components/sections/PortfolioGrid.tsx`:
```typescript
const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

// Add to filter logic
if (selectedDepartment && exp.department.slug !== selectedDepartment) 
  return false;
```

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` directory.

### Test Production Build Locally

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Deploy to Other Platforms

Most platforms support Next.js:
- **Netlify**: Add `netlify.toml` config
- **AWS Amplify**: Connect GitHub repo
- **Docker**: Use official Next.js Docker example

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors
```bash
# Check types
npm run type-check

# Restart TypeScript server in VS Code
Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Styles Not Updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📊 Performance Optimization

### Enable Image Optimization

Add image domains in `next.config.js`:
```javascript
images: {
  domains: ['your-cdn.com'],
}
```

### Add Caching Headers

Create `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

### Analyze Bundle Size

```bash
npm install @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:
```bash
ANALYZE=true npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Getting Help

If you encounter issues:
1. Check this guide's troubleshooting section
2. Review error messages carefully
3. Search Next.js documentation
4. Contact the development team

## ✅ Checklist

Before going to production:
- [ ] Replace mock data with real API
- [ ] Add real images
- [ ] Update branding (colors, fonts, logo)
- [ ] Test all pages and links
- [ ] Verify responsive design on mobile
- [ ] Check accessibility with screen reader
- [ ] Run Lighthouse audit
- [ ] Set up analytics
- [ ] Configure error tracking
- [ ] Add sitemap and robots.txt
- [ ] Test production build locally
- [ ] Set up CI/CD pipeline
