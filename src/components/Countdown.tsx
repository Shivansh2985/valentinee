import { useState, useEffect, useRef } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nextValentines = new Date('2027-02-14T00:00:00');
    
    const update = () => {
      const now = new Date();
      const diff = nextValentines.getTime() - now.getTime();
      if (diff <= 0) return;
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const items = sectionRef.current?.querySelectorAll('.countdown-item');
      items?.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
          }
        );
      });
    };
    loadGsap();
  }, []);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 romantic-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-rose-deep mb-4">
          Until Our Next Valentine's 💝
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          Counting every second until I celebrate you again
        </p>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="countdown-item bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-border min-w-[90px] md:min-w-[120px] opacity-0"
            >
              <span className="block text-4xl md:text-5xl font-display font-bold text-primary">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base font-body text-muted-foreground mt-2 block">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
