import { useState, useCallback } from "react";

function ChildComponent({onClick}) {
    console.log('child Component')
    return <>
        <button onClick={onClick}></button>
    </>
}
export default function UseCallback() {


    const [count, setCount] = useState(0)
    const [inpuValue, setInputValue] = useState('')

    

    //usecallback 미사용
    const plusCount = () => {
        setCount(()=>count + 1);
    }

    //useCallback 사용
    const plusCountCallBack = useCallback(()=>{
        setCount(()=>count + 1 )
    },[count])

    return<>
    
        <input value={inpuValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        <ChildComponent onClick={plusCountCallBack}/>
        <p>{count}</p>
    </>

}