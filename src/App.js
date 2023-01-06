import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./lib/components/Modal/Modal";
import Button from "./lib/components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Modal>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
