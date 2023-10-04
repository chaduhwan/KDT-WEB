import { useContext } from "react"
import MyContext from "./lang-context"
import ContextWork from "./ContextWork";


export default function LanguageSelector() {


    // //첫번째 방법
    // return(
    //     <MyContext.Consumer>
    //     {(value) =>{
    //       // 화살표 함수의 리턴 , 리턴을 지우고 싶으면 중괄호도 같이 지우면 됨.
    //       return (
    //       <div>
    //         <h2>현재 선택된 언어 : {value.language}</h2>
    //         <select value={value.language} onChange={(e)=>value.setLanguage(e.target.value)}>
    //           <option value="ko">한국어</option>
    //           <option value="en">영어</option>
    //           <option value="jp">일본어</option>
    //         </select>
    //       </div>
    //       )
    //     }}
    //   </MyContext.Consumer>
    // )

    // 두번째 방법
    const value = useContext(ContextWork);

    return(
          <div>
            <h2>현재 선택된 언어 : {value.language}</h2>
            <select value={value.language} onChange={(e)=>value.setLanguage(e.target.value)}>
              <option value="ko">한국어</option>
              <option value="en">영어</option>
            </select>
          </div>
    )
}
