# Website Implementation Guide

This guide documents the current website in `app/` so another agent can continue building features while matching the existing template, visual language, animation style, and content direction.

The site began as a MaestroClass / Tuscan workshop style template and has been partially adapted for SALAD Language School. The current result is intentionally editorial, premium, calm, serif-led, and animation-heavy. New work should preserve the template's cinematic pacing and restrained color system while replacing remaining cooking-retreat language where appropriate.

## Project Overview

- App location: `app/`
- Framework: Vite, React 19, TypeScript
- Styling: Tailwind CSS with custom theme tokens
- Animation: Framer Motion plus Lenis smooth scrolling
- UI helper components: shadcn-style Radix components are present, but most visible sections use custom Tailwind layouts
- Main entry: `app/src/App.tsx`
- Main stylesheet: `app/src/index.css`
- Main content/data file: `app/src/data/workshopContent.ts`
- Public assets: `app/public/images/`

Run commands from `app/`:

```bash
npm run dev
npm run build
npm run lint
```

Note: Vite may warn if the local Node version is below its recommended range, but the build has been passing in the current environment.

## Source Of Truth

The rendered homepage is composed in `app/src/App.tsx`:

```tsx
<Navbar />
<main>
  <HeroSection />
  <OverlayScrollStack base={<IntroSection />} overlay={<ExperiencesSection />} />
  <HostSection />
  <OverlayScrollStack base={<WorkshopGallery />} overlay={<WhatsIncludedSection />} />
  <LocationSection />
  <TestimonialsSection />
  <FAQSection />
  <ApplySection />
</main>
<Footer />
<FloatingCTA />
```

`app/src/pages/Home.tsx` is still a Vite starter page and is not the current homepage source. Do not use it as reference for production page structure.

## Brand Direction

### Current Brand Blend

The current visual template is still strongly influenced by the MaestroClass reference:

- Full-screen cinematic hero
- Editorial serif typography
- Sage background sections
- Deep green panels
- Rounded overlay sections
- Large sticky scroll animations
- Premium, quiet, curated atmosphere

The SALAD adaptation adds:

- Online language-learning imagery
- Trusted organization logos
- SALAD learning flow in the timeline section
- Andre Dupuy founder/host section
- Language class cards

### Desired Feel

Any new section should feel:

- Premium but approachable
- Warm and human
- Adult/professional, not childish classroom
- Calm, structured, and credible
- Online-first
- Editorial rather than SaaS-dashboard-heavy

Avoid:

- Bright primary-color education palettes
- Generic corporate SaaS cards everywhere
- Overly playful classroom graphics
- Large gradients unrelated to the current muted green/cream system
- Dense marketing sections that fight the slow cinematic template

## Color System

The active Tailwind theme is in `app/tailwind.config.js`.

### Primary Tailwind Tokens

Use these tokens before introducing custom colors:

| Token | Hex | Usage |
| --- | --- | --- |
| `dark` | `#2c3229` | dark green-gray section background, intro section, dark surfaces |
| `dark-secondary` | `#5f665d` | numbered badges, muted dark accents |
| `sage` | `#dfe5d7` | main light page background |
| `sage-dark` | `#cdd5c5` | muted cards on sage backgrounds |
| `olive` | `#171d15` | deepest green, buttons, dark cards, footer |
| `olive-light` | `#2c3229` | hover state for olive components |
| `cream` | `#dfe5d7` | light text on dark surfaces |
| `cream-dark` | `#e7edde` | secondary light text |
| `text-primary` | `#0d120b` | main dark text |
| `text-secondary` | `#2c3229` | body text on sage |
| `text-muted` | `#171d15` | supporting dark text |

### Accent Colors Currently Used Inline

Several sections use inline hex values for gold/burgundy accents:

- Gold line/accent: `#d6b152`
- Trusted eyebrow/gold: `#b59636`, `#8d752c`
- SALAD burgundy: `#8a0d3e`
- SALAD warm orange/gold: `#c87917`
- Browser mockup cream: `#fffdf9`
- Browser mockup beige: `#f4ece5`, `#eadfdb`

Use burgundy and gold sparingly. They should feel like SALAD brand accents inside the existing green editorial frame, not like a full recolor of the template.

### Background Rules

