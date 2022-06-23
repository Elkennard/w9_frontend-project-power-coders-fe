import React from "react";
import "./Sound.css";


function SoundOnOff(){
    return ([
        <div>
           <p>Sound</p>
       <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
       </label>
       </div>
    ])
}

export default SoundOnOff; 