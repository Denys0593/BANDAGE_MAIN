import Link from "next/link";
import FooterItem from "../footerItem/FooterItem";
import Form from "../form/Form";

import "./footer.scss";

const items = [
  {
    title: "Company Info",
    item1: "About Us",
    item2: "Carrier",
    item3: "We are hiring",
    item4: "Blog",
  },
  {
    title: "Legal",
    item1: "About Us",
    item2: "Carrier",
    item3: "We are hiring",
    item4: "Blog",
  },
  {
    title: "Features",
    item1: "Business Marketing",
    item2: "User Analytic",
    item3: "Live Chat",
    item4: "Unlimited Support",
  },
  {
    title: "Resources",
    item1: "IOS & Android",
    item2: "Watch a Demo",
    item3: "Customers",
    item4: "API",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="containerSocial">
        <Link href="/" className="containerSocial_left">
          Bandage
        </Link>
        <div className="containerSocial_right">
          <Link href="/" className="containerSocial_item">
            <img src="/icons/facebookBlue.svg" alt="facebook" />
          </Link>
          <Link href="/" className="containerSocial_item">
            <img
              src="/icons/instaBlue.svg"
              alt="instagram"
              className="containerSocial_item"
            />
          </Link>
          <Link href="/" className="containerSocial_item">
            <img
              src="/icons/twitterBlue.svg"
              alt="twitter"
              className="containerSocial_item"
            />
          </Link>
        </div>
      </div>
      <hr />
      <div className="containerFooter">
        <FooterItem items={items} />
        <Form />
      </div>
      <div className="footerEnd">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
