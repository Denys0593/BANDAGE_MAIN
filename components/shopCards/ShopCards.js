import Link from "next/link";
import "./shopCards.scss";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const ShopCards = ({ data }) => {
  return (
    <div className="containerShopCards">
      <div className="containerShopCards_upper">
        <div className="containerShopCards_left">Shop</div>
        <div className="containerShopCards_right">
          <Link href="/">Home</Link>
          <img
            src="productListPage/icons/right.svg"
            alt="right"
            className="containerShopCards_image"
          />
          <span>Shop</span>
        </div>
      </div>
      <div className="containerShopCards_lowwer">
        {data.slices[0].items.map((card, i) => {
          return (
            <PrismicNextLink
              key={i}
              field={card.cardlink}
              className="containerShopCards_item"
            >
              <PrismicNextImage
                field={card.cardimage}
                alt=""
                className="containerShopCards_img"
              />
              <div className="containerShopCards_wrapper">
                <div className="containerShopCards_title">{card.cardtitle}</div>
                <div className="containerShopCards_subtitle">
                  {card.cardsubtitle}
                </div>
              </div>
            </PrismicNextLink>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCards;
