import React from 'react';
import "./SocialElement.css"

function SocialElement({ link, type }) {
    const SocialType = {
        instagram: "./Social/icons8-instagram.svg",
        linkedin: "./Social/icons8-linkedin-circled.svg",
        github: "./Social/icons8-github.svg"
    };

    // Verifica se è stato fornito un tipo valido
    if (!type || !SocialType[type.toLowerCase()]) {
        return null; // Se il tipo non è valido, non renderizzare nulla
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={SocialType[type.toLowerCase()]} className="invertsocial" alt={type} />
        </a>
    );
}

export default SocialElement;
