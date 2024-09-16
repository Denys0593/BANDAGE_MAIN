"use client";

import Link from "next/link";

import "./info.scss";
import { useState } from "react";

const Info = ({ data, setArr, registerOn, loginOn }) => {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");

  const showResults = (e) => {
    e.preventDefault();

    if (value !== "") {
      data.slices[1].items.map((item, i) => {
        if (item.category.includes(value) || item.title.includes(value)) {
          data = [item];
        }
      });
      setArr(data);
    } else {
      setArr(data.slices[1].items);
    }
  };

  const changeSear = () => {
    setSearch((search) => !search);
  };

  return (
    <div className="containerInfo">
      <div className="info">
        <img src="/icons/login.svg" alt="login" />
        <div>
          <button onClick={loginOn}>Login</button> /{" "}
          <button onClick={registerOn}>Register</button>
        </div>
      </div>

      <div className="icons">
        <div className="icons_search">
          <img
            onClick={() => changeSear()}
            src="/icons/glass.svg"
            alt="search"
            className="icons_item"
            data-search="search"
          />
          <form
            name="formSearch"
            className={search ? `icons_form formActive` : `icons_form`}
          >
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="search"
              placeholder="Search"
              name="search"
            />
            <button onClick={(e) => showResults(e)} type="submit">
              Search
            </button>
          </form>
        </div>
        <Link href="/">
          <img src="/icons/cart.svg" alt="cart" data-cart="cart" />
          {/* <div data-number="cart">{cartNumber}</div> */}
        </Link>
        <Link href="/">
          <img
            src="/icons/heart.svg"
            alt="heart"
            className="icons_item"
            data-heart="heart"
          />
          <div data-number="heart"></div>
        </Link>
      </div>
    </div>
  );
};

export default Info;
