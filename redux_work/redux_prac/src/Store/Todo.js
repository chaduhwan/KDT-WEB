import {createStore} from 'redux'

const input = document.querySelector("input")
const form = document.querySelector("form")
const ul = document.querySelector("ul")

//상수의 변수
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"


//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO :
      const newTodo = {text : action.text, id : Date.now() }
      return [newTodo, ...state ]
    case DELETE_TODO :
      const deleteTodo = state.filter(el => el.id !== action.id)
      return deleteTodo
    default :
      return state;
  }
}

//store
const store = createStore(reducer)

// const removeTodo = (event) =>{
//   event.preventDefault();
//   console.log(event.target.parentNode.id)
//   store.dispatch({type : DELETE_TODO, id : Number(event.target.parentNode.id)})
// }

// store.subscribe(() => {
//   const todos = store.getState();
//   ul.innerHTML = '';
//   todos.map(value => {
//     const li = document.createElement("li")
//     const btn = document.createElement("button")
//     btn.innerText = "delete"
//     btn.addEventListener("click",removeTodo)
//     li.id = value.id;
//     li.innerText = value.text
//     li.appendChild(btn)
//     ul.appendChild(li)
//   })
// })

// //dispatch
// form.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   store.dispatch({type : ADD_TODO, text : input.value})
//   input.value = ""
// })

export default store;