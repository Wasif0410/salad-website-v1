import { motion } from 'framer-motion';
import { experiences } from '../data/workshopContent';

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="bg-sage rounded-t-[34px] mt-[56px] relative z-20 pt-6 pb-[108px] md:pt-6 md:pb-[120px]"
    >
      <div className="section-container">
        <motion.div
          className="text-center mb-[68px] md:mb-[70px] max-w-[700px] mx-auto"
          initial={{ y: 22, opacity: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display italic text-text-primary text-[54px] leading-none">
            What the 48 Hours Hold
          </h2>
          <p className="mt-4 text-text-muted text-[18px] leading-[25.2px]">
            Every moment designed for depth, craft, and mastery.
          </p>
        </motion.div>

        <div className="relative max-w-[1000px] mx-auto space-y-[92px] md:space-y-[110px]">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-text-primary/80" />
          {experiences.map((exp, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={exp.number}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_96px_1fr] items-center gap-8 md:gap-0"
              >
                <div className="md:hidden justify-self-center">
                  <span className="inline-flex bg-dark-secondary text-cream text-[22px] font-display leading-none px-3 py-2 rounded-[7px]">
                    {exp.number}
                  </span>
                </div>

                <div className={`${isReversed ? 'md:col-start-3 md:row-start-1' : 'md:col-start-1 md:row-start-1'} w-full`}>
                  <div className="aspect-[1.49] rounded-[12px] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="hidden md:flex col-start-2 row-start-1 justify-center self-start pt-0">
                  <span className="relative z-10 inline-flex bg-dark-secondary text-cream text-[22px] font-display leading-none px-3 py-2 rounded-[7px]">
                    {exp.number}
                  </span>
                </div>

                <div className={`${isReversed ? 'md:col-start-1 md:row-start-1 md:pr-12' : 'md:col-start-3 md:row-start-1 md:pl-12'} w-full`}>
                  <h3 className="font-display text-text-primary text-[34px] leading-[44.2px]">
                    {exp.title}
                  </h3>
                  <p className="mt-4 text-text-secondary text-[18px] leading-[25.2px] max-w-[428px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
