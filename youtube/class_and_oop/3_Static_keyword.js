/*
static keyword
*/

class IdolModel {
    name;
    year;
    static groupName = '아이브'; // 인스턴스에 귀속되는게 아니라 클래스 자체에 귀속이 된다.*******

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    static returnGroupName (){ // 함수로도 만들 수 있음
        return '아이브'
    }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); //>groupName은 객체에 출력되지 않음

console.log(IdolModel.groupName); //> 아이브
console.log(IdolModel.returnGroupName())//> 아이브

/**
 factory constructor
 */

class IdolModel {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }
    
    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        )
    }
 }

const yujin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});

console.log(yujin2); // IdolModel { name: '안유진', year: 2003}
// new 키워드를 사용하지 않았는데도 객체가 생성됨 

const wonYong = IdolModel.fromList(
    [
        '장원영',
        2004
    ]
)
console.log(wonYong); //> IdolModel { name: '장원영', year: 2004}