import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { galleryRows } from '../data/workshopContent';

export default function WorkshopGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const firstRowX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -80]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [-80, -80] : [-80, 0]);

  return (
    <section ref={sectionRef} className="bg-sage pt-[92px] pb-[96px] overflow-hidden">
      <div className="section-container mb-[70px]">
        <div className="text-center">
          <h2 className="font-display italic text-text-primary text-[54px] leading-none">
            Moments from the Workshop
          </h2>
          <p className="mt-4 text-text-muted text-[18px] leading-[25.2px]">
            Quiet mornings. Fire-lit nights. Work worth remembering.
          </p>
        </div>
      </div>

      <motion.div
        className="mx-auto flex gap-[10px] md:gap-[10px]"
        style={{ width: 'max-content', x: firstRowX }}
      >
        {galleryRows[0].map((src, i) => (
          <div
            key={`row1-${i}`}
            className="h-[210px] md:h-[250px] w-[280px] md:w-[333px] rounded-[6px] overflow-hidden flex-shrink-0"
          >
            <img
              src={src}
              alt={`Workshop moment ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mx-auto flex gap-[10px] mt-[10px]"
        style={{ width: 'max-content', x: secondRowX }}
      >
        {galleryRows[1].map((src, i) => (
          <div
            key={`row2-${i}`}
            className="h-[210px] md:h-[250px] w-[280px] md:w-[333px] rounded-[6px] overflow-hidden flex-shrink-0"
          >
            <img
              src={src}
              alt={`Workshop moment ${i + 6}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
