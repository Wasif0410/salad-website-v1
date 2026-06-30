import { motion, useReducedMotion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

import { useMediaQuery } from '../../hooks/useMediaQuery';

type IncludedScrollCardProps = {
  description: string;
  image: string;
  index: number;
  progress: MotionValue<number>;
  title: string;
};

function createKeyframes(index: number, isMobile: boolean) {
  const compactOffset = isMobile ? 13 : 18;
  const activeY = isMobile ? 8 : -58;
  const exitY = isMobile ? -540 : -620;
  const holdAt = 0.16;
  const step = 0.2;
  const activeAt = holdAt + index * step;
  const prepAt = Math.max(0, activeAt - 0.045);
  const exitAt = activeAt + 0.12;
  const goneAt = Math.min(0.98, exitAt + 0.09);
  const deckOffset = Math.max(0, index);
  const deckX = compactOffset * deckOffset;
  const deckY = activeY + compactOffset * Math.min(deckOffset, 3);
  const activeRotation = index % 2 === 0 ? -7 : 6;
  const exitRotation = index % 2 === 0 ? -17 : 17;

  return {
    input: [0, prepAt, activeAt, exitAt, goneAt, 1],
    x: [
      index === 0 ? 0 : deckX,
      index === 0 ? 0 : deckX,
      0,
      index % 2 === 0 ? -24 : 24,
      index % 2 === 0 ? -28 : 28,
      index % 2 === 0 ? -28 : 28,
    ],
    y: [
      index === 0 ? activeY : deckY,
      index === 0 ? activeY : deckY,
      activeY,
      exitY,
      exitY - 80,
      exitY - 80,
    ],
    rotate: [
      -8 + deckOffset * 5,
      -8 + deckOffset * 5,
      activeRotation,
      exitRotation,
      exitRotation,
      exitRotation,
    ],
    scale: [
      1 - deckOffset * 0.045,
      1 - deckOffset * 0.045,
      1,
      0.94,
      0.94,
      0.94,
    ],
    opacity: [1, 1, 1, 0.98, 0, 0],
  };
}

export default function IncludedScrollCard({
  description,
  image,
  index,
  progress,
  title,
}: IncludedScrollCardProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const frames = createKeyframes(index, isMobile);
  const x = useTransform(progress, frames.input, reduceMotion ? [0, 0, 0, 0, 0, 0] : frames.x);
  const y = useTransform(progress, frames.input, reduceMotion ? [0, 0, 0, 0, 0, 0] : frames.y);
  const rotate = useTransform(
    progress,
    frames.input,
    reduceMotion ? [0, 0, 0, 0, 0, 0] : frames.rotate
  );
  const scale = useTransform(progress, frames.input, reduceMotion ? [1, 1, 1, 1, 1, 1] : frames.scale);
  const opacity = useTransform(progress, frames.input, reduceMotion ? [1, 1, 1, 1, 1, 1] : frames.opacity);

  return (
    <motion.article
      className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl will-change-transform"
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: 80 - index,
        transformOrigin: 'center center',
      }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-display text-cream text-[24px] leading-8">
          {title}
        </h3>
        <p className="mt-2 text-cream-dark text-[14px] leading-[22.75px]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
