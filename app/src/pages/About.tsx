import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router';
import FadeIn from '../components/animations/FadeIn';

const principles = [
  ['Rhythm', 'Language becomes easier when learners hear its pattern and pace.'],
  ['Flow', 'Practice moves from listening to imitation, then into natural response.'],
  ['Confidence', 'Small-group live classes create room to speak before perfection.'],
  ['Expression', 'The goal is not memorization. It is a voice learners can actually use.'],
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 86%', 'center 48%'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.15, 1]);

  return (
    <main className="bg-sage text-text-primary">
      <section
        ref={sectionRef}
        className="pt-[124px] pb-[70px] md:pt-[154px] md:pb-[96px]"
      >
        <div className="section-container max-w-[1120px] text-center">
          <FadeIn y={28}>
            <h1 className="font-display italic text-[54px] leading-none md:text-[82px]">
              Andre Dupuy
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] text-[18px] leading-[27px] text-text-secondary">
              Andre brings rhythm, flow, and expression into online language
              learning through a background in music, production, and creative
              teaching.
            </p>
          </FadeIn>

          <FadeIn y={36} delay={0.05} className="mt-10 overflow-hidden rounded-[8px]">
            <motion.img
              src="/images/andre-dupuy.png"
              alt="Andre Dupuy"
              className="h-[430px] w-full object-cover will-change-transform md:h-[620px]"
              style={{ scale: imageScale }}
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-dark py-[76px] text-cream md:py-[104px]">
        <div className="section-container max-w-[1120px]">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <FadeIn y={28}>
              <h2 className="font-display italic text-[46px] leading-none md:text-[66px]">
                Language has rhythm before it has rules
              </h2>
            </FadeIn>
            <FadeIn y={28} delay={0.05}>
              <div className="space-y-5 text-[18px] leading-[28px] text-cream/78">
                <p>
                  Andre's creative background shaped SALAD's belief that
                  language is more than memorization. It is listening, timing,
                  confidence, and the ability to respond with ease.
                </p>
                <p>
                  SALAD uses structured live instruction, small groups, and
                  teacher feedback to help learners build a voice they can use
                  in real conversations.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {principles.map(([title, text], index) => (
              <FadeIn key={title} y={24} delay={index * 0.04}>
                <article className="h-full rounded-[8px] border border-cream/10 p-6">
                  <h3 className="font-display text-[34px] leading-none">{title}</h3>
                  <p className="mt-4 text-[15px] leading-[22px] text-cream/70">
                    {text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[76px] md:py-[98px]">
        <div className="section-container max-w-[980px] text-center">
          <FadeIn y={28}>
            <h2 className="font-display italic text-[44px] leading-none md:text-[62px]">
              Start with the right level
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[25px] text-text-secondary">
              Whether you are learning for work, study, travel, or confidence,
              SALAD helps you find a path that feels structured and human.
            </p>
            <Link
              to="/training"
              className="pill-button roll-link mt-8 bg-olive text-cream hover:bg-olive-light"
            >
              Explore Training
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
