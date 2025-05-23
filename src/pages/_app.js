import Base from "@/base/Base";
import "@/styles/globals.css";
import "@/styles/gap.css";
import "@/styles/typography.css";
import "@/styles/structure.css";
import { ToastContainer } from "react-toastify";
import { StateContext } from "@/context/StateContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showData, setShowData] = useState(false);
  return (
    <>
      <StateContext.Provider value={{ showData, setShowData }}>
        <Base>
          <Component {...pageProps} />
          <ToastContainer />
        </Base>
      </StateContext.Provider>
    </>
  );
}
