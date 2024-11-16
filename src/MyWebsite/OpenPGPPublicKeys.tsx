import React from 'react';
import './OpenPGPPublicKeys.css';

interface OpenPGPPublicKeysProps {
    onClick: () => void;
}

const OpenPGPPublicKeys: React.FC<OpenPGPPublicKeysProps> = ({ onClick }) => {
    return (
        <button className="openpgp-publickeys-button" onClick={onClick}>
            PGP Keys
        </button>
    );
}

export default OpenPGPPublicKeys;