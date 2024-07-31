"use client";

import Link from "next/link";
import Navi from "../headerLow/navi/Navi";
import Info from "../headerLow/info/Info";

import "./header.scss";

const Header = ({
  background,
  cart,
  heart,
  data,
  setArr,
  emailOn,
  registerOn,
  loginOn,
}) => {
  return (
    <header>
      <div className="upper" style={{ background: background }}>
        <div className="upper_left">
          <div className="upper_left__info">
            <img src="/icons/phone.svg" alt="phone" className="phone-image" />
            <a href="tel:(225) 555-0118" className="phone-number">
              (225) 555-0118
            </a>
          </div>
          <div onClick={emailOn} className="upper_left__email">
            <img src="/icons/letter.svg" alt="letter" className="email-image" />
            <button className="email-text">michelle.rivera@example.com</button>
          </div>
        </div>

        <div className="upper_center">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="upper_right">
          <p>Follow Us :</p>
          <div className="upper_right__icons">
            <Link href="/">
              <img
                src="/icons/insta.svg"
                alt="instagram"
                className="upper_right__icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/icons/youtube.svg"
                alt="youtube"
                className="upper_right__icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/icons/facebook.svg"
                alt="facebook"
                className="upper_right__icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/icons/twitter.svg"
                alt="twitter"
                className="upper_right__icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="lowwer">
        <Link href="/" className="logo">
          Bandage
        </Link>
        <div className="right-side">
          <Navi />
          <Info
            cart={cart}
            heart={heart}
            data={data}
            setArr={setArr}
            registerOn={registerOn}
            loginOn={loginOn}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
