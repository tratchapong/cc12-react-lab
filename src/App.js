import PContainer from "./components/PContainer";
import * as data from './products.json'

function App() {
  const {products} = data
  return (
    <div className="App container">
      <div className="display-3 my-3 border rounded bg-info bg-gradient">Products list</div>
 
      { products.map( el => (
          <PContainer key={el.id} el={el}/>
          ))   
        }
    </div>
  );
}

export default App;
