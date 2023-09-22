import { useState } from 'react';

export default function ShowHideFunc() {
    const [name, setName] = useState("사라져라");
    const [display, setDisplay] = useState({ display: "flex" });

    const changeCond = () => {
        if (display.display === "flex") {
            setName("보여라");
            setDisplay({ display: "none" }); // "none"으로 변경
        } else {
            setName("사라져라");
            setDisplay({ display: "flex" });
        }
    }

    return (
        <>
            <h1 style={display}>안녕하세요</h1>
            <button onClick={changeCond}>{name}</button>
        </>
    );
}