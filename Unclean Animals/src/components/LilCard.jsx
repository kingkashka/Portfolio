function LilCard(props){
    return(
        <div className="Lilcard">
            <img className='Lilcard--image' src={props.image} alt=""/>
            <h2>{props.title}</h2>
        </div>
    )
}
export default LilCard