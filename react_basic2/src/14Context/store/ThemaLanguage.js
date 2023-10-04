import { useContext } from "react"
import ContextWork from "./ContextWork"


export default function ThemaLanguage() {


    const value = useContext(ContextWork)

    return(
        <>
            <div>
            <h2>현재 선택된 모드 : {value.Thema}</h2>
            <select value={value.Thema} onChange={(e)=>value.setThema(e.target.value)}>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </div>
        </>
    )
}