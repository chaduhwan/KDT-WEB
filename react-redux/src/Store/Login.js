import {createSlice, configureStore} from '@reduxjs/toolkit';

    const initiallogin = {
        islogin : false,
    }

    const loginSlice = createSlice({
    name : 'login',
    initialState : initiallogin,
    reducers : {
        login(state) {
            console.log(state.islogin)
            state.islogin = true
        },
        logout(state) {
            state.islogin = false
        }
    }
})

export const loginAction = loginSlice.actions
export default loginSlice.reducer;