import { StructuredType } from "typescript";

/// inerface
interface Student {
    name : string,
    age : number,
    isPassed : boolean
}

let person : Student = { 
    name : "hwandu",
    age : 25,
    isPassed : true
}



/// type
type Gender = 'female' | 'male' | 'Boy' | 'Girl';
const gender : Gender ='Boy'


/// 실습문제

interface Game {
    title : string,
    price : number,
    desc? : string, // ?를 불일 시 필수가 아닌 선택요건 <= ts 문법의 모든곳에 적용가능
    catageory : string,
    platform : string,

}

let heroGame_A : Game = {
    title : 'DC 언체인드',
    price : 50000,
    desc : "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
    catageory : '액션',
    platform : '모바일'
}

let heroGame_B : Game = {
    title : 'MARVEL 퓨쳐파이트',
    price : 65000,
    catageory : '롤플레잉',
    platform : '모바일'
}