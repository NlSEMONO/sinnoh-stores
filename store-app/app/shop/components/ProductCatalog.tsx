import React from 'react'
import ProductCard from './ProductCard'
import { Product, ProductList } from './definitions';


const ProductCatalog = ({products}: ProductList) => {
  const cards = products.map((product) => <ProductCard product={product} />);
  return (
    <div id='product-catalog'>
      {cards}
    </div>
  )
}

export default ProductCatalog