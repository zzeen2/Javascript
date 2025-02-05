// window 전역객체 안에 있는 메서드(브라우저의 기능을 메서드로 제공해준다.)
//console.log("123");

// console.log("123");

// 요소의 제어를 하고있지 않아서

// 입력 받은 값을 저장해서 사용하기 위해서 
// prompt 우리가 입력한 값을 시스템 입력창 모달이 뜨고, 입력한 값을 변수에 할당을 하면 저장할 수 있다.
// prompt 반환값을 우리가 입력한 값을 문자열로 string

//let age = prompt("너 나이를 입력해");

// 시스템 팝업으로 log를 확인하는 방법
// alert

// or 연산자
// if ( (age>20) || (age<50)) // 51 입력하면 하나라도 true 라서 실행이 됨
// {
//     alert(age + "살이야")
//     alert(age>20)
//     alert(age<50)
// }

// // 필수 조건사항만 체크 된다면 통과 3개 중에 하나만 선택하면 된다.

// // and 연산자
// if ( (age>20) && (age<50)) // 51 입력하면 하나라도 flase라서 아예 실행이 안됨
// {
//     alert(age + "살이야")
//     alert(age>20)
//     alert(age<50)
// }else{
//     alert("내나이를 20살초과 50살 미만으로 작성하세요!")
// }
// 이름 나이 성별 필수로 작성을 확인해야하는 내용들을 확인한다거나 등

// 반환 데이터 타입이 문자열
// 형변환: 데이터 타입을 변환

// 문자열 "10" > 숫자형 10

// "90" > 90

// "1" + 1 ===> 강제 형변환 
// patenInt : 정수형으로 형변한을 한뒤 값을 반환해주는 메서드
// typeof : 데이터의 타입을 확인하는 예약어

// let str = prompt("숫자를 입력하세요")
// let num = parseInt(str); 
// NaN : Not a number : 숫자로 변환할수없는 문자열을 숫자로 변환을 시도했다.
// alert( typeof num)
// 숫자형으로 변경할 수 없는 문자를 입력한 경우, 잘못입력했습니다.

// 복습-----------------------------------------------------------------------------

// 점수를 입력받고, 
// 점수가 90~100 점이면 a를 출력
// 점수가 80~90 미만 이면 b를 출력
// 점수가 70~80 미만 이면 c를 출력
// 점수가 70 미만은 d를 출력

// let str = prompt("점수를 입력하세요");
// let score = parseInt(str);

// if ( (90<= score) && (score <=100) ) { //true and true
//     console.log(score)
//     alert("Your score is 'a'")
// }else if ((80<= score) && (score <90)) {
//     console.log(score)
//     alert("Your score is 'b'")
// }else if ((70<= score) && (score <80)){ 
//     console.log(score)
//     alert("Your score is 'c'")           
// }else{
//     console.log(score)
//     alert("Your score is 'd'")
// }

// 스코프 -----------------------------------------------------------


// let a = 0; // 전역스코프에 사용한 함수

// if(true) {
//     // 지역스코프
//     console.log(a);
// }

// // 지역 스코프
// if(true) {
//     let a = 0; // 스코프 영역이 종료되면 해제된다.
// }
// console.log(a); // 지역 스코프 내에 있는 a는 참조 불가능


// if(true) {
//     let a = 0;
// }

// if(true) {
//     console.log (a);
// }


// //a 재선언 아님
// let a = 15; // 전역 스코프
// if(true) {
//     let a = 10; // 지역 스코프 
//     if (true) {
//         let a =20; // deep-지역 스코프 
//         console.log(a);
//     }
// }


// // ES5 var >> 지역변수에 선언한 변수가 window 객체에 포함되어서 해제가 되지않는다.
// // var의 사용도를 낮춰서 사용
// if (true) {
//     var a =10;
// }
// var a = 20;
// console.log(window);
// console.log(a);

// 전역 스코프와 지역스코프의 이해를 필수로 해야한다

// for (let i = 0; i < 10; i++) {
//     let a = i * 10;
    
//     if (true)
//         if(false){
//             console.log(a); //> result: none
//         }
//     }
// }

// 지역 스코프에서 선언한 변수를 가져올 수 없기때문에 호이스팅 에러 발생
//> reference error
//console.log(a);

//switch 
// case문의 조건에 충족할 때 break 문을 만나지 않으면 밑의 case문도 실행을 하다가 break를 만난 순간 코드가 중단된다.
// Defaults는 모든 case에 충족하지 않을때 호출된다. 


switch ("RUN") {
    case "A":
    case "B":
        console.log("나는 걷고있다");
        break
    case "STATE":
        console.log("나의 상태는");
        break; //> 여기서 코드가 중단되고, "나는 걷고있다", "나의 상태는" 둘다 출력. 결론적으로 break는 그냥 코드를 멈추기 위함이라고 생각하면됨

    case "WORK":
        console.log("나의 일");
        break;

    default: // if 문에서 else 라고 생각
        console.log("조건에 맞는 값이 전달되지 않았어")
        break;
}