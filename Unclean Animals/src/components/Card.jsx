import React from "react";
function Card(props){
    const [toggle, setToggle] = React.useState(true);
    function display(){
        setToggle(prevState => !prevState)
    }
    return(
        <>
            <div className='card'>
                <img onClick={display} className='card--image' src={props.image} alt="" width={250} height={200}/>
                <h2>{props.title}</h2>
                <label className='card--label'>{props.label}</label>
                <p>{props.description}</p>
            </div>
        </>
    )
}
export default Card