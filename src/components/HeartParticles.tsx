import { useEffect, useCallback } from 'react';

const HeartParticles = () => {
  const createHeart = useCallback(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = ['❤️', '💕', '💗', '🤍', '💖'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.opacity = (Math.random() * 0.6 + 0.2).toString();
    document.body.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, 8000);
  }, []);

  useEffect(() => {
    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, [createHeart]);

  return null;
};

export default HeartParticles;
