export type LanguageId = 'english' | 'french' | 'spanish' | 'cantonese' | 'more';

export type LanguageProgram = {
  id: LanguageId;
  name: string;
  summary: string;
  image: string;
  status: string;
  accent: string;
};

export type Course = {
  id: string;
  languageId: LanguageId;
  title: string;
  shortTitle: string;
  level: string;
  category: string;
  duration: string;
  schedule: string;
  price: string;
  spots: string;
  image: string;
  description: string;
  outcomes: string[];
  structure: string[];
  bestFor: string;
};

export type Teacher = {
  id: string;
  name: string;
  language: string;
  role: string;
  image: string;
  summary: string;
  specialties: string[];
};

export type Material = {
  id: string;
  audience: 'Learners' | 'Teachers';
  title: string;
  description: string;
  price: string;
  image: string;
};

export const languagePrograms: LanguageProgram[] = [
  {
    id: 'english',
    name: 'English',
    summary: 'Practical, academic, and workplace English for confident real-world communication.',
    image: '/images/language-classes/english.png',
    status: 'Live classes',
    accent: 'All levels',
  },
  {
    id: 'french',
    name: 'French',
    summary: 'CEFR-aligned French from first foundations to advanced professional fluency.',
    image: '/images/language-classes/french.png',
    status: 'Core program',
    accent: 'A1 to C1',
  },
  {
    id: 'spanish',
    name: 'Spanish',
    summary: 'Conversation-led Spanish pathways designed for everyday speaking confidence.',
    image: '/images/language-classes/spanish.png',
    status: 'Coming soon',
    accent: 'Conversation focus',
  },
  {
    id: 'cantonese',
    name: 'Cantonese',
    summary: 'A practical introduction to tones, pronunciation, listening, and daily phrases.',
    image: '/images/language-classes/cantonese.png',
    status: 'Coming soon',
    accent: 'Pronunciation and tones',
  },
  {
    id: 'more',
    name: 'More Languages',
    summary: 'Custom language options for teams and learners as SALAD expands its instructor network.',
    image: '/images/language-classes/more-languages.png',
    status: 'By request',
    accent: 'Flexible options',
  },
];

