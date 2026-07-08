import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import { languagePrograms, courses } from '../data/siteContent';

const steps = [
  ['01', 'Choose a language', 'Start with the language path that matches your goals.'],
  ['02', 'Find your level', 'Use CEFR-aligned guidance to begin in the right class.'],
  ['03', 'Learn live', 'Practice with experienced instructors in small online groups.'],
  ['04', 'Track progress', 'Use feedback and materials to keep improving between lessons.'],
];

export default function Training() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <main className="bg-sage text-text-primary">
      <section className="relative overflow-hidden bg-dark pt-[128px] pb-[88px] text-cream md:pt-[156px] md:pb-[118px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgb(223_229_215_/_0.13),transparent_34%)]" />
        <div className="section-container relative max-w-[1120px] text-center">
          <FadeIn y={28}>
            <h1 className="font-display italic text-[52px] leading-[0.94] md:text-[86px]">
              Choose Your Language Path
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-[26px] text-cream/82 md:text-[21px] md:leading-[30px]">
              Live online language training for every level, taught by expert
              instructors and shaped around real conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-[76px] md:py-[108px]">
        <div className="w-full">
          <div className="section-container text-center">
            <FadeIn y={24}>
              <h2 className="font-display italic text-[42px] leading-none md:text-[62px]">
                Explore Training
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[17px] leading-[25px] text-text-secondary">
                Select a language to see course options, levels, schedules, and
                what each class is built to help you practice.
              </p>
            </FadeIn>
          </div>

          <div className="language-course-carousel mt-[46px] w-full overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-[62px] md:overflow-visible">
            <div className="mx-auto flex w-max gap-4 md:w-full md:max-w-[1320px] md:justify-center md:gap-5">
              {languagePrograms.map((language, index) => {
                const count = courses.filter((course) => course.languageId === language.id).length;

                return (
                  <motion.div
                    key={language.id}
                    className="w-[min(76vw,282px)] shrink-0 md:w-[248px]"
                    initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={`/training/${language.id}`}
                      className="group flex h-[430px] flex-col overflow-hidden rounded-[8px] bg-dark text-cream shadow-[0_24px_60px_rgb(13_18_11_/_0.14)] transition-transform duration-500 hover:-translate-y-2"
                    >
                      <div className="h-[62%] overflow-hidden">
                        <img
                          src={language.image}
                          alt={`${language.name} language training`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between px-6 py-6">
                        <div>
                          <div className="mb-5 h-px w-7 bg-cream/40" />
                          <h3 className="font-display text-[36px] leading-none">
                            {language.name}
                          </h3>
                          <p className="mt-3 text-[14px] leading-[20px] text-cream/76">
                            {language.summary}
                          </p>
                        </div>
                        <div className="mt-5 flex items-center justify-between text-[12px] uppercase tracking-[0.14em] text-cream/62">
                          <span>{language.accent}</span>
                          <span>{count} options</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-[78px] md:py-[104px]">
        <div className="section-container max-w-[1120px]">
          <FadeIn y={24} className="text-center">
            <h2 className="font-display italic text-[42px] leading-none md:text-[58px]">
              How SALAD Places You
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map(([number, title, text], index) => (
              <FadeIn key={title} y={24} delay={index * 0.04}>
                <article className="h-full rounded-[8px] bg-sage p-6 shadow-[0_18px_46px_rgb(13_18_11_/_0.06)]">
                  <span className="font-mono text-[13px] text-text-secondary/70">
                    {number}
                  </span>
                  <h3 className="mt-5 font-display text-[31px] leading-none">
                    {title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[22px] text-text-secondary">
                    {text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
