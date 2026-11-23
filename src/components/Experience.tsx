import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { educationHistory, workExperience } from '../data/portfolio';
import SectionLabel from './ui/SectionLabel';
import SplitText from './ui/SplitText';
import Reveal from './ui/Reveal';
import ClientLogos from './ClientLogos';

export default function Experience() {
  const lineRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 75%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 md:py-32" aria-labelledby="experience-title">
      <div className="mb-12 md:mb-16">
        <SectionLabel index="04">Experience</SectionLabel>
        <h2 id="experience-title" className="mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.045em]">
          <SplitText text="The path," className="block" />
          <SplitText text="so far." delay={0.12} className="block font-serif font-normal tracking-[-0.03em] italic" />
        </h2>
      </div>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Timeline */}
        <div className="lg:col-span-7">
          <h3 className="mb-6 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Work &amp; education</h3>
          <ol ref={lineRef} className="relative">
            <span aria-hidden="true" className="absolute top-1 bottom-1 left-[5px] w-px bg-line" />
            <motion.span aria-hidden="true" style={{ scaleY: reduce ? 1 : scaleY }} className="absolute top-1 bottom-1 left-[5px] w-px origin-top bg-fg" />
            {workExperience.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.06} className={`relative pl-8 ${i > 0 ? 'mt-10' : ''}`}>
                <span aria-hidden="true" className="absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border border-fg bg-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-[clamp(1.2rem,1.7vw,1.5rem)] leading-tight font-medium tracking-[-0.03em]">{t.title}</h4>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-muted">{t.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  <span className="text-fg">{t.org}</span>
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-muted">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-[0.75em] h-px w-2.5 shrink-0 bg-faint" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div className="lg:col-span-5">
          <h3 className="mb-6 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Education</h3>
          <ul className="border-t border-line">
            {educationHistory.map((item, i) => (
              <Reveal as="li" key={item.qualification} delay={i * 0.04} y={14}>
                <div className="flex items-start justify-between gap-4 border-b border-line py-4">
                  <span>
                    <span className="block font-medium tracking-[-0.02em]">{item.qualification}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.institution}</span>
                  </span>
                  <span className="shrink-0 pt-1 font-mono text-[9.5px] tracking-[0.12em] text-faint">{item.period}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-20 md:mt-24">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Certifications · 04</h3>
          <span className="text-xs text-faint">View credentials</span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              image: '/assets/certificates/pixel-institute.jpg',
              issuer: 'PIXEL INSTITUTE OF PHOTOGRAPHY',
              name: 'Adobe Photoshop CC-Retouching Masterclass',
              date: '21 NOVEMBER 2021',
            },
            {
              image: '/assets/certificates/photoshop-training.jpg',
              issuer: 'PHOTOSHOP TRAINING',
              name: 'Ultimate Photoshop Training — Beginners to Pro',
              date: '28 OCTOBER 2020',
            },
            {
              image: '/assets/certificates/adobe-certified.png',
              issuer: 'ADOBE',
              name: 'Adobe Certified Professional — Visual Design using Photoshop',
              date: '6 OCTOBER 2021',
            },
            {
              image: '/assets/certificates/linkedin-learning.jpg',
              issuer: 'LINKEDIN LEARNING',
              name: 'Cert Prep: Adobe Certified Associate — Photoshop',
              date: '7 APRIL 2024',
            },
          ].map((certificate, i) => (
            <Reveal as="li" key={certificate.image} delay={i * 0.04} y={12} className="min-w-0">
              <div className="flex h-full items-center justify-between gap-4 rounded-[3px] border border-line px-4 py-4 transition-colors duration-300 hover:border-fg/60 md:px-5">
                <div className="min-w-0">
                  <span className="block font-mono text-[9px] tracking-[0.16em] text-muted uppercase">{certificate.issuer}</span>
                  <h4 className="mt-1.5 text-sm font-medium leading-snug tracking-[-0.01em]">{certificate.name}</h4>
                  <span className="mt-2 block font-mono text-[9px] tracking-[0.12em] text-faint">{certificate.date}</span>
                </div>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate: ${certificate.name}`}
                  title="View certificate"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Client logos — separate section directly below certifications */}
      <ClientLogos />
    </section>
  );
}
