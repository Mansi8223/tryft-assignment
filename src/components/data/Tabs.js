import React from "react";
import styles from "../../styles/modularCSS/Tabs.module.css"

function Tabs({ data, selected, setSelected }) {
  return (
    <div className={`${styles.tabs} p-sticky d-flex`}>
      {data?.map((item) => (
        <span
          className={`col-6 text-center pt-3 pb-3 cursor-pointer h4 transition-all ${
            selected?.id == item?.id
              ? "text-primary bg-success-light border-bottom border-size-2 border-primary"
              : "text-gray bg-off-white  border-bottom border-size-2 border-smoke"
          }`}
          key={item?.id}
          onClick={() => setSelected(item)}
        >
          {item?.label}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
