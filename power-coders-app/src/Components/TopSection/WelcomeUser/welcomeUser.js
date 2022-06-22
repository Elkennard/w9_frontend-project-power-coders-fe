import "./WelcomUser.css"

function WelcomeUser(props){
    return (
        <h3 id="welcome">Welcome, {props.user}!</h3>
    )
}

export default  WelcomeUser; 