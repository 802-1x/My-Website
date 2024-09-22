import React, { useState, useEffect } from 'react';
import './ColourPane.css';

const ColourPane = () => {
  const [showBlue, setShowBlue] = useState(false);
  const [slideBlue, setSlideBlue] = useState(false);
  const [slideRed, setSlideRed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlue(true); // Show blue pane
      setTimeout(() => {
        setSlideBlue(true); // Start sliding up the blue pane
      }, 75); // Delay before starting the slide for a smooth transition
    }, 0); // Wait time before showing blue (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (slideBlue) {
      const timer = setTimeout(() => {
        setSlideRed(true); // Start sliding up the red pane after blue has slid in
      }, 2000); // Delay before starting to slide the red pane
      return () => clearTimeout(timer);
    }
  }, [slideBlue]);

  return (
    <div className="container">
      <div className={`pane white ${showBlue ? 'hide' : ''}`}></div>
      <div className={`pane blue ${slideBlue ? 'slide-up' : ''} ${showBlue ? '' : 'hide'}`}></div>
      <div className={`pane red ${slideRed ? 'slide-up' : ''}`}></div>
    </div>
  );
};

export default ColourPane;