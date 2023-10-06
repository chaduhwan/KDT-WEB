import {createSlice, configureStore} from '@reduxjs/toolkit';

    const initialCounter = {
        counter : 10
    }

//createSilce : reducer와 action를 함께 생성하는 함수
const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounter,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        calc(state,action) {
            console.log(action.payload)
            const {plus, minus} = action.payload
            state.counter = state.counter + plus + minus
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer