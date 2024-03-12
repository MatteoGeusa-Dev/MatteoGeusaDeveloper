import "./Card.css";
import Infoline from "./inforline";


function Card(){
    function updatetimer() {
        var today = new Date();
        var italyTimeHours = today.getHours(); // Ottieni le ore locali
        var italyTimeMinutes = today.getMinutes(); // Ottieni i minuti
        var ampm = italyTimeHours >= 12 ? 'PM' : 'AM'; // Determina se è AM o PM
        italyTimeHours = italyTimeHours % 12;
        italyTimeHours = italyTimeHours ? italyTimeHours : 12; // Imposta le ore a 12 se è mezzogiorno
    
        // Formatta l'ora nel formato hh:mm:ss AM/PM
        var timeString = italyTimeHours.toString().padStart(2, '0') + ":" + 
                         italyTimeMinutes.toString().padStart(2, '0') +
                         ampm;

        return timeString;
    }

            
        // Aggiorna l'orario ogni secondo
        var timestring = updatetimer();


    return(
        <>
            <div class="mainbox">
                <div class="backbox">
                    <div class="box">
                        <img class="myimg" src="./src/assets/pro_pick.jpg"/>
                        <p>I'm a developer based in Rome, currently studying computer science at La Sapienza University. I'm
                            absolutely hooked on programming and can easily lose track of time glued to my PC</p>
                    </div>
                    <div class="infofast">
                        <Infoline icon="./src/assets/school_FILL0_wght400_GRAD0_opsz24.svg" desc="Computer Science"/>
                        <Infoline icon="./src/assets/code_blocks_FILL0_wght400_GRAD0_opsz24.svg" desc="Full Stack Developer"/>
                        <Infoline icon="./src/assets/schedule_FILL0_wght400_GRAD0_opsz24.svg" desc="Italy (UTC +01:00)" time={timestring}/>
                    </div>
                </div>
            </div>


        </>
    );
}


export default Card