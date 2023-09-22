import {useState, useEffect} from 'react'

function Mycomponent({number}) {
    
    const [text,setText] = useState('')

    useEffect(()=>{
        console.log('항상 실행 됩니다잉')
    })

    useEffect(()=>{
        console.log('컴포넌트가 생성될 때 실행됩니다')

        return() => {
            console.log('제거될 때 실행됩니다.')
        }
    },[])

    useEffect(()=>{
        console.log('state가 변경될때 실행됩니다')
    },[text])

    return<>
        <div>My Conponent {number}</div>
        <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
    </>
}

export default function LifeCycleFunc() {

    const [number, setnumber] = useState(0)
    const [visible, setVisible] = useState(true)

    const changeNumberState= () => {
        setnumber(()=>number + 1)
    }

    const changeVisibleState = () => {
        setVisible(()=>!visible)
    }

    return<>
        {visible  && <Mycomponent number={number}></Mycomponent>} <br/>
        <button onClick={changeNumberState}>PLUS</button>
        <button onClick={changeVisibleState}>ON/OFF</button>
    </>
}