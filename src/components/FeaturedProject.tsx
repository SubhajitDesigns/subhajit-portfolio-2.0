import './FeaturedProject.css';

const prototypeUrl =
  'https://embed.figma.com/proto/zLy1K2P8M9Fr7EhkzVScLv/Movie-Poster-Manupulation?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=10-53&embed-host=share';

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="featured-project" aria-labelledby="featured-project-title">
      <div className="featured-project__inner">
        <div className="featured-project__eyebrow">
          <span>FEATURED CASE STUDY</span>
          <span>01 / PHOTO MANIPULATION</span>
        </div>

        <div className="featured-project__intro">
          <p className="featured-project__kicker">FROM REALITY</p>
          <h2 id="featured-project-title">TO <em>CINEMA.</em></h2>
          <p className="featured-project__description">
            One photograph. A different world. Explore the transformation behind this cinematic movie-poster manipulation.
          </p>
        </div>

        <div className="featured-project__stage">
          <div className="featured-project__stage-top">
            <span>THE TRANSFORMATION LAB</span>
            <span className="featured-project__live"><i /> INTERACTIVE EXPERIENCE</span>
          </div>
          <div className="featured-project__embed">
            <iframe
              title="Interactive before-and-after movie poster manipulation prototype"
              src={prototypeUrl}
              allowFullScreen
              loading="lazy"
            />
            <div className="featured-project__drag" aria-hidden="true">
              <span>↔</span> DRAG TO TRANSFORM
            </div>
          </div>
          <div className="featured-project__stage-bottom">
            <span>BEFORE <b>↔</b> AFTER</span>
            <a href="https://www.figma.com/proto/zLy1K2P8M9Fr7EhkzVScLv/Movie-Poster-Manupulation?t=x9sFMLuN7shYnDTT-1" target="_blank" rel="noreferrer">
              OPEN FULL EXPERIENCE <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="featured-project__story">
          <div className="featured-project__story-heading">
            <span>BEHIND THE FRAME</span>
            <p>A closer look at the creative journey.</p>
          </div>
          <div className="featured-project__steps">
            <article>
              <span>01 / THE ORIGINAL</span>
              <h3>Start with reality.</h3>
              <p>The source photograph sets the foundation for the entire visual transformation.</p>
            </article>
            <article>
              <span>02 / THE MANIPULATION</span>
              <h3>Build a new world.</h3>
              <p>Composition, atmosphere, lighting and visual details come together to create a cinematic scene.</p>
            </article>
            <article>
              <span>03 / THE FINAL FRAME</span>
              <h3>Make it feel like cinema.</h3>
              <p>The final poster brings the image into a more immersive, movie-inspired visual direction.</p>
            </article>
          </div>
        </div>

        <div className="featured-project__outro">
          <span>AN EXERCISE IN VISUAL STORYTELLING</span>
          <p>REALITY, <em>REIMAGINED.</em></p>
        </div>
      </div>
    </section>
  );
}
