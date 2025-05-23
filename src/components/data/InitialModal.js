import { StateContext } from "@/context/StateContext";
import React, { useContext } from "react";

function InitialModal() {
  const { setShowData } = useContext(StateContext);
  return (
    <div className="d-flex d-flex-column d-align-center gap-10 p-10 bg-white rounded-12">
      <span className="h1 text-center">Please click to load data</span>
      <button
        onClick={() => setShowData(true)}
        className="col-12 btn btn-primary"
      >
        Load Data
      </button>
    </div>
  );
}

export default InitialModal;
