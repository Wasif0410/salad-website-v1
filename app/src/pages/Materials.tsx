import FadeIn from '../components/animations/FadeIn';
import { materials } from '../data/siteContent';

const supportSteps = [
  ['Receive', 'Get resources matched to your class level and weekly goals.'],
  ['Practice', 'Use exercises, prompts, and vocabulary between live lessons.'],
  ['Refine', 'Bring questions back to class and get teacher feedback.'],
  ['Progress', 'Track what is improving and what needs repetition.'],
];

export default function Materials() {
  return (
    <main className="bg-sage text-text-primary">
      <section className="pt-[124px] pb-[70px] md:pt-[154px] md:pb-[96px]">
        <div className="section-container max-w-[1120px] text-center">
          <FadeIn y={28}>
            <h1 className="font-display italic text-[54px] leading-none md:text-[82px]">
              Learning Materials
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] text-[18px] leading-[27px] text-text-secondary">
              Structured resources for learners and teachers, designed to keep
              practice moving between live SALAD classes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-[84px] md:pb-[112px]">
        <div className="section-container max-w-[1180px]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {materials.map((material, index) => (
              <FadeIn key={material.id} y={28} delay={index * 0.04}>
                <article className="group h-full overflow-hidden rounded-[8px] bg-dark text-cream shadow-[0_22px_58px_rgb(13_18_11_/_0.13)]">
                  <div className="h-[210px] overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-cream/58">
                      {material.audience}
                    </p>
                    <h2 className="mt-4 font-display text-[32px] leading-[0.98]">
                      {material.title}
                    </h2>
                    <p className="mt-4 text-[14px] leading-[21px] text-cream/74">
                      {material.description}
                    </p>
                    <p className="mt-6 text-[16px] text-cream/88">{material.price}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-[76px] md:py-[104px]">
        <div className="section-container max-w-[1120px]">
          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center">
            <FadeIn y={28}>
              <h2 className="font-display italic text-[44px] leading-none md:text-[62px]">
                Practice that stays connected to class
              </h2>
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2">
              {supportSteps.map(([title, text], index) => (
                <FadeIn key={title} y={24} delay={index * 0.035}>
                  <div className="rounded-[8px] bg-sage p-5">
                    <h3 className="font-display text-[30px] leading-none">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[22px] text-text-secondary">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
