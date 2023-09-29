import { useOutletContext } from "react-router-dom"



export default function Commnet() {

    const {comment} =  useOutletContext()

    return<div>
        {comment.map((value,index)=>{
            return <div key={index}>
                {value.text}
            </div>
        })}
    </div>
}