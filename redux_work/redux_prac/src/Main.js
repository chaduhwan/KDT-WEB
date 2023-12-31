import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ADD_TODO,DELETE_TODO } from "./Store/Todo"

export default function Main() { 

    const [text,setText] = useState("")

    ///// useSelector : 리덕스 store 의 state를 조회
    // 인자로 출력함수, 콜백함수의 매개변수로 state를 받을 수 있음
    // 자동으로 subscribe를 하고 있기 때문에 데이터가 변현되면 컴포넌트가 재실행
    const todos = useSelector((state) => state)


    ///// disPatch는 우리가 호출 할 수 있는 함수
    const dispatch = useDispatch();

    const onSubmit= (e) => {
        e.preventDefault()

        dispatch({type : ADD_TODO, text })

        setText('')
    }

    const onclick = (id) => {
        dispatch({type : DELETE_TODO, id })
    }


    return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>투두리스트!</h1>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            <button>ADD</button>
        </form>
        <ul>
            {todos.map(todo => {
                return (
                <li key={todo.id} id={todo.id}>
                    {todo.text}
                <button onClick={()=>onclick(todo.id)}>DELETE</button>
                </li>
                )
            })}
        </ul>
    </div>
    )
}