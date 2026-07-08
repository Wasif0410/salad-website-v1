import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/animations/FadeIn';

export default function HostSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 88%', 'center 48%'],
  });
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1.16, 1],
  );

  return (
    <section
      id="host"
      ref={sectionRef}
      className="bg-sage pt-[74px] pb-[92px] md:pt-[86px] md:pb-[120px]"
    >
      <div className="section-container max-w-[1120px] mx-auto text-center">
        <FadeIn y={30} className="mx-auto">
          <p
            className="text-[20px] leading-[28px] font-display text-text-primary md:text-[22px] md:leading-[30.8px]"
          >
            Meet the Maestro
          </p>

          <h2
            className="font-display italic text-text-primary text-[44px] leading-none mt-3 md:mt-4 md:text-[54px]"
          >
            Andre Dupuy
          </h2>
        </FadeIn>

        <FadeIn
          y={38}
          delay={0.06}
          className="mt-[30px] rounded-[6px] overflow-hidden mx-auto max-w-[1080px] md:mt-[38px]"
        >
          <motion.img
            src="/images/andre-dupuy.png"
            alt="Andre Dupuy"
            className="w-full h-[min(64vh,430px)] object-cover will-change-transform md:h-[600px]"
            style={{ scale: imageScale }}
          />
        </FadeIn>

        <FadeIn
          y={26}
          delay={0.08}
          className="mt-[36px] max-w-[700px] mx-auto space-y-[16px] md:mt-[52px] md:space-y-[18px]"
        >
          <p className="text-text-secondary text-[16px] leading-[23px] md:text-[18px] md:leading-[25.2px]">
            Andre brings SALAD's creative teaching method to life through a
            background in music, production, and language coaching.
          </p>
          <p className="text-text-secondary text-[16px] leading-[23px] md:text-[18px] md:leading-[25.2px]">
            His approach treats French and English as rhythm, flow, and real
            conversation, helping learners build confidence with structured live
            practice.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
