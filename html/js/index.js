// 변수란 특정 값을 저장하는 공간
// abc = "abcdef"

// 키워드 변수이름 = 값;
// 키워드 : var, let, const

var number = 5;
var number;

var number1; //변수를 선언
number1 = 5; //변수에 값을 할당
number1 = 6;

//var 보다는 let를 권장함 ! 

// function aaa () {
//       var string = "aaa"
// }

let string = "가나다";
string = "마바사";
// let string ="라마바";

const string2 ="가가가"
// string2 = "미미미"
console.log (string);

// var let const
// var : 재선언, 재할당 가능 
// let : 재선언 불가능, 재할당 가능
// const : 재선언 불가능, 재할달 불가능

let lll;
console.log(lll);

let fristName ="1";
let name1 = "1";
// let 1Name ="1";

const variable = 1100 

var number = 1;
var string1 = "aaaa";
var string1 = "1";

var string1 ="aaaa";
var string1 = `1`;
var string1 = 'aaa';

var number = 5;
console.log(string1 + number);

let name = 'duhwan'
var string1 = 'hello'
console.log(`hello ${name}`)

let hihi =`hello ${name}`
console.log(hihi)

let na = null;
let unde = undefined;

let name3 = "홍길동";
let name4 = "성춘향";

let names =["홍길동","성춘향","짱구"];
//인덱스
//인덱스 : 0부터 시작 !!!
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names.length);
//배열의 길이를 출력, 배열의 길이 -> 배열 안에 저장되어 있는 값의 갯수

names.push("짱아"); // 배열에 마지막에 값을 추가하는 기능
// names =["홍길동","성춘향","짱구","짱아"]
console.log("push",names);

names.pop() // 배열의 가장 마지막 값을 삭제, 가로안에 아무것도 쓰지 않는다.
console.log("pop",names);

names.unshift("신형만") // 배열의 제일 앞에 값을 추가하는 기능
console.log("unshift",names);

names.shift() // 배열의 제일 앞의 값을 삭제, 가로안에 아무것도 쓰지 않는다.
console.log("shift",names);

let index = names.indexOf("짱구") // 배열 안의 값이 몇번 인덱스에 위치해 있는지 알려준다. console사용을 위해 출력값을 변수로 지장
//만약 값이 없을 경우, -1이 츌력됨 : 짱아 입력시 -1 출력
console.log(index);

let includes = names.includes("짱아") // 값이 포함되어 있는지 판별하는 기능
console.log(includes);

let rainbow = ["red","orange","yellow","green","blue","navy","purple"];
console.log(rainbow[0],rainbow[1],rainbow[2],rainbow[3]);

console.log(rainbow[2])

rainbow.push("marigold");
console.log("push",rainbow);

let raindex = rainbow.indexOf("black")
console.log(raindex);

let rainre = rainbow.toReversed();
console.log(rainre);