- Main light sections should generally be `bg-sage`.
- Dark immersive sections should generally be `bg-dark`.
- Deep cards, footers, and CTAs should generally be `bg-olive`.
- Overlay sections that rise over previous sticky sections usually use `rounded-t-[34px]`.
- Avoid adding new saturated colors unless they are part of SALAD brand content or a small UI mockup.

## Typography

Fonts are defined in `app/src/index.css` and `app/tailwind.config.js`.

### Font Families

- Display: `Instrument Serif`
- Body: `Satoshi`, fallback `Inter`
- Mono: `JetBrains Mono`

### Heading Style

Most major headings use:

```tsx
className="font-display italic text-text-primary text-[54px] leading-none"
```

Responsive heading variants currently used:

- Hero H1: `text-[clamp(4rem,7vw,5.5rem)] leading-[1.1]`
- Section H2: `text-[46px] sm:text-[52px] md:text-[54px] leading-none`
- Language classes H2: `text-[48px] md:text-[60px] leading-none`
- Card titles: `font-display text-[24px]` to `text-[36px]`

Guidelines:

- Keep major section headings italic serif.
- Keep body copy in Satoshi/Inter.
- Use `text-[18px] leading-[25.2px]` for normal section body copy.
- Use `text-[15px] leading-[20px]` or `text-[14px] leading-[22px]` for card/supporting copy.
- Avoid negative letter spacing. The current template uses normal letter spacing except eyebrow labels.

## Layout System

### Container

Use `.section-container` from `app/src/index.css`:

```css
.section-container {
  @apply w-full max-w-[1265px] mx-auto px-6 md:px-[72px];
}
```

Use it for most centered section content. For deliberately wider visual bands, existing sections use manual max widths:

- Timeline: `max-w-[1040px]`
- Location: `max-w-[1400px]`
- Testimonials carousel: `max-w-[1400px]`
- Language cards: `max-w-[1320px]`

### Section Spacing

Common vertical rhythm:

- Standard top/bottom on light sections: `pt-[86px] pb-[120px]`
- Larger section tops: `pt-[104px]`, `pt-[118px]`, `pt-[134px]`
- Sticky/full-screen sections: `min-h-[100dvh]`
- Overlay dark card stack: `h-[300dvh]` with sticky inner `min-h-[100dvh]`

Use generous spacing. Do not compress sections into dense SaaS blocks unless the feature absolutely requires it.

### Rounded Corners

The template is not pill/card-heavy. Use small radii:

- Image cards: `rounded-[6px]`, `rounded-[7px]`, `rounded-[8px]`
- Major overlay section top corners: `rounded-t-[34px]`
- Sticky included cards: `rounded-[18px]`
- FAQ cards: `rounded-[7px]`

Do not introduce many large rounded cards unless matching an existing section's behavior.

## Animation System

Animation is central to the site. New work should use Framer Motion patterns already present.

### Libraries

- `framer-motion` is the main animation library.
- `lenis` handles smooth page scrolling via `app/src/hooks/useLenis.ts`.
- Use `useReducedMotion()` and provide non-moving fallbacks.

### Shared Animation Timing

The dominant easing curve:

```ts
ease: [0.22, 1, 0.36, 1]
```

Also used for interactive card hover/load:

```ts
ease: [0.16, 1, 0.3, 1]
```

Typical reveal duration:

```ts
duration: 0.7 to 0.8
```

Hero settle duration:

```ts
duration: 1.25
```

### FadeIn Helper

Use `app/src/components/animations/FadeIn.tsx` for simple reveal animations:

```tsx
<FadeIn y={30} delay={0.08}>
  ...
</FadeIn>
```

Behavior:

- Initial opacity 0
- Y offset defaults to 24
- Reveals when in view
- Uses reduced motion fallback
- Viewport amount: `0.28`

### Overlay Scroll Stack

`app/src/components/animations/OverlayScrollStack.tsx` creates the "previous section stays static while next section comes up" behavior:

```tsx
<OverlayScrollStack
  base={<IntroSection />}
  overlay={<ExperiencesSection />}
/>
```

Structure:

- Parent section: `relative bg-dark`
- Base: sticky, `top-0`, `min-h-[100dvh]`, z-index 0
- Overlay: relative, z-index 10

Use this when a next section should rise over a static previous section.

### Scroll-Progress Animations

Existing pattern:

```tsx
const sectionRef = useRef<HTMLElement>(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start'],
});
const y = useTransform(scrollYProgress, [0, 1], [40, -20]);
```

