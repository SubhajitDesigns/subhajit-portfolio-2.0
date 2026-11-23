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
        <p className="featured-project__eyebrow">SELECTED PROJECT</p>
        <h2 id="featured-project-title">Movie Poster Manipulation</h2>
        <p className="featured-project__description">
          An interactive look at the poster transformation, from the original
          image to the final cinematic artwork.
        </p>
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
