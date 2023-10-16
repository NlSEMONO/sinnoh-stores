import React from 'react'
import { Product, SingleProduct } from './definitions'
import Link from 'next/link'

const ProductCard = ({product}: SingleProduct) => {
    const productName = product.name.split(" ").join('-');
    return (
        <div className="m-2 sm:m-4 md:m-2 lg:m-4"> 
            <Link href={`shop/${productName}`} className='h-fit w-fit'>
                <div className='flex flex-col items-center justify-around border-black rounded
                            border lg:border-2 w-44 h-56 sm:w-64 sm:h-72 md:w-64 md:h-72 lg:w-64 lg:h-80 xl:w-80 xl:h-96 xl:border-4'>
                    <img src={product.image} alt={product.name} className='w-24 h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-48 xl:h-48'/>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>
                            {product.name}
                        </h2>
                        <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>
                            {product.price}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard