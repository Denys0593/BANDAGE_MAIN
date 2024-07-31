import Link from "next/link";
import "./footerItem.scss";

const FooterItem = ({ items }) => {
  let itemsResult;

  if (items && items !== null && items.length > 0) {
    itemsResult = items.map((item, i) => {
      return (
        <div className="containerFooterItem" key={i}>
          <h1 className="containerFooterItem_title">{item.title}</h1>
          <ul className="containerFooterItem_list">
            <Link href="/">
              <li className="containerFooterItem_item">{item.item1}</li>
            </Link>
            <Link href="/">
              <li className="containerFooterItem_item">{item.item2}</li>
            </Link>
            <Link href="/">
              <li className="containerFooterItem_item">{item.item3}</li>
            </Link>
            <Link href="/">
              <li className="containerFooterItem_item">{item.item4}</li>
            </Link>
          </ul>
        </div>
      );
    });
  } else {
    itemsResult = <h3 className="empty">There is empty..Sorry</h3>;
  }

  return <>{itemsResult}</>;
};

export default FooterItem;
