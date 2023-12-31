export const CITIES = [
  'Jubilife City', 'Oreburgh City', 'Eterna City', 'Hearthome City', 'Solaceon Town', 'Veilstone City', 'Pastoria City', 'Celestic Town', 'Canalave City', 'Snowpoint City', 'Sunnyshore City', 'Twinleaf Town'
]
export const LISTED_PRICES = [
  '0-100', '101-500', '501-1000', '1001-5000', '5001+'
]

export interface ProductBuying {
  name: string,
  price: number,
  locations: Array<string>,
  images: Array<string>
}

export interface SingleProductBuying {
  product: ProductBuying
}

export interface ProductListing {
  id: number,
  name: string, 
  price: number,
  locations: Array<string>,
  image: string
}

export interface SingleProductListing {
  product: ProductListing
}
  
export interface ProductListingList {
  products: Array<ProductListing>
}

export interface PricesLocations {
  priceInfo: FilterArray,
  locationInfo: FilterArray
}

export interface FilterArray {
  labels: Array<string>,
  stateFunctions: Array<Function>,
  state: Array<boolean>
}

export interface Filter {
  label: string,
  stateFunction: Function,
  state: boolean
}