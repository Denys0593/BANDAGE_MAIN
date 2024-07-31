import Link from "next/link";
import "./pinkProductCard.scss";
import { PrismicNextImage } from "@prismicio/next";

const PinkProductCard = ({ data }) => {
  return (
    <div className="pinkProductCards">
      {data.slices[3].items.map((item, i) => {
        return (
          <Link
            href={`/product_page/${item.category}`}
            key={i}
            className="pinkProductCard"
          >
            <PrismicNextImage
              field={item.image}
              alt=""
              className="pinkProductCard_image"
            />
            <h2 className="pinkProductCard_title">{item.title}</h2>
            <h3 className="pinkProductCard_subtitle">
              {item.category.replace(/_/gi, " ")}
            </h3>
            <div className="pinkProductCard_price">
              <div className="pinkProductCard_old-price">{item.oldPrice}</div>
              <div className="pinkProductCard_new-price">{item.newPrice}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PinkProductCard;
