
type Props = {
    hours:number,
    withLab:boolean,
    name:string,
}
const Course = (props:Props)=> {

    return(
        <>
            <div className="w-48 bg-cyan-600 h-20 rounded grid grid-cols-2 grid-rows-2 p-2">
                <div>{props.name}</div>
                <div>{props.hours}</div>
                <div>{props.withLab?"lab":"no lab"}</div>
            </div>
        </>
    ) 
}


export default Course