import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "This is not for everyone, and that's exactly why it's powerful. If you're serious, it's worth every investment.",
    name: 'Emily Alvarez',
    role: 'Food Consultant',
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote:
      'The setting, the pace, the level of attention. It felt more like an apprenticeship than a class.',
    name: 'Sofia Klein',
    role: 'Artisan Baker',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote:
      'I came expecting techniques. I left with intuition. This workshop reshaped my relationship with craft.',
    name: 'Daniel Hart',
    role: 'Restaurant Owner',
    avatar: '/images/avatar-3.jpg',
  },
  {
    quote:
      "This completely changed how I approach dough and teaching. I've never experienced anything like it.",
    name: 'Elena Moretti',
    role: 'Private Chef',
    avatar: '/images/avatar-4.jpg',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-cream-dark text-cream-dark"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const carouselItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="participants" className="bg-sage pt-[84px] pb-[112px] overflow-hidden md:pt-[118px] md:pb-[170px]">
      <div className="section-container">
        <div className="text-center mb-[34px] md:mb-[42px]">
          <h2 className="font-display italic text-text-primary text-[42px] leading-[0.98] md:text-[54px] md:leading-none">
            From Past Participants
          </h2>
          <p className="mt-4 text-text-muted text-[16px] leading-[23px] md:text-[18px] md:leading-[25.2px]">
            Reflections from those who've been inside the experience.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] overflow-hidden px-0">
        <motion.div
          className="flex w-max gap-[10px] will-change-transform"
          initial={{ x: -350 }}
          animate={reduceMotion ? { x: -350 } : { x: [-350, -1922] }}
          transition={reduceMotion ? undefined : { duration: 32, ease: 'linear', repeat: Infinity }}
        >
          {carouselItems.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-dark rounded-[7px] p-5 text-cream flex flex-col h-[300px] w-[min(82vw,383px)] shrink-0 md:h-[322px] md:w-[383px] md:p-[26px]"
            >
              <StarRating />
              <p className="mt-6 text-[18px] leading-[25px] flex-grow text-cream-dark md:mt-7 md:text-[20px] md:leading-[27px]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-cream/10 md:gap-4 md:mt-6 md:pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-[58px] h-[58px] rounded-[7px] object-cover md:h-[72px] md:w-[72px]"
                />
                <div>
                  <p className="text-[20px] leading-none font-display md:text-[22px]">{testimonial.name}</p>
                  <p className="mt-2 text-[15px] text-cream-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
