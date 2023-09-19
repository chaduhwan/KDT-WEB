
//함수형 컴포넌트
//function 컴포넌트명 or const 컴포넌트명  = () => {}

import img from './XL.jpeg'

function Book(props){
    const style = {
        backgroundColor : "antiquewhite",
        padding : "30px",
        width: "500px",
        display : "flex",
        flexDirection : "column",
        textAlign : "center"
    }
    const imgSize = {
        marginLeft : "100px",
        width : "300px",
        height : "300px"
    }

    return(
        <>
            <div style={style}>
            <h1>이번주 베스트셀러</h1>
            <img src = {img} style={imgSize}></img>
            <h2> 제목 : {props.title}</h2>
            <div> 저자 : {props.author}</div>
            <div> 가격 : {props.price}</div>
            <div> 구분 : {props.type}</div>
            </div>
        </>
    )
}



export default Book