import { useEffect, useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import './Projects.css';

const sourceImages = [
  {
    "file": "currently-creating-04.webp",
    "alt": "IDEA OVERLOAD editorial work by Subhajit",
    "title": "IDEA OVERLOAD",
    "kind": "01 / EDITORIAL",
    "hue": 0
  },
  {
    "file": "currently-creating-01.webp",
    "alt": "FONT FAILS typography work by Subhajit",
    "title": "FONT FAILS",
    "kind": "02 / TYPOGRAPHY",
    "hue": 17
  },
  {
    "file": "currently-creating-02.webp",
    "alt": "GOOD DESIGN? concept work by Subhajit",
    "title": "GOOD DESIGN?",
    "kind": "03 / CONCEPT",
    "hue": 34
  },
  {
    "file": "currently-creating-03.webp",
    "alt": "CAPCUT campaign work by Subhajit",
    "title": "CAPCUT",
    "kind": "04 / CAMPAIGN",
    "hue": 51
  },
  {
    "file": "ad-2.webp",
    "alt": "AD CAMPAIGN advertising work by Subhajit",
    "title": "AD CAMPAIGN",
    "kind": "05 / ADVERTISING",
    "hue": 68
  },
  {
    "file": "bali.webp",
    "alt": "BALI TRAVEL travel work by Subhajit",
    "title": "BALI TRAVEL",
    "kind": "06 / TRAVEL",
    "hue": 85
  },
  {
    "file": "bridal-jewellery.webp",
    "alt": "BRIDAL JEWELLERY product work by Subhajit",
    "title": "BRIDAL JEWELLERY",
    "kind": "07 / PRODUCT",
    "hue": 102
  },
  {
    "file": "chocolate-day.webp",
    "alt": "CHOCOLATE DAY campaign work by Subhajit",
    "title": "CHOCOLATE DAY",
    "kind": "08 / CAMPAIGN",
    "hue": 119
  },
  {
    "file": "dharmi-realty.webp",
    "alt": "DHARMI REALTY real estate work by Subhajit",
    "title": "DHARMI REALTY",
    "kind": "09 / REAL ESTATE",
    "hue": 136
  },
  {
    "file": "french-fries.webp",
    "alt": "FRENCH FRIES food work by Subhajit",
    "title": "FRENCH FRIES",
    "kind": "10 / FOOD",
    "hue": 153
  },
  {
    "file": "gold-rate.webp",
    "alt": "GOLD RATE campaign work by Subhajit",
    "title": "GOLD RATE",
    "kind": "11 / CAMPAIGN",
    "hue": 170
  },
  {
    "file": "graphic.webp",
    "alt": "VISUAL DESIGN graphic design work by Subhajit",
    "title": "VISUAL DESIGN",
    "kind": "12 / GRAPHIC DESIGN",
    "hue": 187
  },
  {
    "file": "honey.webp",
    "alt": "HONEY CAMPAIGN product work by Subhajit",
    "title": "HONEY CAMPAIGN",
    "kind": "13 / PRODUCT",
    "hue": 204
  },
  {
    "file": "jaisalmer.webp",
    "alt": "JAISALMER travel work by Subhajit",
    "title": "JAISALMER",
    "kind": "14 / TRAVEL",
    "hue": 221
  },
  {
    "file": "momo-street.webp",
    "alt": "MOMO STREET restaurant work by Subhajit",
    "title": "MOMO STREET",
    "kind": "15 / RESTAURANT",
    "hue": 238
  },
  {
    "file": "organic.webp",
    "alt": "ORGANIC CAMPAIGN product work by Subhajit",
    "title": "ORGANIC CAMPAIGN",
    "kind": "16 / PRODUCT",
    "hue": 255
  },
  {
    "file": "port 7.webp",
    "alt": "PORTFOLIO DESIGN visual work by Subhajit",
    "title": "PORTFOLIO DESIGN",
    "kind": "17 / VISUAL",
    "hue": 272
  },
  {
    "file": "restaurant.webp",
    "alt": "RESTAURANT food work by Subhajit",
    "title": "RESTAURANT",
    "kind": "18 / FOOD",
    "hue": 289
  },
  {
    "file": "followes.webp",
    "alt": "SOCIAL MEDIA campaign work by Subhajit",
    "title": "SOCIAL MEDIA",
    "kind": "19 / CAMPAIGN",
    "hue": 306
  },
  {
    "file": "momo-street-2.jpg.webp",
    "alt": "MOMO STREET 02 restaurant work by Subhajit",
    "title": "MOMO STREET 02",
    "kind": "20 / RESTAURANT",
    "hue": 323
  },
  {
    "file": "Protect your glow...webp",
    "alt": "VITAMIN C GLOW product work by Subhajit",
    "title": "VITAMIN C GLOW",
    "kind": "21 / PRODUCT",
    "hue": 340
  },
  {
    "file": "ac094c3fedd25880080e0f0e4d5b7467.webp",
    "alt": "VISUAL CAMPAIGN campaign work by Subhajit",
    "title": "VISUAL CAMPAIGN",
    "kind": "22 / CAMPAIGN",
    "hue": 357
  },
  {
    "file": "business.jpg",
    "alt": "BUSINESS CAMPAIGN photo work by Subhajit",
    "title": "BUSINESS CAMPAIGN",
    "kind": "23 / PHOTO",
    "hue": 14
  },
  {
    "file": "food-ad.jpg",
    "alt": "FOOD AD advertising work by Subhajit",
    "title": "FOOD AD",
    "kind": "24 / ADVERTISING",
    "hue": 31
  },
  {
    "file": "goa.jpg",
    "alt": "GOA TRAVEL travel work by Subhajit",
    "title": "GOA TRAVEL",
    "kind": "25 / TRAVEL",
    "hue": 48
  },
  {
    "file": "idli.jpg",
    "alt": "IDLI CAMPAIGN food work by Subhajit",
    "title": "IDLI CAMPAIGN",
    "kind": "26 / FOOD",
    "hue": 65
  },
  {
    "file": "jewellery.webp",
    "alt": "JEWELLERY product work by Subhajit",
    "title": "JEWELLERY",
    "kind": "27 / PRODUCT",
    "hue": 82
  },
  {
    "file": "kitkat shake copy.jpg",
    "alt": "KITKAT SHAKE product work by Subhajit",
    "title": "KITKAT SHAKE",
    "kind": "28 / PRODUCT",
    "hue": 99
  },
  {
    "file": "leads gen copy.jpg",
    "alt": "LEADS GENERATION campaign work by Subhajit",
    "title": "LEADS GENERATION",
    "kind": "29 / CAMPAIGN",
    "hue": 116
  },
  {
    "file": "safe-tour.jpg",
    "alt": "SAFE TOUR travel work by Subhajit",
    "title": "SAFE TOUR",
    "kind": "30 / TRAVEL",
    "hue": 133
  },
  {
    "file": "vietnam.jpg",
    "alt": "VIETNAM travel work by Subhajit",
    "title": "VIETNAM",
    "kind": "31 / TRAVEL",
    "hue": 150
  },
  {
    "file": "project-01.jpg",
    "alt": "PROJECT 01 design work by Subhajit",
    "title": "PROJECT 01",
    "kind": "32 / DESIGN",
    "hue": 167
  },
  {
    "file": "project-02.jpg",
    "alt": "PROJECT 02 design work by Subhajit",
    "title": "PROJECT 02",
    "kind": "33 / DESIGN",
    "hue": 184
  },
  {
    "file": "project-03.jpg",
    "alt": "PROJECT 03 design work by Subhajit",
    "title": "PROJECT 03",
    "kind": "34 / DESIGN",
    "hue": 201
  },
  {
    "file": "project-04.jpg",
    "alt": "PROJECT 04 design work by Subhajit",
    "title": "PROJECT 04",
    "kind": "35 / DESIGN",
    "hue": 218
  }
] as const;
const imageBase = 'https://raw.githubusercontent.com/SubhajitDesigns/subhajitdesigns.github.io/main/';

export default function Projects() {
  const [active, setActive] = useState(sourceImages.length + Math.floor(sourceImages.length / 2));
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setWide(query.matches || window.innerWidth >= 700);
    update();
    query.addEventListener?.('change', update);
    window.addEventListener('resize', update);
    return () => {
      query.removeEventListener?.('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => value + 1), 3600);
    return () => window.clearInterval(timer);
  }, []);

  const count = sourceImages.length;
  const projectIndex = ((active - count) % count + count) % count;
  const advance = (direction: number) => setActive((value) => value + direction);
  const maxOffset = wide ? 4 : 1;

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 md:px-8 md:py-32" aria-labelledby="projects-title">
      <header className="mx-auto mb-10 flex max-w-[720px] flex-col items-center text-center md:mb-12">
        <SectionLabel index="03">Selected projects</SectionLabel>
        <h2 id="projects-title" className="mt-6 text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.95] font-extrabold tracking-[-0.06em] uppercase">
          MY <span className="text-accent">WORK</span>
        </h2>
        <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-muted">
          A closer look at design, branding, product campaigns, and visual ideas.
        </p>
      </header>

      <div className="relative left-1/2 h-[520px] w-screen -translate-x-1/2 overflow-hidden md:h-[620px]">
        <div className="coverflow h-full" aria-label="Automatic selected work coverflow">
          <div
            className="coverflow-view"
            tabIndex={0}
            aria-label="Auto-moving coverflow. Use left and right arrow keys to browse"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') { event.preventDefault(); advance(1); }
              if (event.key === 'ArrowRight') { event.preventDefault(); advance(-1); }
            }}
          >
            <div className="coverflow-track">
              {sourceImages.map((item, index) => {
                const offset = index - projectIndex;
                const distance = Math.abs(offset);
                const visible = distance <= maxOffset;
                return (
                  <article
                    className={`cover-card ${visible ? '' : 'is-far'}`}
                    key={item.file}
                    aria-current={index === projectIndex ? 'true' : undefined}
                    style={{
                      '--o': offset,
                      '--abs': distance,
                      '--sign': Math.sign(offset),
                      zIndex: count - distance,
                      opacity: visible ? (wide ? Math.max(.68, 1 - distance * .08) : undefined) : 0,
                      filter: visible && wide ? `brightness(${Math.max(.72, 1 - distance * .07)})` : undefined,
                    } as React.CSSProperties}
                  >
                    <img src={imageBase + encodeURI(item.file)} alt={item.alt} loading={index < 5 ? 'eager' : 'lazy'} />
                    <span className="cover-card-title"><small>{item.kind}</small>{item.title}</span>
                  </article>
                );
              })}
            </div>
          </div>
          <output className="coverflow-caption" aria-live="polite">
            {String(projectIndex + 1).padStart(2, '0')} / {String(count).padStart(2, '0')} — {sourceImages[projectIndex].title}
          </output>
        </div>
      </div>
    </section>
  );
}
