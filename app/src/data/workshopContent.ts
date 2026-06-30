export const introImages = [
  '/images/intro-1.jpg',
  '/images/intro-2.jpg',
  '/images/intro-3.jpg',
  '/images/intro-4.jpg',
] as const;

export const experiences = [
  {
    number: '001',
    title: 'The Science of Sourdough',
    description:
      'Master fermentation, hydration, and heat through guided dough work and live-fire baking. Learn why dough behaves the way it does, not just how to follow a recipe.',
    image: '/images/exp-001.jpg',
  },
  {
    number: '002',
    title: 'The Tuscan Market Immersion',
    description:
      "Walk the local markets with a chef's eye. Source flour, tomatoes, and basil directly from the people who grow and make them.",
    image: '/images/exp-002.jpg',
  },
  {
    number: '003',
    title: 'Private Wood-Fired Sessions',
    description:
      'Hands-on oven time with direct, personal feedback. No demonstrations. No spectators. We make sure every participant works the fire.',
    image: '/images/exp-003.jpg',
  },
  {
    number: '004',
    title: 'Sunset Estate Dinner',
    description:
      'An intimate dinner featuring your own creations, shared at a private Tuscan estate with all the participants as the sun goes down.',
    image: '/images/exp-004.jpg',
  },
  {
    number: '005',
    title: 'From Technique to Instinct',
    description:
      'Move beyond measurements and timers. Learn to read dough, feel fermentation, and work with confidence under real conditions.',
    image: '/images/exp-005.jpg',
  },
] as const;

export const includedItems = [
  {
    title: 'Accommodation',
    description:
      'Two nights in a secluded countryside estate, shared only with fellow participants.',
    image: '/images/incl-accommodation.jpg',
  },
  {
    title: 'Materials',
    description: 'Every session, ingredient, tool, and resource is provided.',
    image: '/images/incl-materials.jpg',
  },
  {
    title: 'Culinary',
    description:
      'Private estate dinners, local wine pairings, and a guided market immersion with regional producers',
    image: '/images/incl-culinary.jpg',
  },
  {
    title: 'Personal Guidance',
    description: 'Direct access to the maestro throughout the experience.',
    image: '/images/incl-guidance.jpg',
  },
] as const;

export const galleryRows = [
  [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
  ],
  [
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
  ],
] as const;

export const faqs = [
  {
    question: 'Who is this for?',
    answer:
      'This experience is designed for serious culinary enthusiasts, professional chefs, artisan bakers, and anyone who wants to deeply understand sourdough craftsmanship.',
  },
  {
    question: 'How many people attend each edition?',
    answer:
      'We intentionally limit each edition to 12 participants to ensure personalized attention and an intimate learning environment.',
  },
  {
    question: 'Is accommodation included?',
    answer:
      "Yes, two nights in a private countryside estate are included. You'll stay alongside fellow participants in a secluded setting.",
  },
  {
    question: 'What language is the workshop conducted in?',
    answer:
      'The workshop is conducted in English, with Italian culinary terminology integrated naturally throughout.',
  },
  {
    question: 'How does the application process work?',
    answer:
      'Submit your application through the form below. We review each application to ensure alignment with the experience. Approved applicants receive pricing and availability details.',
  },
  {
    question: 'Can I attend with a partner or team member?',
    answer:
      'Yes, you can indicate this in your application. We accommodate pairs when possible, subject to availability.',
  },
] as const;
