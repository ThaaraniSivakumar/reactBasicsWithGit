import { useState } from "react"

export const Counter = () =>{
        const [count,setCount]=useState(0)

        const reset =()=>{
            setCount(0)
        }

    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
            <button onClick={()=> setCount(count - 1)}>Decrease</button>
            <button onClick={reset }>Reset</button>
            <div>The Actual value is :{count} </div>
        </div>
    )
}