function Card(props){
    function hover(){
        
    }
    return(
        <>
            <div className='card'>
                <label className='card--label'>{props.label}</label>
                <img className='card--image' src={props.image} alt="" width={250} height={200}/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
}
export default Card