Guidelines:

- Separate load-in, scroll movement, and hover animation onto nested elements.
- Do not apply `whileHover`, scroll `style={{ y }}`, and initial `whileInView` to the same motion element if they manipulate the same transform axis.
- Keep scroll transforms subtle unless the section is explicitly a sticky animation.
- Always use `useReducedMotion()` to neutralize movement where possible.

## Current Section Guide

### 1. Navbar

File: `app/src/sections/Navbar.tsx`

Purpose:

- Fixed top navigation.
- Transparent over hero initially.
- Switches to dark background after scrolling past 40px.
- Hides on downward scroll after 92px.
- Shows when scrolling up anywhere.
- Mobile menu opens dark overlay.

Links:

- Experiences: `#experiences`
- Host: `#host`
- Package: `#package`
- Location: `#location`
- FAQ: `#faq`
- CTA: `#apply`

Style:

- Height: `h-[76px]`
- Dark state: `bg-[#0d120b] text-cream`
- Transparent state: `bg-transparent text-text-primary`
- Logo text: `MaestroClass`, currently not yet adapted to SALAD
- CTA: uses `.pill-button` and `RollingText`

When editing:

- Keep scroll direction behavior intact.
- If rebranding to SALAD, update logo text and nav labels in both Navbar and Footer.
- Keep `handleNavClick` smooth-scroll behavior.

### 2. Hero

File: `app/src/sections/HeroSection.tsx`

Purpose:

- Full-viewport cinematic hero.
- Uses generated SALAD landscape image.
- Centers headline, body copy, and CTA.

Current content:

- H1: `The Lost Art of Dough`
- Body: cooking-retreat copy
- CTA: `Apply for a Seat`
- Image: `/images/salad-hero-landscape.png`

This section visually matches the template but content is still partly from the original workshop concept.

Style:

- `min-h-[100dvh]`
- `bg-sage`
- Hero image absolute full bleed
- Top/center content starts around `pt-[150px]`
- Hero title: `font-display italic text-[clamp(4rem,7vw,5.5rem)]`
- Dark bottom gradient to merge into the next dark section:
  - `from-cream/10 via-transparent to-dark/72`
  - bottom overlay `h-[34dvh] from-transparent to-dark`

Animation:

- Background image scales from `1.018` to `1`.
- Background y settles from `10` to `0`.
- Text/CTA stagger upward with opacity.
- Hero transition: `duration: 1.25`, `ease: [0.22, 1, 0.36, 1]`.

When editing:

- Keep large negative space in the hero image for centered text.
- Do not use busy imagery behind the H1.
- If adapting to SALAD, change H1 and CTA but keep the hero structure.
- Do not remove the dark bottom gradient unless you also redesign the Intro transition.

### 3. Intro / Trusted Organizations

File: `app/src/sections/IntroSection.tsx`

Purpose:

- First dark section after hero.
- Shows four staggered/rising images.
- Shows `Trusted by leading organizations`.
- Shows a logo grid of trusted companies.

Images:

- `/images/salad-intro/french-teacher-woman-professional.jpg`
- `/images/salad-intro/french-online-beginner-video-call.jpg`
- `/images/salad-intro/french-students-conversation-practice.jpg`
- `/images/salad-intro/hero-online-language-learning.jpg`

Logo sources:

- Prefer normalized logos in `/images/clients-normalized/`
- Uses `/images/clients/ciro.svg` for CIRO

Style:

- `bg-dark`
- Top gradient placed above section to blend hero into dark background
- Image grid max width: `max-w-[900px]`
- Mobile: 2 columns
- Desktop: 4 columns
- Cards use `rounded-[6px]`, dark shadow
- Trusted eyebrow uses `.trusted-eyebrow`
- Logo grid card:
  - `rounded-[12px]`
  - border `border-cream/17`
  - subtle translucent background `bg-cream/[0.035]`
  - backdrop blur

Animation:

- Intro image cards fade in individually.
- Images 2 and 4 use scroll y transform from 76px to 0.
- Eyebrow and logo panel use `FadeIn`.

When editing:

- Keep the trusted section simple. User specifically removed extra paragraph text under the eyebrow.
- Logos should remain dynamically constrained via `.trusted-logo-mark`.
- If adding more organizations, verify the grid does not create an awkward incomplete final row.

