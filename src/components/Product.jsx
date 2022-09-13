function Product(props) {
  const {id, title, price, description, category, image, rating} = props.item
  return (
    <div className="row justify-content-center mb-3" >
    <div className="col-md-12 col-xl-10">
      {/* <div className="card shadow-0 border rounded-3 product-card" style={{height: '250px'}}> */}
      <div className="card shadow-0 border rounded-3 product-card" >
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
              <div className="product-frame">
                <img
                  src={image}
                  className="img-fluid"
                  // style={{ objectFit: 'contain', height: '250px'}}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h5>{title}</h5>
              <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                  { rating.rate > 0 && (  <i className="fa fa-star"></i> )}
                  { rating.rate > 1 && (  <i className="fa fa-star"></i> )}
                  { rating.rate > 2 && (  <i className="fa fa-star"></i> )}
                  { rating.rate > 3 && (  <i className="fa fa-star"></i> )}
                  { rating.rate > 4 && (  <i className="fa fa-star"></i> )}
                </div>
                <span>{rating.count}</span>
              </div>
              <div className="mt-1 mb-0 text-muted small">
                <span>Category </span>
                <span className="text-primary"> • </span>
                <span> {category} </span> 

              </div>
              {/* <div className="mb-2 text-muted small">
                <span>Unique design</span>
                <span className="text-primary"> • </span>
                <span>For men</span>
                <span className="text-primary"> • </span>
                <span>
                  Casual
                  <br />
                </span>
              </div> */}
              <p className="text-truncate mb-4 mb-md-0">
                {description}
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">฿{price.toFixed(2)}</h4>
                {/* <span className="text-danger">
                  <s>$20.99</s>
                </span> */}
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm" type="button">
                  Details
                </button>
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  type="button"
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product