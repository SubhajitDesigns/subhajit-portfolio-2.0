import './FeaturedProject.css';

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
        <p className="featured-project__eyebrow">FEATURED CREATIVE WORK</p>
        <h2 id="featured-project-title">Reality,<br />Reframed.</h2>
        <p className="featured-project__description">
          A cinematic poster transformation crafted through detailed photo
          editing, dramatic light and visual compositing.
        </p>
        <div className="featured-project__tools" aria-label="Tools used">
          <span className="featured-project__tool">
            <span className="featured-project__app-icon featured-project__app-icon--lr" aria-hidden="true">Lr</span>
            <span>Lightroom</span>
          </span>
          <span className="featured-project__tool">
            <span className="featured-project__app-icon featured-project__app-icon--ps" aria-hidden="true">Ps</span>
            <span>Photoshop</span>
          </span>
        </div>
      </div>

      <div className="featured-project__frame">
        <iframe
          title="Interactive movie poster manipulation prototype"
          src={prototypeUrl}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
