import PinkProductCard from "../pinkProductCard/PinkProductCard";
import "./bestSellerProductPage.scss";

const BestSellerProductPage = ({ data }) => {
  return (
    <div className="containerBSPP">
      <h2 className="containerBSPP_title">BESTSELLER PRODUCTS</h2>
      <hr />
      <div className="containerBSPP_wrapper"></div>

      <PinkProductCard data={data} />
    </div>
  );
};

export default BestSellerProductPage;
