import { useEffect, useRef } from 'react';

const FinalSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const els = sectionRef.current?.querySelectorAll('.final-reveal');
      els?.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1, delay: i * 0.3,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
          }
        );
      });
    };
    loadGsap();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 bg-foreground relative overflow-hidden">
      {/* Decorative floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-photo ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {['❤️', '💕', '💗', '🤍'][i % 4]}
          </span>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="final-reveal text-6xl mb-8 opacity-0">💍</div>
        
        <h2 className="final-reveal text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground glow-text mb-8 opacity-0">
          Forever Yours,
          <br />
          <span className="gold-shimmer">Sammyy</span>
        </h2>

        <p className="final-reveal text-lg md:text-xl font-body text-primary-foreground/70 italic leading-relaxed max-w-lg mx-auto mb-12 opacity-0">
          In this life and every life after, I choose you.
          You are my today, my tomorrow, and my forever.
        </p>

        <div className="final-reveal opacity-0">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <span className="text-2xl pulse-heart">❤️</span>
            <span className="font-display text-xl text-primary-foreground">
              Sammyy & Sksi
            </span>
            <span className="text-2xl pulse-heart">❤️</span>
          </div>
        </div>

        <p className="final-reveal mt-16 text-primary-foreground/40 text-sm font-body opacity-0">
          Made with love, for the love of my life 💖
        </p>
      </div>
    </section>
  );
};

export default FinalSection;
