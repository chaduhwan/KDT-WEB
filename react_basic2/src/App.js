import UserInfo from "./UserInfo";
import { useState, useEffect } from "react";







function App() {
  const [status, setStatus] = useState(true)

  const removeComp =() => {
    setStatus(!status)

}
  return (
    <>
     <button onClick={removeComp}> 연결해제</button>
      {status && <UserInfo/>}
    </>
  );
}

export default App;
