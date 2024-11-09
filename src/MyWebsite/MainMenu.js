import React, { useState, useRef, useEffect } from 'react';
import './MainMenu.css';
import SelfHostedVideo from './MainMenuSelfHostedVideo';
import personalData from './inputs/personalData.json';

/* Ensure file names matches file located in public directory. */
const videoSrc = "/MainMenuVideo.mp4";
const audioSrc="/NamePronounciation.mp3";

const menuItems = [
    { text: "About", className: "plum" },
    { text: "Academic Essays", className: "lightskyblue" },
    { text: "Stub", className: "darkorange" },
    { text: "Socials", className: "lightgreen" },
];

const MainMenu = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const playAudio = () => {
        audioRef.current.play();
    }

    return (
        <div className={`main-menu ${isVisible ? 'fade-in' : ''}`}>
            <div className="video-container">
                <SelfHostedVideo videoSrc={videoSrc} />
            </div>

            <div className="right-menuContainer">
                <div className="greeting-text">
                    <h1>Hello!</h1>
                    <div className="greeting-myname">
                        <p>My name is<button onClick={playAudio} className="pronounce-button">🔊</button> {personalData.name}</p>
                    </div>
                    <audio ref={audioRef} src={audioSrc}></audio>
                    <div className="greeting-blurb">
                        <p>{personalData.blurb}</p>
                    </div>
                </div>

                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`bar ${item.className} ${hoveredIndex === index ? 'shrink' : ''}`}
                        >
                            {item.text}
                        </div>
                        <div
                            className={`invisible-overlay ${item.className}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MainMenu;