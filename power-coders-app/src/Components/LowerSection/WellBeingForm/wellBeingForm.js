import React, {useState} from "react";

function WellbeingForm() {    
const [feedback, setFeedback] = useState(false);

function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);    
    let formObject = {};
    for (const [name,value] of data) {
        formObject[name] = value;
    }
    formObject.score = Number(formObject.score);
    postFeedback(formObject);
}

async function postFeedback (formObject) {
    const response = await fetch('http://localhost:3000/feedback', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });
    const data = await response.json();  
    console.log(data);
  };

    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name"></input>
                <br />
                <label htmlFor="coach">Enablement coach: </label>
                <select id="coach" name="coach">
                    <option value="Rikki">Rikki</option>
                    <option value="Vicki">Vicki</option>
                </select>
                <br />
                <fieldset>
                    <legend>How is your wellbeing today?</legend>           
                    <label htmlFor="score1">Very low</label>
                    <input type="radio" id="score1" name="score" value="1"></input>
                    <label htmlFor="score2"></label>
                    <input type="radio" id="score2" name="score" value="2"></input>
                    <label htmlFor="score3"></label>
                    <input type="radio" id="score3" name="score" value="3"></input>
                    <label htmlFor="score4"></label>
                    <input type="radio" id="score4" name="score" value="4"></input>            
                    <input type="radio" id="score5" name="score" value="5"></input>
                    <label htmlFor="score5">Very high</label>
                </fieldset>
                <input type="submit" value="Submit"></input>                
        </form>
    )
}

export default WellbeingForm;