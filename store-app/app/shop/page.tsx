'use client';
/*
Main control page for shop. Controls what product cards will be shown based 
on given constraints (location, price, etc.)
*/

import { useState, useEffect, FC, useMemo } from 'react'
import Navbar from '../components/Navbar'
import ProductCatalog from './components/ProductCatalog'
import Sidebar from './components/Sidebar'
import { CITIES, FilterArray, LISTED_PRICES } from './components/definitions';

const HOST: string = 'https://fmadarang.com'
const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'Dusk Ball',
        price: 1000,
        image: '/Dream_Dusk_Ball_Sprite.png'
    },
    {
        id: 2,
        name: 'Quick Ball',
        price: 1000,
        image: '/Dream_Quick_Ball_Sprite.png'
    },
    {
        id: 3,
        name: 'Great Ball',
        price: 600,
        image: '/Dream_Great_Ball_Sprite.png'
    }
]

function cloneArray(arr: Array<boolean>) {
    let newArr = Array(arr.length);
    for (let i=0;i<arr.length;i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

function loadFunctions(numFuncs: number, stateFunction: Function, oldArr: Array<boolean>) {
    const funcs = Array(numFuncs).fill(false);
    for (let i=0;i<numFuncs;i++) {
        funcs[i] = () => {
            const newFilter = cloneArray(oldArr);
            newFilter[i] = !newFilter[i];
            stateFunction(newFilter);
            console.log(newFilter);
        }
    }
    return funcs;
}

const page: FC = () => {
    // show all prices & locations by default
    const [PRICE_FILTER, setPRICE_FILTER ]= useState(Array(5).fill(true));
    const [LOCATION_FILTER, setLOCATION_FILTER] = useState(Array(12).fill(true));
    const PRICES = useMemo(() => LISTED_PRICES, []);
    const LOCATIONS = useMemo(() => CITIES, []);
    const PRICE_FUNCTIONS = useMemo(() => loadFunctions(5, setPRICE_FILTER, PRICE_FILTER), [PRICE_FILTER]);
    const LOCATION_FUNCTIONS = useMemo(() => loadFunctions(5, setLOCATION_FILTER, LOCATION_FILTER), [LOCATION_FILTER]);

    const priceInfo: FilterArray = {
        labels: PRICES,
        stateFunctions: PRICE_FUNCTIONS,
        state: PRICE_FILTER
    }

    const locationInfo: FilterArray = {
        labels: LOCATIONS,
        stateFunctions: LOCATION_FUNCTIONS,
        state: LOCATION_FILTER
    }
    // fetch products from database
    // const products = await fetch(`${HOST}/sinnoh-stores/get-products`).then(
    //     res => res.json()
    // );

    // filter products based on price & location
    // const effectiveProducts = (products === null) ? DEFAULT_PROUDCTS : products.map(

    // )
    const effectiveProducts = DEFAULT_PRODUCTS;

    // display products based on filters
    return (
        <>  
            <title> Sinnoh Stores </title>
            <div id='page'>
                <Navbar />
                <div className='flex mt-4'>
                    <Sidebar priceInfo={priceInfo} locationInfo={locationInfo} />
                    <ProductCatalog products={effectiveProducts} />
                </div>
            </div>
        </>
    );
}

export default page