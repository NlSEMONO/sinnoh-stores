import React from 'react'
import Image from 'next/image';

const TITLE = 'Choice Items';
const CONTENT = 'Power up the speed or special attack of your Pokemon with brand new choice items! Make sure to use choose your move carefully!';

const Billboard = () => {
  return (
    <div className="flex mx-6 lg:mx-10 pb-8 justify-center">
        <div className='flex flex-col justify-start md:justify-start my-4 text-center md:mx-8'>
            <h2 className='text-xl'> {TITLE} </h2>
            <p className='max-w-sm'> {CONTENT} </p>
        </div>
        <img src="https://archives.bulbagarden.net/media/upload/6/6a/Dream_Choice_Scarf_Sprite.png"
          className='w-100 h-100 md:w-150 md:h-150 md:mx-8 xl:w-250 xl:h-250'
        ></img>
        /* <Image
            src="https://archives.bulbagarden.net/media/upload/6/6a/Dream_Choice_Scarf_Sprite.png"
            alt="Choice Scarf"
            sizes='(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 100vw'
            width={211}
            height={205}
            className='m-4'
        ></Image> */
    </div>
  )
}

export default Billboard