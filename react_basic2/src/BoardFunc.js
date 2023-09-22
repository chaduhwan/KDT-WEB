import { useState } from "react";

export default function BoardFunc() {
    const [InputTitle, setInputTitle] = useState("")
    const [InputWriter, setInputWriter] = useState("")
    const [Main, setMain] = useState([])

    const [SearchType, setSearchType] = useState("")
    const [SearchBAr, setSearchBar] = useState("")
    const [SearchMain , setSearchMain] = useState([])


    const SubmitComment= (e) => {
        e.preventDefault()
        const newComment = {
            writer : InputWriter,
            title : InputTitle
        }
        setMain([...Main, newComment])
        setInputTitle(" ");
        setInputWriter(" ");

    }

    const SearchBoard = (e) => {
        e.preventDefault();
    
        const filteredList = Main.filter((value) => {
            if (SearchType === "title") {
                return value.title === SearchBAr;
            } else {
                return value.writer === SearchBAr;
            }
        });
    
        setSearchMain(filteredList);
        setSearchBar("");
    }
    return(
        <>
            <form>
                제목 : <input onChange={(e)=>setInputTitle(e.target.value)}></input>
                작성자 : <input onChange={(e)=>setInputWriter(e.target.value)}></input>
                <button onClick={SubmitComment}>작성</button>
            </form>

            <form>
            <select onChange={(e)=>setSearchType(e.target.value)}>
                <option value="title">제목</option>
                <option value="writer">작성자</option>
            </select>
            <input onChange={(e)=>setSearchBar(e.target.value)}></input>
            <button onClick={SearchBoard}>검색</button>
            </form>

            <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Main.map((value,index)=>{
                            return(
                                <tr key={index +1}>
                                <td>{index +1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                            )
                        })}
                        {SearchMain.map((value,index)=>{
                            return(
                                <tr key={index +1}>
                                <td>{index +1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}