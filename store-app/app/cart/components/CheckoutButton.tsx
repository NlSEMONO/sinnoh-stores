'use client'

import React, { useState } from 'react'
import { getSession, resetSession, setSession } from '@/app/components/Cookies';
import { ProductListing } from '@/app/shop/components/definitions';
import { CITIES } from '@/app/shop/components/definitions';
import HOST from '@/app/components/HOST';

interface ProductData {
    prods: ProductListing[], 
    prodsInCart: ProductListing[]
}

const CheckoutButton = ({prods, prodsInCart}: ProductData) => {
    const ADD_BUTTON_SIZE = 'w-55 h-12 md:w-66 md:h-16 lg:w-80 lg:h-20 xl:w-84 xl:h-24';
    const LARGE_TEXT = 'text-3xl md:text-4xl lg:text-5xl xl:text-5.5xl';
    const [isOnline, setIsOnline] = useState(true);
    const [pickupLocation, setPickupLocation] = useState('');

    const checkout = () => {
        fetch(`${HOST}/sinnoh-stores/checkout`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'session': getSession(),
                'pickup': isOnline ? 'none' : pickupLocation
            })
        }).then(
            res => res.json()
        ).then(
            data => {
                if (data['success']) {
                    window.alert(`Successfully checked out. Your order id is ${data['id']}. Please keep this id in your records. Your order will be completed in 3-5 business days.`);
                    resetSession();
                    window.location.href = '/';
                }
                else {
                    (data['issue'] !== '') ? window.alert(`Order failed for reason: ${data['issue']}.`) : window.alert(`Order failed. Please try again.`);
                }
            }
        )
    }
    const possiblePickupLocations: string[] = [];
    for (let j=0;j<CITIES.length;j++) {
        let canAdd = false;
        const cityName = CITIES[j].split(' ')[0];

        for (let i=0;i<prodsInCart.length;i++) {
            canAdd = false;
            for (let k=0;k<prodsInCart[i].locations.length;k++) {
                if (cityName === prodsInCart[i].locations[k]) {
                    canAdd = true;
                    break;
                }
            }
            if (!canAdd) break;
        }
        if (canAdd) possiblePickupLocations.push(cityName);
    }

    const pickupDropdown = possiblePickupLocations.map(x => {
        return (
            <option value={x}> 
                {x}
            </option>
        )
    });

    return (
        <>
            <input type='Checkbox' 
                onChange={() => {setIsOnline(!isOnline); if (pickupLocation === '') setPickupLocation(possiblePickupLocations[0])}} 
                checked={isOnline}/>
            <label> Online order </label>
            {isOnline ? null : (
                <>  
                    <br/>
                    <label> Pickup Locations: </label>
                    <select onChange={e => e.target.value}>
                        {pickupDropdown}
                    </select>
                </>
            )}
            <button className={`${ADD_BUTTON_SIZE} bg-main3`} onClick={() => checkout()}> 
                <span className={`${LARGE_TEXT}`}> Checkout </span>
            </button> 
        </>
    )
}

export default CheckoutButton