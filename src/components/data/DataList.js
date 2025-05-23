"use client";
import React, { useEffect, useState } from "react";
import { dataTabs } from "../../../utils/constants";
import Tabs from "./Tabs";
import styles from "../../styles/modularCSS/DataList.module.css";
import { toastError } from "../general/Toasters";

function DataList() {
  const [selected, setSelected] = useState(dataTabs[0]);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let response = await fetch("/data/data.json");
      let res = await response.json();
      let selectedData = res?.data?.find(
        (item) => item?.label == selected?.label
      );
      setData(selectedData?.content);
    } catch (error) {
      toastError(error?.message);
    }
  };

  useEffect(() => {
    getData();
  }, [selected]);
  return (
    <section className="content-padding pt-10 pb-10">
      <div className="container rounded-4 border border-smoke o-hidden oy-scroll primary-scrollbar">
        <Tabs data={dataTabs} selected={selected} setSelected={setSelected} />
        <ul className={`${styles.dataList} list-style-none p-0 m-0`}>
          {data?.map((item, index) => (
            <li key={index + 1} className="d-flex gap-4 pl-4 pr-4 pt-3 pb-3">
              <span className="col-6 text-black">{item?.label}</span>
              <span className="col-6 text-gray op-08">{item?.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DataList;
