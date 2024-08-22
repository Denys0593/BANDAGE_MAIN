"use client";

import Link from "next/link";
import Shop from "./Shop";

import "./navi.scss";
import { useEffect, useState } from "react";

const Navi = () => {
  const [showmenu, setShowmenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const bodyWidth = window.getComputedStyle(body).getPropertyValue("width");

    body.style.width = showmenu ? bodyWidth : "";
    body.style.overflow = showmenu ? "hidden" : "";
  }, []);

  return (
    <>
      <div
        className={`${showmenu ? "hamburger hamburger_active" : "hamburger"}`}
        onClick={() => setShowmenu(!showmenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul className={`listNavi ${showmenu ? "listNavi_active" : ""}`}>
          <li className="listNavi_item">
            <Link href="/">Home</Link>
          </li>
          <Shop></Shop>
          <li className="listNavi_item">
            <Link href="/">About</Link>
          </li>
          <li className="listNavi_item">
            <Link href="/product_list">List</Link>
          </li>
          <li className="listNavi_item">
            <Link href="/">Contact</Link>
          </li>
          <li className="listNavi_item">
            <Link href="/">Pages</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navi;
