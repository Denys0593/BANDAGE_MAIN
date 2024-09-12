"use client";

import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

const Images = ({ item }) => {
  const [picture, setPicture] = useState(item.image.url);

  const change = (e) => {
    if (
      e &&
      e.target.matches("img") &&
      e.target.classList.contains("singleCard_image")
    ) {
      document.querySelectorAll("img").forEach((item) => {
        if (item.getAttribute("data-ok") === e.target.getAttribute("data-ok")) {
          setPicture(item.src);
        }
      });
    }
  };

  return (
    <div className="singleCard_images">
      <div className="singleCard_left" onClick={(e) => change(e)}>
        <PrismicNextImage
          field={item.miniImage}
          className={"singleCard_image"}
          alt=""
          data-ok="1"
        />
        <PrismicNextImage
          field={item.miniImage1}
          className={"singleCard_image"}
          alt=""
          data-ok="2"
        />
        <PrismicNextImage
          field={item.image}
          className={"singleCard_image"}
          alt=""
          data-ok="3"
        />
      </div>
      <div className="singleCard_middle">
        <img src={picture} alt="dfg" />
      </div>
    </div>
  );
};

export default Images;
