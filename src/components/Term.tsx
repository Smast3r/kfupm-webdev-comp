import Course from "./Course"

type Props = {
number:number
} 


const Term = (props:Props)=> {


    return (
        <>
        <div className="grid grid-cols-1 gap-2 align-middle max-h-max bg-zinc-900 rounded p-2 text-cyan-200 w-52">
            <div className="flex justify-center">
                <h1>{props.number}</h1>
            </div>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
        </div>
        </>
    )

}




export default Term