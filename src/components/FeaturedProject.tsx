import './FeaturedProject.css';
import WarpText from './WarpText';

const prototypeUrl =
  'https://embed.figma.com/proto/zLy1K2P8M9Fr7EhkzVScLv/Movie-Poster-Manupulation?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=10-53&embed-host=share&hide-ui=1';

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="featured-project"
      aria-labelledby="featured-project-title"
    >
      <div className="featured-project__content">
        <div className="featured-project__heading">
          <p className="featured-project__eyebrow">PHOTO MANIPULATION / 2024</p>
          <h2 id="featured-project-title" className="featured-project__title">
            <span className="featured-project__tech-line featured-project__tech-line--main">
              <WarpText text="REALITY," warpStrength={0.08} warpScale={1.7} speed={0.55} lens="bulge" pointerInfluence={0.42} pointerStrength={0.38} refraction={0.018} chromatic={0.35} idleDrift={0.2} ripple clickRipple intro fontSize={160} fontWeight={800} style={{ height: '100%' }} fontFamily="inherit" letterSpacing="-0.06em" lineHeight={0.9} color="#f7f4f2" />
            </span>
            <span className="featured-project__tech-line featured-project__tech-line--accent">
              <WarpText text="REIMAGINED." warpStrength={0.08} warpScale={1.7} speed={0.55} lens="bulge" pointerInfluence={0.42} pointerStrength={0.38} refraction={0.018} chromatic={0.35} idleDrift={0.2} ripple clickRipple intro fontSize={160} fontWeight={800} style={{ height: '100%' }} fontFamily="inherit" letterSpacing="-0.06em" lineHeight={0.9} color="#ff626c" />
            </span>
          </h2>
        </div>

        <div className="featured-project__details">
          <p className="featured-project__description">
            Turning an ordinary photograph into a cinematic world through light,
            color and detailed compositing.
          </p>
          <div className="featured-project__tools">
            <p className="featured-project__tools-label">CRAFTED WITH</p>
            <div className="featured-project__tool-list" aria-label="Tools used: Adobe Lightroom and Adobe Photoshop">
              <span className="featured-project__tool">
                <span className="featured-project__app-icon featured-project__app-icon--lr" aria-hidden="true">Lr</span>
                <span>Lightroom</span>
              </span>
              <span className="featured-project__tool">
                <span className="featured-project__app-icon featured-project__app-icon--ps" aria-hidden="true">Ps</span>
                <span>Photoshop</span>
              </span>
            </div>
            <div className="featured-project__interaction-hint" aria-label="Slide to interact with the photo">
              <svg className="featured-project__slide-arrow" viewBox="0 0 32 16" aria-hidden="true">
                <path d="M8 2 2 8l6 6M2 8h28M24 2l6 6-6 6" />
              </svg>
              <span className="featured-project__typing-text">SLIDE TO INTERACT</span>
            </div>

          </div>
        </div>
      </div>

      <div className="featured-project__visual">
        <div className="featured-project__frame">
          <iframe
            title="Interactive movie poster manipulation prototype"
            src={prototypeUrl}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
