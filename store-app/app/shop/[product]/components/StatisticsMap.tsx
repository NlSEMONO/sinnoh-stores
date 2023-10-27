'use client';
import React from 'react'
import ProductStatistics from './ProductStatistics';
import { ProductBuying } from '../../components/definitions';
import Map from '@/app/components/maps';

interface ProductAndLocation {
    product: ProductBuying,
    locations: Object
}

const StatisticsMap = ({product, locations}: ProductAndLocation) => {
  return (
    <>
        <Map locations={locations}/>
        <div className='md:mt-28'>
          <ProductStatistics product={product}/>
        </div>
    </>
  )
}

export default StatisticsMap;