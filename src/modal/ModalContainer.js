import React from "react";
import styles from "../styles/modularCSS/ModalContainer.module.css";

function ModalContainer(props) {
  return (
    <div className={`${styles["modal-container"]}`}>
      <div
        className={`col-12 container d-flex d-justify-center ${styles["modal-verify"]}`}
      >
        <div
          className={`${
            props?.modalResponsieClass
              ? props?.modalResponsieClass
              : "col-11 col-xs-11 col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-5"
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
