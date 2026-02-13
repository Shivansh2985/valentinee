import { useEffect, useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
        );
      }
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 1 }
        );
      }
    };
    loadGsap();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground glow-text leading-tight mb-8 opacity-0"
        >
          Happy Valentine's Day,
          <br />
          <span className="gold-shimmer text-6xl md:text-8xl lg:text-9xl">My Sksi ❤️</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-primary-foreground/90 font-body italic opacity-0"
        >
          Every love story is beautiful, but ours is my favorite
        </p>
        
        <div className="mt-12 animate-bounce">
          <span className="text-primary-foreground/70 text-sm tracking-widest uppercase font-body">
            Scroll down with love ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
