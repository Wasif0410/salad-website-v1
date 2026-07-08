import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { experiences } from '../data/workshopContent';

const DESKTOP_TIMELINE_GAP = 52;

type Experience = (typeof experiences)[number];

type BrowserFrameProps = {
  url: string;
  children: ReactNode;
};

function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="flex h-full w-full flex-col bg-[#fffdf9] text-text-secondary">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-[#ece2d3] bg-[#f7efe4] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d84538]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c69b2b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6f8f54]" />
        <span className="ml-2 min-w-0 flex-1 rounded-full bg-white/80 px-3 py-1 text-center text-[10px] leading-none text-text-muted">
          {url}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3">{children}</div>
    </div>
  );
}

function AssessmentMockup({ url }: { url: string }) {
  const answers = ['A) manger', 'B) boire', 'C) bois', 'D) buvons'];

  return (
    <BrowserFrame url={url}>
      <div className="mb-2 flex items-center justify-between rounded-[8px] bg-[#224229] px-4 py-2 text-cream">
        <span className="text-[13px] font-bold leading-none">SALAD</span>
        <span className="text-[11px] leading-none opacity-90">Question 2 of 5</span>
      </div>
      <div className="mb-2">
        <div className="mb-2 flex items-center justify-between text-[11px] text-text-muted">
          <span>Level Assessment</span>
          <span>40%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#eadfdb]">
          <div className="h-full w-[40%] rounded-full bg-[#b89431]" />
        </div>
      </div>
      <div className="rounded-[8px] bg-[#f5ecdf] p-2.5">
        <p className="text-[12px] font-bold leading-tight">
          Complete the sentence with the correct verb form:
        </p>
        <p className="mt-2 font-display text-[19px] leading-none">
          Je ___ du cafe chaque matin.
        </p>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {answers.map((answer) => {
          const isCorrect = answer.startsWith('C)');
          return (
            <div
              key={answer}
              className={`rounded-[7px] border px-2.5 py-1.5 text-[11px] leading-none ${
                isCorrect
                  ? 'border-[#224229] bg-[#224229] text-cream'
                  : 'border-[#eadfdb] bg-white text-text-muted'
              }`}
            >
              {answer}
            </div>
          );
        })}
      </div>
    </BrowserFrame>
  );
}

