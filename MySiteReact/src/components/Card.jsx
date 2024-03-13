import React, { useState, useEffect } from 'react';
import "./Card.css";
import Infoline from "./inforline";

function Card() {
    const [timeString, setTimeString] = useState("");

    // Chiama updatetimer() immediatamente al caricamento del componente
    useEffect(() => {
        setTimeString(updatetimer());
        
        // Aggiorna l'orario ogni secondo
        const interval = setTimeString(updatetimer());
        

        // Pulisci l'intervallo quando il componente si smonta
        return () => clearInterval(interval);
    }, []);

    function updatetimer() {
        var today = new Date();
        var italyTimeHours = today.getHours(); // Ottieni le ore locali
        var italyTimeMinutes = today.getMinutes(); // Ottieni i minuti
        var ampm = italyTimeHours >= 12 ? 'PM' : 'AM'; // Determina se è AM o PM
        italyTimeHours = italyTimeHours % 12;
        italyTimeHours = italyTimeHours ? italyTimeHours : 12; // Imposta le ore a 12 se è mezzogiorno

        // Formatta l'ora nel formato hh:mm:ss AM/PM
        var timeString = italyTimeHours.toString().padStart(2, '0') + ":" +
            italyTimeMinutes.toString().padStart(2, '0') + " " +
            ampm;

        return timeString;
    }
    
    return (
        <div className="mainbox">
            <div className="backbox">
                <div className="box">
                    <img className="myimg" src="./pro_pick.jpg" alt="profile-pic" />
                    <p>I'm a developer based in Rome, currently studying computer science at La Sapienza University. I'm
                        absolutely hooked on programming and can easily lose track of time glued to my PC</p>
                </div>
                <div className="infofast">
                    <Infoline icon="./school_FILL0_wght400_GRAD0_opsz24.svg" desc="Computer Science" />
                    <Infoline icon="./code_blocks_FILL0_wght400_GRAD0_opsz24.svg" desc="Jr. Web Developer" />
                    <Infoline icon="./schedule_FILL0_wght400_GRAD0_opsz24.svg" desc="Italy (UTC +01:00)" time={timeString} lamp={true} />
                </div>
            </div>
        </div>
    );
}

export default Card;
