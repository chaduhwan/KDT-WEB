import { useState, useEffect } from "react";
import axios from 'axios'

export default function UserInfo() {

    const [userInfo, setuserInfo] = useState([])
    const [loding, setLoding] = useState(false)

    useEffect(()=>{ 
        // useEffect 함수는 비동기를 직접적으로 지원하지 않습니다.

        const users = async () => {
            const res = await axios.get('http://jsonplaceholder.typicode.com/users')
            setuserInfo(res.data)
            setLoding(true)
        }
        users()
        return console.log('연결해제완료')
    },[])

    useEffect(()=>{
        console.log('유저정보 업데이트', userInfo.length)
    },[userInfo])
    
     
    return<>
            {loding ?   (<ul>
                {userInfo.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>) :( <div>loding</div>) }
         

    </>
}