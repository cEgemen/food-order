import { createContext, useState } from "react";


export const productContext = createContext([])

export default function ProductContextProvider ({children}) {
      const [productCardState , setProductCardState] = useState([])
      
      const checkProvider = (product,size) => {           
           for(const item of productCardState)
           {
                if((parseInt(item.id) === parseInt(product.id)) && (size === item.size) )
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
            console.log("newProduct : ",newProduct)
            const newProductCard = [...productCardState,newProduct];
            setProductCardState(newProductCard)
           }
           
      }

      const updateProduct = (productId,size,mode) => {
         let newProductCard = [];
         console.log("mode === 1 ? ",mode===1 , " or mode === -1 ? ",mode === -1)
         if(mode === 1)
          {
               newProductCard = productCardState.map((product,index) => {
                          if((parseInt(product.id) === parseInt(productId)) && (product.size === size))
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
                if((parseInt(product.id) === parseInt(productId)) && (product.size === size))
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

      return <productContext.Provider value={{productCardState,addProduct,updateProduct}}>
                 {children}
             </productContext.Provider>
}