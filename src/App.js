import React, { useState } from 'react';
import WelcomeAnimation from './MyWebsite/WelcomeAnimation';
import MainMenu from './MyWebsite/MainMenu';

function App() {
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcomeAnimation(false);
  };

  return (
    <div className="App">
      {showWelcomeAnimation ? (
        <WelcomeAnimation onComplete={handleWelcomeComplete} />
      ) : (
        <MainMenu />
      )}
    </div>
  );
}

export default App;