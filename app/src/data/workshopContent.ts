export const experiences = [
  {
    number: '001',
    title: 'Take Your Placement Test',
    description:
      'Answer a quick 10-minute adaptive assessment. SALAD measures reading, listening, and grammar to pinpoint your exact CEFR level so you always start in the right place.',
    details: [
      '10 minutes - fully online',
      'Adaptive difficulty - no guesswork',
      'Instant CEFR level result from A1 to C1',
    ],
    visual: {
      kind: 'assessment',
      url: 'frenchsalad.ca/assessment',
    },
  },
  {
    number: '002',
    title: 'Get Matched to Your Class',
    description:
      'Based on your level and availability, SALAD places you in a small group taught by a certified native teacher. Every schedule, every goal - there is a class that fits.',
    details: [
      'Small groups of 4-8 students',
      'Native-speaking certified teachers',
      'Morning, evening, and weekend options',
    ],
    visual: {
      kind: 'classes',
      url: 'frenchsalad.ca/classes',
    },
  },
  {
    number: '003',
    title: 'Learn Live with Native Teachers',
    description:
      'Join interactive video lessons from anywhere. Practice speaking, get real-time corrections, track your CEFR progress, and build confidence to speak French naturally.',
    details: [
      'Live video lessons - speak every class',
      'Instant grammar and pronunciation feedback',
      'Progress dashboard tracks your CEFR growth',
    ],
    visual: {
      kind: 'classroom',
      url: 'frenchsalad.ca/classroom',
    },
  },
  {
    number: '004',
    title: 'Practice, Feedback & Progress',
    description:
      "Get regular feedback, track your progress, and build confidence every step. Your dashboard shows exactly how far you have come - and what to focus on next.",
    details: [
      'Detailed skill scores after every lesson',
      'Teacher feedback on grammar and pronunciation',
      'CEFR progress tracker toward your next level',
    ],
    visual: {
      kind: 'dashboard',
      url: 'frenchsalad.ca/dashboard',
    },
  },
] as const;

export const includedItems = [
  {
    title: 'Confidence',
    description:
      'Speak with less hesitation and build comfort using the language in real situations.',
    image: '/images/why-salad/confidence.png',
  },
  {
    title: 'Clarity',
    description:
      'Know what to focus on next instead of feeling lost in grammar, vocabulary, or pronunciation.',
    image: '/images/why-salad/clarity.png',
  },
  {
    title: 'Belonging',
    description:
      'Learn in a supportive environment where mistakes are part of the process, not something to fear.',
    image: '/images/why-salad/belonging.png',
  },
  {
    title: 'Consistency',
    description:
      'Build steady habits with lessons that keep you practicing, improving, and coming back.',
    image: '/images/why-salad/consistency.png',
  },
] as const;

export const faqs = [
  {
    question: 'How do I know which level to start with?',
    answer:
      'SALAD starts with a short placement assessment so we can understand your current CEFR level, goals, and confidence with speaking, listening, grammar, and vocabulary.',
  },
  {
    question: 'Do you offer beginner and advanced classes?',
    answer:
      'Yes. Learners can join from beginner foundations through advanced conversation and professional communication. The goal is to place you where the pace feels challenging but manageable.',
  },
  {
    question: 'Are classes live or self-paced?',
    answer:
      'SALAD focuses on live, teacher-led classes because speaking practice, correction, and confidence grow fastest through real interaction. Self-study support can complement the live lessons.',
  },
  {
    question: 'How large are the classes?',
    answer:
      'Most classes are kept small so learners have time to speak, ask questions, and receive feedback. Group size can vary by program, level, and schedule.',
  },
  {
    question: 'Can SALAD support teams or organizations?',
    answer:
      'Yes. SALAD can support workplace language training, public-sector learners, and organization-specific goals with programs shaped around level, schedule, and communication needs.',
  },
  {
    question: 'What happens after I contact SALAD?',
    answer:
      'We review your goals, recommend a placement path, and help match you with the right class format, teacher, and schedule before you begin.',
  },
] as const;
