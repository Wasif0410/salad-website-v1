const levels = [
  {
    code: 'A1',
    name: 'Beginner',
    description: 'Build foundations for everyday situations.',
  },
  {
    code: 'A2',
    name: 'Elementary',
    description: 'Expand vocabulary and simple conversations.',
  },
  {
    code: 'B1',
    name: 'Intermediate',
    description: 'Express ideas and talk about experiences.',
  },
  {
    code: 'B2',
    name: 'Upper Intermediate',
    description: 'Communicate in complex discussions.',
  },
  {
    code: 'C1',
    name: 'Advanced',
    description: 'Use French fluently and effectively.',
  },
  {
    code: 'C2',
    name: 'Proficient',
    description: 'Master nuance, precision, and culture.',
  },
] as const;

const progressFeatures = [
  {
    title: 'Milestones',
    description: 'Clear next steps.',
  },
  {
    title: 'CEFR',
    description: 'Recognized curriculum.',
  },
  {
    title: 'Progress',
    description: 'Visible growth.',
  },
  {
    title: 'Teachers',
    description: 'Expert guidance.',
  },
] as const;

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-sage rounded-t-[28px] -mt-8 relative z-10 pt-[76px] pb-[84px] md:rounded-t-[34px] md:pt-[112px] md:pb-[110px]"
    >
      <div className="w-full px-5 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-9 md:mb-12">
            <h2 className="font-display italic text-text-primary text-[40px] leading-[0.98] md:text-[64px]">
              Your French Journey, Step by Step
            </h2>
            <p className="mt-4 text-text-muted text-[16px] leading-[23px] md:mt-5 md:text-[20px] md:leading-7">
              From first words to confident conversation with clarity and
              support at every level.
            </p>
          </div>

          <div
            data-location-top-grid
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-5 bg-dark rounded-[8px] p-6 min-h-[300px] flex flex-col justify-center md:min-h-[356px] md:p-10">
              <h3 className="font-display text-cream text-[31px] leading-[35px] md:text-[42px] md:leading-[46px] max-w-[460px]">
                Progress that feels visible, calm, and guided.
              </h3>
              <p className="mt-5 text-cream text-[16px] leading-[23px] md:mt-6 md:text-[20px] md:leading-[28px] max-w-[470px]">
                Each level gives learners a clear target, practical outcomes,
                and the confidence to keep moving without guessing what comes
                next.
              </p>
            </div>

            <div className="lg:col-span-7 bg-sage-dark/70 rounded-[8px] p-4 min-h-[356px] grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 md:p-8">
              {levels.map((level) => (
                <article
                  key={level.code}
                  className="bg-sage rounded-[7px] border border-dark/5 p-4 min-h-[136px] flex flex-col md:min-h-[142px] md:p-6"
                >
                  <h3 className="font-display text-text-primary text-[30px] leading-none md:text-[34px]">
                    {level.code}
                  </h3>
                  <p className="mt-2 text-text-primary text-[15px] leading-5">
                    {level.name}
                  </p>
                  <p className="mt-2.5 text-text-secondary text-[13px] leading-[18px] md:mt-3 md:text-[14px] md:leading-[19px]">
                    {level.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div
            data-location-bottom-grid
            className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-3 bg-dark rounded-[8px] p-6 md:p-7 min-h-[118px] flex items-center">
              <h3 className="font-display text-cream text-[30px] leading-[34px] md:text-[34px] md:leading-[38px]">
                Explore the Learning Path
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {progressFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="bg-sage-dark/70 rounded-[8px] p-5 min-h-[112px] md:min-h-[118px] md:p-6"
                >
                  <h3 className="font-display text-text-primary text-[25px] leading-none md:text-[28px]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-text-secondary text-[15px] leading-5">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
