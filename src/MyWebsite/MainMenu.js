import React from 'react';
import './MainMenu.css';
import SelfHostedVideo from './MainMenuSelfHostedVideo';

const videoSrc = "/MainMenuVideo.mp4"

const MainMenu = () => {
    return (
        <>
            <div className="video-container">
                <SelfHostedVideo videoSrc={videoSrc} />
            </div>  
            <div className="right-menuContainer">
                <div className="bar light-blue">About</div>
                <div className="bar yellow">Academic Essays</div>
                <div className="bar beige">Stub</div>
                <div className="bar dark-orange">Socials</div>
            </div>
        </>
    );
}

export default MainMenu;