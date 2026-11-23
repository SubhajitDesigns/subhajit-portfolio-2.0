import './FeaturedProject.css';

const prototypeUrl =
  'https://embed.figma.com/proto/zLy1K2P8M9Fr7EhkzVScLv/Movie-Poster-Manupulation?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=10-53&embed-host=share&hide-ui=1';

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="featured-project" aria-label="Interactive movie poster manipulation prototype">
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
