"use client";

import FilterRow from "@/components/filterRow/FilterRow";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Logos from "@/components/logos/Logos";
import ProductCard from "@/components/productCard/ProductCard";
import Email from "@/components/Set/email/Email";
import Login from "@/components/Set/login/Login";
import Register from "@/components/Set/register/Register";
import ShopCards from "@/components/shopCards/ShopCards";
import { useEffect, useState } from "react";

// розібратись що не так з ф-ю switch

const ProductListPage = ({ data }) => {
  const [arr, setArr] = useState(data.slices[1].items);
  const [number, setNumber] = useState("1");
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

  const changeNumber = (smth) => {
    setNumber(smth);
  };

  const sortThis = (e, someArr) => {
    e.preventDefault();
    let newArr;
    let prices;

    switch (number.toString()) {
      case "1":
        setArr(data.slices[1].items);

        break;

      case "2":
        newArr = someArr.map((item, i) => {
          item.newPrice = item.newPrice.replace(/\$/gi, "");
          return item;
        });

        prices = newArr
          .map((item) => item.newPrice)
          .sort(function (a, b) {
            return a - b;
          });

        prices.map((price, i) => {
          return newArr.forEach((num, j) => {
            if (price === num.newPrice) {
              prices[i] = num;
            }
          });
        });

        prices.map((price) => {
          price.newPrice = `$${price.newPrice}`;
          return price;
        });
        setArr(prices);
        break;

      case "3":
        newArr = someArr.map((item, i) => {
          item.newPrice = item.newPrice.replace(/\$/gi, "");
          return item;
        });

        prices = newArr
          .map((item) => item.newPrice)
          .sort(function (a, b) {
            return a - b;
          })
          .reverse();

        prices.map((price, i) => {
          return newArr.forEach((num, j) => {
            if (price === num.newPrice) {
              prices[i] = num;
            }
          });
        });

        prices.map((price) => {
          price.newPrice = `$${price.newPrice}`;
          return price;
        });
        setArr(prices);
        break;
      default:
        console.log("nothing");
    }
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
        data={data}
        setArr={setArr}
        emailOn={() => changeState(showEmail, setShowEmail)}
        registerOn={() => changeState(showRegister, setShowRegister)}
        loginOn={() => changeState(showLogin, setShowLogin)}
      />
      <ShopCards data={data} />
      <FilterRow data={arr} sortThis={sortThis} changeNumber={changeNumber} />
      <ProductCard showPagination={true} data={arr} />
      <Logos data={data} />
      <Footer background={""} />
    </>
  );
};

export default ProductListPage;
