'use client'

import {useState, useEffect, useMemo} from 'react'
import { getSession } from '@/app/components/Cookies';
import { ProductListing } from '@/app/shop/components/definitions';
import Label from '@/app/components/Label';

interface CartItem {
  name: string, 
  quantity: number
}

const CheckoutItems = () => {
  const HOST = 'http://localhost:8000'
  const [sesh, setSesh] = useState('');
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState<ProductListing[]>([]);
  const rowSettings = useMemo(() => 'border-4', []);
  const headerSettings = useMemo(() => 'text-3xl p-2 border-2', []);
  const entrySettings = useMemo(() => 'p-2 border-2 text-2xl w-40', []);
  const labelSettings = useMemo(() => 'text-2xl p-2 pb-0', []);
  const imgEntrySettings = useMemo(() => 'p-4', []);

  // load cart + product data from db
  useEffect(() => {
    fetch(`${HOST}/sinnoh-stores/get-session-data`, {
      method: "POST",
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
  )
}

export default CheckoutItems