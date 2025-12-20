# Lenis Smooth Scroll with GSAP ScrollTrigger

## Overview
This implementation provides a premium scroll experience using Lenis for smooth scrolling and GSAP ScrollTrigger for scroll-driven animations.

## 🎯 Features Implemented

### 1. **Lenis Smooth Scroll**
- **Configuration**: `lerp: 0.1`, `wheelMultiplier: 1.0`
- Butter-smooth scrolling across all modern browsers
- Integrated with GSAP ScrollTrigger for seamless animations

### 2. **Hero Section (Full-Screen)**
- ✅ Centered product image with rotation animation (0° → 15° on desktop, 0° → 7° on mobile)
- ✅ Upward translation (`translateY` 0 → -100px on desktop, 0 → -50px on mobile)
- ✅ Background color fade (black → dark gray)
- ✅ Headline fade out (opacity 1 → 0)
- ✅ Sub-text slide in from right (`translateX` +200px → 0 on desktop, +100px → 0 on mobile)
- ✅ Scroll indicator with bounce animation

### 3. **Mid Section (Scroll-Triggered at 30-50%)**
- ✅ Feature card slides in from left (`translateX` -150px → 0 on desktop, -75px → 0 on mobile)
- ✅ Card scales up (`scale` 0.8 → 1.0 on desktop, 0.9 → 1.0 on mobile)
- ✅ Parallax background with abstract shapes moving slower than scroll
- ✅ Premium gradient background and styling

### 4. **Mobile Optimization**
- ✅ Reduced rotation: 7° instead of 15°
- ✅ Less translation: 50% of desktop values
- ✅ Optimized scale values for mobile performance
- ✅ Responsive breakpoints for all animations

### 5. **No-JS Fallback**
- ✅ Graceful degradation when JavaScript is disabled
- ✅ Static content display with proper styling
- ✅ No blank spaces or broken layouts
- ✅ Uses `<noscript>` for conditional CSS

## 📂 File Structure

\`\`\`
components/
├── smooth-scroll.tsx          # Lenis initialization + GSAP integration
├── hero-scroll.tsx            # Hero section with scroll animations
├── mid-scroll.tsx             # Mid section with parallax effects
└── scroll-experience.tsx      # Combined experience with no-JS fallback

app/
├── layout.tsx                 # Updated with SmoothScroll component
├── globals.css                # Added Lenis CSS fixes
└── scroll-demo/
    └── page.tsx               # Demo page to preview the experience
\`\`\`

## 🚀 Usage

### Option 1: Demo Page
Visit \`/scroll-demo\` to see the full scroll experience in action:
\`\`\`bash
npm run dev
# Navigate to http://localhost:3000/scroll-demo
\`\`\`

### Option 2: Integrate into Your Pages
\`\`\`tsx
import ScrollExperience from '@/components/scroll-experience';

export default function YourPage() {
  return (
    <div>
      <ScrollExperience />
      {/* Your other content */}
    </div>
  );
}
\`\`\`

### Option 3: Use Individual Components
\`\`\`tsx
import HeroScroll from '@/components/hero-scroll';
import MidScroll from '@/components/mid-scroll';

export default function CustomPage() {
  return (
    <div>
      <HeroScroll />
      <MidScroll />
      {/* Your other sections */}
    </div>
  );
}
\`\`\`

## 🎨 Customization

### Adjust Lenis Parameters
Edit \`components/smooth-scroll.tsx\`:
\`\`\`tsx
const lenis = new Lenis({
  lerp: 0.1,              // Lower = smoother, slower
  wheelMultiplier: 1.0,   // Scroll speed multiplier
  duration: 1.2,          // Animation duration
});
\`\`\`

### Modify Animation Timing
Edit the respective component files:
\`\`\`tsx
scrollTrigger: {
  trigger: heroRef.current,
  start: 'top top',       // When to start
  end: 'bottom top',      // When to end
  scrub: 1,               // Smooth scrubbing (0 = no scrub)
}
\`\`\`

### Change Colors & Images
- Replace \`/placeholder.svg\` with your actual product images
- Update gradient colors in the component files
- Modify text content in the components

## 🔧 Technical Details

### Lenis + GSAP Integration
\`\`\`tsx
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
\`\`\`

### CSS Fixes for Lenis
\`\`\`css
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
\`\`\`

## 📱 Browser Support
- ✅ Chrome, Edge, Opera (Chromium)
- ✅ Safari (macOS & iOS)
- ✅ Firefox
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Notes
- All animations use GPU-accelerated properties (transform, opacity)
- Mobile devices get reduced animation complexity
- RequestAnimationFrame ensures 60fps
- ScrollTrigger automatically pauses when not in view

## 🎯 Animation Details

### Hero Section
| Property | Start | End | Duration |
|----------|-------|-----|----------|
| Rotation | 0° | 15° (7° mobile) | Scroll-based |
| TranslateY | 0 | -100px (-50px mobile) | Scroll-based |
| Background | #000 | #1a1a1a | Scroll-based |
| Headline Opacity | 1 | 0 | First 50% of scroll |
| Sub-text X | +200px | 0 | First 50% of scroll |

### Mid Section
| Property | Start | End | Trigger |
|----------|-------|-----|---------|
| Card TranslateX | -150px | 0 | At 70% viewport |
| Card Scale | 0.8 | 1.0 | At 70% viewport |
| Parallax Y | 0 | 200px | Entire section |

## 🚨 Troubleshooting

### Animations not working?
- Ensure GSAP and Lenis are installed: \`npm install gsap lenis --legacy-peer-deps\`
- Check browser console for errors
- Verify ScrollTrigger is registered: \`gsap.registerPlugin(ScrollTrigger)\`

### Choppy scrolling?
- Reduce \`lerp\` value for smoother motion
- Check if you have other scroll libraries conflicting
- Ensure no CSS \`scroll-behavior: smooth\` is set elsewhere

### Mobile performance issues?
- The code already has mobile optimizations
- Consider reducing animation complexity further
- Test on actual devices, not just browser dev tools

## 📝 Next Steps

To enhance further, consider:
1. Add more scroll-triggered sections
2. Implement horizontal scroll sections
3. Add magnetic cursor effects
4. Create scroll-linked SVG animations
5. Integrate with your existing page content

## 🎬 Demo
Visit \`http://localhost:3000/scroll-demo\` after running \`npm run dev\`

---

**Note**: This implementation follows the exact specifications provided, including Lenis parameters, animation timings, mobile optimizations, and no-JS fallbacks.
