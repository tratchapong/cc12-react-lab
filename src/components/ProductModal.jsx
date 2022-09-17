import React from 'react'

function ProductModal(props) {
  const { el } = props
  return (
    <div>
      <div className="modal fade" id="ProductModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{el.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{el.description}</p>
              <img src={el.image} alt="product item" style={{ height:'200px', display:'block' }} />
              <button type="button" class="btn btn-outline-primary my-3">${el.price.toFixed(2)}</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal