function Greeting(props){
    return(
            props.isLoggedIn ? <h2>welcome {props.userName}</h2> : <h2>please log in</h2>
    )
}
export default Greeting