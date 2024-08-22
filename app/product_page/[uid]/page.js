import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import "../uid.scss";
import Footer from "@/components/footer/Footer";
import BestSellerProductPage from "@/components/bestSellerProductPage/BestSellerProductPage";
import Header from "@/components/header/Header";
import { PrismicRichText } from "@prismicio/react";
import PrismicSingleProduct from "./PrismicSingleProduct";

const SingleProduct = async ({ params: { uid } }) => {
  const client = createClient();
  const { data } = await client.getSingle("productpage");

  return (
    <>
      <PrismicSingleProduct uid={uid} data={data} />
    </>
  );
};

export default SingleProduct;
