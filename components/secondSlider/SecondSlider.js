"use client";

import { useEffect, useState } from "react";

import "./secondSlider.scss";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const SecondSlider = ({ data }) => {
  const [num, setNum] = useState(0);

  const changeSlider = () => {
    const sliders = document.querySelectorAll(".secondSlider");
    const dots = document.querySelectorAll(".secondSliderdots_dot");
    sliders.forEach((item, i) => {
      item.classList.add("displayNo");

      if (num === i) {
        item.classList.remove("displayNo");
      }
      if (sliders.length <= num) {
        item.classList.add("displayNo");

        sliders[0].classList.remove("displayNo");

        setNum(0);
      }
      if (num < 0) {
        item.classList.add("displayNo");

        sliders[sliders.length + num].classList.remove("displayNo");
        setNum((num) => num + 1);
      }
    });

    dots.forEach((item, i) => {
      if (i === num) {
        item.classList.add("activeDot");
      } else {
        item.classList.remove("activeDot");
      }
    });
  };

  const secondChance = (e) => {
    const secondSlider = document.querySelectorAll(".secondSlider");
    const dots = document.querySelectorAll(".secondSliderdots_dot");

    changePicture.forEach((slider, index) => {
      slider.classList.add("displayNo");

      if (index === +e.target.getAttribute("data-dot")) {
        slider.classList.remove("displayNo");
        dots.forEach((dot, dotNum) => {
          dot.classList.remove("activeDot");
          if (dotNum === index) {
            dot.classList.add("activeDot");
          }
        });
      }
    });
  };

  useEffect(changeSlider, [num]);

  return (
    <div className="containerSecondSlider">
      {data.slices[4].items.map((slider, i) => {
        return (
          <div
            key={i}
            id={slider.sliderID}
            className={`secondSlider ${slider.displayno}`}
          >
            <div className="secondSlider_wrapper">
              <div className="secondSlider_subtitle">{slider.subtitle}</div>
              <h1 className="secondSlider_title">{slider.title}</h1>
              <div className="secondSlider_text">{slider.descr}</div>
              <div className="secondSlider_wrap">
                <div className="secondSlider_price">{slider.price}</div>
                <button className="secondSlider_add">{slider.button}</button>
              </div>
            </div>
            <PrismicNextImage
              field={slider.image}
              alt=""
              className="secondSlider_image"
            />
          </div>
        );
      })}
      <button
        onClick={() => setNum(num - 1)}
        data-arrow="prevArrowSecondSlider"
      >
        <img src="/icons/arrowSliderLeft.svg" alt="arrowSliderLeft" />
      </button>
      <button
        onClick={() => setNum(num + 1)}
        data-arrow="nextArrowSecondSlider"
      >
        <img src="/icons/arrowSliderRight.svg" alt="arrowSliderRight" />
      </button>
      <div onClick={(e) => secondChance(e)} className="secondSliderdots">
        <div data-dot="0" className="secondSliderdots_dot activeDot"></div>
        <div data-dot="1" className="secondSliderdots_dot"></div>
      </div>
    </div>
  );
};

export default SecondSlider;
