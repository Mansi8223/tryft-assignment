import DataList from "@/components/data/DataList";
import InitialModal from "@/components/data/InitialModal";
import { StateContext } from "@/context/StateContext";
import ModalContainer from "@/modal/ModalContainer";
import { Fragment, useContext } from "react";

export default function Home() {
  const { showData } = useContext(StateContext);
  return (
    <Fragment>
      <DataList />
      {!showData && (
        <ModalContainer>
          <InitialModal />
        </ModalContainer>
      )}
    </Fragment>
  );
}
