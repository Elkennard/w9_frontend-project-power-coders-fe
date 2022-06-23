import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./index.css";
import { useState, useEffect } from 'react';
// import "1_hero_journey" from "./WeekImages";


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [resource, setResource] = useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
useEffect(() => {
  async function fetchResources(id) {
        const response = await fetch(`http://localhost:3001/resources/week/${id}`);
        const data = await response.json();
        console.log(data.payload[0].title)
        setResource(data.payload[0]);
  };
  fetchResources(1)

 },[])
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
        <Carousel.Item interval={5000}>
      <div class="row">
      
        <div class="column">
        <img
          className="d-block w-100"
          src={require("./WeekImages/1_hero_journey.png")}
          alt="week 1 slide of carousel"
        />
        </div>
        
        
        <Carousel.Caption class="column">
          <h3>{`Week ${resource.week}`}</h3>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <button href={resource.link} target='_blank'>Further Reading</button>
        </Carousel.Caption>

      {/* closes row div */}
      </div>
      </Carousel.Item>




      <Carousel.Item interval={5000}>
      <div class="row">
      <div class="column">
        <img
          className="d-block w-100"
          src={require("./WeekImages/2_personality_types.png")}
          alt="Second slide"
        />
        </div>

        <Carousel.Caption class="column">
          <h3>Week 2</h3>
          <h3>Topic Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Further Reading</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>


      <Carousel.Item interval={5000}>
      <div class="row">
      <div class="column">
        <img
          className="d-block w-100"
          src={require("./WeekImages/3_perspectives_ideas.png")}
          alt="Third slide"
        />
        </div>

        <Carousel.Caption class = "column">
          <h3>Week 3</h3>
          <h3>Topic Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Further Reading</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  )
  };


