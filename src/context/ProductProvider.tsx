import { ProductsContext } from './ProductsContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductType } from '../../types/ProductType';
import { allProducts } from '../../services/product.service';

export const ProductProvider = ({ children }: { children: JSX.Element }) => {
   const [products, setProducts] = useState<ProductType[]>([])

   useEffect(() => {
      allProducts()
         .then(setProducts)
   }, [])
   
   return(
      <ProductsContext.Provider value={ { products, setProducts } }>
         { children }
      </ProductsContext.Provider>
   )
}