### 4. Experiences / How SALAD Works

File: `app/src/sections/ExperiencesSection.tsx`

Content source: `app/src/data/workshopContent.ts`, `experiences`

Purpose:

- Replaces original `What the 48 Hours Hold`.
- Explains how SALAD works in four steps.
- Uses alternating timeline layout with browser-style product mockups.
- Has animated central progress bar segments.

Current heading:

- Eyebrow: `The Experience`
- H2: `How Does SALAD Work?`
- Body: `From first click to confident conversation - four simple steps.`

Current steps:

1. Take Your Placement Test
2. Get Matched to Your Class
3. Learn Live with Native Teachers
4. Practice, Feedback & Progress

Visual mockup kinds:

- `assessment`
- `classes`
- `classroom`
- `dashboard`

Style:

- Section background: `bg-sage`
- Overlay shape: `rounded-t-[34px]`
- Top overlap: `mt-[56px]`
- Section padding: `pt-20 pb-[108px] md:pt-[94px] md:pb-[120px]`
- Timeline container: `max-w-[1040px]`
- Desktop grid: `md:grid-cols-[1fr_52px_1fr]`
- Timeline badge: `bg-dark-secondary`, display serif, cream text
- Central line width: `w-[2px]`
- Inactive line: `bg-text-primary/20`
- Active line: `bg-text-primary`

Animation:

- Section heading reveals upward.
- Each mockup image moves from y 38 to 0 to -18.
- Each mockup tilts as scroll progresses.
- Badge scales from 0.92 to 1 and y from 10 to 0.
- Timeline segment progress is based on the full timeline `scrollYProgress`.

Important behavior:

- Each timeline segment should not appear active before the prior segment finishes.
- Text should align visually with the image, not stick awkwardly to the top unless the copy is long.
- If adding longer copy, use top alignment intentionally, but preserve the reference-like visual balance where possible.

When editing:

- Add new step data in `workshopContent.ts`.
- If adding a new visual type, add a new mockup component and extend `ExperienceVisual`.
- Keep product mockups warm and editorial; avoid full SaaS dashboard styling unless the step needs it.
- If changing the line animation, test frames while scrolling. The section is sensitive to spacing and timing.

### 5. Host / Meet The Maestro

File: `app/src/sections/HostSection.tsx`

Purpose:

- Founder/instructor feature section.
- Currently uses Andre Dupuy image and short SALAD description.

Current content:

- Label: `Meet the Maestro`
- H2: `Andre Dupuy`
- Image: `/images/andre-dupuy.png`
- Copy: background in music, production, and language coaching; teaching French/English as rhythm and flow.

Style:

- `bg-sage`
- `pt-[86px] pb-[120px]`
- Centered text
- Image max width: `max-w-[1080px]`
- Image height: `h-[600px]`
- Image radius: `rounded-[6px]`

Animation:

- On scroll into the section, image scale animates from `1.16` to `1`.
- This creates a zoom-out reveal effect.
- Reduced motion keeps scale at `1`.

When editing:

- Keep the large portrait/image reveal.
- Use a high-resolution image with enough crop room at `object-cover`.
- Keep bio short. This template favors confident restraint.

### 6. Language Classes

File: `app/src/sections/WorkshopGallery.tsx`

Purpose:

- Replaced original `Moments from the Workshop` gallery.
- Shows language class offerings as dark green cards with generated imagery.

Current heading:

- H2: `Explore Our Language Classes`
- Body: `Choose the language path that fits your goals, level, and schedule.`

Current cards:

- English: All levels
- French: Live classes
- Spanish: Conversation focus
- Cantonese: Pronunciation and tones
- More Languages: And more

Current images:

- `/images/language-classes/english.png`
- `/images/language-classes/french.png`
- `/images/language-classes/spanish.png`
- `/images/language-classes/cantonese.png`
- `/images/language-classes/more-languages.png`

Style:

- Section: `min-h-[100dvh] bg-sage`
- Cards:
  - Desktop: `h-[414px] w-[248px]`
  - Tablet: `h-[392px] w-[236px]`
  - Mobile: `h-[412px] w-[268px]`
  - `rounded-[8px]`
  - `bg-olive`
  - shadow `0_24px_60px`
