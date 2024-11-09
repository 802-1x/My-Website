import React, { useState } from 'react';
import WelcomeAnimation from './MyWebsite/WelcomeAnimation';
import MainMenu from './MyWebsite/MainMenu';

const App: React.FC = () => {
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);

  const handleWelcomeComplete = (): void => {
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