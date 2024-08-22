import Pagination from "../pagination/Pagination";
import ProductCard from "../productCard/ProductCard";

import "./bestSeller.scss";

const BestSeller = ({ data }) => {
  console.log("xyu");
  return (
    <div className="containerBestSeller">
      <div className="containerBestSeller_wrapper">
        <h3 className="containerBestSeller_pretitle">Featured Products</h3>
        <h2 className="containerBestSeller_title">BESTSELLER PRODUCTS</h2>
        <h3 className="containerBestSeller_subtitle">
          Problems trying to resolve the conflict between
        </h3>
      </div>
      <ProductCard showPagination={false} data={data} />
    </div>
  );
};

export default BestSeller;
