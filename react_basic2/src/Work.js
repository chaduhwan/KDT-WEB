import { useState } from "react";

export default function Work() {
    const [InputWork, setInputWork] = useState("") // 할일 입력값
    const [WorkList, setWorkList] = useState([]) // 할일 목록


    const WorkAdd = () => {
        const newWork = {
            id : Date.now(),
            work : InputWork,
            checked: false
        }
        setWorkList([...WorkList, newWork])
        setInputWork("")

        if(WorkList.length > 10) {
            alert("할일이 너무 많아요!")
        }
    }

    const toggleWork = (id) =>{
        console.log(id)
        setWorkList(
            WorkList.map((work)=>{
                console.log(work)
                return work.id === id ? {...work, checked : !work.checked} : work
            })
        )
    }


    const DeleteWork = () => {
      const result = WorkList.filter((value) => 
        value.checked === false
      )
      setWorkList(result)
    }


    return(
        <>
        <input value={InputWork} onChange={(e)=>setInputWork(e.target.value)} placeholder="할 일을 입력..."></input>
        <button onClick={WorkAdd}>추가</button>
        <ul>
            {WorkList.map((value,index) =>{
                return(
                <li key={value.id}>
                    <input key={index} type="checkbox" checked={value.checked} onChange={()=>toggleWork(value.id)}/>
                    {value.work}
                </li>
                )

                }
            )}
        </ul>
        <button onClick={DeleteWork}>완료된 일들 삭제</button>
        </>
    )
}