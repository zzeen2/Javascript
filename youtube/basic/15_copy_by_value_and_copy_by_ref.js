/*
copy by vlaue : 값에 의한 전달
copy by ref: 참조에 의한 전달

1) 기본적으로 모든 primitive 값은 copy by vlaue 이다.
2) 객체는 copy by reference다.
*/
let original = '안녕하세요';
let clone = original;

console.log (original);
console.log(clone);

clone +='안유진 입니다.'
console.log(original);//> 안녕하세요
console.log(clone);//> 안녕하세요 안유진 입니다.

let originalObj = {
    name:'안유진',
    group: '아이브'
};

let cloneObj = originalObj;
 
originalObj = {
    
}