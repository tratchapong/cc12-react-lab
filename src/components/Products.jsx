// template from https://mdbootstrap.com/docs/standard/extended/product-cards/
import axios from 'axios'
import {useState, useEffect} from 'react'
import Product from "./Product";

function Products() {
  const [data, setData] = useState([])
  useEffect( ()=>{
    axios.get('http://localhost:8080/products').then(res => {
      setData(res.data)
    })
  },[])

  return (
    <section style={{ backgroundColor: "#eee" }}>
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
