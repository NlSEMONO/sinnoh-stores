import {useMemo, useState} from 'react'
import ProductCard from './ProductCard'
import { ProductListing, ProductListingList } from './definitions';

interface FilterArray {
  products: (ProductListing | undefined)[];
}

const ProductCatalog = ({products}: FilterArray) => {
  const cards = products.map((product) => (product === undefined) ? null : <ProductCard key={product.id} product={product} />);
  
  return (
      <div className='flex justify-between flex-wrap w-96 sm:w-fit m-auto sm:m-0'>
        {cards}
      </div>
  )
}

export default ProductCatalog