import { useState, useEffect, useRef } from 'react';

interface QuizItem {
  question: string;
  emoji: string;
  options: string[];
  response: string;
}

const quizData: QuizItem[] = [
  {
    question: "How much do you love Sammyy?",
    emoji: "💘",
    options: ["To the moon & back 🌙", "More than pizza 🍕", "Infinity times infinity ♾️", "Can't even measure 💕"],
    response: "Aww! Sammyy's heart just melted! 🥺❤️"
  },
  {
    question: "What's your favorite thing about us?",
    emoji: "🥰",
    options: ["Late night talks 🌃", "Your warm hugs 🤗", "Our silly jokes 😂", "Everything! 💖"],
    response: "That's so beautiful! You're the best! 😘"
  },
  {
    question: "Will you be my Valentine forever?",
    emoji: "💍",
    options: ["Yes, always! 💗", "Forever & ever 🌹", "Love u 2! 💝", "So cute, YES! 🥺"],
    response: "Yayy! Forever it is, my love! 🎉💕"
  },
  {
    question: "Sammyy says: You're the most beautiful soul",
    emoji: "✨",
    options: ["Aww stop it 🙈", "No, YOU are! 💫", "Love u so much! 💗", "You make me blush 😊"],
    response: "You just made Sammyy the happiest! 🦋💖"
  },
];

const LoveQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current.querySelector('.quiz-container'),
          { opacity: 0, scale: 0.8, y: 60 },
          {
            opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
          }
        );
      }
    };
    loadGsap();
  }, []);

  const handleSelect = async (idx: number) => {
    setSelected(idx);
    setShowResponse(true);

    const gsap = (await import('gsap')).default;
    
    // Celebrate animation
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { scale: 1 },
        { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.inOut' }
      );
    }

    setTimeout(() => {
      if (currentQ < quizData.length - 1) {
        setSelected(null);
        setShowResponse(false);
        setCurrentQ(prev => prev + 1);
        
        if (cardRef.current) {
          gsap.fromTo(cardRef.current,
            { opacity: 0, x: 100, rotate: 5 },
            { opacity: 1, x: 0, rotate: 0, duration: 0.6, ease: 'back.out(1.7)' }
          );
        }
      }
    }, 2000);
  };

  const quiz = quizData[currentQ];

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 bg-secondary">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center text-rose-deep mb-4">
          Love Quiz Time 💌
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Answer from your heart, my love
        </p>

        <div className="quiz-container opacity-0">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-8">
            {quizData.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i <= currentQ ? 'bg-primary scale-110' : 'bg-border'
                }`}
              />
            ))}
          </div>

          <div ref={cardRef} className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">{quiz.emoji}</span>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                {quiz.question}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quiz.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => !selected && selected !== 0 ? handleSelect(i) : null}
                  className={`quiz-option font-body text-sm md:text-base ${
                    selected === i ? 'selected' : ''
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showResponse && (
              <div className="mt-8 text-center animate-[pulse-heart_1.5s_ease-in-out_infinite]">
                <p className="text-lg font-display font-semibold text-primary">
                  {quiz.response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveQuiz;
