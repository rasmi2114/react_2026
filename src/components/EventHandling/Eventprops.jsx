export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert(`Hey Thanks for hovering me`);
    };

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser("vinod")}
                onMouseEnter={handleHover}
            />
        </>
    );
};
const WelcomeUser = (props) => {
    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <button>Greeting</button>
        </>
    );
};