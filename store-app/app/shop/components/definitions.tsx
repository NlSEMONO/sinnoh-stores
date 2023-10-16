export interface Product {
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