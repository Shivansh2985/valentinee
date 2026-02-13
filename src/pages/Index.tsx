import { useState } from 'react';
import HeartParticles from '@/components/HeartParticles';
import MusicToggle from '@/components/MusicToggle';
import WelcomeModal from '@/components/WelcomeModal';
import HeroSection from '@/components/HeroSection';
import LoveMessage from '@/components/LoveMessage';
import Gallery from '@/components/Gallery';
import LoveQuiz from '@/components/LoveQuiz';
import Countdown from '@/components/Countdown';
import FinalSection from '@/components/FinalSection';

const Index = () => {
  const [musicStarted, setMusicStarted] = useState(false);

  const handleModalConfirm = () => {
    setMusicStarted(true);
  };

  return (
    <div className="relative">
      <WelcomeModal onConfirm={handleModalConfirm} />
      <HeartParticles />
      <MusicToggle autoPlay={musicStarted} />
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
