import React, { useState, useRef } from "react"

interface Props {
    name? : string;
}
interface Data {
    name : string,
    age : number
}
// 컴포넌트 제작 방법 2

const Types : React.FC <Props> = (props) => {
    const [count, setcount] = useState<Data | null>()
    
    const myInput = useRef<HTMLInputElement>(null);

    return (
        <>
        <h2> hello {props.name} </h2> 
        <input ref={myInput}/>
        </>
    )
}

export default Types;


// 컴포넌트 제작 방법 1 <= 요즘은 이 방법을 많이 씀 ! why ? next.js에서 쓰는 방식과 동일하기 때문
// export default function Types({name} : Props) {

//     return (
//         <>
//             <h2>hello {name}</h2>
//         </>
//     )
// }