- Image area: 66 percent card height
- Text panel: centered vertically, `bg-olive`, `text-cream`
- Accent line: `h-px w-7 bg-[#d6b152]`

Animation:

- Heading opacity/y tied to section scroll.
- Card wrapper has load-in animation:
  - initial opacity 0, y 34, scale 0.985
  - while in view opacity 1, y 0, scale 1
  - stagger by `index * 0.065`
- Inner article has scroll drift:
  - y from `16 + index * 3` to 0 to -10
- Card surface has hover:
  - `hover:-translate-y-2`
  - `hover:scale-[1.012]`
  - stronger shadow
- Image scale eases from 1.07 to 1 on scroll.

Important implementation note:

The card uses nested animation layers so hover and scroll do not fight:

- Outer `motion.div`: load-in
- Inner `motion.article`: scroll y
- Inner normal div: hover transform
- Image motion: scroll scale

Maintain this separation for future interactive cards.

### 7. Whats Included / Package

File: `app/src/sections/WhatsIncludedSection.tsx`

Content source: `includedItems` in `app/src/data/workshopContent.ts`

Purpose:

- Sticky dark full-screen stack of cards.
- Cards scroll away one by one.
- Huge background text fades near the end.

Current content is still cooking-retreat oriented:

- Accommodation
- Materials
- Culinary
- Personal Guidance

Style:

- Section: `bg-dark`, `rounded-t-[34px]`, `h-[300dvh]`
- Sticky inner: `sticky top-0 min-h-[100dvh]`
- Background headline:
  - `What's Included`
  - `font-display italic`
  - `text-[clamp(7rem,18vw,14rem)]`
  - `text-cream`
  - opacity fades near the end
- Card stage:
  - `w-[292px] md:w-[310px]`
  - `h-[382px] md:h-[414px]`

Card animation file: `app/src/components/animations/IncludedScrollCard.tsx`

Card animation details:

- Uses section scroll progress.
- Cards start in a deck.
- Each card becomes active, then exits upward.
- Mobile and desktop have separate offsets.
- Cards rotate and scale as they move.
- z-index decreases with index.

When adapting to SALAD:

Good replacement items:

- Native-speaking teachers
- Live small-group classes
- Placement and CEFR tracking
- Materials and lesson recordings/resources
- Teacher feedback
- Corporate training support

Keep the same sticky card stack behavior.

### 8. Location

File: `app/src/sections/LocationSection.tsx`

Purpose:

- Original template location/estate section.
- Current content and images are still Tuscan/cooking-retreat oriented.

Current heading:

- `Set in the Heart of Tuscany`

Style:

- `bg-sage`
- `rounded-t-[34px]`
- negative overlap: `-mt-8`
- Header centered
- Large grid:
  - `md:grid-cols-[minmax(0,925px)_450px]`
  - main image height `h-[360px]`
  - text card `bg-sage-dark/70`
- Lower grid:
  - `md:grid-cols-[452px_minmax(0,924px)]`
  - image height `h-[315px]`

When adapting to SALAD:

This section should become an online/global learning environment section, a corporate training credibility section, or a "learn anywhere" section. Keep the asymmetrical image/text grid, but replace:

- Tuscany estate imagery with remote learning / adult learners / instructor imagery
- Physical location copy with online delivery, live classrooms, Canada-wide or global access
- "Exact location details" with scheduling/access details

### 9. Testimonials

File: `app/src/sections/TestimonialsSection.tsx`

Purpose:

- Moving carousel of testimonial cards.

Current content is still workshop/cooking oriented.

Style:

- Section: `bg-sage pt-[118px] pb-[170px]`
- Header centered
- Carousel max width: `max-w-[1400px]`
- Cards:
  - `bg-dark`
  - `rounded-[7px]`
  - `h-[322px] w-[383px]`
  - padding `p-[26px]`
  - text `text-cream`
- Stars use lucide `Star`, filled cream.
- Avatar: `w-[72px] h-[72px] rounded-[7px]`

Animation:

- Repeats testimonials 3 times.
- Motion x animates from `-350` to `-1922`.
- Duration: 32s, linear, infinite.
- Reduced motion keeps static.

When adapting:

Use SALAD testimonials from `salad-school-context.md`, but keep:

- Same card dimensions
- Same carousel speed unless text length forces adjustment
- Same dark card tone
- Same centered heading style

### 10. FAQ

File: `app/src/sections/FAQSection.tsx`

