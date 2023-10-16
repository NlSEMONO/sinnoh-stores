/*
Main control page for shop. Controls what product cards will be shown based 
on given constraints (location, price, etc.)
*/

import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCatalog from './components/ProductCatalog'

const HOST: string = 'https://fmadarang.com'

const page = async () => {
    // show all prices & locations by default
    const PRICE_FILTER = useState(Array(5).fill(true));
    const LOCATION_FILTER = useState(Array(12).fill(true));
    
    // fetch products from database
    const products = await fetch(`${HOST}/sinnoh-stores/get-products`).then(
        res => res.json()
    )

    // filter products based on price & location
    const effectiveProducts = (products === null) ? [] : products.map(

    )
    
    // display products based on filters
    return (
        <div id='page'>
            <Navbar/>
            <Sidebar/>
            <ProductCatalog products={effectiveProducts}/>
        </div>
    );
}

export default page