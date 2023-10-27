/*
Displays images on the product's buying page
*/
'use client';
import {useState, useEffect} from 'react'

export interface Images {
    images: Array<string>
}

const ProductImages = ({images}: Images) => {
    const [currentImage, setCurrentImage] = useState(0);
    const bigImageSettings = 'w-55 xl:w-66 2xl:w-80';
    const smallImageSettings = 'w-18 xl:w-22 2xl:w-26';
    const bigImageWrapper = 'w-80 h-80 border-2 border-black rounded-3xl p-12.5 my-13.75 mx-auto xl:w-96 xl:h-96 xl:p-16.25 2xl:w-115 2xl:h-115 2xl:p-20.75';
    const smallImageWrapper = 'w-25 h-25 border border-black rounded-2xl p-3.5 mx-3.125 xl:w-30 xl:h-30 xl:p-5 xl:mx-3.75 2xl:w-36 2xl:h-36 2xl:p-6.5';
    const DISPLAY_IMAGES = images.map((image, index) => {
        return ((index === currentImage) ?
            <div className={`${bigImageWrapper}`}>
                <img src={image} alt={image} className={`${bigImageSettings}`}/> 
            </div>
            : 
            <div className={`${smallImageWrapper}`} key={index} onClick={() => setCurrentImage(index)}>
                <img src={image} alt={image} className={`${smallImageSettings}`}/>
            </div>
        ) 
    });
    let temp = DISPLAY_IMAGES[currentImage];
    DISPLAY_IMAGES[currentImage] = DISPLAY_IMAGES[0];
    DISPLAY_IMAGES[0] = temp;
    const otherImages = [];
    for (let i = 1; i < DISPLAY_IMAGES.length; i++) {
        otherImages.push(DISPLAY_IMAGES[i]);
    }
    
    return (
        <div>
            {DISPLAY_IMAGES[0]}
            <div className="flex flex-row min-w-90 justify-center 2xl:min-w-130">
                {otherImages}
            </div>
        </div>
    )
}

export default ProductImages