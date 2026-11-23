import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';

const testimonials = [
  {
    id: 1,
    quote: "Subhajit has an incredible eye for design. He understood our brand's vision perfectly and translated it into visuals that genuinely stand out. His creativity, attention to detail, and professionalism make him someone I'd happily recommend.",
    author: 'Saurav Haldar',
    role: 'Founder, Digifrek',
  },
  {
    id: 2,
    quote: 'Working with Subhajit was a wonderful experience. He has a great understanding of visual storytelling and brand identity. Every design felt thoughtful, creative, and aligned with what we wanted to communicate.',
    author: 'Sanjukta Sen Mahapatro',
    role: 'Founder, Chakmak Indian',
  },
  {
    id: 3,
    quote: 'Subhajit brings a strong combination of creativity and strategic thinking to his work. His designs have a polished, professional feel, and he knows how to communicate ideas visually. Really impressed with his approach and execution.',
    author: 'Anand GouthamChand',
    role: 'Co-Founder & CEO, Logas B2B',
  },
  {
    id: 4,
    quote: 'Subhajit has a fantastic understanding of visual branding. He brought fresh creative ideas to our projects and made sure every design reflected the personality of our café. His work is professional, eye-catching, and thoughtfully executed.',
    author: 'Abhijit Saha',
    role: 'Owner, The Brewing Pot Cafe',
  },
  {
    id: 5,
    quote: 'Subhajit understands how important presentation is for a brand. His designs bring a premium and elegant feel while maintaining a strong visual identity. I appreciate his creativity, dedication, and attention to detail.',
    author: 'Subodh Santra',
    role: 'Subodh Santra Jewellers',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = testimonials[activeIndex];

  const select = (index: number) => setActiveIndex((index + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative mt-20 overflow-hidden border-y border-line py-16 md:mt-24 md:py-24" aria-labelledby="testimonials-title">
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="06">Client testimonials</SectionLabel>
          <h2 id="testimonials-title" className="mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.045em]">
            Good work. <span className="font-serif font-normal italic">Real words.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">A few words from people I've had the pleasure of working with.</p>
      </div>

      <div className="relative mx-auto flex min-h-[340px] max-w-4xl flex-col items-center justify-center px-4 text-center md:min-h-[370px]">
        <Quote aria-hidden="true" className="mb-5 h-9 w-9 text-faint" strokeWidth={1.2} />
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="mx-auto max-w-3xl text-balance text-xl leading-relaxed font-light tracking-[-0.025em] md:text-3xl md:leading-[1.45]"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-9 flex flex-col items-center gap-2">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface font-mono text-sm text-fg">
            {active.author.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase()}
          </div>
          <p className="text-sm font-medium">{active.author}</p>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">{active.role}</p>
        </div>

        <div className="mt-9 flex items-center gap-4">
          <button type="button" onClick={() => select(activeIndex - 1)} aria-label="Previous testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg">
            <ArrowLeft size={16} />
          </button>
          <div className="flex items-center gap-2" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
            {testimonials.map((item, index) => (
              <button key={item.id} type="button" onClick={() => select(index)} aria-label={`Show testimonial from ${item.author}`} aria-current={index === activeIndex ? 'true' : undefined} className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-7 bg-fg' : 'w-2 bg-faint hover:bg-muted'}`} />
            ))}
          </div>
          <button type="button" onClick={() => select(activeIndex + 1)} aria-label="Next testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
