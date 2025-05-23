import Base from "@/base/Base";
import "@/styles/globals.css";
import "@/styles/gap.css";
import "@/styles/typography.css";
import "@/styles/structure.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Base>
        <Component {...pageProps} />
        <ToastContainer/>
      </Base>
    </>
  );
}
