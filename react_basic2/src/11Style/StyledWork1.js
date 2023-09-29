import styled from 'styled-components'
import { useState } from 'react'


export default function StyledWork1() {
    
    const [isclicked,setisclicked] = useState(false)

    
    const _Btn1 = styled.button`
        background-color : ${(props) => props.isclicked ? 'red' : 'blue'};
        color : ${(props) => props.isclicked ? 'black' : 'white'};
        padding : 10px 15px ;
        border-radius : 4px;
    `
    
    const change = () => {
        setisclicked(!isclicked)
    }
    return(
        <_Btn1 onClick={change} isclicked={isclicked}>Click</_Btn1>

    )
}