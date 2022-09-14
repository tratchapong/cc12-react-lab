
function FilterBar(props) {
  const {setFilter} = props

  const hdlClick = e => {
    // console.log(e.target.value)
    e.target.value && setFilter(`category=${e.target.value}`)
    !e.target.value && setFilter('')
  }
  
  return (
    <div className="btn-group mt-2" role="group" aria-label="Basic outlined example">
      <button type="button" onClick={hdlClick} className="btn btn-outline-primary" value='' >All</button>
      <button type="button" onClick={hdlClick} className="btn btn-outline-primary" value={`electronics`} >Electronics</button>
      <button type="button" onClick={hdlClick} className="btn btn-outline-primary" value={`men's clothing`} >Men's clothing</button>
      <button type="button" onClick={hdlClick} className="btn btn-outline-primary" value={`women's clothing`} >Women's Clothing</button>
      <button type="button" onClick={hdlClick} className="btn btn-outline-primary" value={`jewelery`} >Jewelry</button>

    </div>
  );
} 

export default FilterBar;
