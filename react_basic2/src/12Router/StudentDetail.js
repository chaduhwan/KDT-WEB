import { useParams, useSearchParams } from "react-router-dom"



export default function StudentDetail() {

    const {name} = useParams()
    const [searchParams,setsearchParams] = useSearchParams()
    const keyword = searchParams.get('name')


    return <div>
        학생이름은 <span style={{color : 'green'}}>{name}</span> 입니다.
        {keyword !== null && <div>실제이름은<span style={{color : 'red'}}>{keyword}</span> 입니다</div>}
    </div>
}