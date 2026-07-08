import { Link } from 'react-router';
import FadeIn from '../components/animations/FadeIn';
import { teachers } from '../data/siteContent';

export default function Team() {
  return (
    <main className="bg-sage text-text-primary">
      <section className="pt-[124px] pb-[70px] md:pt-[154px] md:pb-[96px]">
        <div className="section-container max-w-[1120px] text-center">
          <FadeIn y={28}>
            <h1 className="font-display italic text-[54px] leading-none md:text-[82px]">
              Meet Our Teachers
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] text-[18px] leading-[27px] text-text-secondary">
              Native, certified, and specialist instructors who make language
              feel human, practical, and connected to real conversation.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {teachers.map((teacher, index) => (
              <FadeIn key={teacher.id} y={28} delay={index * 0.025}>
                <article className="group h-full rounded-[8px] bg-cream-dark p-3 shadow-[0_18px_44px_rgb(13_18_11_/_0.08)] transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="overflow-hidden rounded-[6px]">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-[178px] w-full object-cover transition-transform duration-700 group-hover:scale-105 xl:h-[194px]"
                    />
                  </div>
                  <div className="px-3 pb-4 pt-4 text-center">
                    <h2 className="font-display text-[24px] leading-none">
                      {teacher.name}
                    </h2>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-text-secondary/70">
                      {teacher.language}
                    </p>
                    <p className="mt-4 text-[13px] leading-[19px] text-text-secondary">
                      {teacher.role}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-[76px] text-cream md:py-[96px]">
        <div className="section-container max-w-[1120px]">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <FadeIn y={28}>
              <h2 className="font-display italic text-[44px] leading-none md:text-[62px]">
                Find the right teacher for your level
              </h2>
            </FadeIn>
            <FadeIn y={28} delay={0.05}>
              <p className="text-[18px] leading-[27px] text-cream/78">
                SALAD matches your language, level, schedule, and goals with an
                instructor who can help you move forward with structure and
                confidence.
              </p>
              <Link
                to="/"
                className="pill-button roll-link mt-7 bg-cream text-dark hover:bg-cream-dark"
              >
                Request Teacher Match
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
