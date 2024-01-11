function Card(props){
    // const [display, setDisplay] = React.useState(true)
    // function displayInfo(){
    //     setDisplay(prevState => !prevState)
    // }
    return(
        <>
            <div className='card'>
                <label className='card--label'>{props.label}</label>
                <img className='card--image' src={props.image} alt="" width={250} height={200}/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                {/* <h1>{display ? `yes`:`no`}</h1> */}
            </div>
        </>
    )
}
export default Card