Content source: `faqs` in `app/src/data/workshopContent.ts`

Purpose:

- Two-column FAQ section.

Style:

- Section: `bg-sage pt-[104px] pb-[132px]`
- Grid: `lg:grid-cols-[400px_950px]`
- FAQ cards:
  - `bg-sage-dark`
  - `rounded-[7px]`
  - margin bottom `mb-[22px]`
- Question:
  - `font-display`
  - `text-[24px]`
- Icon circle:
  - `w-6 h-6 rounded-full bg-dark`
  - Plus/X lucide icons

Animation:

- Left block uses `FadeIn`.
- FAQ list staggers items with x 30 to 0 and opacity 0 to 1.
- Open/close uses CSS `max-height` transition.

When adapting:

Update `faqs` to SALAD questions:

- How do I know my level?
- Are classes live?
- What languages are available?
- How many students per class?
- Do you offer corporate training?
- Can I learn from outside Canada?
- Is Spanish available?
- How do placement and CEFR tracking work?

### 11. Apply

File: `app/src/sections/ApplySection.tsx`

Purpose:

- Application/contact form.

Current content is still template/workshop oriented.

Style:

- Section: `bg-sage pt-[86px] pb-[104px]`
- Top border: `border-t border-sage-dark`
- Heading centered, max width `850px`
- Body text: `text-[20px] leading-[27px]`
- Grid:
  - `md:grid-cols-[542px_810px]`
  - max width `1400px`
- Image:
  - `/images/apply-image.jpg`
  - `rounded-2xl`
  - `max-h-[600px]`
- Form:
  - `space-y-7`
  - white fields
  - border `border-sage-dark`
  - focus ring `focus:ring-olive/30`

Animation:

- Image and form use `FadeIn`.
- Form fields stagger with y 20 to 0 and opacity 0 to 1.

When adapting:

Convert copy and form fields to SALAD:

- Heading: `Book a Free Trial Lesson`, `Find Your Class`, or `Start Your Placement`
- Role field could become `Goal`
- Skill level could become `Current level`
- Message can stay
- Submit CTA should match booking intent

### 12. Footer

File: `app/src/sections/Footer.tsx`

Purpose:

- Final dark green footer with brand, nav, social links.

Current content is still MaestroClass/cooking oriented.

Style:

- `bg-olive`
- padding `py-14 md:py-16`
- `.section-container max-w-[1100px]`
- Brand uses lucide `Sparkles`
- Text `text-cream`, secondary `text-cream-dark`

When adapting:

- Replace `MaestroClass` with SALAD branding.
- Replace cooking description with SALAD one-liner.
- Replace social placeholders with real links if known.
- Keep layout simple.

### 13. Floating CTA

File: `app/src/components/FloatingCTA.tsx`

Purpose:

- Fixed bottom-right template buttons.

Current content:

- `Buy Template for $39`
- `Made in Framer`

This is template residue and not ideal for a SALAD site.

Style:

- Hidden on mobile: `hidden md:flex`
- Fixed: `bottom-6 right-6`
- z-index 40
- Primary pill uses `.pill-button`, `bg-olive`, rolling text.

When adapting:

- Replace with `Book a Free Trial` or remove if unwanted.
- Remove `Made in Framer` for production.
- Ensure it does not overlap important card content on narrower desktop widths.

## Data And Content Editing

Use `app/src/data/workshopContent.ts` for shared content where possible.

Currently stored there:

- `experiences`
- `includedItems`
- `galleryRows` (legacy, no longer used by `WorkshopGallery`)
- `faqs`

Currently embedded directly in section files:

- Hero copy
- Intro trust image list
- Trusted organizations logo list
- Host copy
- Language class cards
- Testimonials
- Location content
- Apply form fields
- Navbar/Footer links

If a future task involves significant content migration, consider moving these embedded arrays to `workshopContent.ts` or a new `saladContent.ts`, but do not refactor just for cleanliness unless it reduces real duplication.

## Asset Conventions

Assets live under `app/public/images/`.

Important folders:

- `language-classes/`: generated class card images
- `salad-intro/`: intro/trust section imagery
- `clients/`: original client logos
- `clients-normalized/`: normalized logos preferred for trusted grid
- Root images such as `salad-hero-landscape.png`, `andre-dupuy.png`, `apply-image.jpg`

