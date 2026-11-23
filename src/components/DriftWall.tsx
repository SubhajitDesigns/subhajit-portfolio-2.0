import type { CSSProperties } from 'react';

export type DriftWallItem = {
  image: string;
  title: string;
  href?: string;
};

type DriftWallProps = {
  items: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  tilt?: number;
  turn?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: 'up' | 'down';
  variance?: number;
  parallax?: number;
  lift?: number;
  fade?: number;
  dim?: number;
  overlayColor?: string;
  radius?: number;
  roll?: number;
  pauseOnHover?: boolean;
  grayscale?: boolean;
};

export default function DriftWall({
  items,
  columns = 5,
  tileWidth = 200,
  tileHeight = 220,
  gap = 18,
  tilt = 16,
  turn = -14,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = 'up',
  variance = 0.45,
  parallax = 0.6,
  lift = 64,
  fade = 0.6,
  dim = 0.55,
  overlayColor = '#060010',
  radius = 14,
  roll = 0,
  pauseOnHover = false,
  grayscale = false,
}: DriftWallProps) {
  if (!items.length) return null;

  const columnCount = Math.max(1, columns);
  const repeatedItems = [...items, ...items];

  return (
    <div
      className={`drift-wall ${pauseOnHover ? 'drift-wall--pause' : ''}`}
      style={{
        '--dw-gap': `${gap}px`,
        '--dw-perspective': `${perspective}px`,
        '--dw-radius': `${radius}px`,
        '--dw-overlay': overlayColor,
        '--dw-fade': fade,
        '--dw-dim': dim,
        '--dw-tilt': `${tilt}deg`,
        '--dw-turn': `${turn}deg`,
        '--dw-roll': `${roll}deg`,
        '--dw-depth': `${depth}px`,
        '--dw-lift': `${lift}px`,
        '--dw-parallax': parallax,
        '--dw-variance': variance,
        '--dw-grayscale': grayscale ? '1' : '0',
      } as CSSProperties}
      aria-label="Selected visual work gallery"
    >
      <style>{`
        .drift-wall {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          perspective: var(--dw-perspective);
          isolation: isolate;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
        }
        .drift-wall__plane {
          position: absolute;
          inset: -18% -8%;
          display: grid;
          grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));
          gap: var(--dw-gap);
          transform-style: preserve-3d;
          transform: rotateX(var(--dw-tilt)) rotateZ(var(--dw-turn)) rotateY(var(--dw-roll));
        }
        .drift-wall__column {
          min-width: 0;
          height: max-content;
          display: flex;
          flex-direction: column;
          gap: var(--dw-gap);
          transform: translateZ(calc((var(--col) - 2) * var(--dw-depth) * .12));
          animation: drift-wall-scroll ${speed}s linear infinite;
          animation-delay: var(--dw-delay);
          will-change: transform;
        }
        .drift-wall__column:nth-child(even) { margin-top: calc(var(--col) * var(--dw-gap) * (0.35 + var(--dw-variance) * .7)); }
        .drift-wall__column > a { display: block; width: 100%; }
        .drift-wall__tile {
          position: relative;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 100%;
          height: ${tileHeight}px;
          overflow: hidden;
          border-radius: var(--dw-radius);
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 18px 48px rgba(0,0,0,.28);
          transform: translateY(calc(var(--col) * var(--dw-lift) * .025)) scale(calc(1 - var(--col) * .012));
          transition: border-color .35s ease, transform .5s ease;
        }
        .drift-wall__tile img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 7px;
          filter: grayscale(var(--dw-grayscale)) brightness(calc(1 - var(--dw-dim) * .28));
          transition: filter .5s ease, transform .6s ease;
        }
        .drift-wall__tile::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(145deg, color-mix(in srgb, var(--dw-overlay) 16%, transparent), transparent 65%);
          opacity: var(--dw-fade);
        }
        .drift-wall__tile:hover { border-color: rgba(255,255,255,.3); transform: translateY(-5px) scale(1.025); }
        .drift-wall__tile:hover img { filter: grayscale(0) brightness(1); transform: scale(1.025); }
        .drift-wall__tile:focus-visible { outline: 2px solid white; outline-offset: 4px; }
        .drift-wall--pause:hover .drift-wall__column { animation-play-state: paused; }
        @keyframes drift-wall-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, ${direction === 'up' ? '-50%' : '50%'}, 0); }
        }
        @media (max-width: 640px) {
          .drift-wall__plane { inset: -8% -38%; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; transform: rotateX(calc(var(--dw-tilt) * .72)) rotateZ(calc(var(--dw-turn) * .72)); }
          .drift-wall__tile { height: ${Math.round(tileHeight * .82)}px; }
          .drift-wall__column { gap: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .drift-wall__column { animation: none; }
        }
      `}</style>
      <div className="drift-wall__plane">
        {Array.from({ length: columnCount }, (_, columnIndex) => (
          <div
            className="drift-wall__column"
            key={columnIndex}
            style={{ '--col': columnIndex, '--dw-delay': `${-(columnIndex * speed / columnCount * .22)}s` } as CSSProperties}
          >
            {repeatedItems.map((item, itemIndex) => {
              const content = (
                <div className="drift-wall__tile" key={`${columnIndex}-${itemIndex}`} style={{ width: `min(100%, ${tileWidth}px)` }}>
                  <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
                </div>
              );
              return item.href ? (
                <a key={`${columnIndex}-link-${itemIndex}`} href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.title}`}>
                  {content}
                </a>
              ) : content;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
