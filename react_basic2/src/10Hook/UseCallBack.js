import { useState, useCallback } from "react";

function ChildComponent({onClick}) {
    return <>
        <button onClick={onClick}>PLUS</button>
    </>
}
export default function UseCallback() {


    const [count, setCount] = useState(0)
    const [inpuValue, setInputValue] = useState('')

    

    //usecallback 미사용
    const plusCount = () => {
        console.log('plusconunt', count)
        setCount(()=>count + 1);
    }

    //useCallback 사용
    // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션
    const plusCountCallBack = useCallback(()=>{
        console.log('pluscountCallback', count)
        setCount(()=>count + 1 )
    },[])


    const onChange = (e) => {
        setInputValue(e.target.value)
        plusCountCallBack()
    }

    return<>
    
        <input value={inpuValue} onChange={(e)=>{onChange(e)}}/>
        <ChildComponent onClick={plusCountCallBack}/>
        <p>{count}</p>
    </>

}