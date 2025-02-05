/*
class keyword
- 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
> 정보를 일반화해서 정리하는 방법*/

class IdolModel{
    constructor(name, year){
         this.name = name;
         this.year = year;
    }
    sayName(){ // 메서드 정의
        return `안녕하세요 저는 ${this.name} 입니다.`
    }
}

const yujin = new IdolModel('안유진', 2003); //>  new 키워드를 사용해서 새로운 객체로 만들기
console.log(yujin);//> IdolModel { name: '안유진', year: 2003} //새로운 객체로 출력된다.
const gaeul = new IdolModel('가을', 2002); //>  new 키워드를 사용해서 또다른 새로운 객체만들기
//> IdolModel { name: '안유진', year: 2003} //또다른 새로운 객체로 출력된다.
//... 이런식으로 계속 새로운 객체를 만들 수 있음

// Constructor 생성자

console.log(typeof IdolModel); //> function
console.log(typeof yujin); //> object