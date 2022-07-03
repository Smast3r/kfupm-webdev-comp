import { useEffect } from "react"


type props= {
    setVisablity:any
    setCourses:any
}

const AddCourse = (Props:props)=>{


    useEffect(()=>{
        document.getElementById('AddButton')?.focus()
        
    },[])
    const handleSubmition = (Event:Event)=>{
        Props.setVisablity(false)
        // todo -- 



    }
    return(
        <div className=" overflow-y-auto overflow-x-hidden rounded  mx-auto  absolute z-50 inset-x-0 top-0 w-full h-full bg-transparent flex justify-center items-center" >
            <div className="sm:w-2/4 md:w-1/4 bg-zinc-700 grid gird-rows-5 sm:h-2/4 md:h-2/4 items-center rounded-xl">
                <form>
                <div className="relative p-4 w-full h-full md:h-auto flex justify-center"> 
                    <div className="mx-4"> name </div>
                    <input name="name" type="text" />
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
                <button id="AddButton" className="w-48 bg-cyan-600 h-10 rounded" onClick={()=>handleSubmition}> Add </button>
                </div>
                </form>
            </div>
        </div>
    )


}


export default AddCourse