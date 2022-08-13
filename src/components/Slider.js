import { useEffect, useState } from "react";
import sliderData from "../assets/sliderData";
import "./Slider.css";

const SLIDER_TIME = 4000;

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  function nextSlide() {
    setSliderIndex(sliderIndex === sliderData.length - 1 ? 0 : sliderIndex + 1);
  }

  function prevSlide() {
    setSliderIndex(sliderIndex === 0 ? sliderData.length - 1 : sliderIndex - 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), SLIDER_TIME);
    return () => clearTimeout(timer);
  }, [sliderIndex]);

  return (
    <div className="slider">
      {sliderData.map((elem, index) => {
        return (
          <div
            className={`slide ${sliderIndex === index && "active"}`}
            style={{ backgroundImage: `url(${elem.url})` }}
            key={index}
          >
            <h1 className="heading">{elem.title}</h1>
            <div className="shadow"></div>
          </div>
        );
      })}

      <div className="slider-buttons">
        <span className="slider-button left" onClick={() => prevSlide()}>
          ←
        </span>
        {sliderData.map((_, index) => {
          return (
            <div
              className={`slider-dot ${
                sliderIndex === index ? "slider-dot-active" : null
              }`}
              onClick={() => setSliderIndex(index)}
              key={index}
            ></div>
          );
        })}
        <span className="slider-button right" onClick={() => nextSlide()}>
          →
        </span>
      </div>
    </div>
  );
}

export default Slider;
