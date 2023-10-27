export interface Root {
    initialData: initialData | null
    filterData: string[]
    cartData: CartData[]
  }
  
  export interface initialData {
    products: Product[]
  }
  
  export interface Product {
    availableSizes: string[]
    currencyFormat: string
    currencyId: string
    description: string
    id: number
    installments: number
    isFreeShipping: boolean
    price: number
    sku: number
    style: string
    title: string
    image: string
    quantity: number
  }
  
  export interface CartData {
    availableSizes: string[]
    currencyFormat: string
    currencyId: string
    description: string
    id: number
    installments: number
    isFreeShipping: boolean
    price: number
    sku: number
    style: string
    title: string
    image: string
    quantity: number
  }
  