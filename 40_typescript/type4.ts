let value : string | number = "hello"
value = 1000

// 함수에 모든 값이 들어 올 수 있다 => Generic type 사용 
function getValue(val : string | number | object) : string | number | object {
    return val;
}

// generic type으로 변경
function getValue2 <T> (value : T) : T{
    return value;
}

console.log(getValue2<string>("안녕하세요"))
console.log(getValue2<number>(20000))


function arrLength <T> (arr : T[]) {
    return arr.length;
}
console.log(arrLength<string>(["a","b","c"]))
console.log(arrLength<number>([1,2,3,4,5]))

function printFunc<T>(x: T, y : T) : T {
    console.log(x);
    console.log(y);
    return x
}
console.log(printFunc<string>("hi","hello"))

// 실습 문제
function arrElement<T>(arr : T[], index : number) : T | false {
    if(arr.length -1 < index ) {
        return false
    } else {
        return arr[index]
    }
}

 console.log(arrElement<string>(["a","b","c"],5))