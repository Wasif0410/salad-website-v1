import { useCallback, useEffect, useRef, useState } from 'react';
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type LanguageClass = {
  title: string;
  detail: string;
  image: string;
};

const languageClasses: LanguageClass[] = [
  {
    title: 'English',
    detail: 'All levels',
    image: '/images/language-classes/english.png',
  },
  {
    title: 'French',
    detail: 'Live classes',
    image: '/images/language-classes/french.png',
  },
  {
    title: 'Spanish',
    detail: 'Conversation focus',
    image: '/images/language-classes/spanish.png',
  },
  {
    title: 'Cantonese',
    detail: 'Pronunciation and tones',
    image: '/images/language-classes/cantonese.png',
  },
  {
    title: 'More Languages',
    detail: 'And more',
    image: '/images/language-classes/more-languages.png',
  },
];

type LanguageClassCardProps = {
  course: LanguageClass;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
};

function LanguageClassCard({
  course,
  index,
  progress,
  reduceMotion,
}: LanguageClassCardProps) {
  const y = useTransform(
    progress,
    [0, 0.42, 1],
    reduceMotion ? [0, 0, 0] : [16 + index * 3, 0, -10]
  );
  const imageScale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1.07, 1]);

  return (
    <motion.div
      data-language-card
      className="h-[392px] w-[min(76vw,282px)] shrink-0 snap-center md:h-[392px] md:w-[236px] lg:h-[414px] lg:w-[248px]"
    >
      <motion.article className="h-full w-full will-change-transform" style={{ y }}>
        <div className="group/card flex h-full w-full flex-col overflow-hidden rounded-[8px] bg-dark shadow-[0_24px_60px_rgb(13_18_11_/_0.16)] transition-[box-shadow,transform] duration-500 ease-salad hover:-translate-y-2 hover:scale-[1.012] hover:shadow-[0_30px_74px_rgb(13_18_11_/_0.22)]">
          <div className="relative h-[66%] overflow-hidden bg-dark">
            <motion.img
              src={course.image}
              alt={`${course.title} language class`}
              className="h-full w-full object-cover will-change-transform transition-[filter] duration-500 ease-salad group-hover/card:brightness-105"
              style={{ scale: imageScale }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(13_18_11_/_0)_54%,rgb(13_18_11_/_0.18)_100%)]" />
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-center bg-dark px-6 py-6 text-cream">
            <div className="mb-5 h-px w-7 bg-cream/40" />
            <h3 className="font-display text-[32px] leading-none md:text-[35px] lg:text-[36px]">
              {course.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[20px] text-cream/78">
              {course.detail}
            </p>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function WorkshopGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.45], reduceMotion ? [0, 0] : [20, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.35], [0.68, 1]);
  const activeCourse = languageClasses[activeCourseIndex] ?? languageClasses[0];

  const updateActiveCourse = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>('[data-language-card]')
    );
    if (cards.length === 0) return;

    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const currentDistance = Math.abs(cardCenter - carouselCenter);
      const closestCard = cards[closest];
      const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;
      const closestDistance = Math.abs(closestCenter - carouselCenter);

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveCourseIndex((current) =>
      current === closestIndex ? current : closestIndex
    );
  }, []);

  const scrollToCourse = useCallback(
    (direction: -1 | 1) => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const cards = Array.from(
        carousel.querySelectorAll<HTMLElement>('[data-language-card]')
      );
      const nextIndex = Math.min(
        Math.max(activeCourseIndex + direction, 0),
        cards.length - 1
      );
      const targetCard = cards[nextIndex];
      if (!targetCard) return;

      const left =
        targetCard.offsetLeft -
        carousel.clientWidth / 2 +
        targetCard.offsetWidth / 2;

      carousel.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' });
      setActiveCourseIndex(nextIndex);
    },
    [activeCourseIndex, reduceMotion]
  );

  useEffect(() => {
    updateActiveCourse();
    window.addEventListener('resize', updateActiveCourse);

    return () => window.removeEventListener('resize', updateActiveCourse);
  }, [updateActiveCourse]);

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[100dvh] items-center overflow-hidden bg-sage py-[78px] md:py-[108px]"
    >
      <div className="w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="section-container text-center"
            style={{ opacity: headingOpacity, y: headingY }}
          >
            <h2 className="font-display italic text-[40px] leading-[0.98] text-text-primary sm:text-[46px] md:text-[60px] md:leading-none">
              Explore Our Language Classes
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[23px] text-text-muted md:text-[18px] md:leading-[25.2px]">
              Choose the language path that fits your goals, level, and schedule.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={carouselRef}
          onScroll={updateActiveCourse}
          className="language-course-carousel mt-[42px] w-full snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-[68px] md:overflow-visible md:pb-7"
          initial={reduceMotion ? false : { opacity: 0, y: 38, scale: 0.99 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.82, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto flex w-max gap-4 md:w-full md:max-w-[1320px] md:justify-center md:gap-5">
            {languageClasses.map((course, index) => (
              <LanguageClassCard
                key={course.title}
                course={course}
                index={index}
                progress={scrollYProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-1 flex max-w-[320px] items-center justify-center gap-4 px-5 md:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Show previous language class"
            onClick={() => scrollToCourse(-1)}
            disabled={activeCourseIndex === 0}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-cream transition-opacity disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0 flex-1 text-center">
            <p className="font-display text-[24px] leading-none text-text-primary">
              {activeCourse.title}
            </p>
            <p className="mt-1 text-[13px] leading-[18px] text-text-secondary">
              {activeCourseIndex + 1} of {languageClasses.length} · {activeCourse.detail}
            </p>
          </div>

          <button
            type="button"
            aria-label="Show next language class"
            onClick={() => scrollToCourse(1)}
            disabled={activeCourseIndex === languageClasses.length - 1}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-cream transition-opacity disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.p
          className="mx-auto mt-5 max-w-[560px] px-5 text-center text-[15px] leading-[21px] text-text-secondary/80 md:mt-7 md:px-6"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Start with a placement assessment, then SALAD will help match you to
          the right class format and level.
        </motion.p>
      </div>
    </section>
  );
}
