import { useState } from "react";
import Accordian from "./Accordian";
import ChitChat from "./ChitChat";
import LoginForm from "./LoginForm";
import MyModal from "./MyModal";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App max-w-7xl mx-auto">
      {/* <ChitChat />
      <Accordian /> */}
      <Navbar />
      <button className="my-3 mx-auto block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={()=>setOpen(!open)}
      >
        Open Modal
      </button>
      <LoginForm />
      <ProductList />

      <MyModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;