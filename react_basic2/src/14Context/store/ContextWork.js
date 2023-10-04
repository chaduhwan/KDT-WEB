import React, {createContext, useState} from "react" ;


const ContextWork =createContext({
    Thema :'',
    language : '',
    setThema : () => {},
    setLanguage : () => {},
});

export function Provider({children}) {
    const [Thema,setThema] = useState('light')
    const [language,setLanguage] = useState('한국어')

    return <ContextWork.Provider value={{Thema,language,setThema,setLanguage}}>{children}</ContextWork.Provider>
}


export default ContextWork;