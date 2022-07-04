import { getValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import Course from "./Course"


type props= {
    setVisablity:any
    setCourses:any
}
type Course = {
    hours:number,
    withLab:boolean,
    name:string,
}

const AddCourse = (Props:props)=>{

    const [newCourse ,setNewCourse] = useState<Course>()

    useEffect(()=>{
        document.getElementById('AddButton')?.focus()
        
    },[])
    const handleSubmition = (Event:Event)=>{
        Event.preventDefault()
        console.log(Course)
        Props.setVisablity(false)
        Props.setCourses((prev:Course[])=>[...prev,newCourse])



    }
    return(
        <div className=" overflow-y-auto overflow-x-hidden rounded  mx-auto  absolute z-50 inset-x-0 top-0 w-full h-full bg-transparent flex justify-center items-center" >
            <div className="sm:w-2/4 md:w-1/4 bg-zinc-700 grid gird-rows-5 sm:h-2/4 md:h-2/4 items-center rounded-xl">
                <form>
                <div className="relative p-4 w-full h-full md:h-auto flex justify-center"> 
                    <div className="mx-4"> name </div>
                    <input value="name" type="text"  onChange={(e)=>{
                        setNewCourse((prev)=> {return {...prev,name:e.target.value}as Course})
                    }}/>
                </div>
                <div className="relative p-4 w-full  h-full md:h-auto flex justify-center"> 
                    <div className="mx-4">Hours</div>
                    <input name="number" type="number"/>
                </div>
                
                <div className="relative p-4 w-full  h-full md:h-auto flex justify-center"> 
                    <div className="mx-4">Lab ?</div>
                    <input name="lab" type="checkbox"/>
                </div>

                <div className="flex justify-center">
                <button id="AddButton" type="submit" className="w-48 bg-cyan-600 h-10 rounded" onClick={()=>handleSubmition}> Add </button>
                </div>
                </form>
            </div>
        </div>
    )


}


export default AddCourse