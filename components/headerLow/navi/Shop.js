import Link from "next/link";

const Shop = () => {
  return (
    <li className="listNavi_containerShop">
      <div className="listNavi_wrapper">
        <div className="listNavi_item">Shop</div>
        <img
          src="/icons/arrowDown.svg"
          alt="arrowDown"
          className="listNavi_arrowDown"
        />
      </div>
      <ul className="shop">
        <li className="shop_item">
          <Link href="/product_list">Product list</Link>
        </li>
        <li className="shop_item">
          <Link href="/product_page">Product page</Link>
        </li>
        <li className="shop_item">something else</li>
      </ul>
    </li>
  );
};

export default Shop;
