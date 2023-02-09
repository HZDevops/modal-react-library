import Modal from "./lib/components/Modal/Modal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Modal content="hello" buttonStyle={{ backgroundColor: "red" }} />
    </div>
  );
}

export default App;
