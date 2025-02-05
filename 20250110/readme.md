# 논리 연산자, 스코프, 조건문, 반복문, 객체의 특징과 값의 호출

## 논리 연산자
> 반환하는 데이터 타입은 bool
> 두가지의 값을 확인해서 true 와 false를 반환한다.

## 논리연산자의 종류
- || (OR) : 둘중에 하나라도 참이라면 true / 둘다 false라면 false 반환
```js
[false || true] === true // 둘중의 하나라도 true의 값이면 참이다. 
// true || false === true
(3<4) || (1>2) === true 

[ false || false ] === false // 둘주에 하나라도 true 가 없다면 false
```
- && (AND) : 둘중에 하나라도 flase 라면 false/ 둘다 true 라면 true
```js
// 둘다 참이면 true
[true && true ] === true 
//true && false
[ 1<=1 && 3!=="3" ] === true

// 둘중에 하나라도 false
[ false && false ] === false
[ true && false ] === false 
```

## 스코프
> 전역 스코프

> 중괄호로 묶은 영역이 아닌 코드의 전체 영역
> 중괄호 묶은 부분 제외하고 모두 전역 스코프
```js
let a = 10;

if(true){
    console.log(a); // a 호출 가능 / 전역스코프는 프로그램을 종료하는 시점까지 메모리에 유지된다.
}
// 전역 스코프의 변수는 어느곳에서든 참조가 가능하다.
// 전역에서 변수를 너무 많이 사용하면 협업할때 무리가 있고, 프로그래밍의 객체지향적 사고와 상반된다.
// 유저의 정보 
```

> 지역 스코프

> 중괄호로 묶은 부분이 전체다 지역 스코프
> 지역스코프 간에는 참조가 불가능하다.
> 전역 스코프에 작성한 내용은 참조가 불가능하다.
```js
if(true){
    // 블록 스코프
    let a = 10; // 블록스코프의 내용이 끝남과 동시에 해제
    console.log(a);
}

if(true) {
    console.log(a); // a호출 불가능
}
// {} : 중괄호 열고 닫고의 사이 영역이 블록스코프
console.log(a);
```

### 조건문 
```js
// 상태의 조건 관리를 할때
// 달리는 상태
// 걷는 상태
// 서있는 상태 
const RUN = "RUN" // 고정된 값으로 사용 (상수)
const STATE = "STATE"
const WORK = "WORK"

let meState = "";
if(meState===RUN){

}else if(meState=== STATE){

}
// 적은 조건을 다룰때는 if 조건문이 좀더 가독성이 좋지만

[switch 예약어] (조건값) {
    case (조건값으로 비교할 조건식) 문;
        코드내용
    default
}
// 성격 유형 테스트 검사지 페이지같은 조건이 많은 경우에는 switch 문이 더 효과적

let myValue = 1;
switch (myValue){ 
    case 1 :
        console.log("value is 1")
    break; // 코드의 중단점을 지정해줌 , 스코프가 종료된다.
}


const RUN = "RUN" // 고정된 값으로 사용 (상수)
const STATE = "STATE"
const WORK = "WORK"

let myState = "RUN";
switch(myState){
    case RUN:
        break;
    case STATE:
        break;
    case WORK:
        break;
}
// 괄호에 전달한 값을 case문 마다 검사를 진행한다. 맞는 값의 case 문은 case문의 안에있는 코드를 실행한다.


// if 문 보다 직관적으로 조건문의 형태를 보여줄 수 있다.
```

### 반복문
```js
//while
// 내가 확신하는 코드영역에서만 사용하자 디버깅 이후에
// 브라우저 펑
// 코드의 중단점을 잘 설정해주지 않으면 무한루프가 돈다.

[while 예약어] (조건식) {
    코드 영역
}

if (true) {
    let count =0;
    while (true) {
    if (count > 10) {
        break; //코드의 중단점 밑의 코드는 실행되지 않는다.
    }
    count++;    
    }
console.log("123")   
}

// 코드의 실행순서를 눈으로 보고 읽을 줄 알게 연습
```


### 객체의 특징과 값의 호출
> 객체의 4가지 특징
> 완벽히 마스터한사람은 없다. 이해도를 계속 높여가는 것.
> 해외의 외국권분들은 우리는 표현방식이 다르기 때문에 

> 눈으로 볼 수 있는 사물의 단위
> 객체의 표현을 프로그래밍 적으로 표현
> 객체라는 것은 프로그래밍에서 기능을 만들 때 객체들의 상호작용으로 제작된다. 

- 추상화 
- 상속
- 다형성
- 캡슐화 

### 객체의 표현방식
1. 객체 리터럴
2. function 생성방식 
3. class 생성 방식

{} : 객체 리터럴 구문
### 데이터의 타입 참조 타입
> 원시타입과 다르다.
> array, object, functionm, Map, set ...

> 주소를 참조하는 주소

### 객체의 문법
```js
// 리터럴 방식 : 데이터 뭉텅이
const user ={
    name : "soon",
    age : 20,
    city : "seoul"
}; 

// tip! 객체를 언제 만드냐: 실제로 존재하는 사물이나 개념을 가지고 구상해서 만들 때, 사물의 단위를 표현할 때

// ex)자동차 판매 사이트를 만들때 > 어떤 모델의 시리즈를 가져다가 묶어서 표현

const computer = {
    name : "ASUS2", // key : value
    model : 14,
    color : "black",
    sell : false,
    price : 100
}
// 표기법---------------------------------------------------------------------------
// 값의 호출
computer.name ==="ASUS2"
computer.model === 14
// key를 추가할 수 있다.
computer.name2 = 123; // 이미 없는 키의 이름으로 할당을 한 경우, 새로운 키와 값이 생성된다.
/*
const computer = {
    name : "ASUS2", // key : value
    model : 14,
    color : "black",
    sell : false,
    price : 100
    name2: 123
}
*/
computer.name == "soon"

/// 대괄호 표기법
comnputer.name === computer["name"]

// 하나의 사물을 표현할 때 여러가지의 데이터를 하나의 객체 단위로 사용하기 위해서

// 생성자 방식은 function, class 배울때

```
```js
// function 생성 방식
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}

// 객체 생성
const person1 = new Person("Bob", 30);
const person2 = new Person("Eve", 22);

// 사용
console.log(person1.name); // "Bob"
person2.greet(); // "Hello, my name is Eve"

// class 생성 방식
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 정의
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 객체 생성
const person1 = new Person("Charlie", 28);
const person2 = new Person("Dana", 35);

// 사용
console.log(person1.name); // "Charlie"
person2.greet(); // "Hello, my name is Dana"

```
### 실습 과제 
> 가위바위보게임을 만들어보자

- 요구사항 1: 플레이어가 가위 혹은 바위 혹은 보를 입력받을 수 있다.
            플레이어가 가위를 입력하면 0 , 바위를 입력하면 1, 보를 입력하면 2
- 요구사항 2: 컴퓨터는 가위 바위 보를 랜덤하게 본인이 선택 할 수 있다. (0 1 2)
- 요구사항 3: 무승부도 있다.
- 요구사항 4: 입력받은 값이 잘못된 경우, 다시 입력받으세요 계속
- 요구사항 5: 논리 연산자 둘중 하나 활용