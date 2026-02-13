import { useEffect, useRef } from 'react';

const LoveMessage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const els = sectionRef.current?.querySelectorAll('.reveal-line');
      els?.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });
    };
    loadGsap();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 romantic-gradient">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-rose-deep reveal-line">
          A Letter From My Heart 💌
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl font-body text-foreground/85 leading-relaxed">
          <p className="reveal-line">
            My dearest Sksi, from the very first moment I saw you, my heart knew — 
            you were the one it had been searching for all along.
          </p>
          <p className="reveal-line">
            You are my sunrise and sunset, the calm in my storms, 
            and the reason behind every smile that crosses my face.
          </p>
          <p className="reveal-line">
            In a world full of ordinary, you are my extraordinary. 
            Every second with you feels like a beautiful dream I never want to wake up from.
          </p>
          <p className="reveal-line">
            I promise to love you not just today, but every single day — 
            fiercely, deeply, and endlessly.
          </p>
        </div>
        
        <p className="reveal-line text-2xl md:text-3xl font-display italic text-primary pt-6">
          — With all my love, Your Sammyy 💝
        </p>
      </div>
    </section>
  );
};

export default LoveMessage;
