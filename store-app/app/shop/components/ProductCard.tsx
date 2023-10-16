import React from 'react'
import { Product, SingleProduct } from './definitions'
import Link from 'next/link'

const ProductCard = ({product}: SingleProduct) => {
    const productName = product.name.split(" ").join('-');
    return (
        <Link href={`shop/${productName}`}>
            <div className='flex flex-col items-center justify-around border-2 border-black rounded
                        w-40 h-48'>
                <img src={product.image} alt={product.name} className='w-24 h-24'/>
                <div className='flex flex-col items-center'>
                    <h2 className='text-lg'>
                        {product.name}
                    </h2>
                    <h2 className='product-price'>
                        {product.price}
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard