


const Dummy =(props) =>{

    const dummyButtonHandler =() =>{
props.onDummyClick();
    }
    return(
        <>
        <button onClick={dummyButtonHandler}> grand child</button>
        </>
    )
}
export default Dummy