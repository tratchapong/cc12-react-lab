// template from https://mdbootstrap.com/docs/standard/extended/product-cards/

import axios from 'axios'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import FilterBar from './FilterBar';
import Product from "./Product";

function Products(props) {
  const {searchText} = props
  const location = useLocation()
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  // useEffect( ()=>{
  //   axios.get('http://localhost:8080/products' + location.search).then(res => {
  //     setData(res.data)
  //   })
  // },[location.search])

  useEffect( ()=>{
    axios.get('http://localhost:8080/products?' + filter + searchText).then(res => {
      setData(res.data)
    })
  },[filter, searchText])

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
