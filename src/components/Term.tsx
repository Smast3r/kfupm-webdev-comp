
import { useState } from "react"
import AddCourse from "./AddCourse"
import AddCourseButton from "./AddCourseButton"
import Course from "./Course"

type Props = {
number:number
Courses:Course[]
} 
type Course = {
    hours:number,
    withLab:boolean,
    name:string,
}
type Term = {
    termNumber:number,
    termCourses?:Course[]
}

const Term = (props:Props)=> {
    const [visablity,setVisablity] = useState(false);
    const [courses,setCourses] = useState(props.Courses)
    const showModal=()=>{
        setVisablity(true)
        
    }
    return (
        <>
        <div className="grid grid-cols-1 gap-2 align-middle max-h-max bg-zinc-900 rounded p-2 text-cyan-200 w-52">
            <div className="flex justify-center">
                <h1>{props.number}</h1>
            </div>
            
            <>
                {
                courses.map((course,index)=>{
                    <Course key={index} hours={course.hours} name={course.name} withLab={course.withLab} />
                })
                }
            </>
            

            <AddCourseButton          
                showModal={showModal}
            >Add Course</AddCourseButton>
        </div>
        {
            visablity?
            <AddCourse setCourses={setCourses} setVisablity={setVisablity}/>:
            null
        }

        </>
    )

}




export default Term