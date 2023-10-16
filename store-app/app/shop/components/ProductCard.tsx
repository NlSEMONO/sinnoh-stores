import React from 'react'
import { Product, SingleProduct } from './definitions'
import Link from 'next/link'

const ProductCard = ({product}: SingleProduct) => {
    const productName = product.name.split("").join('-');
    return (
        <div>
            <div className='product-card'>
                <img src={product.image} alt={product.name}/>
                <Link href={productName}>
                    {product.name}
                </Link>
                <p className='product-price'>
                    {product.price}
                </p>
            </div>
        </div>
    )
}

export default ProductCard