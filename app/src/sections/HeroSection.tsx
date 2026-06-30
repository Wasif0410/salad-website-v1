import { motion, useReducedMotion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import RollingText from '../components/RollingText';

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const settleTransition: Transition = { duration: 1.25, ease: [0.22, 1, 0.36, 1] };

  return (
    <section
      className="relative min-h-[100dvh] flex items-start justify-center overflow-hidden bg-sage"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: reduceMotion ? 1 : 1.018 }}
        animate={{ scale: 1 }}
        transition={{ ...settleTransition, delay: 0.18 }}
      >
        <img
          src="/images/hero-sky.jpg"
          alt="Soft gradient sky over Tuscany"
          className="absolute inset-0 w-full h-[117%] -top-[8.5%] object-cover"
        />
        <img
          src="/images/hero-bg.jpg"
          alt="Landscape with a vineyard in rows leading to a building with a tower"
          className="absolute inset-0 w-full h-[117%] object-cover"
        />
        <motion.img
          src="/images/hero-front.png"
          alt="Vineyard rows with leafy foreground"
          className="absolute inset-0 w-full h-[117%] object-cover"
          initial={{ y: reduceMotion ? 0 : 14 }}
          animate={{ y: 0 }}
          transition={{ ...settleTransition, delay: 0.18 }}
        />
        <div className="absolute inset-x-0 bottom-[-1px] h-[54dvh] bg-gradient-to-b from-transparent via-dark/55 to-dark" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-[760px] mx-auto pt-[150px] md:pt-[150px]">
        <motion.h1
          className="font-display italic text-text-primary text-[clamp(4rem,7vw,5.5rem)] leading-[1.1]"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.46 }}
        >
          The Lost Art of Dough
        </motion.h1>
        <motion.p
          className="mt-4 text-text-primary text-[18px] leading-[25.2px] max-w-[500px] mx-auto"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.56 }}
        >
          A 48-Hour immersive masterclass in sourdough, fire, and Italian
          tradition. Hosted in the hills of Tuscany. Limited to twelve artisans.
        </motion.p>
        <motion.a
          href="#apply"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="pill-button roll-link mt-8 bg-olive text-cream hover:bg-dark"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.66 }}
        >
          <RollingText label="Apply for a Seat" />
        </motion.a>
      </div>
    </section>
  );
}
