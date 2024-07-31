"use client";

import BestSellerProductPage from "@/components/bestSellerProductPage/BestSellerProductPage";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Logos from "@/components/logos/Logos";
import ProductDescription from "@/components/productDescription/ProductDescription";
import ProductItem from "@/components/productItem/ProductItem";
import Email from "@/components/Set/email/Email";
import Login from "@/components/Set/login/Login";
import Register from "@/components/Set/register/Register";
import { useEffect, useState } from "react";

const ProductPagePage = ({ data }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [overflow, setOverflow] = useState(false);

  // const body = document.querySelector("body");
  // body.style.overflow = overflow ? "hidden" : "";

  useEffect(() => {
  const body = document.querySelector("body");
  body.style.overflow = overflow ? "hidden" : "";
  }, [overflow])

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
        padding={"padding"}
        background={"#23856D"}
        emailOn={() => changeState(showEmail, setShowEmail)}
        registerOn={() => changeState(showRegister, setShowRegister)}
        loginOn={() => changeState(showLogin, setShowLogin)}
      />
      <ProductItem data={data} />
      <ProductDescription data={data} />
      <BestSellerProductPage data={data} />
      <Logos data={data} />
      <Footer />
    </>
  );
};

export default ProductPagePage;
