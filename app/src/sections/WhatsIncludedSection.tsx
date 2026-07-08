import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IncludedScrollCard from '../components/animations/IncludedScrollCard';
import { includedItems } from '../data/workshopContent';

export default function WhatsIncludedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const backgroundOpacity = useTransform(scrollYProgress, (value) => {
    if (value <= 0.84) return 0.82;
    if (value >= 0.97) return 0;
    return 0.82 * (1 - (value - 0.84) / 0.13);
  });

  return (
    <section
      id="package"
      ref={sectionRef}
      className="bg-[#0d120b] rounded-t-[28px] mt-0 h-[240dvh] overflow-visible relative z-10 md:h-[300dvh] md:rounded-t-[34px]"
    >
      <div className="sticky top-0 min-h-[100dvh] py-16 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[230px] items-start justify-center pt-[82px] md:inset-0 md:h-auto md:items-center md:pt-0">
          <motion.h2
            style={{ opacity: backgroundOpacity }}
            className="max-w-[330px] select-none text-center font-display italic text-[clamp(3.6rem,18vw,5rem)] leading-[0.9] text-cream md:max-w-none md:whitespace-nowrap md:text-[clamp(7rem,18vw,14rem)] md:leading-none"
          >
            Why choose us?
          </motion.h2>
        </div>

        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex min-h-[390px] items-center justify-center md:min-h-[430px]"
        >
          <div className="relative h-[min(58vh,382px)] min-h-[340px] w-[min(76vw,292px)] md:h-[414px] md:w-[310px]">
            {includedItems.map((item, i) => (
              <IncludedScrollCard
                key={item.title}
                description={item.description}
                image={item.image}
                index={i}
                progress={scrollYProgress}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
