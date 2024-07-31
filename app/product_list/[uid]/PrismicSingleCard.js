"use client";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Images from "@/components/imagez/Image";

const PrismicSingleCard = ({ uid, data }) => {
  const [price, setPrice] = useState(data);

  return (
    <>
      <Header background={"#23856D"} padding={"padding"} />
      <div className="singleCard">
        {price.slices[1].items.map((item, i) => {
          if (uid === item.category) {
            return (
              <div key={item.category} className="singleCard_wrapper">
                <Images item={item} />
                <div className="singleCard_descr">
                  <h2 className="singleCard_title">{item.title}</h2>
                  <h3 className="singleCard_subtitle">
                    {item.category.replace(/_/gi, " ")}
                  </h3>
                  <PrismicRichText field={item.descr} />
                  <div className="singleCard_priceAndLogos">
                    <div className="singleCard_price">
                      <div className="singleCard_new-price ">
                        {item.newPrice}
                      </div>
                      <div className="singleCard_old-price">
                        {item.oldPrice}
                      </div>
                    </div>
                    <div className="singleCard_logos">
                      <button className="singleCard_logo">
                        <PrismicNextImage
                          field={price.slices[1].primary.heart}
                          alt=""
                        />
                      </button>
                      <button className="singleCard_logo">
                        <PrismicNextImage
                          field={price.slices[1].primary.cart}
                          alt=""
                        />
                      </button>
                      <button className="singleCard_logo">
                        <PrismicNextImage
                          field={price.slices[1].primary.eye}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
};

export default PrismicSingleCard;
