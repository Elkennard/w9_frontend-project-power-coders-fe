import "./Sound.css";

import React, { useState } from "react";

function SoundOnOff() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio("/media/audio/waves.mp3"));

  function toggleAudio() {
    setAudioPlaying(!audioPlaying);
    if (!audioPlaying) {
      audio.volume = 0.25;
      audio.play();
    }
    if (audioPlaying) {
      audio.pause();
      setAudio(new Audio("/audio/waves.mp3"));
    }
  }

  return (
    <div className="soundContainer">
      {audioPlaying ? <p>Sound Off</p> : <p>Sound On</p>}

      <label className="switch">
        <input type="checkbox" onClick={toggleAudio}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default SoundOnOff;
