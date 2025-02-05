/*
Getter and Setter
*/

/*
getter 
case 1) 데이터를 가공해서 새로운 데이터를 반환할때
case 2) private한 값을 반환할때
*/
//case1) -----------------------------------------------------------------
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    get nameAndYear(){ // 함수가 아니라서 실행할때 ()<< 넣으면 안됨
        return `${this.name}-${this,year}`
    }
    set setname (name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); //> IdolModel {name: '안유진', year:2003};
console.log(yuJin.nameAndYear); //> 안유진-2003

yuJin.setname = '장원영' //>=뒤에 오는 값이 setname의 파라미터가 됨 // 잘 사용하지 않음
console.log(yuJin);//> IdolModel {name: '장원영', year:2003};

//case 2)-----------------------------------------------------------
class IdolModel2{
    #name; // 외부에서 접근하지 못하도록 
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }
    set name(name){
        this.#name =name;
    }
}

const yujin2 = new IdolModel2('안유진', 2003)
console.log(yujin2); //> IdolModel2 {year: 2003} 
// name은 외부에서 접근을 하지 못하기 때문에 외부에서 출력하지 못함

console.log(yujin2.name); //> 안유진 // Getter를 이용해서 private한 값을 가져옴

yujin2.name = '코드팩토리'; //> setter를 사용해서 외부에서 접근하여 값을 바꿔줌
console.log(yujin2.name); //> 코드팩토리