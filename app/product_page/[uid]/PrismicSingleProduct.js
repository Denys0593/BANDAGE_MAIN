"use client";

import Email from "@/components/Set/email/Email";
import Login from "@/components/Set/login/Login";
import Register from "@/components/Set/register/Register";
import { useState, useEffect } from "react";

const { default: Footer } = require("@/components/footer/Footer");
const { default: Header } = require("@/components/header/Header");
const { PrismicNextImage } = require("@prismicio/next");
const { PrismicRichText } = require("@prismicio/react");

const PrismicSingleProduct = ({ uid, data }) => {
  const [overflow, setOverflow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = overflow ? "hidden" : "";
  }, [overflow]);

  const changeState = (state, setState) => {
    setState((state) => !state);
    setOverflow(true);
  };

  return (
    <>
      <Login
        showLogin={showLogin}
        close={setShowLogin}
        setOverflow={setOverflow}
      />
      <Register
        showRegister={showRegister}
        close={setShowRegister}
        setOverflow={setOverflow}
      />
      <Email
        showEmail={showEmail}
        close={setShowEmail}
        setOverflow={setOverflow}
      />
      <Header
        background={"#23856D"}
        padding={"padding"}
        emailOn={() => changeState(showEmail, setShowEmail)}
        registerOn={() => changeState(showRegister, setShowRegister)}
        loginOn={() => changeState(showLogin, setShowLogin)}
      />
      <div className="singleProductCard">
        {data.slices[3].items.map((item, i) => {
          if (uid === item.category) {
            return (
              <div key={item.category} className="singleProductCard_wrapper">
                <PrismicNextImage
                  field={item.image}
                  alt=""
                  className="singleProductCard_image"
                />
                <div className="singleProductCard_descr">
                  <h2 className="pinkProductCard_title single">{item.title}</h2>
                  <h3 className="pinkProductCard_subtitle">
                    {item.category.replace(/_/gi, " ")}
                  </h3>
                  <PrismicRichText field={item.descr} />
                  <div className="pinkProductCard_price price">
                    <div className="pinkProductCard_new-price fs20">
                      {item.newPrice}
                    </div>
                    <div className="pinkProductCard_old-price old">
                      {item.oldPrice}
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

export default PrismicSingleProduct;
