import { BrowserRouter,Routes, Route } from "react-router-dom";
import Student from "./Student";
import StudentDetail from "./StudentDetail";

export default function RouterPra() {


    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Student/>}/>
                <Route path="/student/:name" element={<StudentDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}