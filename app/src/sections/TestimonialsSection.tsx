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
    <section id="participants" className="bg-sage pt-[118px] pb-[170px] overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-[42px]">
          <h2 className="font-display italic text-text-primary text-[54px] leading-none">
            From Past Participants
          </h2>
          <p className="mt-4 text-text-muted text-[18px] leading-[25.2px]">
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
              className="bg-dark rounded-[7px] p-[26px] text-cream flex flex-col h-[322px] w-[383px] shrink-0"
            >
              <StarRating />
              <p className="mt-7 text-[20px] leading-[27px] flex-grow text-cream-dark">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-cream/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-[72px] h-[72px] rounded-[7px] object-cover"
                />
                <div>
                  <p className="text-[22px] leading-none font-display">{testimonial.name}</p>
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
