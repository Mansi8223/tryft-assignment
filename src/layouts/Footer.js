import SocialIcons from "@/components/general/SocialIcons";
import React from "react";
import styles from "../styles/modularCSS/Footer.module.css";

function Footer() {
  return (
    <footer className="pt-10 pb-10 bg-forest-green">
      <div className={`${styles.footerContent} container content-padding d-flex d-align-center d-justify-space-between gap-10`}>
        <div className="d-flex d-flex-column gap-3">
          <span className="h2 f-500 text-white">TRYFT</span>
          <p className="h6 f-500 text-white">
            DISCLAIMER: Loream spam dolar sit amet loream spam dolar sit amet loream spam dolar sit amet. Loream spam dolar sit amet
          </p>
        </div>
        <div
          className={`${styles.followUsContainer} d-flex d-flex-column gap-4 p-5 rounded-12`}
        >
          <span className="h6 f-600 text-white">FOLLOW US TO STAY TUNED</span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
