import "../EventHandling/EventHandling.css";

function handleButtonClick() {
    alert("Hi, Im on button click evenet");

}

export const EventHandling =() => {
    return(
        <>
        <button onClick={handleButtonClick}>Click me</button>
        </>
    )


}