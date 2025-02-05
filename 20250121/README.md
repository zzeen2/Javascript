# Dom을 사용해서 CRUD

댓글 구현

## count
```js
const display = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const decermentBtn = document.querySelector('#decrement');

let num = 0;

const increment = ()=> { //1씩 증가
    num+=1;
    render();
}

const decrement = ()=> { //1씩 감소
    if(num>0) // if 문에 중괄호가 없으면 유효범위가 바로 밑에줄만
    num-=1;
    render();
}
//increment // 요소를 호출
incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;

const rander (){
    display.innerHTML = num;
}
```

```html
<div id ="counter">0</div>

<button id='incrememt'>increment</button>
<button id= 'decrement'>decrement</button>
```

## 이벤트 handler 함수 작성
> 이벤트 제어 함수를 만들어서 재사용성


```js
// 삼항 연산자
// 가독성이 떨어지는 조건문인데 1뎁스 까지는 괜찮
// 조건문 ? true : flase
// const a=1 === 2 ? 1 : 2 //> 2저장
const handler = (event) => { // 요소에서 발생한 이벤트 자체를 객체로
    display.innerHTML = event.target.id ==="increment" ? ++num : num > 0 ? --num : num ; // increment버튼을 눌렀다면 증가, 아니면 감소
}

incrementBtn.onclick = handler; // 버튼으로 유효범위를 한정해주기 위함
decrementBtn.onclick = handler;
```
## CRUD(create, read, update, delete)
> 댓글 구현

1. 댓글 입력 할수 있다.(create)
    - 댓글을 입력창에 입력하고 작성을 누르면 리스트에 댓글이 추가된다.
    - 댓글을 성공적으로 추가하면 입력폼의 입력 내용을 리셋시켜준다.

2. 댓글을 리스트로 조회해서 출력해준다.(read)
    - 댓글의 내용은 '아이디', '댓글 내용', '날짜'로 표현
    - 댓글의 리스트는 최신순으로 표현
    - 댓글의 총 갯수를 표현
    - 수정 버튼이 존재한다.
    - 삭제 버튼이 존재한다.

3. 댓글을 수정할 수 있다.(update)
    - 댓글의 리스트에서 내용을 클릭하면 input요소가 생기고
    - input에 값을 입력받고 
    - enter키를 누르면 input의 내용이 수정되게

4. 댓글을 삭제할 수 있다.(delete)
    - 해당 리스트의 삭제 버튼을 클릭하면 안내를 한번 하고 삭제.
    - 확인을 누르면 삭제
    - 취소를 누르면 삭제 x

## create 단계
객체를 사용해서 사물을 표현
> 댓글 하나의 내용이 객체로 표현 될 수 있다.
```js
{
    uid : "soon" //userid 
    coment : "내용",
    date : "2025-01-21",
}
obj.uid
obj.coment
obj.date
// 글들이 리스트의 형태 무한대가 될 수 있는 데이터를 관리하는데 좋은 데이터 타입
// 배열을 사용해서 관리하면 수월하다.
// 백엔드 배우고 
// 문자열로 변환되어서 데이터의 내용이 전달된다. 데이터가 문자열인 상태

const data = `
[{
    uid : "soon" //userid 
    coment : "내용",
    date : "2025-01-21",
}]
`
// 데이터 파싱 형변환을 해서 
// 배열안에 글들을 담을거니 
const contentList = [
    {
        uid : "soon1"
        coment : "내용 1"
        date : new Date();
    }, 
    {
        uid : "soon1"
        coment : "내용 1"
        date : new Date();
    }, 
    {
        uid : "soon1"
        coment : "내용 1"
        date : new Date();
    }, 
    {
        uid : "soon1"
        coment : "내용 1"
        date : new Date();
    }
];

for (let i = 0; i < contentList.length; i++){
    contentList[i].uid === "soon"
    const str = `${contentList[i].uid}가 ${contentList[i].coment}를 ${contentList[i].date}에 작성했음}`
}

//date 객체
//자바스크립트에 내장되어 있는 생성자
// 날짜 시간 데이터를 다룰때 제공하는 메서드가 포함되어있는 객체
new Date(); // 컴퓨터 시간으로 객체안의 내용을 만든다.

console.log(new Date(1000));
// 컴퓨팅 시스템에서 시간을 추적하는 시스템 유닉스 시간의 시작점에서부터 
// 1000 ms 시간이 증가된 값
// 메서드에 get 값을 가져오겠다 조회하겠다.
// set의 키워드는 값을 수정하겠다.
console.log(new Date('2025-01-21'));

console.log(new Date().getFullYear());
console.log(new Date().getMonth()+1);//0~11
console.log(new Date().getDate());//일수는 그대로 1~
console.log(new Date().getDay());//일요일부터 0~


```
```js
const list = [{uid : "soon", coment= "내용", date= "2025"}]
for 
// 생성------------------------------------
const ul = document.createElement('ul') // ul 요소를 만들어서 반환
// 요소의 주소를 할당
// 아직은 화면에 보이는 상태가 아니다.
// 브라우저의 노드 트리에 추가를 해서 화면에 보이게 만들어줘야 document 에 보인다.

const li = document.createElement('li') // 
const li2 = document.createElement('li') // 
const li3 = document.createElement('li') // 
// 자식으로 포함------------------------------------------
ul.append(li, li2, li3) // append : ()에 전달한 요소들을 본인의 자식요소로 포함시키기
// read-----------------------------------
document.body.append(ul); // 화면에 보이게된다.
li.classList.add("coment-uid");
li.classList.add("coment-content");
li.classList.add("coment-date");

//객체 구조분해 할당
const {uid, coment, date} = list[i]; //key값을 꺼내옴
li.innerHTML = uid;
li2.innerHTML = coment;
li3.innerHTML = date;

document.body.append(ul);//화면에 보이기
// <ul>
//     <li class = "coment-uid">soon</li>
//     <li class = "coment-content">내용</li>
//     <li class = "coment-date">시간</li>
// </ul>

```