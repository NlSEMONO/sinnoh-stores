'use client'
/*
Main control page for shop. Controls what product cards will be shown based 
on given constraints (location, price, etc.)
*/

import { useState, useEffect, FC, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import ProductCatalog from './ProductCatalog'
import Sidebar from './Sidebar'
import { CITIES, FilterArray, LISTED_PRICES, Product, ProductList } from './definitions';

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

const ShopMain = ({products}: ProductList) => {
    // show all prices & locations by default
    const [PRICE_FILTER, setPRICE_FILTER]= useState(Array(5).fill(true));
    const [LOCATION_FILTER, setLOCATION_FILTER] = useState(Array(12).fill(true));
    const PRICES = useMemo(() => LISTED_PRICES, []);
    const LOCATIONS = useMemo(() => CITIES, []);
    const PRICE_FUNCTIONS = useMemo(() => loadFunctions(5, setPRICE_FILTER, PRICE_FILTER), [PRICE_FILTER]);
    const LOCATION_FUNCTIONS = useMemo(() => loadFunctions(12, setLOCATION_FILTER, LOCATION_FILTER), [LOCATION_FILTER]);

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

    // filter products based on price & location
    const effectiveProducts = products.map(
        (product: Product) => {
            let price = false;
            let location = false;
            for (let i=0;i<PRICE_FILTER.length;i++) {
                if (!PRICE_FILTER[i]) continue;
                if (i === PRICE_FILTER.length - 1) {
                    let upper_bound: number = parseInt(PRICES[i].substring(0, PRICES[i].indexOf('+')));
                    if (product.price >= upper_bound) price = true;
                } else {
                    let nums = PRICES[i].split('-');
                    let left: number = parseInt(nums[0]);
                    let right: number = parseInt(nums[1]);
                    if (left <= product.price && product.price <= right) price = true;
                }
            }
            for (let i=0;i<LOCATION_FILTER.length;i++) {
                if (LOCATION_FILTER[i] && product.locations.includes(LOCATIONS[i].split(" ")[0])) location = true;
            }
            // if (price && location) setInterval(() => console.log(effectiveProducts), 1000);
            return (price && location) ? product : undefined;
        }
    )

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

export default ShopMain;