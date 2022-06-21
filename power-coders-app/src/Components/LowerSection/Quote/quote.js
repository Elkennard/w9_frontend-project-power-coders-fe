// I understand I need a function that will return a quote with Author name.
import react from "react"
import css from "./quotes.css"

function Quotes  (props){
    return ([
        <section>        
            <h2 >{props.quotes}</h2>
            <h3>-{props.author}</h3>
        </section>

    ]
    )
}

export default Quotes; 