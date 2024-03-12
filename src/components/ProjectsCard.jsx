import React from 'react';
import "./ProjectsCard.css"

function ProjectsCard({ title, projectscodes = [], desc, show, repo }) {
    const languageIcons = {
        html: "./lenguage icons/icons8-html-5.svg",
        css: "./lenguage icons/icons8-css3.svg",
        javascript: "./lenguage icons/icons8-javascript-logo.svg",
        react:"./lenguage icons/react.png",
        pyhton:"./lenguage icons/icons8-python.svg"
        // Aggiungi altri linguaggi qui, se necessario
    };

    const renderLanguageIcons = () => {
        return projectscodes.map((language, index) => (
            <React.Fragment key={index}>
                <img src={languageIcons[language.toLowerCase()]} className="codeicons" />
                <span className="usagecode">{language}</span>
            </React.Fragment>
        ));
    };

    return (
        <div className="card">
            <div className="titlebox">
                <img src="./folder_open_FILL0_wght400_GRAD0_opsz24.svg" className="iconfolder" />
                <span className="titlecard">{title}</span>
            </div>
            <hr className="separatorcoders" />
            <span className="desc">{desc}</span>
            <div className="coders">
                {renderLanguageIcons()}
            </div>
            <div className="cardbutton">
                {show &&(
                <a href={show} target="_blank" rel="noopener noreferrer">
                    <button>Show</button>
                </a>
                )}
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    <button>Repository</button>
                </a>
            </div>
        </div>
    );
}

export default ProjectsCard;


