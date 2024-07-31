import { PrismicNextImage } from "@prismicio/next";
import Pagination from "../pagination/Pagination";
import "./productCard.scss";
import Link from "next/link";

const ProductCard = ({ data, showPagination }) => {
  if (!Array.isArray(data)) {
    return (
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        Oops.. Products are epsent. Please, try later!
      </div>
    );
  }

  return (
    <>
      <div className="productCards">
        {data.map((item, i) => {
          return (
            <div key={i} className="productCard">
              <Link
                href={`/product_list/${item.category}`}
                className="productCard_cardButton"
              >
                <PrismicNextImage field={item.image} alt="" />
              </Link>
              <div className="productCard_wrapper">
                <h2 className="productCard_title">{item.title}</h2>
                <h3 className="productCard_subtitle">
                  {item.category.replace(/_/gi, " ")}
                </h3>
                <div className="productCard_price">
                  <div className="productCard_old-price">{item.oldPrice}</div>
                  <div className="productCard_new-price">{item.newPrice}</div>
                </div>
                <div className="productCard_color-flex">
                  <div data-color="blue" className="productCard_circle"></div>
                  <div data-color="green" className="productCard_circle"></div>
                  <div data-color="orange" className="productCard_circle"></div>
                  <div data-color="black" className="productCard_circle"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showPagination ? <Pagination /> : null}
    </>
  );
};

export default ProductCard;
