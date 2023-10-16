"use client";

import { useState, useEffect } from "react";
import Logo from "../images/logo2.png";
import "./header.css";

export default function Header() {
  // // detect whether user has scrolled the page down by 10px
  // const scrollHandler = () => {
  //   window.pageYOffset > 10 ? setTop(false) : setTop(true)
  // }

  // useEffect(() => {
  //   scrollHandler()
  //   window.addEventListener('scroll', scrollHandler)
  //   return () => window.removeEventListener('scroll', scrollHandler)
  // }, [top])

  return (
    <header
      style={{
        margin: "0 auto",
        width: "70%",
        paddingTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href="/" className="block" aria-label="Cruip">
        <img src={Logo} width={50} height={50} alt="IPPER" />
      </a>
      <a
        href="/alerts"
        className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao"
      >
        Verificar 
      </a>
    </header>
  );
}
