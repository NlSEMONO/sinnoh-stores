import React from 'react'
import { CITIES, ProductBuying } from '../components/definitions';
import Navbar from '@/app/components/Navbar';

interface ParamList {
  params: { product: string }
}
const HOST: string = 'https://fmadarang.com';

const DEFAULT_PRODUCT_DATA: ProductBuying[] = [{
  name: 'Poke Ball',
  price: 200,
  locations: CITIES,
  images: []
}];

async function Page({params} : ParamList)  {
  const PRODUCT_DATA = DEFAULT_PRODUCT_DATA
  // const PRODUCT_DATA = await fetch(`${HOST}/sinnoh-stores/get-product`, {
  //   next: {revalidate: 24*60*60}, 
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({product: params.product})
  // }).then(res => res.json());
  return (
    <>
      <Navbar/>
      <h1>{params.product}</h1>
    
    </>
  )
}

export default Page;