import { createContext, useState } from "react";
export const userContext = createContext()

export default function UserContextProvider ({children}) {
     const [userState , setUserState] = useState({username:null,password:null,email:null,token:null,role:null}) 

     return <>
                <userContext.Provider value={{userState,setUserState}} >
                     {children}
                </userContext.Provider>
            </>
}