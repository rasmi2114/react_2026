export const MyTodoForm = ({ formName,formNameChange,changeMyname}) => {
    return (
        <div>
            <h1>{formName}</h1>
            {/* <button onClick={() =>formNameChange('naya value')}>Change Name</button> */}
            <button onClick={formNameChange}>Change Name</button> <br /><br />
            <button onClick={() => changeMyname(formName)}>Change My Name</button>
        </div>
        )
}