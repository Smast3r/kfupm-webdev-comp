import { Children, createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import Term from "../components/Term";

type Terms = Term[] ; 


export const TermsContext = createContext<Terms>({} as Terms) // should bring the terms from the user local storedge || null 




export const TermsContextProvider = ({children}:any) => {
    const [terms,setTerms]= useState<Term[]>()
    
    console.log({children})

    return(
    <TermsContext.Provider value={{terms,setTerms}} > 
        {children}
    </TermsContext.Provider>
    )


    // make sure to revisite this fucking page 
}