export const courses: Course[] = [
  {
    id: 'practical-english-a1-a2',
    languageId: 'english',
    title: 'Practical English Foundations',
    shortTitle: 'Practical English',
    level: 'A1-A2',
    category: 'General English',
    duration: '8 weeks',
    schedule: 'Evening cohorts available',
    price: 'From $299',
    spots: 'Small groups',
    image: '/images/training-courses/practical-english.jpg',
    description:
      'Build the English you need for daily life, work, services, and clear everyday conversation.',
    outcomes: [
      'Use essential grammar and vocabulary in common situations.',
      'Ask and answer questions with more comfort.',
      'Understand simple spoken English in live lessons.',
    ],
    structure: [
      'Weekly live practice with guided speaking tasks.',
      'Short homework prompts for vocabulary and listening.',
      'Teacher feedback on accuracy, pronunciation, and confidence.',
    ],
    bestFor: 'Learners who want a practical start and a clear path into conversation.',
  },
  {
    id: 'conversational-english-b1',
    languageId: 'english',
    title: 'Conversational English',
    shortTitle: 'Conversational English',
    level: 'B1',
    category: 'Conversation',
    duration: '6 weeks',
    schedule: 'Weekly live sessions',
    price: 'From $249',
    spots: '4-8 learners',
    image: '/images/training-courses/conversational-english.jpg',
    description:
      'Practice real conversation in a calm online setting with corrections that help you sound natural.',
    outcomes: [
      'Respond more quickly in unscripted conversations.',
      'Improve pronunciation, rhythm, and listening confidence.',
      'Use linking language to explain opinions and experiences.',
    ],
    structure: [
      'Conversation circles with teacher-led correction.',
      'Role-play for work, travel, and everyday moments.',
      'Personal feedback notes after each class.',
    ],
    bestFor: 'Learners who know some English but need more speaking confidence.',
  },
  {
    id: 'business-english-b2',
    languageId: 'english',
    title: 'Business English Communication',
    shortTitle: 'Business English',
    level: 'B2',
    category: 'Professional English',
    duration: '10 weeks',
    schedule: 'Team and individual options',
    price: 'Custom quote',
    spots: 'Private or small group',
    image: '/images/training-courses/business-english.jpg',
    description:
      'Develop polished English for meetings, presentations, email, client conversations, and workplace clarity.',
    outcomes: [
      'Communicate ideas clearly in professional settings.',
      'Write stronger emails and meeting summaries.',
      'Present and negotiate with more confidence.',
    ],
    structure: [
      'Workplace simulations and presentation practice.',
      'Industry vocabulary tailored to learner goals.',
      'Feedback on tone, precision, and professional fluency.',
    ],
    bestFor: 'Professionals and teams working across English-speaking contexts.',
  },
  {
    id: 'french-beginner-a1',
    languageId: 'french',
    title: 'French for Beginners',
    shortTitle: 'Beginner French',
    level: 'A1',
    category: 'General French',
    duration: '8 weeks',
    schedule: 'Mon and Wed, 6:00 PM',
    price: '$299',
    spots: '12 spots',
    image: '/images/training-courses/french-beginner.jpg',
    description:
      'Start your French journey with essential vocabulary, basic grammar, and everyday conversation skills.',
    outcomes: [
      'Introduce yourself and handle simple exchanges.',
      'Recognize core grammar patterns and everyday vocabulary.',
      'Build confidence with live speaking practice.',
    ],
    structure: [
      'Guided live lessons with short speaking tasks.',
      'Vocabulary and grammar review after each class.',
      'Supportive feedback for pronunciation and sentence building.',
    ],
    bestFor: 'Complete beginners or learners returning after a long break.',
  },
  {
    id: 'french-elementary-a2',
    languageId: 'french',
    title: 'Elementary French',
    shortTitle: 'Elementary French',
    level: 'A2',
    category: 'General French',
    duration: '10 weeks',
    schedule: 'Tue and Thu, 6:00 PM',
    price: '$349',
    spots: '10 spots',
    image: '/images/training-courses/french-elementary.jpg',
    description:
      'Expand vocabulary, build stronger grammar, and practice simple conversations with more independence.',
    outcomes: [
      'Talk about routines, plans, preferences, and needs.',
      'Understand short spoken and written French texts.',
      'Use past and future structures with more control.',
    ],
    structure: [
      'Live instruction with paired conversation practice.',
      'Listening and reading activities aligned to A2 goals.',
      'Weekly teacher feedback on progress and next steps.',
    ],
    bestFor: 'Learners with basic French who want steadier everyday communication.',
  },
  {
    id: 'french-intermediate-b1',
    languageId: 'french',
    title: 'Intermediate French',
    shortTitle: 'Intermediate French',
    level: 'B1',
    category: 'General French',
    duration: '12 weeks',
    schedule: 'Mon and Wed, 7:00 PM',
    price: '$399',
    spots: '8 spots',
    image: '/images/training-courses/french-intermediate.jpg',
    description:
      'Develop fluency through discussions, longer texts, and clear expression on familiar topics.',
    outcomes: [
      'Explain experiences, opinions, and plans with more detail.',
      'Understand longer conversations and practical texts.',
      'Strengthen grammar accuracy while speaking naturally.',
    ],
    structure: [
      'Topic-based live discussions and role-play.',
      'CEFR-aligned grammar and vocabulary expansion.',
      'Progress notes focused on fluency and precision.',
    ],
    bestFor: 'Learners ready to move from controlled practice into confident conversation.',
  },
  {
    id: 'business-french-b2',
    languageId: 'french',
    title: 'Business French',
    shortTitle: 'Business French',
    level: 'B2',
    category: 'Business French',
    duration: '10 weeks',
    schedule: 'Tue and Thu, 7:00 PM',
    price: '$449',
    spots: '8 spots',
    image: '/images/training-courses/business-french.jpg',
    description:
      'Master workplace French for formal writing, meetings, presentations, and professional vocabulary.',
    outcomes: [
      'Handle workplace conversations with more precision.',
      'Write clearer professional emails and summaries.',
      'Present ideas and respond to questions in French.',
    ],
    structure: [
      'Business scenarios and practical communication drills.',
      'Formal vocabulary, register, and writing practice.',
      'Teacher correction focused on clarity and confidence.',
    ],
    bestFor: 'Professionals who need French for work, government, or institutional contexts.',
  },
  {
    id: 'conversation-practice-b1-c1',
    languageId: 'french',
    title: 'French Conversation Practice',
    shortTitle: 'Conversation Practice',
    level: 'B1-C1',
    category: 'Conversation',
    duration: '6 weeks',
    schedule: 'Friday, 6:00 PM',
    price: '$249',
    spots: '10 spots',
    image: '/images/training-courses/french-conversation.jpg',
    description:
      'Improve speaking fluency through dynamic online group discussions and targeted pronunciation support.',
    outcomes: [
      'Speak with less hesitation in real conversations.',
      'Expand vocabulary for opinions, stories, and debate.',
      'Receive immediate corrections on pronunciation and structure.',
    ],
    structure: [
      'Small group conversations around practical themes.',
      'Teacher-guided correction and vocabulary notes.',
      'Confidence-building speaking challenges each week.',
    ],
    bestFor: 'Intermediate and advanced learners who need more live speaking time.',
  },
  {
    id: 'french-advanced-c1',
    languageId: 'french',
    title: 'Advanced French',
    shortTitle: 'Advanced French',
    level: 'C1',
    category: 'Advanced French',
    duration: '12 weeks',
    schedule: 'Wed and Fri, 7:00 PM',
    price: '$449',
    spots: '6 spots',
    image: '/images/training-courses/advanced-french.jpg',
    description:
      'Refine sophisticated French through complex texts, idiomatic expression, nuance, and cultural context.',
    outcomes: [
      'Express complex ideas with nuance and structure.',
      'Analyze advanced texts and spoken material.',
      'Use idiomatic and culturally appropriate French.',
    ],
    structure: [
      'Advanced discussion, analysis, and presentation tasks.',
      'Precision grammar and vocabulary refinement.',
      'Individual correction for tone, rhythm, and fluency.',
    ],
    bestFor: 'Advanced learners aiming for precision in academic or professional French.',
  },
  {
    id: 'french-pronunciation-all-levels',
    languageId: 'french',
    title: 'French Pronunciation Workshop',
    shortTitle: 'Pronunciation Workshop',
    level: 'A2+',
    category: 'Specialized French',
    duration: '4 weeks',
    schedule: 'Saturday, 10:00 AM',
    price: '$199',
    spots: '15 spots',
    image: '/images/training-courses/french-pronunciation.jpg',
    description:
      'Focus on French sounds, intonation patterns, rhythm, and accent clarity through targeted exercises.',
    outcomes: [
      'Hear and produce difficult French sounds more accurately.',
      'Improve intonation, rhythm, and sentence flow.',
      'Receive focused correction on personal pronunciation habits.',
    ],
    structure: [
      'Guided phonetic drills and live repetition.',
      'Short recordings for teacher feedback.',
      'Practical pronunciation work inside real phrases.',
    ],
    bestFor: 'Learners who want clearer, more natural spoken French.',
  },
  {
    id: 'spanish-conversation-coming-soon',
    languageId: 'spanish',
    title: 'Spanish Conversation Pathway',
    shortTitle: 'Spanish Conversation',
    level: 'All levels',
    category: 'Spanish',
    duration: 'Coming soon',
    schedule: 'TBA',
    price: 'Join waitlist',
    spots: 'Opening soon',
    image: '/images/training-courses/spanish-conversation.jpg',
    description:
      'A future conversation-led Spanish program for learners who want practical speaking confidence.',
    outcomes: [
      'Build everyday Spanish conversation habits.',
      'Practice pronunciation and listening from the beginning.',
      'Learn through live, supportive teacher-led sessions.',
    ],
    structure: [
      'Small online groups.',
      'Conversation-first weekly lessons.',
      'Placement support before enrollment.',
    ],
    bestFor: 'Learners who want to be notified when Spanish classes open.',
  },
  {
    id: 'cantonese-foundations-coming-soon',
    languageId: 'cantonese',
    title: 'Cantonese Foundations',
    shortTitle: 'Cantonese Foundations',
    level: 'Beginner',
    category: 'Cantonese',
    duration: 'Coming soon',
    schedule: 'TBA',
    price: 'Join waitlist',
    spots: 'Opening soon',
    image: '/images/training-courses/cantonese-foundations.jpg',
    description:
      'A planned introduction to Cantonese tones, pronunciation, listening, and useful daily phrases.',
    outcomes: [
      'Understand tone differences and core pronunciation patterns.',
      'Practice simple greetings, questions, and responses.',
      'Build listening confidence through guided repetition.',
    ],
    structure: [
      'Tone and sound practice.',
      'Daily-life dialogue work.',
      'Small group speaking support.',
    ],
    bestFor: 'Beginners interested in a careful, pronunciation-led start.',
  },
  {
    id: 'custom-language-training',
    languageId: 'more',
    title: 'Custom Language Training',
    shortTitle: 'Custom Training',
    level: 'By request',
    category: 'Custom',
    duration: 'Flexible',
    schedule: 'Custom schedule',
    price: 'Custom quote',
    spots: 'Teams or individuals',
    image: '/images/training-courses/custom-language-training.jpg',
    description:
      'SALAD is expanding its instructor network and can discuss custom pathways for learners and organizations.',
    outcomes: [
      'Clarify the language, level, and outcome you need.',
      'Match with available teacher expertise when possible.',
      'Build a practical learning plan for your schedule.',
    ],
    structure: [
      'Discovery conversation.',
      'Teacher and level matching.',
      'Custom live training plan.',
    ],
    bestFor: 'Organizations or learners looking beyond the current course catalog.',
  },
];

