/*
Page to buy a specific product
*/

import React from 'react'
import { CITIES, ProductBuying } from '../components/definitions';
import Navbar from '@/app/components/Navbar';
import Label from '@/app/components/Label';
import ProductImages from './components/ProductImages';
import ProductStatistics from './components/ProductStatistics';

interface ParamList {
  params: { product: string }
}
const HOST: string = 'https://fmadarang.com';

const DEFAULT_PRODUCT_DATA: ProductBuying = {
  name: 'Poke Ball',
  price: 200,
  locations: CITIES,
  images: ['/Dream_Poke_Ball_Sprite.png', '/100px-Poke_Ball_RG.png', '/100px-SugimoriPokeBall.png', '/100px-Poké_Ball_VIII.png']
};

async function Page({params} : ParamList)  {
  const SERVER_PRODUCT_DATA = DEFAULT_PRODUCT_DATA
  const productName = params.product.split("-").join(' ');
  // const SERVER_PRODUCT_DATA = await fetch(`${HOST}/sinnoh-stores/get-product`, {
  //   next: {revalidate: 24*60*60}, 
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({product: params.product})
  // }).then(res => res.json());
  const PRODUCT_DATA = SERVER_PRODUCT_DATA === null ? DEFAULT_PRODUCT_DATA : SERVER_PRODUCT_DATA;
  return (
    <>
      <Navbar/>
      
      <div className='md:flex md:flex-row md:justify-around 2xl:justify-between 2xl:w-10/12 mx-auto'> 
        <div className='md:w-96 2xl:w-130'>
          <Label label={productName} type={3}/>
          <ProductImages images={PRODUCT_DATA.images}/> 
        </div>
        <div className='md:mt-28'>
          <ProductStatistics product={PRODUCT_DATA}/>
        </div>
      </div>
    </>
  )
}

export default Page;