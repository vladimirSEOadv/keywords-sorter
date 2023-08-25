import "./App.css";
import { SorterPage } from "./pages/SorterPage";
import { Modal } from "./components/modal/Modal";
import { ModalContextProvider } from "./components/modal/modalContextProvider/ModalContextProvider";
import { AddWordsModal } from "./components/modal/modalContent/AddWordsModal";

function App() {
  return (
    <>
      <ModalContextProvider>
        <SorterPage />
        <Modal>
          <AddWordsModal />
        </Modal>
      </ModalContextProvider>
    </>
  );
}

export default App;
