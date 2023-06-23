import { createContext } from 'react';
import { ProductType } from '../../types/ProductType';

export type ProductsList = {
   products: ProductType[],
   setProducts: (newState: ProductType[]) => void
}

const initialValue = {
   products: [],
   setProducts: () => {}
}

export const ProductsContext = createContext<ProductsList>(initialValue)