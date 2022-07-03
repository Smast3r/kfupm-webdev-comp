import { ChangeEvent, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { TermsContext, TermsContextProvider } from "../contexts/TermsContext"
import Term from "./Term"


type Props = {
    
}



// this plan should be taken from the localstoredge.
// However, for this version we will focuse on the main idea
const PlanContainer = (props:Props)=>{
    const {terms,setTerms}= useContext(TermsContext)
    const [term,setTerm]= useState<Term>()
    
    const addTerm:any= (e:Event) => {

        e.preventDefault()
        if (term)
        setTerms(
           ...terms,term
        )
        
       }
    const handleChange = (Event:ChangeEvent<HTMLInputElement>)=>{
        setTerm({...term ,termNumber:Number(Event?.target?.value)})
    }
    
    useEffect(()=>{
        
    },[terms])
    return (
            <>
             <div >   
                <form className="grid grid-cols-1 mx-10 " onSubmit={addTerm}>
                    <input onChange={handleChange}   name="term" className=" rounded h-8 w-40" type="text"/>
                    <button type="submit" className="rounded h-10 w-40 bg-cyan-600 my-3 " >Add term</button>
                </form>
            </div>
            <div className="my-3 p-2 mx-10 bg-cyan-600 rounded max-h-max flex  align-start overflow-auto gap-2">
            
                {
                    terms?.map((term:Term,key:number) => (
                    <Term key={key} number={term.termNumber} Courses={term.termCourses?term.termCourses:[]}/>
                    ))
                }
                    
                
            </div>
           
            </>
        
    )
}





export default PlanContainer