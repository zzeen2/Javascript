# 함수
> 사용 목적: 중복되는 코드의 재사용성을 높이기 위해
> 코드의 내용의 실행을 목적에 맞게 호출하기 위해서 
> 자바스크립트는 코드를 실행했을때 커다란 묶음으로 실행을 하는데
> 전역공간에 작성한 내용을 모두 위에서부터 밑으로 실행한다.
> 코드의 가독성과 재사용성이 용이하다.

### 함수 선언
```js
// 선언
[function 예약어] [함수 이름](매개변수){
    코드의 내용
} 
// 함수이름, 매개변수는 우리가 정하는 것.
// 실행 호출
[함수 이름](매개변수);

// 우리의 기능을 만들고 있는것. (console.log같은거는 js 개발자가 이미 만들어 둔 것)
function message() {
    console.log(value);
}
message("1");
// 함수안에 내가 작성한 매개변수의 이름과 갯수만큼 초기화 되고 할당된다라고 쉽게 이해해보면 좋다.
// 
function message(value, value2) {
    // 해석할때
    // let value = "1";
    // let value = "2";
    console.log(value + value2);
}
message("1","2"); // 만약 값을 하나만 할당하면 나머지 값은 undefined가 할당된다.

console.log(1,2,3,4,5,6,"1234"); // console.log()도 사실 여러개의 매개변수를 받을 수 있는 메서드

// 실행할 때 작성한 순서로 할당된다.
```
### 함수의 매개변수와 스코프
```js
let a = "함수";

function name(a){
    console.log(a);
    name2();
}
// a 라는 매개변수가 있고, 전역에 a라는 매개변수가 있으면
// 식별자의 우선순위 정적인 스코프안에서 자바스크립트 엔진은 식별자를 판단하는데
// 해당 스코프 내의 변수를 먼저 가져온다.
// 똑같은 변수명이 있어서 상위 스코프의 변수를 가져오지 못하는 현상을 `변수 쉐도잉 `

functino name2(){
    console.log(a);
}
name();

```

### 함수의 매개변수와 반환값

```js
//returnn : 값을 반환하고 종료
// [return 예약어] [반환할 값]
function name(){
    return "안녕" // 무저건 종료, 뒤에 코드는 실행 안됨
    console.log(1);
    let c = 3;
}

name(); // 함수를 실행했을때 어휘적 위치에 생기는 값
let a = 1;

a
1 // 어휘적 위치에 1이라는 값이 호출된다.

console.log(a);
let b = a

name(); // 어휘적 위치에 "안녕"
[함수이름](); // 함수의 실행
[함수이름]// 함수의 내용 그 자체 불러옴 =
console.log(name())

let e = name; // 반환값을 담은게 아니고 함수의 값 자체를 할당한 것
e // "안녕"이 아니고  f() {} <<이 형태를 가져옴
e(); // 함수가 작성된 주소를 가져온 것이다
let f = name(); //> "안녕"

// 결과 유추하기
function foo () {
    let a = 1;
    function foo2(){
        console.log(b);
        console.log(foo3());
    }
    foo2(); 
    let b = 2;

function foo3(){
    return 4;
 }
}
foo();

//-------------------
function a (){
    console.log(4)
    let b = 5;
    return 6;

a();
console.log(a());
}

//> 4,4,6
function calculate(a, b) {
  let sum = a + b;
  return sum;
}

calculate(5, 10);
```

