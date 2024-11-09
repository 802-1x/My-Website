import React, { useState, useEffect } from 'react';
import './WelcomeAnimation.css';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [isFirstSlideVisible, setIsFirstSlideVisible] = useState(false);
  const [isFirstSlideSliding, setIsFirstSlideSliding] = useState(false);
  const [isSecondSlideSliding, setIsSecondSlideSliding] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isContainerSliding, setIsContainerSliding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstSlideVisible(true);
      setIsTextVisible(true);
      setTimeout(() => {
        setIsFirstSlideSliding(true);
      }, 75); //configurable delay in milliseconds before initiating the first slide transition
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFirstSlideSliding) {
      const timer = setTimeout(() => {
        setIsSecondSlideSliding(true);
        setIsTextVisible(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isFirstSlideSliding]);

  useEffect(() => {
    if (isSecondSlideSliding) {
      const timer = setTimeout(() => {
        setIsContainerSliding(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSecondSlideSliding]);

  useEffect(() => {
    if (isContainerSliding) {
      const timer = setTimeout(() => {
        onComplete();
      }, 75);
      return () => clearTimeout(timer);
    }
  }, [isContainerSliding, onComplete]);

  return (
    <>
      <div className="left-welcomeContainer">
        <div className={`pane white ${isFirstSlideVisible ? 'hide' : ''}`}></div>
        <div className={`pane firstSlide ${isFirstSlideSliding ? 'slide-up' : ''} ${isFirstSlideVisible ? '' : 'hide'}`}></div>
        <div className={`pane secondSlide ${isSecondSlideSliding ? 'slide-up' : ''}`}></div>
      </div>
      {isTextVisible && <div className="welcome-text">Welcome!</div>}
    </>
  );
};

export default WelcomeAnimation;