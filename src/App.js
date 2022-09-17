import Hero from "./components/Hero";
import MyModal from "./components/MyModal";


function App() {

  return (
    <div className="App container">
      <div className="btn-group start-50 translate-middle" role="group" style={{top: '2rem'}}>
        <button type="button" className="btn btn-danger">Left</button>
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal1">Middle</button>
        <button type="button" className="btn btn-success">Right</button>
      </div>
      <MyModal />
      <Hero />
    </div>
  );
}

export default App;
