'use client';
/*
Main control page for shop. Controls what product cards will be shown based 
on given constraints (location, price, etc.)
*/

import { useState, useEffect, FC } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCatalog from './components/ProductCatalog'

const HOST: string = 'https://fmadarang.com'
const DEFAULT_PROUDCTS = [
    {
        id: 1,
        name: 'Dusk Ball',
        price: 1000,
        image: 'https://archives.bulbagarden.net/media/upload/5/59/Dream_Dusk_Ball_Sprite.png'
    },
    {
        id: 2,
        name: 'Quick Ball',
        price: 1000,
        image: 'https://archives.bulbagarden.net/media/upload/9/90/Dream_Quick_Ball_Sprite.png'
    },
    {
        id: 3,
        name: 'Great Ball',
        price: 600,
        image: 'https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png'
    }
]

const page: FC = () => {
    // show all prices & locations by default
    const PRICE_FILTER = useState(Array(5).fill(true));
    const LOCATION_FILTER = useState(Array(12).fill(true));

    // fetch products from database
    // const products = await fetch(`${HOST}/sinnoh-stores/get-products`).then(
    //     res => res.json()
    // );

    // filter products based on price & location
    // const effectiveProducts = (products === null) ? DEFAULT_PROUDCTS : products.map(

    // )
    const effectiveProducts = DEFAULT_PROUDCTS

    // display products based on filters
    return (
        <div id='page'>
            <Navbar />
            <Sidebar />
            <ProductCatalog products={effectiveProducts} />
        </div>
    );
}

export default page