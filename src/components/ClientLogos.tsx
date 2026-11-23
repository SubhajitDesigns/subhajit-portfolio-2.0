import { useReducedMotion } from 'framer-motion';

const clients = [
  'DIGIFREK',
  'CHAKMAK INDIAN',
  'LOGAS',
  'THE BREWING POT CAFE',
  'SUBODH SANTRA JEWELLERS',
];

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
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">Selected collaborations</p>
          <h3 id="clients-title" className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] leading-none font-medium tracking-[-0.05em]">
            Trusted by the <span className="font-serif font-normal italic">best.</span>
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          A few of the brands I've had the pleasure of working with.
        </p>
      </div>

      <div className="relative overflow-hidden" aria-label="Client names">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent md:w-24" />
        <div
          className="flex w-max items-center"
          style={{ animation: reduceMotion ? 'none' : 'client-logo-marquee 42s linear infinite' }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              aria-hidden={index >= clients.length}
              className="mx-5 flex h-20 min-w-[190px] items-center justify-center border border-line/70 px-6 text-center text-[13px] font-semibold tracking-[0.13em] text-fg/75 transition-colors duration-300 hover:border-fg/50 hover:text-fg md:mx-7 md:min-w-[230px] md:text-sm"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          #clients .client-logo-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
