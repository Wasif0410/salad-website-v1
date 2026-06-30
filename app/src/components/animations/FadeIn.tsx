import { motion, useReducedMotion } from 'framer-motion';
import type { ComponentProps, ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<ComponentProps<typeof motion.div>, 'children' | 'initial' | 'animate' | 'whileInView' | 'transition'>;

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.28 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
