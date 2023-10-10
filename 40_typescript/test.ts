import { TupleType } from "typescript";

const a  : string = "hi"
console.log(a)

/// typescript의 기본형
let b : number = 1 ;
let c : boolean = true ;
let d : object = {
    name : "hwnadu",
    age : 25,
};

console.log(b, c, d)

/// typescript를 쓰는 이유 ? 
/// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
/// 2) 정적파일 언어이기 때문에 실행하지 않고 코드상의 에러를 알려줌 => 실시간 디버깅


/// 배열
let arr : number[] = [1,2,3,4]
let strArr = ["1","2","3","4"]
let numArr : number[]
numArr = [4, 3, 2, 1]

/// 객체
let person : {
    name : string,
    age : number,
}[] // <= 배열 객체 적용방법
person = [{
    name : "hwandu",
    age : 25
}]