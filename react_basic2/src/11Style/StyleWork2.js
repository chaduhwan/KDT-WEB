import { useState } from 'react'
import styled from 'styled-components'


const _input = styled.input`
    padding : 10px 15px ;
    border-radius : 4px;
`
const _btn = styled.button`
        background-color : aqua;
        padding : 10px 15px ;
        border-radius : 4px;
        border: none;
`

const _con = styled.ul`
    background-color : wheat;
    overflow : scroll;
    height : 200px;
    width: 300px;
    padding : 0;
`

const _div = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
`

export default function StyledWork2() {
    const [value, setvalue] = useState("")
    const [main, setmain] = useState([])

    const addList =(e) => {
        e.preventDefault()
        if(value !== "") {
            const newlist = {
              list : value
            }
            setmain([...main, newlist]);
            setvalue("");
        }
    }


    return(
        <_div>
            <_input value={value} onChange={e=>setvalue(e.target.value)}></_input>
            <_btn onClick={addList}>ADD</_btn>
            <_con>
                {main.map((value,index)=>{
                    return(     
                        <li key={index +1}>{index +1} {value.list}</li>
                    )
                })}
            </_con>
        </_div>
    )
}