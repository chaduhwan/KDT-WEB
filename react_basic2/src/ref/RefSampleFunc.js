import { useRef } from "react"

export default function RefSampleFunc() {

    const myInput = useRef();

    const handleInput = () => {
        myInput.current.focus();
    }

    return<>
    <p>(함수형 컴포넌트) button 클릭시 input에 focus 처리</p>
    <input ref={myInput}></input>
    <button onClick={handleInput}>focus</button>
    </>
}