"use client";

import { PrismicNextImage } from "@prismicio/next";
import "./productDescription.scss";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

const ProductDescription = ({ data }) => {
  const [display, setDisplay] = useState("descr");

  const active = (e) => {
    const buttons = document.querySelector(
      ".containerProductDescription_upper"
    );
    switch (e.target.getAttribute(["data-button"])) {
      case "descr":
        setDisplay("descr");
        break;
      case "info":
        setDisplay("info");
        break;
      case "reviews":
        setDisplay("reviews");
        break;
    }
  };

  return (
    <div className="containerProductDescription">
      <div
        className="containerProductDescription_upper"
        onClick={(e) => active(e)}
      >
        <button
          data-button="descr"
          className="containerProductDescription_item"
        >
          {data.slices[1].primary.button}
        </button>
        <button data-button="info" className="containerProductDescription_item">
          {data.slices[1].primary.button2}
        </button>
        <button
          data-button="reviews"
          className="containerProductDescription_item"
        >
          {data.slices[1].primary.button3}
        </button>
      </div>
      <hr />
      <div className="containerProductDescription_lowwer">
        <div
          className={`containerProductDescription_lowwer_descr ${display === "descr" && " active"}`}
        >
          <PrismicNextImage
            priority
            field={data.slices[1].primary.image}
            alt=""
            className="containerProductDescription_image"
          />

          <div className="containerProductDescription_middle">
            <h2 className="containerProductDescription_title">
              {data.slices[1].primary.title}
            </h2>
            <div className="containerProductDescription_text">
              <PrismicRichText field={data.slices[1].primary.descr} />
            </div>
          </div>
          <div className="containerProductDescription_left">
            <h2 className="containerProductDescription_title">
              {data.slices[1].primary.title2}
            </h2>
            <ul className="containerProductDescription_list">
              {data.slices[1].items.map((item, i) => {
                if (i > 3) {
                  return;
                }
                return (
                  <li key={i} className="containerProductDescription_listitem">
                    <PrismicNextImage
                      field={data.slices[1].primary.arrow}
                      alt=""
                    />
                    <span>{item.listItem}</span>
                  </li>
                );
              })}
            </ul>
            <h2 className="containerProductDescription_title" data-list="mt25">
              {data.slices[1].primary.title3}
            </h2>
            <ul className="containerProductDescription_list">
              {data.slices[1].items.slice(4).map((item, i) => {
                return (
                  <li key={i} className="containerProductDescription_listitem">
                    <PrismicNextImage
                      field={data.slices[1].primary.arrow}
                      alt=""
                    />
                    <span>{item.listItem}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className={`containerProductDescription_lowwer_info ${display === "info" && " active"}`}
        >
          SOME INFORMATION...
        </div>
        <div
          className={`containerProductDescription_lowwer_reviews ${display === "reviews" && " active"}`}
        >
          SOME REVIEWS...
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
