import { useReducedMotion } from 'framer-motion';

/**
 * Subhajit's hero portrait.
 * Uses the transparent full-body portrait already published in his portfolio assets.
 * Kept behind the original Hero component so the surrounding layout and interactions
 * remain unchanged. The original walking video is intentionally replaced by this still.
 */
const PORTRAIT = 'https://raw.githubusercontent.com/SubhajitDesigns/subhajitdesigns.github.io/main/portrait.png';

export default function HeroVideo({ play }: { play: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className={`hero-film relative mx-auto h-full w-fit ${reduce || play ? 'is-idle' : ''}`}>
      <div aria-hidden="true" className="hero-film__pool" />
      <img
        src={PORTRAIT}
        alt="Subhajit Das — full-body portrait"
        className="hero-film__media block h-full w-auto max-w-none select-none object-contain"
        draggable={false}
        fetchPriority="high"
      />
    </div>
  );
}
