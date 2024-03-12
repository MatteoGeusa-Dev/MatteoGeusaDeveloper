import "./event.css"

function event({date,desc}) {
    return (
        <>
            <span class="eventdotted">
                <span class="point"></span>
                <span class="date">{date}</span>
            </span>
            <span class="description">{desc}</span>

        </>
    )
}

export default event