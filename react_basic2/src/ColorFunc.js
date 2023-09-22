import {useState} from 'react'

export default function ColorChange() {
    const [Font, setFont] = useState("BLACK")
    const [FontColor, setFontColor] = useState({color:"black"})


    const ChangeRed = () => {
        setFont("Red")
        setFontColor({color:"red"})
    }
    const ChangeBlue = () => {
        setFont("Blue")
        setFontColor({color:"blue"})
    }


    return (
        <>
            <h1 style={FontColor}>{Font}</h1>
            <button onClick={ChangeRed}>Red</button>
            <button onClick={ChangeBlue}>Blue</button>
        </>
    )
}