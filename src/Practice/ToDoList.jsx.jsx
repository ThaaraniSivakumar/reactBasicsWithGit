import { useState } from "react"

export const ToDoList=()=>{
    const[list,setList]=useState([]);
    const [addList,setAddList]=useState()
    const getInputFiled=()=>{
        setList()
    }
    return(
        <div>
            <input placeholder="Enter you thought" onChange={(e)=>setList(e.target.value)}></input>
            <button onClick={getInputFiled}>Add</button>
            <div>
                <div>{list}</div>
                <button >Delete</button>
            </div>
        </div>
    )
}