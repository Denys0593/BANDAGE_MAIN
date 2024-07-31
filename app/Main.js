"use client";

import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";

import Slider from "@/components/firstSlider/Slider";
import Editors from "@/components/editors/Editors";
import BestSeller from "@/components/bestSeller/BestSeller";
import SecondSlider from "@/components/secondSlider/SecondSlider";
import Universe from "@/components/universe/Universe";
import Posts from "@/components/posts/Posts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Email from "@/components/Set/email/Email";
import Register from "@/components/Set/register/Register";
import Login from "@/components/Set/login/Login";

export default function Main({ data }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [overflow, setOverflow] = useState(false);

  const [arr, setArr] = useState(data.slices[1].items);

  const changeState = (state, setState) => {
    setState((state) => !state);
    setOverflow(true);
  };

  // const body = document.querySelector("body");
  // body.style.overflow = overflow ? "hidden" : "";

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = overflow ? "hidden" : "";
  }, [overflow])

  return (
    <>
    <div>op</div>
      {/* <Login
        showLogin={showLogin}
        close={setShowLogin}
        setOverflow={setOverflow}
      />
      <Register
        showRegister={showRegister}
        close={setShowRegister}
        setOverflow={setOverflow}
      />
      <Email
        showEmail={showEmail}
        close={setShowEmail}
        setOverflow={setOverflow}
      />
      <Header
        data={data}
        setArr={setArr}
        background={"#252b42"}
        emailOn={() => changeState(showEmail, setShowEmail)}
        registerOn={() => changeState(showRegister, setShowRegister)}
        loginOn={() => changeState(showLogin, setShowLogin)}
      />
      <Slider data={data} />
      <Editors data={data} />
      <BestSeller data={arr} />
      <SecondSlider data={data} />
      <Universe data={data} />
      <Posts />
      <Footer background={"#fafafa"} /> */}
    </>
  );
}
