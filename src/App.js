import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App mx-auto vstack gap-2 border">

        <Header />
        <main>
          <Login />
        </main>
        {/* <Carousel /> */}
        <Footer />

    </div>
  );
}

export default App;
