import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import "../uid.scss";
import Footer from "@/components/footer/Footer";
import BestSellerProductPage from "@/components/bestSellerProductPage/BestSellerProductPage";
import Header from "@/components/header/Header";
import { PrismicRichText } from "@prismicio/react";

const SingleProduct = async ({ params: { uid } }) => {
  const client = createClient();
  const { data } = await client.getSingle("productpage");
  console.log(uid.replace(/%20/gi, "_"));
  return (
    <>
      <Header background={"#23856D"} padding={"padding"} />
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

export default SingleProduct;
