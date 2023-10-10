// 자바스크립트의 경우
// function jsFunc(a ,b) {
//     console.log(a)
//     console.log(b)
// }
// jsFunc(1,2)


// 타입스크립트의 경우
function tsFunc (a : number, b : number, c? : number ) : number {
    return a + b; 
}

// 함수 표현식 화살표함수
const arrowTsFunc = (a : number, b : number) : number => {
    return a + b;
}

// 위 함수의 축약형
const arrowTsFunc2 = (a : number, b : number) => a * b;


// return이 없는 함수
function printFunc( a : string, b : string) : void {
    console.log(a, b)
}



/// never 타입
// never : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// 항상 함수 끝에 도달하지 않는 경우
// 의도적으로 하지않았을 때 어딘가에 문제가 있는게 아닐까 ,,, ? 
function goingOn ( a : number) : never {
    while (true) {
        console.log('go')
        // if(a > 10) break;
    }
}4

// 실습문제

function sum1(a : number, b : number) {
    return console.log(a + b) 
}
function sum2(...number : number[]) {
    return number.reduce((a,b)=> a + b ,0)
}
console.log(sum2(1,2,3,4,10))