import { socialIcons } from "../../../utils/constants";
import React from "react";
import styles from "../../styles/modularCSS/SocialIcons.module.css"
import ImageComponent from "./ImageComponent";

function SocialIcons() {
  return (
    <div className={`${styles.socialIcons} d-flex gap-8`}>
      {socialIcons?.map((item) => (
        <span
          key={item?.id}
          className="d-flex d-align-center d-justify-center rounded-4"
        >
          <ImageComponent
            src={item?.icon}
            alt={item?.label}
            width={18}
            height={18}
          />
        </span>
      ))}
    </div>
  );
}

export default SocialIcons;
