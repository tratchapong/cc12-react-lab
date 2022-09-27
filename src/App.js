import { useState } from "react";
import Accordian from "./Accordian";
import ChitChat from "./ChitChat";
import Jacket from "./Jacket";
import LoginForm from "./LoginForm";
import MyModal from "./MyModal";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductList2 from "./ProductList2";
import TwModal from "./TwModal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App max-w-7xl mx-auto">
      {/* <ChitChat />
      <Accordian /> */}
      <Navbar />
      <button
        className="btn-primary"
        onClick={() => setOpen(!open)}
      >
        Open Modal
      </button>
      <button
        className="btn-secondary"
        onClick={() => setOpen(!open)}
      >
        Open Modal
      </button>
      <button
        className="btn-openModal"
        onClick={() => setOpen(!open)}
      >
        Open Modal
      </button>
      {/* <ProductList /> */}
      <ProductList2 />
      {/* <LoginForm />
      <MyModal open={open} setOpen={setOpen} /> */}
      <TwModal open={open} doClose={()=>setOpen(false)}>
        <LoginForm />
      </TwModal>

      <Jacket />
    </div>
  );
}

export default App;
