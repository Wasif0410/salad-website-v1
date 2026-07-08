import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Instagram, Phone, Mail } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import { faqs } from '../data/workshopContent';

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="bg-sage-dark rounded-[7px] mb-[22px] overflow-hidden"
      variants={{
        hidden: { x: 30, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-5 text-left md:px-8 md:py-[27px]"
      >
        <span className="font-display text-text-primary text-[22px] leading-[26px] pr-4 md:text-[24px] md:leading-none">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-dark flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-0' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <X className="w-3.5 h-3.5 text-cream" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-cream" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 md:px-6 pb-4 md:pb-5 text-text-secondary text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-sage pt-[78px] pb-[96px] md:pt-[104px] md:pb-[132px]">
      <div className="w-full px-5 md:px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_950px] justify-between gap-10 lg:gap-12">
          <FadeIn y={30}>
            <h2 className="font-display italic text-text-primary text-[42px] leading-[0.98] md:text-[54px] md:leading-none">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="mt-6 lg:mt-[342px] text-text-muted text-[16px] leading-[23px] md:text-[18px] md:leading-[25px]">
              Still deciding where to start?
              <br />
              SALAD can help you choose the right path.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Follow SALAD on Instagram"
                className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-cream hover:bg-olive-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#apply"
                aria-label="Request a SALAD call"
                className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-cream hover:bg-olive-light transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#apply"
                aria-label="Contact SALAD"
                className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-cream hover:bg-olive-light transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
