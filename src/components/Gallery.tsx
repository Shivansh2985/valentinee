import { useEffect, useRef } from 'react';
import memory1 from '@/assets/memory-1.png';
import memory2 from '@/assets/memory-2.png';
import memory3 from '@/assets/memory-3.png';
import memory4 from '@/assets/memory-4.png';
import memory5 from '@/assets/memory-5.png';
import memory6 from '@/assets/memory-6.png';

const images = [
  { src: memory1, rotation: '-5deg', caption: 'Our love blooms 🌹' },
  { src: memory2, rotation: '4deg', caption: 'Sunset walks 🌅' },
  { src: memory3, rotation: '-3deg', caption: 'Love letters 💌' },
  { src: memory4, rotation: '6deg', caption: 'Written in stars ✨' },
  { src: memory5, rotation: '-4deg', caption: 'Morning warmth ☕' },
  { src: memory6, rotation: '3deg', caption: 'Dancing together 💃' },
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!scrollRef.current || !sectionRef.current) return;

      // Title animation
      const title = sectionRef.current.querySelector('.gallery-title');
      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 85%' }
          }
        );
      }

      // Horizontal scroll for images
      const scrollContainer = scrollRef.current;
      const totalScrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      gsap.to(scrollContainer, {
        scrollLeft: totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Float animation on each image
      const imgs = scrollContainer.querySelectorAll('.gallery-card');
      imgs.forEach((img, i) => {
        gsap.fromTo(img,
          { opacity: 0, y: 80, rotate: (i % 2 === 0 ? -10 : 10) },
          {
            opacity: 1, y: 0, rotate: 0, duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: img, start: 'left 90%', scroller: scrollContainer, horizontal: true }
          }
        );
      });
    };
    loadGsap();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-cream overflow-hidden">
      <div className="py-16 px-6">
        <h2 className="gallery-title text-3xl md:text-5xl font-display font-semibold text-center text-rose-deep mb-4 opacity-0">
          Our Beautiful Memories 💕
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Every picture tells a story of us
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 px-12 pb-20 overflow-x-hidden items-center min-h-[70vh]"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card flex-shrink-0 w-72 md:w-80"
            style={{ '--rotation': img.rotation } as React.CSSProperties}
          >
            <div className="floating-photo rounded-2xl overflow-hidden bg-card shadow-xl" style={{ animationDelay: `${i * 0.5}s` }}>
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-72 md:h-80 object-cover gallery-image"
              />
              <div className="p-4 text-center">
                <p className="font-display text-lg text-foreground">{img.caption}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Spinning wheel decoration */}
        <div className="flex-shrink-0 w-64 h-64 relative flex items-center justify-center">
          <div className="spinning-photo absolute w-full h-full rounded-full border-4 border-dashed border-primary/30" />
          <div className="spinning-photo absolute w-48 h-48 rounded-full border-4 border-dashed border-gold-warm/40" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
          <span className="text-6xl pulse-heart z-10">💖</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
