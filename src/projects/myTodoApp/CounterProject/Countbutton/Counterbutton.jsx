export const CounterButton = ({inc,decr,reset,count}) => {
    return (
        <>
        <button onClick={decr} disabled={count <= 0}>
            -
        </button>
        &nbsp;
        <button onClick={()=> reset(false)} disabled={count === 0}>
            Reset
        </button>
        &nbsp;
        <button onClick={inc}>
            +
        </button>
        </>

    );
}