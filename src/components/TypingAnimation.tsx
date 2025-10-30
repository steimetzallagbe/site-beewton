import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  staticText: string;
  rotatingWords: string[];
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  staticText,
  rotatingWords,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];

    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(waitTimeout);
    }

    if (!isDeleting && currentText === currentWord) {
      const pauseTimeout = setTimeout(() => {
        setIsWaiting(true);
      }, 1000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      return;
    }

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isWaiting, currentWordIndex, rotatingWords]);

  return (
    <span className={className}>
      {staticText}
      <span className="inline-block">
        <span style={{ color: '#FF8A34' }}>{currentText}</span>
        <span className="animate-pulse" style={{ color: '#FF8A34' }}>|</span>
      </span>
    </span>
  );
};

export default TypingAnimation;
