import {useState} from 'react'
import ProductCard from './ProductCard'
import { Product, ProductList } from './definitions';


const ProductCatalog = ({products}: ProductList) => {
  const cards = products.map((product) => <ProductCard key={product.id} product={product} />);
  const [hide, setHide] = useState('hidden');
  return (
    <div className='flex mt-4'>
      <div className={`${hide} md:block w-20 md:w-72 lg:w-40 xl:w-56 top-18 h-full`}>
      </div>
      <div className='flex justify-between flex-wrap w-96 sm:w-fit m-auto sm:m-0'>
        {cards}
      </div>
    </div>
  )
}

export default ProductCatalog