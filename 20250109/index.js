// // // js

// // // 값과 타입
// // console.log("4"===4);
// // // 값만
// // console.log( '4'!==6 );
// // // 값 and type
// // console.log( '4'!=4 );

// // let num1;
// // let num2;

// // num1=5;
// // num2=6;

// // console.log(num1 !== num2);

// let num1 =100;
// // 원하는 조건일 경우 코드를 실행하고 싶어
// // 원하는 조건이 아닐경우 코드가 실행이 되지않았으면 좋겠어

// if ( num1 > 100){
//     console.log("내가 출력되니?");
// } // 조건에 충족되지 않으면 코드를 실행하지 않는다.

// let str = "나는 이수호 학생이야";
// if (str==="나는 이준현 학생이야"){
//     console.log("내가 보이니?")
// } else if(str==="나는 이호 학생이야"){
//     console.log("dd!")
// } else {
//     console.log("충족되는 조건이 없어")
// }

// // 변수로 yName이라는 변수 하나 선언하고 값을 본인 이름을 할당하고 반 전체 학생의 이름을 변수의 뒤에 1,2,3,~ 증가시켜서 변수를 선엉 할당
// // 추가로 myValue라는 변수를 하나 선언하고 이 변수에 할당한 문자열이 if 문의 조건을 반 전체 학생의 수만큼 작성해서 조건식 검사> 결과가 맞으면 나는 누구누구야

// let myValue = "";
// let myName = "김지은";
// let myName1 = "김민교";
// let myName2= "이상암";
// let myName3 = "이수호";
// let myName4 = "구다경";
// let myName5 = "이준헌";
// let myName6 = "장민우";
// let myName7 = "나한별";
// let myName8 = "김홍규";
// let myName9 = "binode";

// if (myValue === myName) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }
// if (myValue === myName1) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName2) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName3) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName4) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName5) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName6) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName7) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// if (myValue === myName8) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }
// if (myValue === myName9) {
//     console.log("나는"+myValue+
//         "학생이야"
//     )
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// 1부터 10까지 숫자를 출력해줘
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// //구구단의 2단 만들자
// for (let i = 1; i < 10; i++) {
//     let str = "2 x "+ i + "=" + 2 * i;
//     console.log(str);
//     // 마지막 코드 영역까지 진행돼서 다음 반복문이 실행될때는 해제
//     // 메모리에서 해제되었기 때문에 재선언이 아님
// }
    
// 실습: 구구단에서 3단을 만드는데, 조건문을 추가해서 3단에 4의 곱은 출력되지 않게 작성

for (let i = 1; i < 10; i++) {
    if (i<4) {
        console.log("3 x "+ i + " = " + 3 * i)
    }else if (i>=5){
        console.log("3 x "+ i + " = " + 3 * i)
    }
}

for (let i = 1; i < 10; i++) {
    if (i !=4 ) {
        console.log("3 x "+ i + " = " + 3 * i)
    }
}



// example_code
var a;
console.log(a);
a = 10;

console.log(b);
let b;
b = 20;

greet(); 

function greet() {
    console.log("Hello!");
}

sayHello(); 
 
let sayHello
sayHello = function () {
    console.log("Hello!");
};
