/// 튜플
/// 튜풀 타입 선정
let drink : [string,number]

/// 튜플 초기화
drink =["cola", 2]


/// 튜플의 선언과 초기화
let drink2 : [string, number] = ["cola", 2000]


/// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0])

/// spread 연산자 사용가능
console.log([...drink2, '콜라'])

/// readonly : 데이터를 변경 할수 없게 함
let drink3 : readonly [string, number] = ["coke", 3333]
// drink3.push('콜라') 오류발생 !!! 


/// 열거형
/// eum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin = 100,
    user = 200,
    guest
}

/// enum은 문자열을 지정해 줄 수 있다. <= 문자열로 지정 시 모두 초기값을 지정 해야함 ! 
enum Delivery {
    pending = 'pending', // 상수들은 모두 대문자로 쓰는 경우도 있음 ! 
    delivery = 'delivery',
    finish = 'finish'
}

console.log(Auth.admin)
console.log(Auth.user)
console.log(Auth.guest)
console.log(Delivery.delivery)
console.log(Delivery.pending)



/// any
let a : any[] = ["1", "2", "3", 1 ,2 ,3]

/// 실습문제
const olimpic_newgame : readonly  [object, boolean] = [
    {name : "쇼트트랙",
    type : "혼성 계주"},
    true
]

