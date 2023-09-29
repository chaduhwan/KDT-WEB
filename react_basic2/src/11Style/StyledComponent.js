import styled from 'styled-components';


const _boxone = styled.div`
    background-color : blue;
    width : 100px;
    height : 100px;
`

//// props를 이용하는 방법
const _boxtwo = styled.div`
    background-color : ${(props) => props.color};
    width : 100px;
    height : 100px;
`
///// 상속 받아서 이용하는 방법
const _Circle = styled(_boxtwo)`
    /* background-color : ${(props) => props.color};
    width : 100px;
    height : 100px; */
    border-radius : 50%;
`

//// 기존태그를 이름만 바꿔서 사용하는 방법 => as 라는 키워드를 사용
const _Btn = styled.button`
    background-color : aqua;
    color: ${(props) => props.color};
    padding : 10px 15px ;
    border-radius : 4px;
`
//html태그에 옵셥값을 넣는 방법
const _Input = styled.input.attrs({required: true})`
    background-color: beige;
`

///중첩
const _boxthree = styled.div`
    width : 200px;
    height : 200px;
    background-color : blueviolet;
    line-height: 200px;
    text-align : center;


    p {
        color : wheat;
        font-weight : bold;
        //pseudo
        &:hover {
            font-size : 30px;
        }
    }

    /////// 다른 컴포넌트를 불러와서 사용할 수 있다
    ${_Input} {
        background-color : yellowgreen;
    }
`


export default function StyledComponent() {




    return (
        <div>
            {/* <_boxone></_boxone>
            <_boxtwo color={"red"}/>
            <_boxtwo color={"orange"}/>
            <_Circle color={"yellow"}/> */}
            <_Btn>Click</_Btn>
            <_Btn as="a" href='http://www.naver.com'>a tag</_Btn>
            <_Input></_Input>
            <_Input></_Input>
            <_Input></_Input>

            <_boxthree>
                <p>hello styled</p>
                <_Input></_Input>
            </_boxthree>
            <_Btn onClick={()=>{alert('onclick')}} color='white'>onclick</_Btn>
        </div>
    )
}