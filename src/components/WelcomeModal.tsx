import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface WelcomeModalProps {
  onConfirm: () => void;
}

const WelcomeModal = ({ onConfirm }: WelcomeModalProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleYes = () => {
    setIsVisible(false);
    onConfirm();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-pink-500 animate-pulse" fill="currentColor" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">
          Are you ready?
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 font-body">
          to see my gift for you 💝
        </p>

        <button
          onClick={handleYes}
          className="w-full px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
