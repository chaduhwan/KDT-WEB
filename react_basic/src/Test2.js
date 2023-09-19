import mang from "../src/mang.jpeg"

function Test2() {

    const name = "차두환"
    const style = {
        color : "orange",
        fontSize : "40px",
        marginTop : "20"
    }
    return(
        <>
            <div style = {style}>
                <h2>안녕하세요</h2>
                <img src={mang}></img>
            </div>
        </>
    )
}

export default Test2