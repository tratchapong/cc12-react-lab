import {useState} from 'react'
import products from './data'
import Product from './Product'
import TwModal from './TwModal'

export default function ProductList2() {
  const [selItem, setSelItem] = useState({})
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} setSelItem={setSelItem} setOpen={setOpen}/>
          ))}
        </div>
      </div>
      <TwModal  open={open} doClose={()=>setOpen(false)} >
        <h2>{selItem.price}</h2>
        <img className='block' src={selItem.imageSrc} alt={selItem.imageAlt} />
       </TwModal>
    </div>
  )
}