Guidelines:

- Use absolute public paths like `/images/name.png` in React.
- For cards and hero images, prefer high-resolution images with enough crop room.
- Images should feel warm, realistic, editorial, and professional.
- Avoid images with unreadable text, random UI artifacts, or inconsistent illustration styles.
- For generated images, keep lighting soft and natural. Palette should include muted green/cream with selective burgundy/gold if needed.

## SALAD Context

Additional SALAD notes live at:

`salad-school-context.md`

Key SALAD messages:

- Online language school focused on French and English, with Spanish expansion.
- Live, human instruction.
- Small groups and personalized support.
- Language learning as rhythm, flow, expression, and confidence.
- Corporate training credibility with trusted organizations.
- CEFR placement and progress tracking.

Trusted organizations currently represented:

- House of Commons
- Employment and Social Development Canada
- Crown-Indigenous Relations and Northern Affairs Canada
- OSFI
- RBC
- Deloitte
- Sun Life Financial
- CIRO
- Rogers
- Cogeco
- Federation of Canadian Municipalities
- York University
- Laurentian University
- Cegep Heritage College
- AFOA Canada

## Recommended Section Mapping For Future SALAD Completion

If continuing the SALAD conversion without adding new sections, use this mapping:

| Current Section | Best SALAD Role |
| --- | --- |
| Hero | SALAD primary pitch and booking CTA |
| Intro | Trusted organizations and credibility |
| Experiences | How SALAD works / placement to progress |
| Host | Andre Dupuy and teaching philosophy |
| Language Classes | Language offerings |
| Whats Included | What students get in a course |
| Location | Learn online from anywhere / corporate training |
| Testimonials | Student and corporate learner reviews |
| FAQ | SALAD-specific buying objections |
| Apply | Book trial lesson or placement assessment |
| Footer | SALAD navigation/contact/social |

## Interaction Patterns To Preserve

### Rolling CTA Text

Buttons that need premium hover behavior should use:

```tsx
<a className="pill-button roll-link ...">
  <RollingText label="Apply Now" />
</a>
```

Required classes are defined in `index.css`:

- `.roll-link`
- `.roll-text`
- `.roll-text__line`

Reduced motion is handled in CSS.

### Sticky Overlap

Use `OverlayScrollStack` for reference-like "static previous screen, next screen rises over it" transitions.

### Scroll Cards

For a deck of cards scrolling away:

- Keep section height large enough, usually `h-[300dvh]`.
- Use sticky inner full viewport.
- Animate children from scroll progress.
- Keep only the active card visually dominant.
- Fade background giant text near the end so the next section can take over cleanly.

### Carousel

For continuous motion:

- Duplicate items enough times to avoid gaps.
- Use `ease: 'linear'`.
- Respect reduced motion.
- Keep cards fixed width.

## Accessibility And Responsiveness

Current project has some accessibility basics but should be improved with future work.

Preserve:

- Meaningful `alt` text on images.
- `sr-only` label in `RollingText`.
- Real anchors for navigation.
- Reduced motion fallbacks.

Improve when touching code:

- Add `aria-label` to mobile menu button.
- Add accessible labels for social links if icons have no visible text.
- Ensure form fields use proper labels and relevant names.
- Replace placeholder `href="#"` with real links or buttons where appropriate.

Responsive behavior:

- Use mobile-first Tailwind classes.
- Avoid scaling font size with viewport width except the current hero clamp.
- Check 375px, 768px, 1440px, and 1920px widths.
- Watch fixed floating CTA overlap at desktop widths around 1200-1440px.

## Coding Guidelines

### Component Style

- Use function components.
- Keep section-specific helper components inside the section file when they are not reused.
- Extract shared animation patterns only when reused by multiple sections.
- Prefer Tailwind classes over custom CSS unless repeated or impossible to express cleanly.
- Use exact bracket values when matching the template: `pt-[104px]`, `rounded-[7px]`, etc.

### Animation Guidelines

- Always consider `useReducedMotion()`.
- Use nested wrappers when combining:
  - entrance reveal
  - scroll transform
  - hover transform
- Do not animate the same transform on the same element from multiple sources.
- Use `will-change-transform` only on animated elements.
- Keep easing consistent with existing site.

### Styling Guidelines

