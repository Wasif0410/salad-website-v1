import { Link, Navigate, useParams } from 'react-router';
import FadeIn from '../components/animations/FadeIn';
import {
  getCoursesByLanguage,
  getLanguageProgram,
  languagePrograms,
} from '../data/siteContent';

export default function LanguageCourses() {
  const { languageId } = useParams();
  const language = getLanguageProgram(languageId);
  const languageCourses = getCoursesByLanguage(languageId);

  if (!language) return <Navigate to="/training" replace />;

  return (
    <main className="bg-sage text-text-primary">
      <section className="pt-[124px] pb-[58px] md:pt-[154px] md:pb-[78px]">
        <div className="section-container max-w-[1180px]">
          <FadeIn y={26} className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <Link
                to="/training"
                className="text-[13px] uppercase tracking-[0.16em] text-text-secondary/70 transition-colors hover:text-text-primary"
              >
                Training
              </Link>
              <h1 className="mt-5 font-display italic text-[52px] leading-[0.94] md:text-[78px]">
                {language.name} Courses
              </h1>
            </div>
            <p className="max-w-[620px] text-[18px] leading-[27px] text-text-secondary md:justify-self-end">
              {language.summary} Browse available pathways and open a course for
              the full guide, outcomes, structure, and fit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-[92px] md:pb-[124px]">
        <div className="section-container max-w-[1240px]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {languageCourses.map((course, index) => (
              <FadeIn key={course.id} y={28} delay={index * 0.035}>
                <Link
                  to={`/courses/${course.id}`}
                  className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[8px] bg-dark text-cream shadow-[0_22px_58px_rgb(13_18_11_/_0.13)] transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="h-[238px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.12em] text-cream/64">
                      <span>{course.level}</span>
                      <span>/</span>
                      <span>{course.duration}</span>
                    </div>
                    <h2 className="mt-5 font-display text-[36px] leading-[0.98]">
                      {course.shortTitle}
                    </h2>
                    <p className="mt-4 text-[15px] leading-[22px] text-cream/76">
                      {course.description}
                    </p>
                    <div className="mt-auto pt-7">
                      <div className="h-px w-full bg-cream/12" />
                      <div className="mt-5 flex items-center justify-between text-[14px] text-cream/78">
                        <span>{course.price}</span>
                        <span>{course.spots}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn y={28} className="mt-12 rounded-[8px] bg-cream-dark p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <h2 className="font-display italic text-[38px] leading-none md:text-[54px]">
                Not sure which level fits?
              </h2>
              <div>
                <p className="text-[17px] leading-[25px] text-text-secondary">
                  SALAD can help you start with a placement check and match you
                  to the right level, teacher, and class rhythm.
                </p>
                <Link
                  to="/"
                  className="pill-button roll-link mt-6 bg-olive text-cream hover:bg-olive-light"
                >
                  Request Guidance
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-dark py-[70px] text-cream md:py-[92px]">
        <div className="section-container max-w-[1120px]">
          <h2 className="text-center font-display italic text-[40px] leading-none md:text-[58px]">
            Other Language Paths
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {languagePrograms
              .filter((item) => item.id !== language.id)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/training/${item.id}`}
                  className="rounded-[8px] border border-cream/10 p-5 transition-colors hover:bg-cream/6"
                >
                  <h3 className="font-display text-[30px] leading-none">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[20px] text-cream/68">
                    {item.accent}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
