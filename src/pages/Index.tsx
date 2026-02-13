import HeartParticles from '@/components/HeartParticles';
import MusicToggle from '@/components/MusicToggle';
import HeroSection from '@/components/HeroSection';
import LoveMessage from '@/components/LoveMessage';
import Gallery from '@/components/Gallery';
import LoveQuiz from '@/components/LoveQuiz';
import Countdown from '@/components/Countdown';
import FinalSection from '@/components/FinalSection';

const Index = () => {
  return (
    <div className="relative">
      <HeartParticles />
      <MusicToggle />
      <HeroSection />
      <LoveMessage />
      <Gallery />
      <LoveQuiz />
      <Countdown />
      <FinalSection />
    </div>
  );
};

export default Index;
