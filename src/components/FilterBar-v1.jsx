import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom"

function FilterBar(props) {
  const {setFilter} = props
  const location = useLocation()
  
  useEffect(() => {
      console.log(location.search)
      setFilter(location.search)
  }, [location.search])
  
  return (
    <div className="btn-group my-3">
      {/* <div className="display-6">{location.search}</div> */}
      {/* <Link to={`/products`} className="btn btn-outline-info active" aria-current="page"> */}
      <Link to={`/products`} className="btn btn-outline-info" aria-current="page">
        ALL
      </Link>
      <Link to={`/products?category=electronics`} className="btn btn-outline-info" aria-current="page">
        Electronics
      </Link>
      <Link to={`/products?category=men's clothing`} className="btn btn-outline-info">
        Men's clothing
      </Link>
      <Link to={`/products?category=jewelery`} className="btn btn-outline-info">
        Jewelry
      </Link>
    </div>
  );
}

export default FilterBar;
