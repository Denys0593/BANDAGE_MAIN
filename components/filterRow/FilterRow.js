"use client";

import { useState } from "react";
import "./filterRow.scss";

const FilterRow = ({ data, sortThis, changeNumber }) => {
  const [dropDown, setDropDown] = useState(false);
  const [chosen, setChosen] = useState("Popularity");

  const changeChosen = (e) => {
    if (e.target && e.target.tagName === "LI") {
      setChosen(e.target.textContent);
      changeNumber(e.target.value);
    }

    setDropDown(false);
  };

  const click = () => {
    setTimeout(() => setDropDown(false), 500);
  };

  return (
    <div className="containerFilterRow">
      <div className="containerFilterRow_left">Showing all 12 results</div>
      <div className="containerFilterRow_middle">
        <p>Views:</p>
        <button className="containerFilterRow_squares">
          <img src="productListPage/icons/squares.svg" alt="squares" />
        </button>
        <button className="containerFilterRow_lines">
          <img src="productListPage/icons/lines.svg" alt="lines" />
        </button>
      </div>
      <div className="containerFilterRow_group">
        <div className="containerFilterRow_father">
          <button
            onClick={() => setDropDown((dropDown) => !dropDown)}
            onBlur={() => click()}
            className="containerFilterRow_chooseButton"
          >
            {chosen}
          </button>
          <ul
            style={dropDown ? { display: "block" } : { display: "none" }}
            className="containerFilterRow_dropDown"
            onClick={(e) => changeChosen(e)}
          >
            <li className="containerFilterRow_dropDown-item" value="1">
              Popularity
            </li>
            <li className="containerFilterRow_dropDown-item" value="2">
              Price, low to high
            </li>
            <li className="containerFilterRow_dropDown-item" value="3">
              Price, high to low
            </li>
          </ul>
        </div>
        <button
          onClick={(e) => sortThis(e, data)}
          className="containerFilterRow_filterButton"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterRow;
