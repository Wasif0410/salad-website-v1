# MaestroClass - Technical Specification

## Dependencies

### Core
- react
- react-dom
- typescript
- vite
- tailwindcss
- @tailwindcss/typography

### Animation
- **gsap** + ScrollTrigger - Section entrance animations, parallax, What's Included scroll-linked card fan
- **lenis** - Smooth scrolling
- **framer-motion** - FAQ accordion animations, hover states

### UI Components
- lucide-react - Icons (Star, Instagram, Phone, Mail, Plus, X, Menu, Sparkles)
- shadcn/ui components: accordion, select, input, textarea

### Fonts
- @fontsource/playfair-display - Display headings (italic)
- @fontsource/inter - Body text
- @fontsource/jetbrains-mono - Section numbers

---

## Component Inventory

### Layout
| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | Single |
| Footer | Custom | Single |

### Sections
| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Full viewport, background image, floating CTA |
| IntroSection | Custom | Dark bg, 4-image row, description |
| ExperiencesSection | Custom | Sage bg, 5 alternating cards |
| HostSection | Custom | Portrait, bio text |
| WorkshopGallery | Custom | Horizontal image grid, 2 rows |
| WhatsIncludedSection | Custom | Dark bg, scroll-linked stacked cards |
| LocationSection | Custom | Sage bg, image + text card layout |
| TestimonialsSection | Custom | 4-column card grid |
| FAQSection | Custom | Two-column, accordion |
| ApplySection | Custom | Two-column, image + form |

### Reusable Components
| Component | Source | Used By |
|-----------|--------|---------|
| SectionHeader | Custom | Experiences, WorkshopGallery, Location, Testimonials, FAQ |
| ExperienceCard | Custom | ExperiencesSection (x5) |
| TestimonialCard | Custom | TestimonialsSection (x4) |
| IncludedCard | Custom | WhatsIncludedSection (x4) |
| StarRating | Custom | TestimonialCard (x4) |

### Hooks
| Hook | Purpose |
|------|---------|
| useLenis | Initialize Lenis smooth scroll |
| useScrollAnimation | GSAP ScrollTrigger entrance animations |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| **Lenis Smooth Scroll** | lenis | Global init in useLenis hook, lerp 0.1 | Low |
| **Hero Entrance** | GSAP | Timeline: title, subtitle, CTA staggered fade+translateY | Medium |
| **Hero Background Scale** | GSAP | scale 1.05 -> 1 over 2s on load | Low |
| **Navbar Scroll Effect** | CSS/JS | Toggle class on scroll > 50px for backdrop blur | Low |
| **Section Entrances** | GSAP ScrollTrigger | Generic hook: opacity 0->1, y 40->0, start "top 80%" | Medium |
| **Intro Images Stagger** | GSAP ScrollTrigger | y 40->0, stagger 0.15s | Low |
| **Experience Cards Entrance** | GSAP ScrollTrigger | y 60->0, stagger 0.2s, number scale 0.8->1 | Medium |
| **Experience Image Parallax** | GSAP ScrollTrigger | Slower scroll speed on images | Medium |
| **Host Section Entrance** | GSAP ScrollTrigger | Title fade, image scale 1.02->1, bio y 20->0 | Medium |
| **Gallery Parallax** | GSAP ScrollTrigger | Horizontal translate on scroll, 2 rows opposite directions | High |
| **What's Included Card Fan** | GSAP ScrollTrigger | Pin section, scrub-linked rotation/position spread | High |
| **Location Entrance** | GSAP ScrollTrigger | Images y 30->0, text card x 30->0 | Medium |
| **Testimonials Stagger** | GSAP ScrollTrigger | y 40->0, stagger 0.1s | Low |
| **FAQ Slide In** | GSAP ScrollTrigger | Items x 30->0, stagger 0.08s | Medium |
| **FAQ Accordion** | Framer Motion | AnimatePresence for height auto, plus->x rotation | Medium |
| **Apply Form Stagger** | GSAP ScrollTrigger | y 20->0, stagger 0.1s | Low |
| **Button Hover States** | CSS | scale(1.02), shadow transition 0.2s | Low |
| **Link Hovers** | CSS | opacity/translateX transitions | Low |

---

## State & Logic

### FAQ Accordion
- Use shadcn/ui Accordion component (Radix UI primitive)
- Single open item at a time (collapsible)
- Framer Motion for smooth height animation

### Form
- Controlled inputs with React state
- Select dropdown for skill level
- Basic validation (required fields)
- Submit handler (console.log for demo)

### Navbar
- Scroll listener to toggle scrolled state
- Mobile: hamburger menu with slide-out drawer

---

## Project Structure

```
src/
  sections/
    Navbar.tsx
    HeroSection.tsx
    IntroSection.tsx
    ExperiencesSection.tsx
    HostSection.tsx
    WorkshopGallery.tsx
    WhatsIncludedSection.tsx
    LocationSection.tsx
    TestimonialsSection.tsx
    FAQSection.tsx
    ApplySection.tsx
    Footer.tsx
  components/
    SectionHeader.tsx
    ExperienceCard.tsx
    TestimonialCard.tsx
    IncludedCard.tsx
    StarRating.tsx
    FloatingCTA.tsx
  hooks/
    useLenis.ts
    useScrollAnimation.ts
  lib/
    utils.ts
  App.tsx
  main.tsx
  index.css
public/
  images/ (generated assets)
```

---

## Implementation Order

1. **Setup**: Install dependencies, configure fonts, set up Tailwind theme
2. **Global**: Lenis smooth scroll, base CSS, font loading
3. **Layout**: Navbar (with scroll effect), Footer
4. **Sections (top to bottom)**: Hero -> Intro -> Experiences -> Host -> Gallery -> What's Included -> Location -> Testimonials -> FAQ -> Apply
5. **Floating CTA**: Fixed position button
6. **Polish**: All animations, responsive adjustments
7. **Build & Deploy**
