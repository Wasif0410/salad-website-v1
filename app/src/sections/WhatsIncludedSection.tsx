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
      className="bg-dark rounded-t-[34px] mt-0 h-[300dvh] overflow-visible relative z-10"
    >
      <div className="sticky top-0 min-h-[100dvh] py-20 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.h2
            style={{ opacity: backgroundOpacity }}
            className="font-display italic text-cream text-[clamp(7rem,18vw,14rem)] leading-none whitespace-nowrap select-none"
          >
            What's Included
          </motion.h2>
        </div>

        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex items-center justify-center"
          style={{ minHeight: '430px' }}
        >
          <div className="relative w-[292px] md:w-[310px] h-[382px] md:h-[414px]">
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
