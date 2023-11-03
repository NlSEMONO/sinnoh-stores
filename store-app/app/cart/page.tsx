import React from 'react'
import Navbar from '../components/Navbar'
import CheckoutItems from './components/CheckoutItems';

const page = () => {
  const ADD_BUTTON_SIZE = 'w-55 h-12 md:w-66 md:h-16 lg:w-80 lg:h-20 xl:w-84 xl:h-24';
  const LARGE_TEXT = 'text-3xl md:text-4xl lg:text-5xl xl:text-5.5xl';
  const DOUBLE_MARGIN = 'my-5 md:my-6 lg:my-8 xl:my-10';

  return (
    <>
        <Navbar/>
        <CheckoutItems/>
        <div className={`${ADD_BUTTON_SIZE} mx-auto ${DOUBLE_MARGIN}`}> 
            <button className={`${ADD_BUTTON_SIZE} bg-main3`}> 
                <span className={`${LARGE_TEXT}`}> Checkout </span>
            </button> 
        </div>
    </>
  )
}

export default page