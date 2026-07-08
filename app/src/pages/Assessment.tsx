import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import { getCoursesByLanguage, type LanguageId } from '../data/siteContent';

type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
type AssessmentStep = 'setup' | 'quiz' | 'result';

type AssessmentLanguage = {
  id: Exclude<LanguageId, 'more'>;
  name: string;
  note: string;
};

type AssessmentQuestion = {
  skill: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

const languages: AssessmentLanguage[] = [
  {
    id: 'french',
    name: 'French',
    note: 'Grammar, vocabulary, register, and everyday understanding.',
  },
  {
    id: 'english',
    name: 'English',
    note: 'Practical communication, grammar, vocabulary, and idioms.',
  },
  {
    id: 'spanish',
    name: 'Spanish',
    note: 'Core phrases, sentence structure, and conversational meaning.',
  },
  {
    id: 'cantonese',
    name: 'Cantonese',
    note: 'Tone awareness, listening logic, and essential daily phrases.',
  },
];

const cefrLevels: { code: CefrLevel; label: string; description: string }[] = [
  { code: 'A1', label: 'Beginner', description: 'First words and everyday basics.' },
  { code: 'A2', label: 'Elementary', description: 'Simple conversations and routines.' },
  { code: 'B1', label: 'Intermediate', description: 'Opinions, experiences, and daily life.' },
  { code: 'B2', label: 'Upper Intermediate', description: 'Complex situations and clear discussion.' },
  { code: 'C1', label: 'Advanced', description: 'Fluent personal and professional use.' },
  { code: 'C2', label: 'Mastery', description: 'Nuance, precision, and cultural command.' },
];

const questionsByLanguage: Record<AssessmentLanguage['id'], AssessmentQuestion[]> = {
  french: [
    {
      skill: 'presentation',
      question: 'Completez : Je ___ Marie.',
      options: ["m'appelle", "s'appelle", "t'appelles", 'appelle'],
      correctAnswer: 0,
    },
    {
      skill: 'present verb',
      question: "Choose the correct form: Je ___ du cafe chaque matin.",
      options: ['manger', 'boire', 'bois', 'buvons'],
      correctAnswer: 2,
    },
    {
      skill: 'past tense',
      question: "Completez : Elle ___ au cinema hier.",
      options: ['va', 'est allee', 'aller', 'allons'],
      correctAnswer: 1,
    },
    {
      skill: 'register',
      question: 'Which sentence is the most formal?',
      options: [
        'Je vous serais reconnaissant de me repondre.',
        'Reponds-moi vite.',
        "Balance l'info.",
        'Tu peux me dire quoi ?',
      ],
      correctAnswer: 0,
    },
    {
      skill: 'argument',
      question: "In 'Il n'en demeure pas moins que...', the next idea usually introduces:",
      options: [
        'a point maintained despite an objection',
        'an unrelated example',
        'a vocabulary question',
        'a physical obligation',
      ],
      correctAnswer: 0,
    },
    {
      skill: 'meaning',
      question: "What does 'Ou sont les toilettes ?' mean?",
      options: ['Where is the bathroom?', 'What time is it?', 'How much is it?', 'Can you help me?'],
      correctAnswer: 0,
    },
  ],
  english: [
    {
      skill: 'sentence accuracy',
      question: 'Choose the correct sentence.',
      options: ['She is a teacher.', 'She are a teacher.', 'She be a teacher.', 'She am a teacher.'],
      correctAnswer: 0,
    },
    {
      skill: 'conditional',
      question: 'Choose the best completion: If it rains tomorrow, we ___ inside.',
      options: ['will stay', 'stayed', 'would stay', 'stay would'],
      correctAnswer: 0,
    },
    {
      skill: 'grammar',
      question: 'Neither of the options ___ correct.',
      options: ['are', 'were', 'is', 'be'],
      correctAnswer: 2,
    },
    {
      skill: 'polite request',
      question: "'Could you help me with this?' is best described as:",
      options: ['a command', 'a polite request', 'a joke', 'a farewell'],
      correctAnswer: 1,
    },
    {
      skill: 'idiom',
      question: "The phrase 'a piece of cake' means:",
      options: ['a dessert order', 'something very easy', 'a small problem', 'a birthday gift'],
      correctAnswer: 1,
    },
    {
      skill: 'figurative language',
      question: "In 'His apology rang hollow,' the phrase means it sounded:",
      options: ['insincere', 'musical', 'brief', 'angry'],
      correctAnswer: 0,
    },
  ],
  spanish: [
    {
      skill: 'ser',
      question: 'Completa: Yo ___ Ana.',
      options: ['soy', 'eres', 'es', 'somos'],
      correctAnswer: 0,
    },
    {
      skill: 'present verb',
      question: "Choose the correct form: Yo ___ espanol.",
      options: ['hablo', 'hablas', 'hablamos', 'hablan'],
      correctAnswer: 0,
    },
    {
      skill: 'meaning',
      question: "What does 'Hasta luego' usually mean?",
      options: ['See you later', 'Nice to meet you', "I'm sorry", 'How much?'],
      correctAnswer: 0,
    },
    {
      skill: 'register',
      question: 'Which phrase is the most formal?',
      options: [
        'Le agradeceria que me enviara la informacion.',
        'Mandame eso ya.',
        'Pasame la info.',
        'Dime que onda.',
      ],
      correctAnswer: 0,
    },
    {
      skill: 'idiom',
      question: "What does 'rizar el rizo' mean?",
      options: [
        'to overcomplicate or over-refine something',
        'to abandon a task',
        'to speak with extreme clarity',
        'to start from zero',
      ],
      correctAnswer: 0,
    },
    {
      skill: 'daily phrase',
      question: "What does 'No entiendo' mean?",
      options: ["I don't understand", 'I agree', "I'm hungry", 'I am ready'],
      correctAnswer: 0,
    },
  ],
  cantonese: [
    {
      skill: 'greeting',
      question: "What does 'nei5 hou2' most closely mean?",
      options: ['Hello', 'Thank you', 'Goodbye', 'Please'],
      correctAnswer: 0,
    },
    {
      skill: 'tone awareness',
      question: 'In Cantonese, a change in tone can change:',
      options: ['the meaning of a word', 'only the volume', 'only the spelling', 'the writing direction'],
      correctAnswer: 0,
    },
    {
      skill: 'daily phrase',
      question: "What does 'm4 goi1' often express?",
      options: ['Thanks / excuse me', 'Good morning', 'Where are you?', 'I am full'],
      correctAnswer: 0,
    },
    {
      skill: 'listening',
      question: 'A beginner should pay closest attention to:',
      options: ['tone contour and syllable ending', 'silent letters', 'verb conjugation tables', 'gendered articles'],
      correctAnswer: 0,
    },
    {
      skill: 'meaning',
      question: "What is 'dim2 gaai2' usually asking?",
      options: ['Why?', 'How much?', 'Where?', 'When?'],
      correctAnswer: 0,
    },
    {
      skill: 'conversation',
      question: 'The best early goal for Cantonese speaking is:',
      options: [
        'clear tones in short useful phrases',
        'perfect literary writing',
        'memorizing rare idioms first',
        'avoiding listening practice',
      ],
      correctAnswer: 0,
    },
  ],
};

function getResultCopy(score: number, level: CefrLevel) {
  if (score >= 5) {
    return {
      title: 'Strong fit',
      copy: `Your answers suggest ${level} is a comfortable fit. You may be ready to sample the next level soon.`,
    };
  }

  if (score <= 2) {
    return {
      title: 'Start one step earlier',
      copy: `This level may be a little high right now. SALAD can place you slightly earlier so class feels useful, not stressful.`,
    };
  }

  return {
    title: 'Close to your level',
    copy: `You are near ${level}. A teacher can confirm the best class and help you focus on the skills that need polish.`,
  };
}

export default function Assessment() {
  const [step, setStep] = useState<AssessmentStep>('setup');
  const [language, setLanguage] = useState<AssessmentLanguage['id']>('french');
  const [level, setLevel] = useState<CefrLevel>('B1');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = questionsByLanguage[language];
  const currentQuestion = questions[questionIndex];
  const correctCount = answers.reduce((total, answer, index) => {
    return total + (answer === questions[index].correctAnswer ? 1 : 0);
  }, 0);
  const progress = step === 'quiz' ? ((questionIndex + (selectedAnswer === null ? 0 : 1)) / questions.length) * 100 : 0;
  const selectedLanguage = languages.find((item) => item.id === language);
  const selectedLevel = cefrLevels.find((item) => item.code === level);
  const result = getResultCopy(correctCount, level);
  const recommendedCourses = useMemo(() => getCoursesByLanguage(language).slice(0, 3), [language]);

  const beginAssessment = () => {
    setAnswers([]);
    setSelectedAnswer(null);
    setQuestionIndex(0);
    setStep('quiz');
  };

  const chooseAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
  };

  const goNext = () => {
    if (selectedAnswer === null) return;

    const nextAnswers = [...answers, selectedAnswer];
    setAnswers(nextAnswers);
    setSelectedAnswer(null);

    if (questionIndex >= questions.length - 1) {
      setStep('result');
      return;
    }

    setQuestionIndex((current) => current + 1);
  };

  const resetAssessment = () => {
    setStep('setup');
    setAnswers([]);
    setSelectedAnswer(null);
    setQuestionIndex(0);
  };

  return (
    <main className="bg-sage text-text-primary">
      <section className="relative overflow-hidden bg-dark pt-[124px] pb-[78px] text-cream md:pt-[154px] md:pb-[104px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgb(223_229_215_/_0.12),transparent_34%)]" />
        <div className="section-container relative max-w-[1160px]">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <FadeIn y={30}>
              <h1 className="font-display italic text-[52px] leading-[0.94] md:text-[86px]">
                Find Your Class
              </h1>
              <p className="mt-6 max-w-[650px] text-[18px] leading-[27px] text-cream/78 md:text-[20px] md:leading-[29px]">
                Take a short CEFR-aligned language assessment and get a clearer
                sense of the class level that fits your goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['6 questions', 'CEFR-aligned', 'Instant guidance'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cream/14 px-4 py-2 text-[13px] text-cream/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn y={32} delay={0.05}>
              <div className="rounded-[8px] bg-cream p-3 text-text-primary shadow-[0_28px_76px_rgb(0_0_0_/_0.22)]">
                <div className="rounded-[6px] bg-sage p-5 md:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#d6543f]" />
                      <span className="h-3 w-3 rounded-full bg-[#c59b43]" />
                      <span className="h-3 w-3 rounded-full bg-olive" />
                    </div>
                    <span className="text-[12px] text-text-secondary">saladschool.ca/assessment</span>
                  </div>
                  <div className="rounded-[6px] bg-dark px-4 py-3 text-cream">
                    <div className="flex items-center justify-between text-[13px]">
                      <span>SALAD Placement</span>
                      <span>{step === 'quiz' ? `${questionIndex + 1} / ${questions.length}` : 'Ready'}</span>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-cream/14">
                      <div
                        className="h-full rounded-full bg-cream transition-all duration-500"
                        style={{ width: `${step === 'quiz' ? progress : step === 'result' ? 100 : 18}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-5 rounded-[6px] bg-cream/70 p-5">
                    <p className="font-display text-[32px] leading-none">
                      {selectedLanguage?.name} / {selectedLevel?.code}
                    </p>
                    <p className="mt-3 text-[15px] leading-[22px] text-text-secondary">
                      Questions adapt around real placement signals: structure,
                      meaning, register, and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {step === 'setup' && (
        <section className="py-[76px] md:py-[108px]">
          <div className="section-container max-w-[1160px]">
            <FadeIn y={28} className="text-center">
              <h2 className="font-display italic text-[44px] leading-none md:text-[64px]">
                Start with your language
              </h2>
              <p className="mx-auto mt-5 max-w-[680px] text-[18px] leading-[27px] text-text-secondary">
                Pick the language you want to assess, then choose the CEFR level
                closest to where you think you are.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {languages.map((item, index) => {
                const isSelected = item.id === language;

                return (
                  <FadeIn key={item.id} y={24} delay={index * 0.035}>
                    <button
                      type="button"
                      onClick={() => setLanguage(item.id)}
                      className={`h-full rounded-[8px] p-6 text-left shadow-[0_18px_46px_rgb(13_18_11_/_0.06)] transition-all duration-300 ${
                        isSelected
                          ? 'bg-dark text-cream'
                          : 'bg-cream-dark text-text-primary hover:-translate-y-1 hover:bg-cream'
                      }`}
                    >
                      <span className="font-mono text-[13px] uppercase tracking-[0.16em] opacity-60">
                        Assess
                      </span>
                      <h3 className="mt-5 font-display text-[36px] leading-none">
                        {item.name}
                      </h3>
                      <p className={`mt-4 text-[15px] leading-[22px] ${isSelected ? 'text-cream/72' : 'text-text-secondary'}`}>
                        {item.note}
                      </p>
                    </button>
                  </FadeIn>
                );
              })}
            </div>

            <div className="mt-10 rounded-[8px] bg-cream-dark p-5 md:p-7">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                {cefrLevels.map((item) => {
                  const isSelected = item.code === level;

                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setLevel(item.code)}
                      className={`rounded-[8px] p-4 text-left transition-colors ${
                        isSelected ? 'bg-dark text-cream' : 'bg-sage text-text-primary hover:bg-cream'
                      }`}
                    >
                      <span className="font-display text-[34px] leading-none">{item.code}</span>
                      <span className="mt-2 block text-[14px] font-medium">{item.label}</span>
                      <span className={`mt-3 block text-[12px] leading-[17px] ${isSelected ? 'text-cream/66' : 'text-text-secondary'}`}>
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <FadeIn y={24} className="mt-10 text-center">
              <button
                type="button"
                onClick={beginAssessment}
                className="pill-button roll-link bg-olive text-cream hover:bg-dark"
              >
                Start Assessment
              </button>
            </FadeIn>
          </div>
        </section>
      )}

      {step === 'quiz' && (
        <section className="py-[76px] md:py-[108px]">
          <div className="section-container max-w-[920px]">
            <FadeIn y={28}>
              <article className="rounded-[8px] bg-cream-dark p-5 shadow-[0_22px_58px_rgb(13_18_11_/_0.08)] md:p-8">
                <div className="flex flex-col gap-5 border-b border-text-primary/10 pb-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-text-secondary/70">
                      Question {questionIndex + 1} of {questions.length}
                    </p>
                    <h2 className="mt-4 font-display italic text-[40px] leading-none md:text-[58px]">
                      {selectedLanguage?.name} placement
                    </h2>
                  </div>
                  <span className="w-fit rounded-full bg-dark px-4 py-2 text-[13px] text-cream">
                    {level} / {currentQuestion.skill}
                  </span>
                </div>

                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-text-primary/10">
                  <div
                    className="h-full rounded-full bg-olive transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <h3 className="mt-8 font-display text-[42px] leading-[1.04]">
                  {currentQuestion.question}
                </h3>

                <div className="mt-8 grid gap-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = currentQuestion.correctAnswer === index;
                    const hasAnswered = selectedAnswer !== null;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => chooseAnswer(index)}
                        className={`flex items-center justify-between gap-4 rounded-[8px] border px-5 py-4 text-left text-[16px] leading-[23px] transition-colors ${
                          hasAnswered && isCorrect
                            ? 'border-olive bg-sage text-text-primary'
                            : isSelected
                              ? 'border-dark bg-dark text-cream'
                              : 'border-text-primary/10 bg-sage text-text-primary hover:border-text-primary/28'
                        }`}
                      >
                        <span>{option}</span>
                        {hasAnswered && isCorrect && <Check className="h-5 w-5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={resetAssessment}
                    className="inline-flex items-center gap-2 text-[14px] text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Restart
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={selectedAnswer === null}
                    className="pill-button roll-link bg-olive text-cream hover:bg-dark disabled:pointer-events-none disabled:opacity-45"
                  >
                    {questionIndex === questions.length - 1 ? 'See Result' : 'Next Question'}
                  </button>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>
      )}

      {step === 'result' && (
        <section className="py-[76px] md:py-[108px]">
          <div className="section-container max-w-[1120px]">
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <FadeIn y={28}>
                <article className="rounded-[8px] bg-dark p-7 text-cream md:p-8">
                  <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-cream/58">
                    Assessment complete
                  </p>
                  <h2 className="mt-5 font-display italic text-[48px] leading-none md:text-[68px]">
                    {result.title}
                  </h2>
                  <p className="mt-6 text-[18px] leading-[27px] text-cream/76">
                    You answered {correctCount} of {questions.length} questions
                    correctly. {result.copy}
                  </p>
                  <div className="mt-8 rounded-[8px] bg-cream/8 p-5">
                    <p className="text-[13px] uppercase tracking-[0.14em] text-cream/58">
                      Suggested next step
                    </p>
                    <p className="mt-3 font-display text-[34px] leading-none">
                      {selectedLanguage?.name} / {level}
                    </p>
                    <p className="mt-3 text-[15px] leading-[22px] text-cream/68">
                      Share this result with SALAD and we can confirm your class,
                      schedule, and teacher match.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={resetAssessment}
                      className="pill-button roll-link bg-cream text-dark hover:bg-cream-dark"
                    >
                      Retake Assessment
                    </button>
                    <Link
                      to={`/training/${language}`}
                      className="pill-button roll-link border border-cream/16 text-cream hover:bg-cream/8"
                    >
                      View Courses
                    </Link>
                  </div>
                </article>
              </FadeIn>

              <div className="grid gap-4">
                {recommendedCourses.length > 0 ? (
                  recommendedCourses.map((course, index) => (
                    <FadeIn key={course.id} y={24} delay={index * 0.04}>
                      <Link
                        to={`/courses/${course.id}`}
                        className="group grid gap-5 overflow-hidden rounded-[8px] bg-cream-dark p-4 shadow-[0_18px_46px_rgb(13_18_11_/_0.06)] transition-transform duration-500 hover:-translate-y-1 sm:grid-cols-[180px_1fr]"
                      >
                        <div className="h-[150px] overflow-hidden rounded-[6px] sm:h-full">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="py-1">
                          <div className="flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.12em] text-text-secondary/66">
                            <span>{course.level}</span>
                            <span>/</span>
                            <span>{course.duration}</span>
                          </div>
                          <h3 className="mt-4 font-display text-[36px] leading-none">
                            {course.shortTitle}
                          </h3>
                          <p className="mt-4 text-[15px] leading-[22px] text-text-secondary">
                            {course.description}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-[14px] text-text-primary">
                            Open course <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </FadeIn>
                  ))
                ) : (
                  <FadeIn y={24}>
                    <div className="rounded-[8px] bg-cream-dark p-7">
                      <h3 className="font-display text-[38px] leading-none">
                        Teacher match recommended
                      </h3>
                      <p className="mt-4 text-[16px] leading-[24px] text-text-secondary">
                        This language pathway is still expanding. Contact SALAD
                        and we can help you find the right teacher or schedule.
                      </p>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
