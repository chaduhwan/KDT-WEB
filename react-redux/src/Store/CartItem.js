import {createStore} from 'redux'

export const ADD_LIST = "ADD_LIST"
export const DELETE_CART = "DELETE_CART"


const reducer =  (state = [], action) => {
    switch (action.type) {
        case ADD_LIST :
            ///// findindex 는 배열의 index 값을 찾아주며 존재라지 않는다면 -1 , 존재하면 인덱스를 반환
            const findIndex = state.findIndex((e) => e.name === action.name)
            if(findIndex !== -1) {
                const newstate = [...state]
                newstate[findIndex].quantity++
                return newstate
            } else {
                const newProduct = {name : action.name, price : action.price, id : Date.now() ,quantity : 1 }
                return [...state, newProduct]
            }
        case DELETE_CART :
            const deleteCart = state.filter(e => e.id !== action.id)
            return deleteCart
        default :
            return state;
    }
}
const store =createStore(reducer)

export default store