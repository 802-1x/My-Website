import React from 'react';

interface SelfHostedVideoProps {
    videoSrc: string;
}

const SelfHostedVideo: React.FC<SelfHostedVideoProps> = ({ videoSrc }) => (
    <div className="video">
        <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            disablePictureInPicture
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

export default SelfHostedVideo;