import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import { getCourse, getLanguageProgram, courses } from '../data/siteContent';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const language = getLanguageProgram(course?.languageId);

  if (!course || !language) return <Navigate to="/training" replace />;

  const related = courses
    .filter((item) => item.languageId === course.languageId && item.id !== course.id)
    .slice(0, 3);

  return (
    <main className="bg-sage text-text-primary">
      <section className="relative overflow-hidden bg-dark pt-[118px] pb-[76px] text-cream md:pt-[148px] md:pb-[104px]">
        <div className="section-container max-w-[1240px]">
          <FadeIn y={26}>
            <Link
              to={`/training/${language.id}`}
              className="inline-flex items-center gap-2 text-[14px] text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {language.name} courses
            </Link>
          </FadeIn>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <FadeIn y={30}>
              <h1 className="font-display italic text-[52px] leading-[0.94] md:text-[84px]">
                {course.title}
              </h1>
              <p className="mt-6 max-w-[650px] text-[18px] leading-[27px] text-cream/78 md:text-[20px] md:leading-[29px]">
                {course.description}
              </p>
            </FadeIn>

            <FadeIn y={32} delay={0.05}>
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-[330px] w-full object-cover md:h-[430px]"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn y={24} className="mt-9 flex flex-wrap gap-3">
            {[course.level, course.duration, course.schedule, course.price, course.spots].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cream/14 px-4 py-2 text-[13px] text-cream/78"
              >
                {item}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="py-[78px] md:py-[108px]">
        <div className="section-container max-w-[1160px]">
          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr]">
            <FadeIn y={26}>
              <article className="sticky top-[110px] rounded-[8px] bg-cream-dark p-7 md:p-8">
                <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-text-secondary/66">
                  Best for
                </p>
                <h2 className="mt-5 font-display text-[38px] leading-[1]">
                  {course.bestFor}
                </h2>
                <Link
                  to="/"
                  className="pill-button roll-link mt-8 bg-olive text-cream hover:bg-olive-light"
                >
                  Request Guidance
                </Link>
              </article>
            </FadeIn>

            <div className="space-y-5">
              <FadeIn y={26}>
                <article className="rounded-[8px] bg-white/45 p-7 md:p-8">
                  <h2 className="font-display italic text-[40px] leading-none">
                    Learning Outcomes
                  </h2>
                  <ul className="mt-7 space-y-4">
                    {course.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="border-l border-text-primary/28 pl-5 text-[17px] leading-[25px] text-text-secondary"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>

              <FadeIn y={26} delay={0.04}>
                <article className="rounded-[8px] bg-white/45 p-7 md:p-8">
                  <h2 className="font-display italic text-[40px] leading-none">
                    What to Expect
                  </h2>
                  <div className="mt-7 grid gap-4">
                    {course.structure.map((item, index) => (
                      <div
                        key={item}
                        className="grid grid-cols-[54px_1fr] gap-4 rounded-[8px] bg-sage p-5"
                      >
                        <span className="font-mono text-[13px] text-text-secondary/70">
                          0{index + 1}
                        </span>
                        <p className="text-[16px] leading-[23px] text-text-secondary">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-dark py-[74px] text-cream md:py-[96px]">
          <div className="section-container max-w-[1160px]">
            <FadeIn y={24} className="text-center">
              <h2 className="font-display italic text-[42px] leading-none md:text-[58px]">
                Related Courses
              </h2>
            </FadeIn>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/courses/${item.id}`}
                  className="rounded-[8px] border border-cream/10 p-6 transition-colors hover:bg-cream/6"
                >
                  <span className="font-mono text-[13px] text-cream/58">
                    {item.level}
                  </span>
                  <h3 className="mt-4 font-display text-[34px] leading-none">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[20px] text-cream/68">
                    {item.duration} / {item.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
