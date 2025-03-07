# 실행 컨텍스트

> 자바스크립트의 실행 컨텍스트는 식별자를 좀더 효율적으로 관리해서 퍼포먼스를 끌어올리기 올렸다고 보면 된다.

## 자바스크립트의 엔진
> 우리가 사용하는 자바스크립트 엔진은 스크립트를 실행하면
> 콜 스텍에 전역 실행 컨텍스트를 생성하고, 이 컨텍스트의 안에는 `레코드`와 `아우터`가 있다.
> 전역 공간에서 함수를 실행하면 전역 컨텍스트 이후에 하나의 실행컨텍스트가 더 생성된다. 실행컨텍스트 안에는 `레코드`와 `아우터`가 존재한다.
(위의 이론을 이해하면 함수의 실행순서를 쉽게 이해할 수 있음)

## 자바스크립트의 호이스팅

```js
console.log(myValue); // 에러가 발생할까?

var myValue;

// 자바스크립트는 변수를 먼저 읽어서 기록을 하고, 실행 컨텍스트에 미리 저장을 한다.
// 이 저장하는 공간은 레코드라는 영역
// 환경 레코드 === 식별자와 식별자의 값을 기록하는 객체

// 초기에 자바스크립트 실행하면 전체를 한 묶음으로 실행을 하고, 전역 컨텍스트를 생성한다.
// 이때 전역공간에 있는 변수나 함수등을 모두 다 레코드에 기록한다. 이때가 `생성 단계` `실행 단계`
// 이때 var는 값을 indefined로 초기화 해준다. let은 빈 값으로 초기화한다. +const

// 이후 선언문 이외의 코드를 실행하는 단계는 실행 단계 
// 이때 이후에 업데이트 할 내용은 여기서 일어난다.
// let의 값이 초기화 되지 않은 상태에서 값이 호출되는 이 일시적 사각지대를 TDZ
// TDZ : 선언하고 초기화 이전에 식별자를 참조할 수 없는 영역을 개발자가 만든 것

//ES6는 목적성을 많이 추구한 구문의 내용이 많이 추가되었는데,
// 선언전에 변수를 호출하는 것은 일반적인 프로그래밍 언어와 다른 내용이기 때문에 일반적인 프로그래밍 언어처럼 추구하자.
```

## 자바스크립트의 스코프

```js
// 전역 스코프
let mtValue = 1;

// 함수 - 선언한다고 실행되지 않음. 꼭 호출을 해줘야한다.
function foo() {
    // 지역스코프
    let myValue = 2;
    console.log(myValue);// 변수 쉐도잉이 일어나서 전역 스코프에 있는 myValue는 가려진다.
}

foo();
// 함수도 값이다.
const a= function foo (){

}
a();
// 이렇게 할당이 가능하다.
// 함수 안에서 함수가 호출되면

//-------------------------------
function foo () {
    let myValue =1;
}

function foo2(myValue){
    foo3(myValue); // 호출
}

function foo3(myValue){
    console.log(myValue);
}%

foo();


function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

```