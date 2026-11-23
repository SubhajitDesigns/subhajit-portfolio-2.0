import { useEffect } from 'react';
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
  },
  {
    "file": "my-work-36.webp",
    "alt": "Exotic rice bowls campaign design",
    "title": "EXOTIC BOWLS",
    "kind": "36 / FOOD CAMPAIGN",
    "hue": 235
  },
  {
    "file": "my-work-37.webp",
    "alt": "Hotel M Grand chicken lollipop robot campaign design",
    "title": "CHICKEN LOLLIPOP",
    "kind": "37 / RESTAURANT",
    "hue": 252
  },
  {
    "file": "my-work-38.webp",
    "alt": "Super delicious pizza promotional design",
    "title": "PIZZA PROMO",
    "kind": "38 / FOOD CAMPAIGN",
    "hue": 269
  },
  {
    "file": "my-work-39.webp",
    "alt": "Restaurant website promotional design",
    "title": "RESTAURANT WEBSITE",
    "kind": "39 / WEB DESIGN",
    "hue": 286
  }
] as const;
const imageBase = 'https://raw.githubusercontent.com/SubhajitDesigns/subhajitdesigns.github.io/main/';
const localAssetBase = `${import.meta.env.BASE_URL}assets/`;

export default function Projects() {
  useEffect(() => {
    const section = document.getElementById('my-work-gallery');
    const root = section?.querySelector('.coverflow');
    const track = root?.querySelector<HTMLElement>('.track');
    if (!section || !root || !track) return;

    const originals = Array.from(track.querySelectorAll<HTMLElement>(':scope > .cover-card'));
    const count = originals.length;
    if (!count) return;

    for (let cycle = 0; cycle < 2; cycle += 1) {
      originals.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
    }

    const items = Array.from(track.querySelectorAll<HTMLElement>('.cover-card'));
    const caption = root.querySelector<HTMLOutputElement>('.coverflow-caption');
    const view = root.querySelector<HTMLElement>('.view');
    if (!caption || !view) return;

    let active = count + Math.floor(count / 2);
    const pendingWraps: number[] = [];

    function layout() {
      const hasDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const maxOffset = hasDesktopPointer || window.innerWidth >= 700 ? 4 : 1;
      items.forEach((card, index) => {
        const offset = index - active;
        const distance = Math.abs(offset);
        card.style.setProperty('--o', String(offset));
        card.style.setProperty('--abs', String(distance));
        card.style.setProperty('--sign', String(Math.sign(offset)));
        card.style.zIndex = String(items.length - distance);
        card.classList.toggle('is-far', distance > maxOffset);
        if (maxOffset === 4 && distance <= 4) {
          card.style.opacity = String(Math.max(.68, 1 - distance * .08));
          card.style.filter = 'brightness(' + Math.max(.72, 1 - distance * .07) + ')';
        } else {
          card.style.opacity = '';
          card.style.filter = '';
        }
        card.setAttribute('aria-current', String(index === active));
      });

      const projectIndex = ((active - count) % count + count) % count;
      caption!.textContent = String(projectIndex + 1).padStart(2, '0') + ' / ' +
        String(count).padStart(2, '0') + ' — ' + originals[projectIndex].dataset.title;
    }

    function rebaseLoopPosition(amount: number) {
      // Swap to the identical neighboring copy with transitions disabled.
      // This keeps the visible cards in place instead of animating them
      // across the whole gallery during the infinite-loop reset.
      root!.classList.add('is-rebasing');
      active += amount;
      layout();
      void track!.offsetHeight;
      window.requestAnimationFrame(() => {
        root!.classList.remove('is-rebasing');
      });
    }

    function advance(direction = 1) {
      active += direction;
      layout();
      if (direction > 0 && active >= count * 2) {
        pendingWraps.push(window.setTimeout(() => rebaseLoopPosition(-count), 1250));
      } else if (direction < 0 && active < count) {
        pendingWraps.push(window.setTimeout(() => rebaseLoopPosition(count), 1250));
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); advance(1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); advance(-1); }
    };
    const timer = window.setInterval(() => advance(1), 3600);
    view.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', layout);
    layout();

    return () => {
      window.clearInterval(timer);
      window.removeEventListener('resize', layout);
      view.removeEventListener('keydown', onKeyDown);
      pendingWraps.forEach(window.clearTimeout);
      items.slice(count).forEach((card) => card.remove());
    };
  }, []);

  return (
    <section id="my-work-gallery" aria-labelledby="my-work-title">
      <div className="my-work-inner">
        <header className="my-work-heading">
          <p>SELECTED PROJECTS</p>
          <h2 id="my-work-title">MY <span>WORK</span></h2>
          <p>A closer look at design, branding, product campaigns, and visual ideas.</p>
        </header>
        <div className="coverflow" aria-label="Automatic selected work coverflow">
          <div className="view" tabIndex={0} aria-label="Auto-moving coverflow. Use left and right arrow keys to browse">
            <div className="track">
              {sourceImages.map((item) => (
                <article className="cover-card" data-title={item.title} key={item.file} style={{ '--hue': item.hue } as React.CSSProperties}>
                  <img src={item.file.startsWith('my-work-') ? localAssetBase + item.file : imageBase + encodeURI(item.file)} alt={item.alt} loading="lazy" />
                  <span className="cover-card-title"><small>{item.kind}</small>{item.title}</span>
                </article>
              ))}
            </div>
          </div>
          <output className="coverflow-caption" aria-live="polite">18 / 39 — SOCIAL MEDIA</output>
        </div>
      </div>
    </section>
  );
}
