import { ChangeEvent, HtmlHTMLAttributes, useEffect, useState } from "react"
import Term from "./Term"


type Props = {
    
}

// this plan should be taken from the localstoredge.
// However, for this version we will focuse on the main idea
const PlanContainer = (props:Props)=>{
    const [terms,setTerms]= useState<number[]>([])
    const [term,setTerm]= useState<number>()
    const addCourse:any= (e:Event) => {
        e.preventDefault()
        if (term)
        setTerms(
           [...terms,term]
        )
        
       }
    const handleChange = (Event:ChangeEvent<HTMLInputElement>)=>{
        setTerm(Number(Event?.target?.value))
    }
    
    useEffect(()=>{
        console.log(terms);
        
    },[terms])
    return (
            <>
            <div className="my-3 p-2 mx-10 bg-cyan-600 rounded max-h-max grid grid-flow-col align-start overflow-scroll gap-2">
            
                {   
                    terms.map((term:number,key:number) => (
                    <Term key={key} number={Number(term)}/>
                    ))
                }
                    
                
            </div>
            <div >   
                <form className="grid grid-cols-1 mx-10 " onSubmit={addCourse}>
                    <input onChange={handleChange}   name="term" className=" rounded h-8 w-40" type="text"/>
                    <button type="submit" className="rounded h-10 w-40 bg-cyan-700 my-3 " >Add term</button>
                </form>
            </div>
            </>
        
    )
}





export default PlanContainer