import { createContext, useState } from "react";
import { productSizes, productSizesRatio } from "../consdants/productconsts";


export const productContext = createContext([])

export default function ProductContextProvider ({children}) {
      const [productCardState , setProductCardState] = useState([])
      
      const checkProvider = (product,size) => {           
           for(const item of productCardState)
           {
                if((item.id === product.id) && (size === item.size) )
                 {
                     return true
                 }  
           }
           return false;
      }

      const addProduct = (product,size) => {
         const result = checkProvider(product,size)
         if(result)
           {
              updateProduct(product.id,size,1)
           }
           else
           {
            const newProduct = {...product,quantity:1,size:size};
            const newProductCard = [...productCardState,newProduct];
            setProductCardState(newProductCard)
           }
           
      }

      const clearCard = () => {
          setProductCardState([])
      }

      const updateProduct = (productId,size,mode) => {
         let newProductCard = [];
         if(mode === 1)
          {
               newProductCard = productCardState.map((product,index) => {
                          if(product.id === productId && (product.size === size))
                          {
                              const quantity = product.quantity + 1;
                              return {...product,quantity:quantity}
                          }
                              return product
              })
                 setProductCardState(oldState => {
                      return newProductCard
                 }) 
          }
          else if(mode === -1) {
            newProductCard = productCardState.map((product,index) => {
                if(product.id === productId && (product.size === size))
                {
                    const quantity = product.quantity - 1;
                    return {...product,quantity:quantity}
                }
                    return product
                            })
            newProductCard  =  newProductCard.filter((product,index) => {
                   return product.quantity > 0 
            })          
               setProductCardState(oldState => {
                   return newProductCard
               })      
          }
      }

      const getTotalPrice = () => {
          let price = 0.0;
          for(const product of productCardState)
          {
              let sizeIndex=0;
              sizeIndex = productSizes.indexOf(product.size)
              price += product.price * product.quantity * productSizesRatio[sizeIndex] 
          }
          return price.toFixed(2);
      }

      return <productContext.Provider value={{productCardState,addProduct,updateProduct,getTotalPrice,clearCard}}>
                 {children}
             </productContext.Provider>
}