export const teachers: Teacher[] = [
  {
    id: 'jonathan-hermina',
    name: 'Jonathan Hermina',
    language: 'English',
    role: 'OCELT-certified English teacher',
    image: '/images/team/jonathan-hermina.png',
    summary:
      'A practical, student-centered instructor focused on functional grammar, IELTS, business English, and confidence.',
    specialties: ['IELTS', 'Business English', 'Functional grammar'],
  },
  {
    id: 'hadi-dolatabadi',
    name: 'Hadi Dolatabadi',
    language: 'French',
    role: 'French exam and professional training specialist',
    image: '/images/team/hadi-dolatabadi.png',
    summary:
      'A French teacher with more than 15 years of experience across language schools, universities, and exam preparation.',
    specialties: ['TEF/TCF', 'DELF/DALF', 'Federal training'],
  },
  {
    id: 'marcel-joseph',
    name: 'Marcel Joseph',
    language: 'French',
    role: 'Professional French instructor',
    image: '/images/team/marcel-joseph.png',
    summary:
      'A communications-focused teacher helping adults develop clear, confident, professional French.',
    specialties: ['Oral fluency', 'TCO preparation', 'Professional communication'],
  },
  {
    id: 'kevin-pickles',
    name: 'Kevin Pickles',
    language: 'English',
    role: 'English as a second language instructor',
    image: '/images/team/kevin-pickles.png',
    summary:
      'A lifelong language learner and ESL instructor who supports newcomers and professionals with empathy.',
    specialties: ['ESL', 'Cultural integration', 'Conversation'],
  },
  {
    id: 'ingrid-savoie',
    name: 'Ingrid Savoie',
    language: 'French',
    role: 'French phonetics specialist',
    image: '/images/team/ingrid-savoie.png',
    summary:
      'A phonetics-focused instructor with deep online teaching experience and a precise, motivating approach.',
    specialties: ['Phonetics', 'Level C', 'Online teaching'],
  },
  {
    id: 'alice-mugenzi',
    name: 'Alice Mugenzi',
    language: 'French',
    role: 'French as a second language teacher',
    image: '/images/team/alice-mugenzi.png',
    summary:
      'A personalized and interactive teacher helping professionals build oral and written French skills.',
    specialties: ['PFL2', 'Oral skills', 'Written French'],
  },
  {
    id: 'patricia-trinquet',
    name: 'Patricia Trinquet',
    language: 'French',
    role: 'Business French specialist',
    image: '/images/team/patricia-trinquet-placeholder.jpg',
    summary:
      'A professional French instructor known for flipped classrooms, oral fluency, and practical workplace scenarios.',
    specialties: ['Business French', 'Flipped classroom', 'Professional fluency'],
  },
  {
    id: 'anthony-weng',
    name: 'Anthony Weng',
    language: 'Mandarin',
    role: 'Mandarin teacher',
    image: '/images/team/anthony-weng.png',
    summary:
      'A flexible Mandarin coach focused on conversation, reading, writing, and cultural understanding.',
    specialties: ['Mandarin', 'Chinese culture', 'Personalized learning'],
  },
  {
    id: 'maria-ekstrom',
    name: 'Maria Ekstrom',
    language: 'Swedish',
    role: 'Swedish teacher',
    image: '/images/team/woman-teacher.png',
    summary:
      'An experienced Swedish instructor working with adult learners, professionals, and relocation programs.',
    specialties: ['Swedish', 'Relocation', 'Corporate training'],
  },
  {
    id: 'pershang',
    name: 'Pershang',
    language: 'English',
    role: 'English language and literacies instructor',
    image: '/images/team/pershang-placeholder.jpg',
    summary:
      'An English instructor helping learners build confidence, IELTS readiness, and a stronger personal voice.',
    specialties: ['IELTS', 'ESL', 'Government exams'],
  },
  {
    id: 'danielle-blouin',
    name: 'Danielle Blouin',
    language: 'French',
    role: 'French as a second language teacher',
    image: '/images/team/danielle-blouin-placeholder.jpg',
    summary:
      'A French teacher focused on personalized methods, formal French, and federal public service levels B and C.',
    specialties: ['Federal exams', 'Formal French', 'Interactive methods'],
  },
];

