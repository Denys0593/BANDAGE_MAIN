"use client";

import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Login from "@/components/Set/login/Login";
import Email from "@/components/Set/email/Email";
import { useState } from "react";
import Register from "@/components/Set/register/Register";

const monsterrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const [showEmail, setShowEmail] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  // const [overflow, setOverflow] = useState(false);

  // const changeState = (state, setState) => {
  //   setState((state) => !state);
  //   setOverflow(true);
  // };

  // const body = document.querySelector("body");
  // body.style.overflow = overflow ? "hidden" : "";

  return (
    <html lang="en" className={monsterrat.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
