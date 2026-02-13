import { useRef, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button onClick={toggle} className="music-toggle" aria-label="Toggle music">
      {playing ? <Music className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
    </button>
  );
};

export default MusicToggle;
