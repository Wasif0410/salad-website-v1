import { motion, useReducedMotion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Link } from 'react-router';
import RollingText from '../components/common/RollingText';

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
        <motion.img
          src="/images/salad-hero-landscape.png"
          alt="Open countryside study scene inspired by SALAD Language School"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ y: reduceMotion ? 0 : 10 }}
          animate={{ y: 0 }}
          transition={{ ...settleTransition, delay: 0.18 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-transparent to-dark/72" />
        <div className="absolute inset-x-0 bottom-[-1px] h-[34dvh] bg-gradient-to-b from-transparent to-dark" />
      </motion.div>

      <div className="relative z-10 text-center px-5 max-w-[760px] mx-auto pt-[128px] md:pt-[150px]">
        <motion.h1
          className="font-display italic text-text-primary text-[clamp(3.15rem,15vw,4.25rem)] leading-[1.04] sm:text-[clamp(3.7rem,11vw,4.85rem)] md:text-[clamp(4rem,7vw,5.5rem)] md:leading-[1.1]"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.46 }}
        >
          Speak With Confidence
        </motion.h1>
        <motion.p
          className="mt-4 text-text-primary text-[16px] leading-[23px] max-w-[500px] mx-auto md:text-[18px] md:leading-[25.2px]"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.56 }}
        >
          Live language classes designed around your level, your goals, and
          real conversation. Build confidence with guided practice, feedback,
          and a clear path forward.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ y: reduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...settleTransition, delay: 0.66 }}
        >
          <Link
            to="/assessment"
            className="pill-button roll-link bg-dark text-cream hover:bg-olive md:bg-olive md:hover:bg-dark"
          >
            <RollingText label="Find Your Class" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
