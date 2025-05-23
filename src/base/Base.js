import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import React from "react";
import style from "./Base.module.css";

function Base(props) {
  return (
    <main className={`d-flex d-flex-column ${style["main-class"]}`}>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}

export default Base;
