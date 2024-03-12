import "./know.css"

function know({icon,desc}){
    
    return (
        <>
            <span class="event">
                <span class="point"></span>
                <img class="invert" src={icon}/>
                <span class="descriptionknow">{desc}</span>
            </span>

        </>

    );
}

export default know