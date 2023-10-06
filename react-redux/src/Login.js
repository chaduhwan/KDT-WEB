import { useSelector, useDispatch } from "react-redux"
import { loginAction } from "./Store/Login"


export default function Login() {

    const login = useSelector(state=>state.login.islogin)
    const dispatch = useDispatch();


    return ( 
        <>
            {login ?<>
                <div>로그인하셨습니다.</div>
                <button onClick={()=>{dispatch(loginAction.logout())}}>logout</button>
            </> : <>
                <div>로그아웃하셨습니다</div>
                <button onClick={()=>{dispatch(loginAction.login())}}>login</button>
            </>}
        </>
    )
}