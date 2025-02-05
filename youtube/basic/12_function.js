/*
만약에 2라는 숫자에 *10/2%3 을 하고, 스트링으로 변환해서 반환받고싶다면
어떻게 해야할까?
*/

/*
DRY: dont repeat yourself

*/
// 방법 1
console.log ((2 * 10 /2 % 3) .toString())

// 방법 2
function calculate(){
    console.log ((2 * 10 /2 % 3) .toString())
}
calculate();

// 방법 2- parameter, argumemnt 사용하기
function calculate(number){
    console.log ((number * 10 /2 % 3) .toString())
}
calculate(4);

/*
- 함수에서 입력받는 값에 대한 정의를 parameter 라고 한다.
- 실제 입력하는 값은 argument 라고 한다.
*/

function multiply(x,y){
    console.log(x*y)
}

multiply(2,4)

function multiply(x,y=10){
    console.log(x*y)
}
multiply(2,4); //> 8
multiply(2); //> 20

/*
return 반환받기
*/

function multiply(x,y){ // 함수 안에만 존재하는 것들을 꺼내오기 위함
    return x*y;
}

const result1 = multiply(2,4);
console.log(result1);

/*
Arrow 함수
*/

const multiply = (x,y) =>{
    return x*y;
}
console.log(multiply(3,4));

const multiply3 = (x,y) => x * y;
console.log(multiply3(4,5));

const multiply4 = x => x*2;
console.log(multiply4(2));

const multiply5 = x =>y => z => `x: ${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(7)); //> x:2 y:5 z:7

// 위의 함수를 풀어서 쓴 결과
function multiply6(x){
    return function(y){
        return function (z){
            return `x: ${x} y:${y} z:${z}`
        }
    }
}

const multiplyTwo = function (x,y) {
    return x*y;
}

const multiplyThree = function (x,y,z){
    console.log(arguments); //> { '0':4, '1':5, '2': 6}
    return x * y* z;
}

console.log(multiplyThree(4,5,6)); //> 120

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9));

// 함수 선언하자마자 바로 실행하는 함수(immediately invoked function)
(function(x,y){
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object); //> true 함수는 오브젝트이다