function Test1() {

    const name = "차두환"
    const mystyle = {
        backgroundColor : "blue",
        color : "orange",
        fontSize : "40px",
        paddig : "12"
    }
    return(
        <>
            <div style = {mystyle}>
                {name}
            </div>
        </>
    )
}

export default Test1