import "./event.css"

function event({date,desc,now}) {
    return (
        <>
            <span class="eventdotted">
                {now ? (
                    <span class="pointnow"></span>
                ) : (
                    <span class="point"></span>
                )}
                <span class="date">{date}</span>
            </span>
            <span class="description">{desc}</span>

        </>
    )
}

export default event