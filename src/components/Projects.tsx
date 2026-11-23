import DriftWall from './DriftWall';
import SectionLabel from './ui/SectionLabel';
import SplitText from './ui/SplitText';

const galleryItems = [
  { image: 'https://picsum.photos/id/1015/600/400', title: 'Mountain landscape', href: 'https://example.com/one' },
  { image: 'https://picsum.photos/id/1025/600/400', title: 'Portrait of a dog', href: 'https://example.com/two' },
  { image: 'https://picsum.photos/id/1039/600/400', title: 'Waterfall landscape', href: 'https://example.com/three' },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 md:px-8 md:py-32" aria-labelledby="projects-title">
      <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="03">Visual gallery</SectionLabel>
          <h2 id="projects-title" className="mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.045em]">
            <SplitText text="A world of" className="block" />
            <SplitText text="visual stories." delay={0.12} className="block font-serif font-normal tracking-[-0.03em] italic" />
          </h2>
        </div>
        <p className="max-w-[34ch] text-sm leading-relaxed text-muted md:text-right">
          A moving collection of imagery, moments, and visual inspiration that reflects my creative eye.
        </p>
      </div>

      <div className="relative left-1/2 h-[520px] w-screen -translate-x-1/2 overflow-hidden md:h-[620px]">
        <DriftWall
          items={galleryItems}
          columns={5}
          tileWidth={240}
          tileHeight={220}
          gap={4}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0}
          dim={1}
          overlayColor="transparent"
          radius={18}
          roll={0}
          pauseOnHover={false}
          grayscale
        />
      </div>
    </section>
  );
}
