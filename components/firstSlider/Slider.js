"use client";

import { useEffect, useState } from "react";
import "./slider.scss";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Slider = ({ data }) => {
  const [num, setNum] = useState(0);

  const changeSlider = (index) => {
    const sliders = document.querySelectorAll(".slider");
    const dots = document.querySelectorAll(".dots_dot");
    sliders.forEach((item, i) => {
      item.classList.add("displayNone");

      if (index === i) {
        item.classList.remove("displayNone");
      }
      if (sliders.length <= index) {
        item.classList.add("displayNone");
        sliders[0].classList.remove("displayNone");
        setNum(0);
      }
      if (index < 0) {
        item.classList.add("displayNone");
        sliders[sliders.length + index].classList.remove("displayNone");
        setNum((num) => num + 1);
      }
    });

    dots.forEach((item, i) => {
      if (i === index) {
        item.classList.add("activeDot");
      } else {
        item.classList.remove("activeDot");
      }
    });
  };

  const changeByDots = (e) => {
    const dots = document.querySelectorAll(".dots_dot");
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((item, i) => {
      item.classList.add("displayNone");
      if (i === +e.target.getAttribute("data-dot")) {
        item.classList.remove("displayNone");
        dots.forEach((dot, j) => {
          dot.classList.remove("activeDot");
          e.target.classList.add("activeDot");
        });
      }
    });
  };

  useEffect(() => {
    changeSlider(num);
  }, [num]);

  return (
    <div className="containerSlider">
      {data.slices[0].items.map((element, index) => {
        return (
          <div className="slider" key={index}>
            <div className="slider_wrapper">
              <div className="slider_subtitle">{element.season}</div>
              <div className="slider_title">{element.title}</div>
              <div className="slider_text">
                <PrismicRichText field={element.description} />
              </div>

              <button className="slider_shopNow">
                {element.button_caption}
              </button>
            </div>
            <PrismicNextImage
              className="slider_background"
              field={element.image}
              alt=""
              priority
            />
          </div>
        );
      })}

      <button onClick={() => setNum(num - 1)} data-arrow="prevArrow">
        <img src="/icons/arrowSliderLeft.svg" alt="arrowSliderLeft" />
      </button>
      <button onClick={() => setNum(num + 1)} data-arrow="nextArrow">
        <img src="/icons/arrowSliderRight.svg" alt="arrowSliderRight" />
      </button>
      <div className="dots" onClick={(e) => changeByDots(e)}>
        <div data-dot="0" className="dots_dot activeDot"></div>
        <div data-dot="1" className="dots_dot"></div>
        <div data-dot="2" className="dots_dot"></div>
      </div>
    </div>
  );
};

export default Slider;
