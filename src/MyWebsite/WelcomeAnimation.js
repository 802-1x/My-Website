import React, { useState, useEffect } from 'react';
import './WelcomeAnimation.css';

const WelcomeAnimation = ({ onComplete }) => {
  const [showFirstSlide, setShowFirstSlide] = useState(false);
  const [slideFirstSlide, setSlideFirstSlide] = useState(false);
  const [slideSecondSlide, setSlideSecondSlide] = useState(false);
  const [showText, setShowText] = useState(false);
  const [slideContainer, setSlideContainer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstSlide(true);
      setShowText(true);
      setTimeout(() => {
        setSlideFirstSlide(true);
      }, 75); //configurable delay in milliseconds before initiating the first slide transition
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // 
  useEffect(() => {
    if (slideFirstSlide) {
      const timer = setTimeout(() => {
        setSlideSecondSlide(true);
        setShowText(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [slideFirstSlide]);

  useEffect(() => {
    if (slideSecondSlide) {
      const timer = setTimeout(() => {
        setSlideContainer(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [slideSecondSlide]);

  useEffect(() => {
    if (slideContainer) {
      const timer = setTimeout(() => {
        onComplete();
      }, 75);
      return () => clearTimeout(timer);
    }
  }, [slideContainer, onComplete]);

  return (
    <>
      <div className="left-container">
        <div className={`pane white ${showFirstSlide ? 'hide' : ''}`}></div>
        <div className={`pane firstSlide ${slideFirstSlide ? 'slide-up' : ''} ${showFirstSlide ? '' : 'hide'}`}></div>
        <div className={`pane secondSlide ${slideSecondSlide ? 'slide-up' : ''}`}></div>
      </div>
      {showText && <div className="welcome-text">Welcome!</div>}
    </>
  );
};

export default WelcomeAnimation;