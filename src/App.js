import { useState } from "react";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./lib/components/Modal/Modal";
import Button from "./lib/components/Button/Button";
import "./App.css";

function App() {
  // State for modal
  const [isDisplayed, setDisplay] = useState(true);

  return isDisplayed ? (
    <div className="App">
      <Modal>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button onClick={() => setDisplay(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  ) : (
    ""
  );
}

export default App;
