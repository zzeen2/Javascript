/*
Object 객체
1) const로 선언 할 경우 객체 자체를 변경 할 수는 없다.
2) 객체 안이 프로퍼티나 메서드는 변경 할 수 있다.
*/

// let yujin = {
//     name : `안유진`,
//     group: `아이브`,
//     dance: function () {// 메서드
//         return `안유진이 춤을 춥니다.`
//     }

// }
//-----------------------------------------
const key = 'name'
console.log(yujin[key]); //> 안유진

console.log(yujin.dance());//> 안유진이 춤을 춥니다.

let yujin = {
    name : `안유진`,
    group: `아이브`,
    dance: function () {// 메서드
        return `${this.name}이 춤을 춥니다.` // this 키워드를 사용해서 중복되는거 없애주기
    }
}
//------------------------------------------
const nameKey = 'name'
const nameValue = '안유진'

const groupkey = 'group'
const groupValue = '아이브'

//> 변수를 key로 가져오는 방법
const yujin2 = {
    [nameKey] : nameValue,
    [groupkey] : groupValue,
    dance: function () {// 메서드
        return `${this.name}이 춤을 춥니다.` // this 키워드를 사용해서 중복되는거 없애주기
    }
}

console.log(yujin2);

yujin2 ['group'] = '코드팩토리' // 값 바꾸기
yujin2 ['english'] = 'an yu jin' // 프로퍼티 추가하기

delete yujin2 ['english']; // 삭제하기

// 모든 키값 다 가져오기
console.log(Object.keys(yujin2))

// 모든 값 다 가져오기
console.log(Object.values(yujin2))

// 객체를 선언하는 다른 방법
const name = '안유진'

const yujin3 = {
    name,
}
console.log(yujin3); //> {name : '안유진'}