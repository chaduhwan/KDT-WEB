import './App.css';

function App() {

  const name = "bbibbi"
  const animal = "cat"

  const test = {
    backgroundColor: "yellow",
    color: "red",
    fontWeight: "700",
    fontSize :"20px",
    width : "30%",
    height : "10%",
    textAlign:'center'
  }
  
  const input = {
    marginLeft : "100px"
  }
  
  const title = "First React"

  const red = {
    backgroundColor : "red",
    width : "100px",
    height : "100px"
  }

  const orange = {
    backgroundColor : "orange",
    width : "100px",
    height : "200px"
  }

  const yellow = {
    backgroundColor : "yellow",
    width : "100px",
    height : "300px"
  }

  const green = {
    backgroundColor : "green",
    width : "100px",
    height : "400px"
  }

  const blue= {
    backgroundColor : "blue",
    width : "100px",
    height : "500px"
  }

  const navy = {
    backgroundColor : "navy",
    width : "100px",
    height : "600px"
  }

  const purple = {
    backgroundColor : "purple",
    width : "100px",
    height : "700px"
  }
  
  const flex = {
    display :"flex"
  }

  // map 함수
  const lists = ["a","p","p","l","e"]

  // filter 함수
  const animals = ["dog", "cat", "rabbit"]

  const newAnimals = animals.filter(value => {
    return value.includes("a")
  })

  console.log(newAnimals)

  // 단축평가
  // && and 연산자
  const result = true && "hello";
  console.log(result)

  // || or 연산자
  const defaultValue = 1000
  const price = 1500
  const dbPrice = price || defaultValue
  console.log(dbPrice)

  const user  = [
    {id : 1 , name : "John", age : 25, vip : true},
    {id : 2 , name : "Jane", age : 19, vip : false},
    {id : 3 , name : "Alice", age : 30, vip : true},
    {id : 4 , name : "Bob", age : 18, vip : false},
    {id : 5 , name : "Charlie", age : 35, vip : true},
  ]

  const vip = user.filter(value => {
    return value.vip === true 
  })

  vip.map((value)=> {
    console.log(value.name)
  })
const res = true
  return (
    <>
      {res && (
        <div>
          이것은 div입니다
          <h3>이것은 div안에 h3입니다</h3>
          {3 + 5 === 8 ? <h1>정답입니다!</h1> : <h1>오답입니다!</h1>}
          <h2>
            제 반려동물의 이름은 {name}입니다.
            {name}은 {animal}입니다.
          </h2>
          <div style={test}>{title}</div>
          <div style={input}>
            <label>아이디 :</label>
            <input />
            <br />
            <label htmlFor="pw">비밀번호 :</label>
            <input id="pw" />
          </div>
          <div style={flex}>
            <div style={red}></div>
            <div style={orange}></div>
            <div style={yellow}></div>
            <div style={green}></div>
            <div style={blue}></div>
            <div style={navy}></div>
            <div style={purple}></div>
          </div>
          {lists.map((value, index) => {
            return (
              <div key={index}>
                <p>hello {value}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
        }

export default App;
