
/*
Array Functions
*/

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

//2:53:59 

//push() - 새로운 값을 맨 끝에 저장하고, 배열의 길이를 반환
console.log(iveMembers.push('코드팩토리')) //> 7
console.log(iveMembers);

//pop() - 마지막 값을 삭제하고, 삭제한 값을 반홚
console.log(iveMembers.pop()); //> 코드팩토리
console.log(iveMembers);

//shift() 첫번째 값을 삭제하고, 삭제된 값 반환
console.log(iveMembers.shift()); //> '안유진'
console.log(iveMembers)

// unshift() - 첫번째에 값을 추가하고, 추가된 값 반환
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers)

console.log(iveMembers.splice(0, 3)) //> 0번째 부터 3개를 삭제하고 반환

//-------------------------------------
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

// concat()

console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); //> 여기에는 코드팩토리가 포함되어 있지 않음

//concat은 아예 새로운 메모리 공간에 새로운 배열을 만들어서 push함 ( 원래 array 는 변경되지 않음)

//slice()
console.log(iveMembers.slice(0, 3)); //> 몇번 인덱스에서 몇번 인덱스까지 삭제할 것인지 (실제로는 0~ n-1까지 삭제)
console.log(iveMembers); //> 원래 배열은 변경되지 않음

//spread operater

let iveMembers2 = [
    ...iveMembers,
]; //> 리스트의 값을 펼쳐서 불러와서 새로운 배열을 만듬 ( ...이 없으면 리스트 안에 리스트가 불러와짐 )

console.log(iveMembers2);

//join **** 배열의 값을 스트링으로 묶을때
console.log(iveMembers.join()); //> 배열의 모든값들을 컴마(,)로 구분하여 불러오는데, 문자열로 불러옴
console.log(iveMembers.join('/')) //> 값의 구분을 /로 바꿔줌

//sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);//> 오름차순으로 정렬되어 출력됨 가을, 레이 ,,
console.log(iveMembers.reverse); //> 내림차순

let numbers = [
    1,
    9,
    7,
    5,
    3,
]
console.log(numbers);

// a,b 를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 ( 뒤에두기위해 ) 0보다 큰 숫자를 뱐환
// 2) a를 b보다 먼저 정렬하려면 ( 앞에두기위해 ) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0 을 반환
numbers.sort((a , b) => {
    return a>b ? 1:-1 //> 1,9를 비교했을때 1이 작으니까 -1 반환하여 9보다 앞에 정렬, 
                        //> 7,3을 비교했을때 7이 3보다 크니까 1을 반환하여 뒤에 정렬
});

console.log(numbers); //> [1,3,5,7,9]

numbers.sort ((a,b) => a > b ? -1: 1);
console.log(numbers); //> [9,7,5,3,1]

// map ()
console.log(iveMembers.map((x) =>  x)); 
//> [ `장원영`, `이서`, `안유진`, `리즈`, `레이`, `가을`]
console.log(iveMembers.map((x) => `아이브 : ${x}`))
//>[ `아이브: 장원영`, `아이브:이서`, `아이브:안유진`, `아이브:리즈`, `아이브:레이`, `아이브:가을`]

console.log(iveMembers.map((x)=> {
    if ( x === `안유진`){
        return `아이브 : ${x}`
    }else{
        return x;
    }
}))
//> [ `장원영`, `이서`, `아이브: 안유진`, `리즈`, `레이`, `가을`]
console.log(iveMembers)
//> [ `장원영`, `이서`, `안유진`, `리즈`, `레이`, `가을`]
//> 원래 배열은 바꾸지 않고 새로운 배열을 반환해준다

// filter()- 해당되는 모든 값 반환
numbers= [1,8,7,6,3];

console.log(numbers.filter((x)=> true)); //> [1,8,7,6,3]
console.log(numbers.filter((x)=> false)); //> []

console.log(numbers.filter((x)=> x % 2 ==0)); //> [8,6]

//find()- 가장 첫번째로 해당하는 값만 반환 
console.log(numbers.find((x)=>x % 2 ==0)); //> 8

//findIndex - find랑 똑같은데 인덱스를 반환
console.log(numbers.find((x)=>x % 2 ==0)); //> 1

//reduce() *****
console.log(numbers.reduce((p,n) => p+n ,0)) //> 25