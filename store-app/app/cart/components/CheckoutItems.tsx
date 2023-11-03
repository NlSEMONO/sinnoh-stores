'use client'

import {useState, useEffect, useMemo} from 'react'
import { getSession } from '@/app/components/Cookies';
import { ProductListing } from '@/app/shop/components/definitions';
import CheckoutButton from '@/app/cart/components/CheckoutButton';

interface CartItem {
  name: string, 
  quantity: number
}

interface AllProducts {
  prods: ProductListing[]
}

const CheckoutItems = ({prods}: AllProducts) => {
  const HOST = 'http://localhost:8000'
  const [sesh, setSesh] = useState('');
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState<ProductListing[]>([]);
  // const products = prods;
  const rowSettings = useMemo(() => 'border-4', []);
  const headerSettings = useMemo(() => 'text-3xl p-2 border-2', []);
  const entrySettings = useMemo(() => 'p-2 border-2 text-2xl w-40', []);
  const labelSettings = useMemo(() => 'text-2xl p-2 pb-0', []);
  const imgEntrySettings = useMemo(() => 'p-4 object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40', []);
  const ADD_BUTTON_SIZE = 'w-55 h-12 md:w-66 md:h-16 lg:w-80 lg:h-20 xl:w-84 xl:h-24';
  const DOUBLE_MARGIN = 'my-5 md:my-6 lg:my-8 xl:my-10';

  // load cart + product data from db
  useEffect(() => {
    fetch(`${HOST}/sinnoh-stores/get-session-data`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'session': getSession()
      })
    }).then(
      res => res.json()
    ).then(
      data => {
        setItems(data);
        console.log(data);
      }
    );
    fetch(`${HOST}/sinnoh-stores/get-products`).then(res => res.json()).then(
      data => {
        setProducts(data);
      }
    )
  }, []);

  const productList = (items.length === 0) ? (
    <h1 className='text-6xl w-fit m-auto'> Empty Cart </h1>
  ) : items.map((item: CartItem) => {
    let product: ProductListing | null = null;
    for (let i=0;i<products.length;i++) {
      if (products[i].name === item.name) product = products[i];
    }
    if (product === null) return;
    let cost = product.price * item.quantity;
    return (
      <tr className={rowSettings}>
        <td> 
          <h1 className={labelSettings}> {item.name} </h1>
          <img className={imgEntrySettings} src={product.image}/>
        </td>
        <td className={entrySettings}> {item.quantity} </td>
        <td className={entrySettings}> {cost} </td>
      </tr>
    );
  });

  return (
    <>
      <div className='mt-8' onLoad={() => setSesh(getSession())}>
        {products.length === 0 ? productList : <table className='border-collapse w-8/12 m-auto'> 
          <tr className={rowSettings}> 
            <td className={headerSettings + 'border-r-0'}> Product </td>
            <td className={headerSettings}> Quantity </td>
            <td className={headerSettings}> Price </td>
          </tr>
          {productList} 
        </table>}
      </div>
      <div className={`${ADD_BUTTON_SIZE} mx-auto ${DOUBLE_MARGIN}`}> 
        <CheckoutButton prods={prods} prodsInCart={products}/>
      </div>  
    </>
  )
}

export default CheckoutItems