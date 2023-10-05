import { createStore } from "redux"

const add = document.querySelector("#ADD")
const todo = document.querySelector("#todo")
const list = document.querySelector("#list")

const write = "write"
const remove = "remove"


const AddTodo = () => {
  const li = document.createElement("li")
  const deletebutton = document.createElement("button")
  deletebutton.innerText = "delete"
  deletebutton.addEventListener("click", () => {
    li.remove();
  })
  li.innerText = todo.value
  li.appendChild(deletebutton)
  list.appendChild(li)
  todo.value=""
}

const deleteTodo = ()  => {
 this.document.remove()
}

const todoReducer = (state,action) => {
  switch( action.type ) {
    case write : 
      return AddTodo()
    case remove : 
      return deleteTodo();
    default :
      return state ;
  }
}

const todoStore = createStore(todoReducer);
// ///// subscrib()는 데이터와 저장소가 변경될 때 마다 콜백함수를 실행
 todoStore.subscribe(()=>{

  ///// getstate()는 저장소에서 최신상태의 값을 반환할떄 쓰는 메소드
  todo.textContent = todoStore.getState();
})


add.addEventListener("click",()=>{
  todoStore.dispatch({type : write})
})






















// /// 리덕스를 이용한 숫자 증가, 감소 코드

// const add = document.querySelector("#add")
// const minus = document.querySelector("#minus")
// const num = document.querySelector("#num")

// ///// 변수할당을 통해 변수를 사용하는 것이 개발에 더 옳다.
// const ADD = 'ADD';
// const MINUS = 'MINUS';

// ///// Reducer 
// const countReducer = (state = 0, action) => {
//   console.log(state,action)
//   switch( action.type ) {
//     case ADD : 
//       return state + 1;
//     case MINUS :
//       return state - 1;
//     default : 
//       return state ;
//   }
// }

// ///// store는 데이터를 저장하는 곳
// ///// createStore : store 생성 , + 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// ///// subscrib()는 데이터와 저장소가 변경될 때 마다 콜백함수를 실행
// countStore.subscribe(()=>{

//   ///// getstate()는 저장소에서 최신상태의 값을 반환할떄 쓰는 메소드
//   num.textContent = countStore.getState();
// })

// console.log(countStore.getState());

// add.addEventListener("click", () => {
//   countStore.dispatch({type : ADD})
// })
// minus.addEventListener("click", () => {
//   countStore.dispatch({type : MINUS})
// })








///// 자바스크립트를 이용한 숫자증가, 감소 코드

// const add = document.querySelector("#add")
// const minus = document.querySelector("#minus")
// const num = document.querySelector("#num")


// let count = 0;

// add.addEventListener("click", () => {
//   count = count + 1
//   num.textContent = count
// })


// minus.addEventListener("click", () => {
//   count = count - 1
//   num.textContent = count
// })