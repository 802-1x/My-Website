import React from 'react';
import './OpenPGPPublicKeysButtonOverlay.css';

interface OpenPGPPublicKeysButtonOverlayProps {
    isVisible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const OpenPGPPublicKeysButtonOverlay: React.FC<OpenPGPPublicKeysButtonOverlayProps> = ({ isVisible, onClose, content }) => {
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className="overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-publickeys">
            <div className="modal" onClick={(e) => e.stopPropagation()} role="document">
                <h2 id="modal-publickeys">Public Keys</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default OpenPGPPublicKeysButtonOverlay;