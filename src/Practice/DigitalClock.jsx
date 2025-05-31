import { useEffect, useState } from "react"

export const DigitalClock = () => {
    const [change,setChange]=useState(0)
    const[changeMin,setChangeMin]=useState(42)
    const[changeHour,setChangeHour]=useState(20)
    const changeTime=()=>{
       const set=  setInterval(()=>{
             setChange((change)=>
             {
                if(change >= 60){
  clearInterval(change)
  return 0
} 
              return change+1
             }
              ) ; 

          },1000)
       
  return set
    }
    const changeMinute =()=>{
      const minute =   setInterval(()=>{
            setChangeMin((changeMin)=>{
              if(changeMin >=60){
                clearInterval(changeMin)
                return 0 }
                return changeMin+1
      });
        },60000)
        return minute
    }

    const changeHours=()=>{
    const hour =    setInterval(()=>{
            setChangeHour((changeHour) =>{
              if(changeHour >=24){
                return 1}
                return changeHour+1});
        },3600000)
        return hour
    }
useEffect(()=>{
changeHours()
const timer = changeTime()
const minute = changeMinute()
const hours = changeHours()

return()=> {clearInterval(timer) ;clearInterval(minute); clearInterval(hours)}

},[])


    return(
      <div>
        <h3>Current time :{changeHour} {changeMin} {change}</h3>  
        <h2>hello guys </h2>
      </div>
    )
}