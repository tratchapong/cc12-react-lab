import {useState} from 'react'
import PContainer from "./components/PContainer";
import ProductModal from './components/ProductModal'
import * as data from './products.json'

function App() {
  const {products} = data
  const [currentEl, setCurrentEl] = useState({})
  return (
    <div className="App container">
      <div className="display-3 my-3 border rounded bg-info bg-gradient">Products list</div>
 
      { products.map( el => (
          <PContainer key={el.id} el={el} setCurrentEl={setCurrentEl}/>
          ))   
        }
    <ProductModal el={currentEl}/>
    </div>
  );
}

export default App;
