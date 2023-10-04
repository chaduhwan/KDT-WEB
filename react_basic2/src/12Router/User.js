import { Link } from "react-router-dom"


export const users = [
    {
        id: 1 ,
        name : '홍길동',
        comment : [
            {
                text : '안녕하세요'
            }
        ]
    },
    {
        id: 2 ,
        name : '이몽룡',
        comment : [
            {
                text : '반갑습니다'
            }
        ]
    },
    {
        id: 3 ,
        name : '차두환',
        comment : [
            {
                text : '허허허허허'
            }
        ]
    }
]


export default function User() {


    ///searchParams은 쿼리 스트링 값을 가져오는 것
    ///setsearchParams은 쿼리스트링 값을 할당하는 것
    // const [searchParams, setsearchParams] = useSearchParams();
    // setsearchParams({mode:'dark'})

    return <>
        <ul>
            {users.map(value => {
                return <li key={value.id}>
                   <Link to={`/user/${value.id}`}>{value.name}</Link> 
                </li>
            })}
        </ul>
    </>
}