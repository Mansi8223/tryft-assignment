import React from "react";
import styles from "../styles/modularCSS/Header.module.css"

function Header() {
  return (
    <header className={`${styles.header} p-sticky bg-off-white pt-5 pb-5`}>
      <div
        className={`container content-padding d-flex d-align-center d-justify-space-between`}
      >
        <span className="h2 f-500">TRYFT</span>
        <button
          className="btn btn-primary"
        >
          Join
        </button>
      </div>
    </header>
  );
}

export default Header;
