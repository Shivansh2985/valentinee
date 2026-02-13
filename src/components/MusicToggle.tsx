import { useRef, useState, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  autoPlay?: boolean;
}

const MusicToggle = ({ autoPlay = false }: MusicToggleProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlay) {
      playMusic();
    }
  }, [autoPlay]);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://res.cloudinary.com/dtz2uig0v/video/upload/v1771015007/music-app/songs/spu49fab31x8wr3vukpf.mp3'
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    audioRef.current.play().catch(() => {});
    setPlaying(true);
  };

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3'
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <button onClick={toggle} className="music-toggle-top-right" aria-label="Toggle music">
      {playing ? <Music className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
    </button>
  );
};

export default MusicToggle;
