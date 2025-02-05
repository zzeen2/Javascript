/**
 * inheritance 상속
 * - 상속은 객체들 간의 관계를 구축하는 방법이댜ㅏ. 수퍼클래스, 또는 부모클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name;
        this.year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance (){
        return `여자아이돌이 춤을 춥니다`
    }
}

class MaleIdolModel extends IdolModel {
    sing (){
        return `남자아이돌이 노래를 부릅니다`
    }
}

const yujin = new FemaleIdolModel('안유진', 2003); 
console.log(yujin); //> FemaleIdolModel {name: '안유진', year: 2003}

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin); //> MaleIdolModel {name: '지민', year: 1995}

console.log(yujin.dance()); //> 여자아이돌이 춤을 춥니다.
console.log(yujin.name); //> 안유진

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf); //> IdolModel { name: '코드팩토리', year: 1992}

console.log(cf.name)
console.log(cf.dance)//> 오류 발생
// 부모가 자속 프로퍼티를 상속받지는 못한다.

console.log(yujin instanceof IdolModel); //> true
console.log(yujin instanceof FemaleIdolModel) //> true
console.log(yujin instanceof MaleIdolModel)//> false

console.log(cf instanceof IdolModel)//> true
console.log(cf instanceof FemaleIdolModel)//> false
console.log(cf instanceof MaleIdolModel)//> false