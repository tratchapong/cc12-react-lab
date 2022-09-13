// template from https://mdbootstrap.com/docs/standard/extended/product-cards/
import axios from 'axios'
import {useState, useEffect} from 'react'
import FilterBar from './FilterBar';
import Product from "./Product";

function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  useEffect( ()=>{
    axios.get('http://localhost:8080/products' + filter).then(res => {
      setData(res.data)
    })
  },[filter])

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <FilterBar setFilter={setFilter} />
      <div className="container py-5">
        { data.map( item => (
          <Product key={item.id} item={item} />
        ))
        }
      </div>
    </section>
  );
}

export default Products;
