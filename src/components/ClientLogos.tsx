import { useReducedMotion } from 'framer-motion';

// Add the supplied client logo image files here when they are provided.
// Keep each logo as a transparent PNG or SVG for the monochrome treatment.
const clientLogos: { src: string; alt: string }[] = [];

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="clients"
      className="mt-20 overflow-hidden border-y border-line py-12 md:mt-24 md:py-16"
      aria-labelledby="clients-title"
    >
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">05 / Selected collaborations</p>
          <h3 id="clients-title" className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] leading-none font-medium tracking-[-0.05em]">
            Trusted by the <span className="font-serif font-normal italic">best.</span>
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          A few of the brands I've had the pleasure of working with.
        </p>
      </div>

      {clientLogos.length > 0 && (
        <div className="relative overflow-hidden" aria-label="Client logos">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent md:w-24" />
          <div
            className="flex w-max items-center"
            style={{ animation: reduceMotion ? 'none' : 'client-logo-marquee 42s linear infinite' }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                aria-hidden={index >= clientLogos.length}
                className="mx-5 flex h-20 min-w-[190px] items-center justify-center px-6 md:mx-7 md:min-w-[230px]"
              >
                <img
                  src={logo.src}
                  alt={index < clientLogos.length ? logo.alt : ''}
                  className="max-h-12 max-w-[180px] object-contain brightness-0 invert md:max-h-14 md:max-w-[210px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
