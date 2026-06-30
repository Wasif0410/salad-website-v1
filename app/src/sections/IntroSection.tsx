import FadeIn from '../components/animations/FadeIn';
import { introImages } from '../data/workshopContent';

export default function IntroSection() {
  return (
    <section
      className="relative z-10 bg-dark pt-[86px] pb-[110px] md:pt-[110px] md:pb-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[-320px] h-[360px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(44,50,41,0) 0%, rgba(44,50,41,0.72) 52%, rgb(44,50,41) 100%)',
        }}
      />

      <div className="section-container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-[900px] mx-auto">
          {introImages.map((src, i) => (
            <FadeIn
              key={i}
              delay={i * 0.07}
              y={74}
              className={`aspect-[0.67] rounded-[6px] overflow-hidden ${i % 2 ? 'md:mt-[50px]' : ''}`}
            >
              <img
                src={src}
                alt={`Tuscan experience ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn
          y={38}
          className="mt-20 md:mt-[84px] text-center text-cream text-[18px] leading-[25.2px] max-w-[700px] mx-auto"
        >
          This is a workshop for those who believe mastery is built slowly,
          intentionally, and by hand. For 48 hours, you'll step inside a private
          Tuscan kitchen to learn the science, rhythm, and instinct behind
          exceptional sourdough pizza. No crowds. No shortcuts. No certificates
          for showing up. Just fire, fermentation, and a maestro guiding every
          step.
        </FadeIn>
      </div>
    </section>
  );
}
