import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "./lib/components/Modal/Modal";
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
