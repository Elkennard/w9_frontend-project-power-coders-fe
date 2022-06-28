import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import { useState, useEffect } from "react";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [resources, setResources] = useState([]);
  const imgURL = "/WeekImages/";

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    async function fetchWeekResources(currentWeek) {
      const weeksArr = [];
      for (let i = currentWeek; i < currentWeek + 8; i++) {
        const response = await fetch(
          `http://localhost:3001/resources/week/${i}`
        );
        const data = await response.json();
        weeksArr.push(data.payload[0]);
      }

      setResources(weeksArr);
    }
    fetchWeekResources(1);
  }, []);

  //some classNames are using bootstrap utilities.
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {resources.map((resource, index) => {
        const imageURL = `${imgURL}${resource.image_path}`;
        return (
          <Carousel.Item className="consistant" key={index} interval={10000}>
            <div class="row">
              <div class="column">
                <div className="resourceImage">
                  <img
                    className="d-block w-100"
                    src={imageURL.toString()}
                    alt="slide of carousel"
                  />
                </div>
              </div>
              <Carousel.Caption class="column">
                <div className="resourceText">
                  <h3 className="resourceH3">{`Week ${resource.week}`}</h3>
                  <h3 className="resourceTitle">{resource.title}</h3>
                  <p className="resourceDescription">{resource.description}</p>
                </div>
                <div className="resourceLink">
                  <a href={resource.link} rel="noreferrer" target="_blank">
                    Further Reading
                  </a>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
