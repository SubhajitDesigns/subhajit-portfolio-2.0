import { useReducedMotion } from 'framer-motion';

const clientLogos: { src: string; alt: string; scale?: number; crop?: boolean }[] = [
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/7727f59b-2368-4586-b81d-a1852ebef87a.png', alt: 'Bowl Curry', scale: 1.3 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/4ef545e5-cf7c-4632-8694-38acb143a237.png', alt: 'mamaearth' },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/23287e7b-cefa-4389-8014-7d7d3522c85f.png', alt: 'HELI Tours and Travels' },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/b7986fa4-a05d-4c48-925b-8602845a2525.png', alt: 'Jivantika Organic' },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/e195ef9a-6b9e-42c6-8d8f-43c08b1e416d.png', alt: 'Untouch Nature', scale: 1.32 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/6af1386d-1581-4a44-9de9-75ff0683c8c1.jpg', alt: 'Yuven Motors', scale: 1.42 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/7e2823f7-1c9c-4953-903b-6a319ae0af39.png', alt: 'Ice Axe Media', scale: 1.32 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/9e53ef2e-e71d-45d5-a228-52b6ad7c0eee.svg', alt: 'Rapsap', scale: 0.9 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/fae1d268-a3e9-4eb0-9a65-01a51c5fbcb6.webp', alt: 'ACE Academy by LinguaAce' },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/a4062b29-ce45-4b3c-85af-22fe148c4c74.jpg', alt: 'Crooze', scale: 1.22 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/d60e63be-f7e1-494f-94b8-8b86b112c0e7.png', alt: 'Uvi Health', scale: 1.5 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/6d630228-fc37-4862-90e4-c942d9efbd59.png', alt: 'Veda Inn Corbett' },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/34005eac-7885-47e3-b5d0-117d92a27641.png', alt: 'NerdyBird Wealth Advisory LLP', scale: 1.38 },
  { src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3J5wMb6jrWj1Y3i6X8tSPeXaSPn/12a4ae78-e315-41bd-ac7e-c6c6e3f448f2.jpg', alt: 'LOGAS Wholesaler at Your Doorstep', crop: true },
];

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="clients" className="mt-20 overflow-hidden border-y border-line py-12 md:mt-24 md:py-16" aria-labelledby="clients-title">
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">05 / Selected collaborations</p>
          <h3 id="clients-title" className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] leading-none font-medium tracking-[-0.05em]">
            Trusted by the <span className="font-serif font-normal italic">best.</span>
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">A few of the brands I've had the pleasure of working with.</p>
      </div>
      <div className="relative overflow-hidden" aria-label="Client logos">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent md:w-24" />
        <div className="flex w-max items-center" style={{ animation: reduceMotion ? 'none' : 'client-logo-marquee 48s linear infinite' }}>
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={`${logo.alt}-${index}`} aria-hidden={index >= clientLogos.length} className="mx-3 flex h-24 w-[210px] shrink-0 items-center justify-center overflow-visible rounded-xl border border-black/5 bg-[#f7f6f2] p-3 shadow-sm md:mx-4 md:h-28 md:w-[250px] md:p-4">
              <img src={logo.src} alt={index < clientLogos.length ? logo.alt : ''} className={`${logo.crop ? "h-full w-[115%] max-w-none object-cover" : "max-h-full max-w-full object-contain"} transition-transform duration-300`} style={{ transform: `scale(${logo.scale ?? 1})` }} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
