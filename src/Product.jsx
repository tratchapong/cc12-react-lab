import React from "react";

function Product({product, setSelItem, setOpen}) {
  const hdlClick = (e, product) => {
    // e.preventDefault()
    setSelItem(product)
    setOpen(true)
  }
  return (
    <div>
      <a
        key={product.id}
        href={product.href}
        className="group"
        role="button"
        onClick={(e) => hdlClick(e,product)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price}
        </p>
      </a>
    </div>
  );
}

export default Product;