- Prefer tokens: `bg-sage`, `bg-dark`, `bg-olive`, `text-text-primary`, `text-cream`.
- Use inline hex only for SALAD brand accents or one-off mockup UI details.
- Avoid large nested cards. Page sections should be full-width bands or unframed layouts.
- Keep cards at 6-8px radius unless matching the sticky card stack.
- Do not add decorative gradient orbs/blobs.
- Keep text comfortably inside containers at all breakpoints.

### Content Guidelines

- Keep copy concise and confident.
- Avoid explaining UI mechanics in visible text.
- Use SALAD-specific language:
  - live online classes
  - native/certified teachers
  - CEFR levels
  - placement assessment
  - small groups
  - conversation confidence
  - rhythm/flow/expression
  - corporate language training
- Remove remaining cooking/Tuscany language as sections are adapted.

## Known Template Residue

These are intentional notes for future cleanup:

- Navbar and footer still say `MaestroClass`.
- Hero still says `The Lost Art of Dough` and uses cooking-retreat copy.
- `WhatsIncludedSection` still uses accommodation/materials/culinary wording.
- `LocationSection` still references Tuscany.
- `TestimonialsSection` still uses workshop/cooking testimonials.
- `ApplySection` still says `Apply for A Seat`.
- `FloatingCTA` still says `Buy Template for $39` and `Made in Framer`.
- `galleryRows` in `workshopContent.ts` is legacy data and no longer powers the language class section.

When changing these, preserve the layout and animation structure unless the user explicitly asks for a larger redesign.

## Verification Checklist For Future Changes

Before handing off any visual change:

1. Run:

```bash
npm run build
npm run lint
```

2. Start or verify local server:

```bash
npm run dev
```

3. Browser-check the changed section at:

- 375x812 mobile
- 768x1024 tablet
- 1440x900 desktop
- 1920x1080 wide desktop

4. Check:

- No overlapping text.
- Cards/images keep stable dimensions.
- Scroll-triggered animations start and end at the intended moments.
- Navbar appears when scrolling up.
- Floating CTA does not block core content.
- Images crop well.
- Reduced motion does not leave elements invisible.
- Console has no runtime errors.

5. If changing timeline or sticky sections, inspect scroll frame by frame or with slow wheel scroll. These sections are the easiest to make feel wrong even if code is technically valid.

## Quick Feature Recipes

### Add A New Language Card

File: `app/src/sections/WorkshopGallery.tsx`

1. Add image to `app/public/images/language-classes/`.
2. Add an item to `languageClasses`.
3. Keep title short enough for a 248px card.
4. Verify desktop row width. More than five cards may need horizontal scroll, smaller card widths, or carousel behavior.

### Add A New Timeline Step

Files:

- `app/src/data/workshopContent.ts`
- `app/src/sections/ExperiencesSection.tsx`

1. Add item to `experiences`.
2. If using a new visual type, add a mockup component.
3. Extend `ExperienceVisual`.
4. Recheck timeline segment progress. `segmentCount` is automatic, but spacing may need adjustment.

### Replace Whats Included Content

File: `app/src/data/workshopContent.ts`

1. Edit `includedItems`.
2. Keep title short, ideally 1-3 words.
3. Keep description under about 90 characters when possible.
4. Use similarly framed images.
5. Verify card deck sequence all the way to the next section.

### Rebrand CTA Text

Files to check:

- `app/src/sections/Navbar.tsx`
- `app/src/sections/HeroSection.tsx`
- `app/src/components/FloatingCTA.tsx`
- `app/src/sections/ApplySection.tsx`
- `app/src/sections/Footer.tsx`

Use one consistent action:

- `Book a Free Trial`
- `Take Placement Test`
- `Find Your Class`

Do not mix too many CTAs on one page.

## Best Next Improvements

If asked to continue adapting the site to SALAD while keeping the template, the highest-impact improvements are:

1. Rebrand hero text and CTA while preserving the existing generated landscape hero.
2. Replace `WhatsIncludedSection` content with SALAD student benefits.
3. Replace `LocationSection` with online learning/corporate training copy and imagery.
4. Replace testimonials with SALAD learner/corporate testimonials.
5. Replace Apply section with booking/placement copy and relevant form fields.
6. Remove or rebrand FloatingCTA production residue.
7. Update Navbar/Footer brand from MaestroClass to SALAD.

Preserve the section order and major motion systems unless the user explicitly asks to restructure the page.
