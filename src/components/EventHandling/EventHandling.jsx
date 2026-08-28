import "../EventHandling/EventHandling.css";


export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("Hi, I am on button click event");
    // }

    //another method 
      const handleButtonClick = (event) => {
        console.log(event);
        alert("Hi, I am on button click event");
      };

    return(
        <>
        <button onClick={handleButtonClick}>Click me</button>
        </>
    )


}