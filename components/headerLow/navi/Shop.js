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
        <li className="shop_item">number1</li>
        <li className="shop_item">number2</li>
        <li className="shop_item">number3</li>
      </ul>
    </li>
  );
};

export default Shop;
