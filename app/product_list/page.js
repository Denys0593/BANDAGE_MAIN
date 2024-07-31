import FilterRow from "@/components/filterRow/FilterRow";
import Header from "@/components/header/Header";
import ProductCard from "@/components/productCard/ProductCard";
import ShopCards from "@/components/shopCards/ShopCards";

import "./productList.scss";
import Logos from "@/components/logos/Logos";
import Footer from "@/components/footer/Footer";

import { createClient } from "@/prismicio";
import ProductListPage from "./ProductListPage";

const ProductList = async () => {
  const client = createClient();

  const { data } = await client.getSingle("productcard");

  // return <ProductListPage data={data} />;
  return <div>opa</div>;
};

export default ProductList;
