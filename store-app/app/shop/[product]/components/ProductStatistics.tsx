'use client';
/*
Buying menu for a single product
*/
import {useState, useEffect} from 'react'
import { ProductBuying, SingleProductBuying } from '../../components/definitions'

const ProductStatistics = ({product}: SingleProductBuying) => {
  const [quantity, setQuentity] = useState<number>(1);
  const ALL_LOCATIONS = product.locations.map((location: string) => {
    return (
      <option key={`${location}`} value={`${location}`}>{location}</option>
    )
  });
  const stock = 0;
  return (
    <div>
      <div className='flex flex-row justify-center items-center my-5'>
        <img className='self-end' src='/28px-PokémonDollar_VIII_ZH.png' alt='money'/>
        <span className='text-5xl'>{product.price}</span>
      </div>
      <div className='flex flex-col items-center w-40 m-auto'>
        <span className='text-base my-2.5 text-center'> Check Availability In: </span>
        <select className='' placeholder={`${product.locations[0]}`}>
          {ALL_LOCATIONS}
        </select>
        <span className='text-2xl my-2.5'> {stock === 0 ? 'Out of Stock' : `In stock: ${stock }`} </span>
      </div>
      <div className='flex flex-row justify-between w-50 m-auto rounded-full border-2 border-black items-center'>
        <div className='w-12 h-12 rounded-3xl bg-main3 py-1 px-4.2 border-black border-2'> 
          <span className='text-3xl'> - </span>
        </div>
        <div>
          <span className='text-4xl'> {quantity} </span>
        </div>
        <div className='w-12 h-12 rounded-3xl bg-main3 py-1 px-3.5 border-black border-2'> 
          <span className='text-3xl'> + </span>
        </div>
      </div>
    </div>
  )
}

export default ProductStatistics;