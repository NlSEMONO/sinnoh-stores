import React from 'react'
import Navbar from '../components/Navbar'
import CheckoutItems from './components/CheckoutItems';
import CheckoutButton from './components/CheckoutButton';
import HOST from '../components/HOST';

const page = async () => {
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