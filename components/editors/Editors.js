"use client";

import { PrismicRichText } from "@prismicio/react";
import "./editors.scss";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

const Editors = ({ data }) => {
  return (
    <div className="containerEditors">
      <div className="containerEditors_wrapper">
        <h2 className="containerEditors_title">
          {data.slices[2].primary.title}
        </h2>

        <h3 className="containerEditors_subtitle">
          <PrismicRichText field={data.slices[2].primary.subtitle} />
        </h3>
      </div>

      <div className="containerCards">
        {data.slices[2].items.map((element, index) => {
          return (
            <div
              id={`card${index + 1}`}
              className="containerCards_card"
              key={index}
            >
              <PrismicNextImage field={element.image} alt="" />
              <button id={`button${index + 1}`}>
                {element.button_caption}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editors;
