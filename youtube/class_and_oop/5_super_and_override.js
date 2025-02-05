/**
 * super and override
 */

class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name;
        this.year;
    }
    sayHello(){
        return `안녕하세요 ${this.name} 입니다.`
    }
}

class FemaleIdolModel extends IdolModel{
    // 특수한 프로퍼티를 적을 수 있게
    part;
    
    constructor(name, year, part){// part까지 인스턴스에 넣어주기 위해
        // this.name = name;
        // this.year = year;
        super(name, year); // 부모클래스의 컨스트럭터를 실행
        this.part = part; // part만 따로 저장
    }
    sayHello(){
        //return `안녕하세요 ${this.name} 입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
    }
}

const yujin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yujin); //> FemaleIdolModel{ name: '안유진', year: 2003, part: '보컬'}

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung); //> IdolModel {name: '장원영', year: 2002}
console.log(wonYoung.sayHello()); //> 안녕하세요 장원영입니다.
console.log(yujin.sayHello()); //> 안녕하세요 안유진입니다. 보컬을 맡고있습니다.
