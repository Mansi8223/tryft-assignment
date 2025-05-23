import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let toastProperty = {
  bodyClassName: "grow-font-size",
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const toastSuccess = (msg) => {
  toast.success(msg, toastProperty);
};

export const toastWarn = (msg) => {
  toast.warning(msg, toastProperty);
};

export const toastInfo = (msg) => {
  toast.info(msg, toastProperty);
};

export const toastError = (msg) => {
  toast.error(msg, toastProperty);
};
