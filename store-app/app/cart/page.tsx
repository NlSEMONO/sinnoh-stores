import React from 'react'
import Navbar from '../components/Navbar'
import CheckoutItems from './components/CheckoutItems';
import CheckoutButton from './components/CheckoutButton';

const page = async () => {
  const HOST = 'http://localhost:8000' //'https://fmadarang.com';
  const all_products = await fetch(`${HOST}/sinnoh-stores/get-products`).then(res => res.json())
  const stateProducts = all_products === null ? [] : all_products;

  return (
    <>
        <Navbar/>
        <CheckoutItems prods={stateProducts}/>
    </>
  )
}

export default page