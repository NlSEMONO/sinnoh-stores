'use client';
/*
Buying menu for a single product
*/
import {useState, useEffect, useMemo} from 'react'
import { ProductBuying, SingleProductBuying } from '../../components/definitions'
import { getSession, setSession, getCSRF } from '@/app/components/Cookies';
import HOST from '@/app/components/HOST';

const ProductStatistics = ({product}: SingleProductBuying) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [stock, setStock] = useState<number>(0);

  const ALL_LOCATIONS = product.locations.map((location: string) => {
    return (
      <option key={`${location}`} value={`${location}`}>{location}</option>
    )
  });
  const checkStock = async (location: string) => {
    const response = await fetch(`${HOST}/sinnoh-stores/get-stock?item=${product.name}&shop=${location.split(" ")[0]}`)
      .then(res => res.json());
    const data = await response;
    setStock(await data.quantity);
  }
  const changeQty = (amount: number) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  }
  useEffect(() => {
    // console.log(product.locations[0]);
    // setTimeout(() => checkStock(product.locations[0]), );
    checkStock(product.locations[0]);
  }, []);

  const addToCart = async (quantity: number, product: ProductBuying) => {
    let data = await fetch(`${HOST}/sinnoh-stores/add-to-cart`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({
        'name': product.name,
        'quantity': quantity,
        'session': getSession()
      })
    }).then(res => res.json());
    if (await data['success']) {
      window.alert('Successfully added to cart.');
      window.location.href = '/';
    }
  }

  const PRICE_LABEL = useMemo(() => 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl', []);
  const POKEDOLLAR = useMemo(() => 'self-end md:w-8 lg:w-9.6 xl:w-12', []);
  const DEFAULT_MARGIN = useMemo(() => 'my-2.5 md:my-3 lg:my-4 xl:my-5', []);
  const DOUBLE_MARGIN = useMemo(() => 'my-5 md:my-6 lg:my-8 xl:my-10', []);
  const NORMAL_TEXT = useMemo(() => 'md:text-xl lg:text-2xl xl:text-3xl', []);
  const LARGE_TEXT = useMemo(() => 'text-3xl md:text-4xl lg:text-5xl xl:text-5.5xl', []);
  const CIRCLE = useMemo(() => 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-main3 border-black border-2 rounded-full', []);
  const CIRCLE_MINUS = useMemo(() => 'py-1 px-4.2', []);
  const CIRCLE_PLUS = useMemo(() => 'py-1 px-3.25 lg:pb-2 xl:px-3.5 xl:pb-2', []);
  const ADD_FRAME = useMemo(() => {
    return 'flex flex-row justify-between w-50 md:w-60 lg:w-72 xl:w-84 m-auto rounded-full border-2 border-l-0 border-r-0 border-black items-center'
            + ' h-12 md:h-16 lg:h-20'
  }, []);
  const ADD_BUTTON_SIZE = useMemo(() => 'w-55 h-12 md:w-66 md:h-16 lg:w-80 lg:h-20 xl:w-84 xl:h-24', []);

  return (
    <div>
      <div className={`flex flex-row justify-center items-center ${DOUBLE_MARGIN}`} onLoad={() => setSession()}>
        <img className={POKEDOLLAR} src='/28px-PokémonDollar_VIII_ZH.png' alt='money'/>
        <span className={PRICE_LABEL}>{product.price}</span>
      </div>
      <div className='flex flex-col items-center w-40 m-auto md:w-52 lg:w-60 xl:w-80'>
        <span className={`text-base ${DEFAULT_MARGIN} text-center ${NORMAL_TEXT}`}> Check Availability In: </span>
        <select className={`${NORMAL_TEXT}`} placeholder={`${product.locations[0]}`} onChange={e => console.log(checkStock(e.target.value))}>
          {ALL_LOCATIONS}
        </select>
        <span className={`text-2xl ${DEFAULT_MARGIN} md:text-3xl lg:text-4xl xl:text-4.5xl`}> {stock === 0 ? 'Out of Stock' : `In stock: ${stock}`} </span>
      </div>
      <div className={`${ADD_FRAME}`}>
        <button className={`${CIRCLE} ${quantity > 1 ? '' : 'opacity-50' } ${CIRCLE_MINUS}`} 
          onClick={() => changeQty(-1)}> 
          <span className={`${LARGE_TEXT}`}> - </span>
        </button>
        <div>
          <span className={`${LARGE_TEXT}`}> {quantity} </span>
        </div>
        <button className={`${CIRCLE} ${CIRCLE_PLUS}`}
          onClick={() => changeQty(1)}> 
          <span className={`${LARGE_TEXT}`}> + </span>
        </button>
      </div>
      <div className={`${ADD_BUTTON_SIZE} mx-auto ${DOUBLE_MARGIN}`}> 
        <button className={`${ADD_BUTTON_SIZE} bg-main3`}> 
          <span className={`${LARGE_TEXT}`} onClick={() => addToCart(quantity, product)}> Add to Cart </span>
        </button>
      </div>
    </div>
  )
}

export default ProductStatistics;