import './FeaturedProject.css';
import TechText from './TechText';

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
              <TechText text="REALITY," fontFamily="Space Grotesk, Inter, sans-serif" fontWeight={800} fontSize={150} letterSpacing={-0.075} color="#f7f4f2" accentColor="#ff626c" align="left" reach={115} softness={0.72} reveal="letter" specks={8} selection={false} labels={false} draggable={false} clickKick={false} sweep intro="assemble" introDuration={1.5} />
            </span>
            <span className="featured-project__tech-line featured-project__tech-line--accent">
              <TechText text="REIMAGINED." fontFamily="Space Grotesk, Inter, sans-serif" fontWeight={800} fontSize={150} letterSpacing={-0.075} color="#ff626c" accentColor="#f7f4f2" align="left" reach={115} softness={0.72} reveal="letter" specks={8} selection={false} labels={false} draggable={false} clickKick={false} sweep intro="assemble" introDuration={1.7} />
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
