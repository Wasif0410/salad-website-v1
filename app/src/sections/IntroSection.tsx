import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const trustedOrganizations = [
  {
    name: 'House of Commons',
    src: '/images/clients-normalized/house-of-commons.png',
  },
  {
    name: 'Employment and Social Development Canada',
    src: '/images/clients-normalized/esdc.png',
  },
  {
    name: 'Crown-Indigenous Relations and Northern Affairs Canada',
    src: '/images/clients-normalized/cirnac.png',
  },
  {
    name: 'Office of the Superintendent of Financial Institutions',
    src: '/images/clients-normalized/osfi.png',
  },
  {
    name: 'RBC',
    src: '/images/clients-normalized/rbc.png',
  },
  {
    name: 'Deloitte',
    src: '/images/clients-normalized/deloitte.png',
  },
  {
    name: 'Sun Life Financial',
    src: '/images/clients-normalized/sun-life.png',
  },
  {
    name: 'CIRO OCRI',
    src: '/images/clients/ciro.svg',
  },
  {
    name: 'Rogers',
    src: '/images/clients-normalized/rogers.png',
  },
  {
    name: 'Cogeco',
    src: '/images/clients-normalized/cogeco.png',
  },
  {
    name: 'Federation of Canadian Municipalities',
    src: '/images/clients-normalized/fcm.png',
  },
  {
    name: 'York University',
    src: '/images/clients-normalized/york-university.png',
  },
  {
    name: 'Laurentian University',
    src: '/images/clients-normalized/laurentian-university.png',
  },
  {
    name: 'Cegep Heritage College',
    src: '/images/clients-normalized/cegep-heritage.png',
  },
  {
    name: 'AFOA Canada',
    src: '/images/clients-normalized/afoa-canada.png',
  },
] as const;

export default function IntroSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden bg-dark py-[76px] md:py-[118px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[-220px] h-[260px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(44,50,41,0) 0%, rgba(44,50,41,0.42) 54%, rgb(44,50,41) 100%)',
        }}
      />

      <div className="section-container relative flex flex-col items-center">
        <FadeIn y={24} className="mx-auto max-w-[1120px] text-center">
          <div className="trusted-eyebrow flex items-center justify-center gap-4">
            <span className="hidden h-px w-[72px] bg-cream/20 md:block" />
            <span>Trusted by leading organizations</span>
            <span className="hidden h-px w-[72px] bg-cream/20 md:block" />
          </div>

          <h2 className="mx-auto mt-7 max-w-[1220px] font-display italic text-[38px] leading-[0.98] text-cream-dark sm:text-[50px] md:text-[64px] md:leading-[0.96] lg:text-[68px] xl:text-[72px]">
            Language training trusted by institutions
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-[23px] text-cream/84 md:text-[18px] md:leading-[25.2px]">
            Live French and English programs for public sector teams, national
            organizations, universities, and growing businesses.
          </p>
        </FadeIn>

        <FadeIn y={34} className="mx-auto mt-[40px] w-full max-w-[1000px] md:mt-[54px]">
          <motion.div
            className="trusted-logo-panel"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.035,
                },
              },
            }}
          >
            <div className="trusted-logo-mobile md:hidden" aria-label="Trusted partner logos">
              {[0, 1].map((rowIndex) => {
                const rowOrganizations =
                  rowIndex === 0
                    ? trustedOrganizations
                    : [
                        ...trustedOrganizations.slice(5),
                        ...trustedOrganizations.slice(0, 5),
                      ];

                return (
                  <div className="trusted-logo-mobile-row" key={rowIndex}>
                    <div
                      className={`trusted-logo-marquee ${
                        rowIndex === 1 ? 'trusted-logo-marquee--reverse' : ''
                      }`}
                    >
                      {[0, 1].map((setIndex) => (
                        <div className="trusted-logo-marquee-set" key={setIndex}>
                          {rowOrganizations.map((organization) => (
                            <div
                              aria-hidden={setIndex === 1}
                              className="trusted-logo-carousel-cell"
                              key={`${rowIndex}-${setIndex}-${organization.name}`}
                            >
                              <img
                                src={organization.src}
                                alt={setIndex === 0 ? `${organization.name} logo` : ''}
                                className="trusted-logo-mark"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="trusted-logo-grid hidden md:grid">
              {trustedOrganizations.map((organization) => (
                <motion.div
                  key={organization.name}
                  className="trusted-logo-cell"
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.98 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={organization.src}
                    alt={`${organization.name} logo`}
                    className="trusted-logo-mark"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn y={18} delay={0.08} className="trusted-logo-note mt-[22px]">
          <span>15 partner organizations represented across Canada</span>
        </FadeIn>
      </div>
    </section>
  );
}
