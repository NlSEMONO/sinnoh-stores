import React from 'react'
import ProductCard from './ProductCard'
import { Product, ProductList } from './definitions';


const ProductCatalog = ({products}: ProductList) => {
  const cards = products.map((product) => <ProductCard key={product.id} product={product} />);
  return (
    <div className='flex w-1000 justify-between flex-wrap'>
      {cards}
    </div>
  )
}

export default ProductCatalog