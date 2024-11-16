import React, { useState, useRef, useEffect } from 'react';
import './MainMenu.css';

// External libraries; implementing code splitting and tree shaking to reduce size of bundled code
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/mailto';

// Internal components and data imports
import SelfHostedVideo from './MainMenuSelfHostedVideo';
import personalData from './inputs/personalData.json';
import OpenPGPPublicKeys from './OpenPGPPublicKeys';
import OpenPGPPublicKeysButtonOverlay from './OpenPGPPublicKeysButtonOverlay';


// Ensure file names matches files located in public directory
const videoSrc = "/MainMenuVideo.mp4";
const audioSrc="/NamePronounciation.mp3";

interface MenuItem {
    text: string;
    className: string;
}

interface personalData {
    name: string;
    blurb: string;
    linkedin: string;
    github: string;
    mailto: string;
}

const menuItems: MenuItem[] = [
    { text: "About", className: "plum" },
    { text: "Writings", className: "lightskyblue" },
    { text: "Projects", className: "darkorange" },
    { text: "Professional", className: "lightgreen" },
];

const MainMenu: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isOpenPGPPublicKeysButtonOverlayVisible, setIsOpenPGPPublicKeysButtonOverlayVisible] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = (): void => {
        setHoveredIndex(null);
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    const handleButtonClick = () => {
        setIsOpenPGPPublicKeysButtonOverlayVisible(true);
    }

    const closeOverlay = () => {
        setIsOpenPGPPublicKeysButtonOverlayVisible(false);
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
                <OpenPGPPublicKeys onClick={handleButtonClick} />
                
                <div className="linkedin-container">
                    <SocialIcon url={personalData.linkedin} target="_blank" style={{ height: 40, width: 40 }} />
                </div>
                
                <div className="github-container">
                    <SocialIcon url={personalData.github} target="_blank" style={{ height: 40, width: 40 }} />
                </div>

                <div className="mailto-container">
                    <SocialIcon url={personalData.mailto} target="_blank" style={{ height: 40, width: 40 }} />
                </div>                

                <OpenPGPPublicKeysButtonOverlay
                    isVisible={isOpenPGPPublicKeysButtonOverlayVisible}
                    onClose={closeOverlay}
                    content={
                        <>
                            My <a href="https://en.wikipedia.org/wiki/Pretty_Good_Privacy" target="_blank" rel="noopener noreferrer"> OpenPGP</a> Public Keys are available for download: <a href="/pk_placeholder.asc" download>Access Public Keys.</a>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default MainMenu;