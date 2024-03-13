
import "./infoline.css";

function infoline({ icon, desc, time, lamp }) {
    return (
        <div className="inline">
            <img className="infoimg" src={icon} alt="icon" />
            <span className="it">{desc}</span>
            {lamp ? (
                <span className="lamp">{time}</span>
            ):(
                <span className="it">{time}</span>
            )}
        </div>
    );
}

export default infoline;
