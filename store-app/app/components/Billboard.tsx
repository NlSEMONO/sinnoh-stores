import React from 'react'
import Image from 'next/image';

const IMG_LINK = '/Dream_Choice_Band_Sprite.png';
const IMG_SIZES = [24, 36, 44];
const TITLE = 'Choice Items';
const CONTENT = 'Power up the speed or special attack of your Pokemon with brand new choice items!';

const Billboard = () => {
  return (
    <div className="flex mx-6 lg:mx-10 xl:mx-30 2xl:mx-52 pb-8 justify-center items-center md:justify-around xl:justify-around 2xl:justify-between 2xl:pb-16">
        <div className='flex flex-col justify-start md:justify-start my-4 text-center mx-2 md:mx-8'>
            <h2 className='text-xl font-bold lg:text-2xl 2xl:text-4xl 2xl:my-4'> {TITLE} </h2>
            <p className='max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-2xl text-sm md:text-base lg:text-lg  2xl:text-2xl'> {CONTENT} </p>
            <button className='mt-8 animate-pulse border-2 border-black bg-pop-contrast w-40 h-8 lg: lg:w-72 lg:h-12 lg:text-2xl rounded-md self-center'> Shop Now </button>
        </div>
        <img src={IMG_LINK}
          className={`w-24 h-${IMG_SIZES[0]} lg:w-36 lg:h-${IMG_SIZES[1]} 2xl:w-44 2xl:h-${IMG_SIZES[2]} 
                    mx-2 md:mx-8 2xl:mt-16 mb-12 lg:mb-6`}
        ></img>
    </div>
    
  )
}

export default Billboard