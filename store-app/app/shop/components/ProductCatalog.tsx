import {useMemo, useState} from 'react'
import ProductCard from './ProductCard'
import { Product, ProductList } from './definitions';

const ProductCatalog = ({products}: ProductList) => {
  const cards = products.map((product) => <ProductCard key={product.id} product={product} />);
  
  return (
      <div className='flex justify-between flex-wrap w-96 sm:w-fit m-auto sm:m-0'>
        {cards}
      </div>
  )
}

export default ProductCatalog