export const materials: Material[] = [
  {
    id: 'vocabulary-flashcards',
    audience: 'Learners',
    title: 'Interactive Vocabulary Flashcards',
    description: 'A 1000+ word practice set for vocabulary review and pronunciation support.',
    price: '$19.99',
    image: '/images/materials/vocabulary-flashcards.jpg',
  },
  {
    id: 'practice-exercises',
    audience: 'Learners',
    title: 'Practice Exercise Pack',
    description: 'Self-study exercises for learners who want structured practice between live classes.',
    price: '$24.99',
    image: '/images/materials/practice-exercises.jpg',
  },
  {
    id: 'lesson-plan-bundle',
    audience: 'Teachers',
    title: 'Complete Lesson Plan Bundle',
    description: '50+ ready-to-use lesson plans built for online and small-group language teaching.',
    price: '$49.99',
    image: '/images/materials/lesson-plan-bundle.jpg',
  },
  {
    id: 'grammar-worksheets',
    audience: 'Teachers',
    title: 'Grammar Worksheets Collection',
    description: 'Grammar exercises with answer keys for guided classwork or independent review.',
    price: '$29.99',
    image: '/images/materials/grammar-worksheets.jpg',
  },
];

export function getLanguageProgram(id: string | undefined) {
  return languagePrograms.find((language) => language.id === id);
}

export function getCoursesByLanguage(id: string | undefined) {
  return courses.filter((course) => course.languageId === id);
}

export function getCourse(id: string | undefined) {
  return courses.find((course) => course.id === id);
}
