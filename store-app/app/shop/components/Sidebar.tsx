import { useState } from 'react'
import { PricesLocations } from './definitions'
import CheckList from './CheckList';

const Sidebar = ({priceInfo, locationInfo}: PricesLocations) => {
  const [hide, setHide] = useState('hidden');
  return (
    <div className={`${hide} md:block w-20 md:w-72 lg:w-40 xl:w-56 top-18 h-full`}>
        <h1 className='text-2xl'> Filters </h1>
        <CheckList labels={priceInfo.labels} stateFunctions={priceInfo.stateFunctions} state={priceInfo.state}/>
        <br/>
        <br/>
        <CheckList labels={locationInfo.labels} stateFunctions={locationInfo.stateFunctions} state={locationInfo.state}/>
    </div>
  )
}

export default Sidebar