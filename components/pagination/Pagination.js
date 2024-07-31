"use client";

import { useState } from "react";
import "./pagination.scss";

const Pagination = () => {
  const [blue, setBlue] = useState(true);

  const changeBlue = (e) => {
    e.preventDefault();

    const arr = document.querySelectorAll(".containerPagination_item");

    if (e.target && e.target.tagName === "BUTTON") {
      arr.forEach((item) => {
        item.classList.remove("blue");
        if (e.target.innerHTML === item.innerHTML) {
          e.target.classList.add("blue");
        }
      });
    }
  };

  return (
    <div className="containerPagination">
      <button className="containerPagination_first">First</button>
      <div
        onClick={(e) => changeBlue(e)}
        className="containerPagination_parent"
      >
        <button className="containerPagination_item blue">1</button>
        <button className="containerPagination_item">2</button>
        <button className="containerPagination_item">3</button>
      </div>
      <button className="containerPagination_next">Next</button>
    </div>
  );
};

export default Pagination;
