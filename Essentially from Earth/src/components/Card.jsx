function Card(props){
    // const [display, setDisplay] = React.useState(true)
    // function displayInfo(){
    //     setDisplay(prevState => !prevState)
    // }
    return(
        <>
            <div className='lilcard'>
                <img className='lilcard--image' src={props.image} alt=""/>
                <label className='card--label'>{props.label}</label>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
}
export default Card