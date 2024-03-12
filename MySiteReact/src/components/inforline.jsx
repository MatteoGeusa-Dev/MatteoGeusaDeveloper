import "./infoline.css";

function infoline({icon,desc,time}){
    return(
        <>
            <div className="inline">
                <img className="infoimg" src={icon}/>
                <span>{desc}</span>
                <span>{time}</span>
            </div>
        
        </>
    );
}

export default infoline