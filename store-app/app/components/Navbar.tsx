import React from 'react'
import Label from './Label';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div id='navbar' className='sticky top-0 bg-main2 w-auto h-18 z-[1000000]'>
      <div className='w-28 h-28 m-auto p-2'>
        <Link href='/'>
          <img src='sinnoh-shop-logo.svg' className='w-24 h-24'></img>
        </Link>
      </div> 
      <div>
        <Link href='/cart'>
          {/* <img src='shopping-cart.svg' className='w-12 h-12 m-2'></img> */}
          <Label label='Cart' type={2}/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;