function ClassesMockup({ url }: { url: string }) {
  return (
    <BrowserFrame url={url}>
      <div className="mb-4 flex items-center justify-between rounded-[8px] bg-[#224229] px-4 py-3 text-cream">
        <span className="text-[13px] font-bold leading-none">SALAD</span>
        <span className="text-[11px] leading-none opacity-90">Your Matched Classes</span>
      </div>
      <div className="flex flex-1 items-center">
        <div className="w-full rounded-[8px] border border-[#b89431] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded bg-[#224229] px-2.5 py-1.5 text-[11px] font-bold leading-none text-cream">
                B1
              </span>
              <span className="text-[14px] font-bold leading-none">Intermediate French</span>
            </div>
            <span className="rounded-full bg-[#b89431] px-3 py-1.5 text-[9px] font-bold leading-none text-white">
              BEST MATCH
            </span>
          </div>
          <div className="flex items-center justify-between text-[12px] leading-tight text-[#6b6469]">
            <span>Ms. Sophie - Mon & Wed, 6:00 PM</span>
            <span>12 spots left</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ClassroomMockup({ url }: { url: string }) {
  return (
    <BrowserFrame url={url}>
      <div className="mb-3 flex items-center justify-between rounded-[8px] bg-[#224229] px-4 py-3 text-cream">
        <span className="rounded-full bg-[#b89431] px-2 py-1 text-[10px] font-bold leading-none">
          LIVE
        </span>
        <span className="text-[11px] leading-none">Intermediate French (B1)</span>
        <span className="text-[10px] leading-none text-cream-dark">5 students</span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.35fr_1fr] gap-3">
        <div className="flex flex-col overflow-hidden rounded-[8px] bg-[#1c2a1d]">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#b89431] font-display text-[36px] text-cream">
              S
            </div>
          </div>
          <div className="bg-black/25 px-3 py-2 text-[11px] text-cream">Ms. Sophie</div>
        </div>
        <div className="flex flex-col gap-2 overflow-hidden rounded-[8px] border border-[#eadfdb] bg-white p-3">
          <p className="rounded-[7px] bg-[#f5ecdf] p-2 text-[11px] leading-tight">
            Bonjour! Comment allez-vous?
          </p>
          <p className="self-end rounded-[7px] bg-[#224229] p-2 text-[11px] leading-tight text-cream">
            Je vais bien, merci!
          </p>
          <p className="rounded-[7px] border border-[#eadfdb] bg-[#f5ecdf] p-2 text-[11px] leading-tight text-text-secondary">
            Tres bien. Pronunciation is clear and natural.
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 rounded-[8px] bg-[#224229] py-2 text-[11px] text-cream">
        <span className="rounded bg-white/10 px-3 py-1">Mic</span>
        <span className="rounded bg-white/10 px-3 py-1">Camera</span>
        <span className="rounded bg-[#b89431] px-3 py-1">End Call</span>
      </div>
    </BrowserFrame>
  );
}

function DashboardMockup({ url }: { url: string }) {
  const scores = [
    ['Pronunciation', '82%', 'w-[82%]', 'bg-[#224229]'],
    ['Grammar', '68%', 'w-[68%]', 'bg-[#b89431]'],
    ['Vocabulary', '87%', 'w-[87%]', 'bg-[#5f7d47]'],
    ['Fluency', '74%', 'w-[74%]', 'bg-[#b89431]'],
  ];

  return (
    <BrowserFrame url={url}>
      <div className="mb-4 flex items-center justify-between rounded-[8px] bg-[#224229] px-4 py-3 text-cream">
        <span className="text-[13px] font-bold leading-none">SALAD</span>
        <span className="text-[11px] leading-none opacity-90">My Progress Dashboard</span>
      </div>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-[15px] font-bold leading-none">Bonjour, Alex.</p>
          <p className="mt-2 text-[11px] leading-none text-text-muted">14-day streak. Keep it up.</p>
        </div>
        <span className="rounded-full bg-[#f5ecdf] px-3 py-2 text-[12px] font-bold text-[#224229]">
          14
        </span>
      </div>
      <div className="mb-4">
        <div className="mb-2 flex justify-between text-[11px] text-text-muted">
          <span>Current CEFR Level</span>
          <span>73% toward B2</span>
        </div>
        <div className="grid grid-cols-6 gap-1 text-center text-[10px] leading-none">
          {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
            <span
              key={level}
              className={`rounded py-2 ${
                level === 'B1' ? 'bg-[#224229] text-cream' : 'bg-[#f5ecdf] text-text-muted'
              }`}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {scores.map(([label, value, widthClass, colorClass]) => (
          <div key={label} className="grid grid-cols-[92px_1fr_34px] items-center gap-2">
            <span className="text-[11px] text-text-muted">{label}</span>
            <span className="h-2 overflow-hidden rounded-full bg-[#eadfdb]">
              <span className={`block h-full rounded-full ${widthClass} ${colorClass}`} />
            </span>
            <span className="text-right text-[11px] font-bold">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-[8px] border border-[#eadfdb] bg-white p-3 text-[11px] leading-tight text-text-muted">
        Sophie's feedback: your subjunctive is improving. Focus on etre and avoir next.
      </div>
    </BrowserFrame>
  );
}

function ExperienceVisual({ exp }: { exp: Experience }) {
  switch (exp.visual.kind) {
    case 'assessment':
      return <AssessmentMockup url={exp.visual.url} />;
    case 'classes':
      return <ClassesMockup url={exp.visual.url} />;
    case 'classroom':
      return <ClassroomMockup url={exp.visual.url} />;
    case 'dashboard':
      return <DashboardMockup url={exp.visual.url} />;
  }
}

type ExperienceTimelineItemProps = {
  exp: Experience;
  index: number;
  segmentCount: number;
  timelineProgress: MotionValue<number>;
};

function ExperienceTimelineItem({
  exp,
  index,
  segmentCount,
  timelineProgress,
}: ExperienceTimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const isReversed = index % 2 !== 0;
  const tiltDirection = isReversed ? 1 : -1;
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 82%', 'end 34%'],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    shouldReduceMotion ? [0, 0, 0] : [38, 0, -18],
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    shouldReduceMotion
      ? [0, 0, 0]
      : [0, tiltDirection * 1.8, tiltDirection * 4.2],
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.22, 1], [0.72, 1, 1]);
  const badgeScale = useTransform(
    scrollYProgress,
    [0, 0.36, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.92, 1, 1],
  );
  const badgeY = useTransform(
    scrollYProgress,
    [0, 0.36, 1],
    shouldReduceMotion ? [0, 0, 0] : [10, 0, 0],
  );
  const segmentScale = useTransform(timelineProgress, (latest) => {
    if (shouldReduceMotion) {
      return 1;
    }

    const scale = latest * segmentCount - index;
    return Math.min(Math.max(scale, 0), 1);
  });

  return (
    <motion.div
      ref={itemRef}
      data-experience-item={exp.number}
      className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_52px_1fr] md:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.18, margin: '-8% 0px -18% 0px' }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        data-experience-line-segment={exp.number}
        className="pointer-events-none absolute left-1/2 top-[55px] z-0 hidden w-[2px] -translate-x-1/2 overflow-hidden bg-text-primary/20 md:block"
        style={{ height: `calc(100% + ${DESKTOP_TIMELINE_GAP}px - 118px)` }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-text-primary"
          style={{ scaleY: segmentScale }}
        />
      </div>

      <motion.div
        className="justify-self-center md:hidden"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div style={{ scale: badgeScale, y: badgeY }}>
          <span className="inline-flex rounded-[7px] bg-[#224229] px-3 py-2 font-display text-[22px] leading-none text-cream shadow-[0_8px_18px_rgba(34,66,41,0.24)]">
            {exp.number}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className={`${
          isReversed ? 'md:col-start-3 md:row-start-1' : 'md:col-start-1 md:row-start-1'
        } relative z-10 w-full md:pt-[34px]`}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 34,
          scale: shouldReduceMotion ? 1 : 0.985,
        }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.36 }}
        transition={{ duration: 0.76, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          data-experience-image={exp.number}
          className="aspect-[1.28] overflow-hidden rounded-[12px] border border-[#eadfdb] shadow-[0_18px_48px_rgba(44,50,41,0.12)]"
          style={{
            opacity: imageOpacity,
            rotate: imageRotate,
            y: imageY,
            transformOrigin: isReversed ? '35% 55%' : '65% 55%',
          }}
        >
          <ExperienceVisual exp={exp} />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 col-start-2 row-start-1 hidden justify-center self-start pt-0 md:flex"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div style={{ scale: badgeScale, y: badgeY }}>
          <span className="relative z-10 inline-flex rounded-[7px] bg-[#224229] px-3 py-2 font-display text-[22px] leading-none text-cream shadow-[0_8px_20px_rgba(34,66,41,0.24)]">
            {exp.number}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className={`${
          isReversed
            ? 'md:col-start-1 md:row-start-1 md:pr-12'
            : 'md:col-start-3 md:row-start-1 md:pl-[27px]'
            } relative z-10 w-full md:pt-[48px]`}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.76, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-display text-[30px] leading-[35px] text-text-primary md:text-[32px] md:leading-[38px]">
          {exp.title}
        </h3>
        <p className="mt-3 max-w-[428px] text-[15.5px] leading-[23px] text-text-primary/80 md:mt-4 md:text-[16px] md:leading-[24px]">
          {exp.description}
        </p>
        <ul className="mt-4 grid max-w-[428px] gap-2.5 text-[14px] leading-[20px] text-text-primary/80 md:mt-5">
          {exp.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-[2px] inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#224229] text-cream">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 76%'],
  });
  const segmentCount = experiences.length;

  return (
    <section
      id="experiences"
      className="bg-sage rounded-t-[28px] mt-[36px] relative z-20 pt-[72px] pb-[96px] md:mt-[56px] md:rounded-t-[34px] md:pt-[88px] md:pb-[120px]"
    >
      <div className="section-container">
        <motion.div
          className="text-center mb-[44px] md:mb-[38px] max-w-[700px] mx-auto"
          initial={{ y: 34, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display italic text-text-primary text-[40px] leading-[0.98] sm:text-[46px] md:text-[56px] md:leading-none">
            How Does SALAD Work?
          </h2>
          <p className="mt-4 text-text-primary/75 text-[16px] leading-[23px] md:text-[17px] md:leading-[24px]">
            From first click to confident conversation - four simple steps.
          </p>
        </motion.div>

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-[1000px] space-y-[72px] md:max-w-[1040px] md:space-y-[10px]"
        >
          {experiences.map((exp, index) => (
            <ExperienceTimelineItem
              key={exp.number}
              exp={exp}
              index={index}
              segmentCount={segmentCount}
              timelineProgress={timelineProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
