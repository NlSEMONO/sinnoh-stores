export interface Product {
  id: number,
  name: string, 
  price: number,
  image: string
}

export interface SingleProduct {
  product: Product
}
  
export interface ProductList {
  products: Array<Product>
}