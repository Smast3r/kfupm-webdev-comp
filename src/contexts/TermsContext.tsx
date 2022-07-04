import { type } from "@testing-library/user-event/dist/type";
import { Children, createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import Term from "../components/Term";

type Terms = Term[] ; 

type TermsContextProviderType = {
    children: React.ReactNode
}
type contextType = {
    terms:Terms | undefined
    setTerms:Dispatch<SetStateAction<Term[] | undefined>>
}

export const TermsContext = createContext({} as contextType)




export const TermsContextProvider = ({children}:TermsContextProviderType) => {
    const [terms,setTerms]= useState<Terms>()
    
    return(
    <TermsContext.Provider value={{terms,setTerms}} > 
        {children}
    </TermsContext.Provider>
    )


    // make sure to revisite this fucking page 
}



