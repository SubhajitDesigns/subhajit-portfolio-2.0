import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Subhajit's transparent hero walk.
 * Plays once when the hero becomes ready, then holds on the final frame.
 * The portrait remains as a graceful fallback for reduced-motion users or
 * browsers that cannot decode the transparent WebM.
 */
const VIDEO = `${import.meta.env.BASE_URL}assets/hero-walk.webm`;
const PORTRAIT = 'https://raw.githubusercontent.com/SubhajitDesigns/subhajitdesigns.github.io/main/portrait.png';

export default function HeroVideo({ play }: { play: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !play || reduce || failed) return;

    video.currentTime = 0;
    const playback = video.play();
    playback?.catch(() => setFailed(true));
  }, [play, reduce, failed]);

  const showPortrait = reduce || failed;

  return (
    <div
      className={`hero-film relative mx-auto h-full w-fit overflow-hidden ${ended || showPortrait ? 'is-idle' : ''}`}
      style={{
        transform: 'scale(1.16)',
        transformOrigin: '50% 0%',
        clipPath: 'inset(0 0 16% 0)',
      }}
    >
      <div aria-hidden="true" className="hero-film__pool" />
      {showPortrait ? (
        <img
          src={PORTRAIT}
          alt="Subhajit Das — full-body portrait"
          className="hero-film__media block h-full w-auto max-w-none select-none object-contain"
          draggable={false}
          fetchPriority="high"
        />
      ) : (
        <video
          ref={videoRef}
          aria-label="Subhajit walks toward the camera and stops in his final portrait pose"
          className="hero-film__media block h-full w-auto max-w-none select-none object-contain"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onEnded={() => setEnded(true)}
          onError={() => setFailed(true)}
        >
          <source src={VIDEO} type="video/webm" />
        </video>
      )}
    </div>
  );
}
