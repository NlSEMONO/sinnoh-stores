import React from 'react'
import ShopMain from './components/ShopMain'
import {setSession} from '../components/Cookies';

const HOST: string = 'https://fmadarang.com'
const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'Dusk Ball',
        price: 1000,
        locations: ["Sandgem", "Sunnyshore", "Jubilife", "Oreburgh", "Floaroma", "Eterna", "Hearthome", "Solaceon", "Pastoria", "Canalave", "Snowpoint", "Veilstone"],
        image: '/Dream_Dusk_Ball_Sprite.png'
    },
    {
        id: 2,
        name: 'Quick Ball',
        price: 1000,
        locations: ["Sandgem", "Sunnyshore", "Jubilife", "Oreburgh", "Floaroma", "Eterna", "Hearthome", "Solaceon", "Pastoria", "Canalave", "Snowpoint", "Veilstone"],
        image: '/Dream_Quick_Ball_Sprite.png'
    },
    {
        id: 3,
        name: 'Great Ball',
        price: 600,
        locations: ["Sandgem", "Sunnyshore", "Jubilife", "Oreburgh", "Floaroma", "Eterna", "Hearthome", "Solaceon", "Pastoria", "Canalave", "Snowpoint", "Veilstone"],
        image: '/Dream_Great_Ball_Sprite.png'
    }
]

const page = async () => {
    const PRODUCTS = await fetch(`${HOST}/sinnoh-stores/get-products`, {next: {revalidate: 24*60*60}}).then(res => res.json());
    const effectiveProds = (PRODUCTS === null) ? DEFAULT_PRODUCTS : PRODUCTS;

    return (
        <ShopMain products={effectiveProds}/>
    )
}

export default page