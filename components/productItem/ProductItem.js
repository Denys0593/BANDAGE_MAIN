"use client";

import Link from "next/link";

import { PrismicNextImage } from "@prismicio/next";

import "./productItem.scss";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";

const ProductItem = ({ data }) => {
  const [bigPicture, setBigPicture] = useState(
    data.slices[0].items[0].mainImage.url
  );
  const [num, setNum] = useState(0);

  const changePicture = (e) => {
    const pictures = document.querySelectorAll(".containerProductItem_picture");
    pictures.forEach((item) => {
      if (e.target.classList.contains("containerProductItem_picture")) {
        setBigPicture(e.target.src);
      }
    });
  };

  const pictureChange = (i) => {
    setNum((num) => num + i);
  };

  const nextPicture = () => {
    const pictures = document.querySelectorAll(".containerProductItem_picture");

    if (num < pictures.length && num > 0) {
      setBigPicture(pictures[num].src);
    } else if (num < 0) {
      setBigPicture(pictures[pictures.length - 1].src);
      setNum(pictures.length - 1);
    } else {
      setBigPicture(pictures[0].src);
      setNum(0);
    }
  };

  useEffect(() => {
    nextPicture();
  }, [num]);

  return (
    <div className="containerProductItem">
      <div className="containerProductItem_top">
        <Link href="/">Home</Link>
        <img
          src="productListPage/icons/right.svg"
          alt="right"
          className="containerProductItem_image"
        />
        <span>Shop</span>
      </div>

      <div className="containerProductItem_bottom">
        <div className="containerProductItem_left">
          <div className="containerProductItem_upper">
            <img src={bigPicture} alt="" className="containerProductItem_img" />
            <button
              onClick={() => pictureChange(-1)}
              className="containerProductItem_arrowLeft"
            >
              <img src="icons/arrowSliderLeft.svg" alt="arrowSliderLeft" />
            </button>
            <button
              onClick={() => pictureChange(1)}
              className="containerProductItem_arrowRight"
            >
              <img src="icons/arrowSliderRight.svg" alt="arrowSliderRight" />
            </button>
          </div>
          <div className="containerProductItem_lowwer">
            <div
              onClick={(e) => changePicture(e)}
              className="containerProductItem_pictures"
            >
              <PrismicNextImage
                className="containerProductItem_picture"
                field={data.slices[0].items[0].mainImage}
                alt=""
                data-num="1"
              />
              <PrismicNextImage
                className="containerProductItem_picture"
                field={data.slices[0].items[0].miniImg}
                alt=""
                data-num="2"
              />
              <PrismicNextImage
                className="containerProductItem_picture"
                field={data.slices[0].items[0].miniImg1}
                alt=""
                data-num="3"
              />
            </div>
          </div>
        </div>

        <div className="containerProductItem_right">
          {data.slices[0].items.map((element, i) => {
            return (
              <div className="containerProductItem_description" key={i}>
                <div className="containerProductItem_title">Floating Phone</div>
                <div className="containerProductItem_rate">
                  <div className="containerProductItem_stars">
                    <PrismicNextImage
                      field={element.fullStar}
                      alt=""
                      className="containerProductItem_star"
                    />
                    <PrismicNextImage
                      field={element.fullStar}
                      alt=""
                      className="containerProductItem_star"
                    />
                    <PrismicNextImage
                      field={element.fullStar}
                      alt=""
                      className="containerProductItem_star"
                    />
                    <PrismicNextImage
                      field={element.fullStar}
                      alt=""
                      className="containerProductItem_star"
                    />
                    <PrismicNextImage
                      field={element.emptyStar}
                      alt=""
                      className="containerProductItem_star"
                    />
                  </div>
                  {element.reviews}
                </div>

                <div className="containerProductItem_price">
                  {element.price}
                </div>

                <div className="containerProductItem_availability">
                  Availability : <span>{element.availability}</span>
                </div>
                <div className="containerProductItem_descr">
                  <PrismicRichText field={element.descr} />
                </div>

                <hr />

                <div className="containerProductItem_circles">
                  <div data-color="blue"></div>
                  <div data-color="green"></div>
                  <div data-color="orange"></div>
                  <div data-color="black"></div>
                </div>

                <div className="containerProductItem_buttons">
                  <button className="containerProductItem_select">
                    {element.buttonSelect}
                  </button>
                  <div className="containerProductItem_logos">
                    <button className="containerProductItem_logo">
                      <PrismicNextImage field={element.heart} alt="" />
                    </button>
                    <button className="containerProductItem_logo">
                      <PrismicNextImage field={element.cart} alt="" />
                    </button>
                    <button className="containerProductItem_logo">
                      <PrismicNextImage field={element.eye} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
