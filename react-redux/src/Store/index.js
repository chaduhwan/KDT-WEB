import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Counter'
import loginSlice from './Login'

const store = configureStore({
    reducer : { count :counterSlice, login : loginSlice} 
})


export default store ;