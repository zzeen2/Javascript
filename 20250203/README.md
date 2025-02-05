# 자바스크립트의 동기/ 비동기, 자바스크립트의 스레드

## 동기(블로킹)
1. 작성한 코드의 순서대로 실행
2. 작업이 완료되어야 다음 작업을 실행
```js
console.log("하나");
console.log("둘");
console.log("셋");
```

## 비동기(논 블로킹)
1. 작성한 코드가 순서를 기다리지 않고 실행한다.
2. 특정 시간 이후에 코드를 실행시켜야 하는 경우(타이머, 네트워크상에서 데이터의 요청과 응답을 처리하는 시간)
비동기 함수 영역 |-----------
데이터를 가져와서 게시글을 보여주는 함수 ---- 데이터를 가져오는데 걸리는 시간이 10초 오래걸리게
게시글을 렌더링 하는 함수
|---------

화면을 렌더링 하는 함수

(( 렌더링 할 수 있는 화면은 그리고, 데이터를 불러오는 영역은 로딩창 띄우는것))

```js
console.log("시작"); //>1
setTimeout( ()=> {// 비동기 함수 ("시작"과 "메인화면 렌더링"이 실행 된 후 실행되는 영역)
    console.log("게시글 데이터를 가져왔음"); //>3
    console.log("게시글 화면을 렌더링");//>4

}, 1000)
console.log("메인화면 렌더링"); //>2
```
### 자바스크립트의 실행방식 이벤트 루프
> 자바스크립트는 싱글 스레드란 일하는 사람이 한명
> 이벤트 루프의 실행방식을 가지고 비동기 로직의 처리를 가능하게 한다.

### nodejs(싱글스레드라고 얘기하는 사람이있는데 아니다)
### 매크로 테스크, 마이크로 테스크
> setTimeout : 매크로 테스크
> promise : 마이크로 테스크

> 테스크 큐에서 처리될때 우선순위가 마이크로 테스크가 더 높다. 
> 마이크로 테스크를 모두 처리한 이후에 메크로 테스크를 처리한다.

```js
const login = (cb) => {
    console.log("로딩중")//>2
    setTimeout(()=>{
        cb();
    },1000)
}
console.log("마이페이지 렌더링"); //>1

// 로그인 시도하면
login(()=> {
    console.log("login 성공");//>4
})

console.log("마이페이지 유저 탭 렌더링"); //>3
```

### promise 객체
> 비동기 작업을 처리할 수 있는 내용을 포함하고 있는 객체
> 데이터 요청, 파일 읽기 등 
> 데이터를 받고 데이터의 응답 처리가 끝나면 함수를 호출해서 완료 상태로 만든다.
> 상태 머신 상태를 관리하는 오브젝트 즉 객체
> 대기, 성공, 실패의 상태를 가질 수 있다.
> 콜백 지옥을 방지할 수 있다.

### promise 객체 상태 
1. pending : 대기 상태 / promis 객체를 생성하면 초기 상태이다.
2. Fullfilled : 이행상태 / 비동기 작업이 정상적으로 완료 되었을때, 성공의 상태다.
3. Rejected : 실패 상태 / 비동기 작업이 정상적이지 않아서 실패의 상태

```js
// Promise 생성자에 전달하는 콜백함수의 매개변수로 첫번째, 두번째
// 첫번째 : 성공일때 호출할 콜백함수를 호출할때 전달하는 매개변수의 값이 성공의 결과 값이다.
// 두번째 : 실패일때 호출할 콜백함수를 호출할때 전달하는 매개변수의 값이 실패의 결과 값이다.
const a = 1;
let res = new Promise((res, rej)=> {
    if (a === 1){
        res("성공했을때 반환되는 데이터");
    }else {
        rej("실패했을때 반환되는 데이터");
    }

});

// then catch가 호출되는 시기는 대기상태가 끝났을때
// 대기상태가 끝나고, 성공의 결과가 호출됐을때
res.then((result) => {
    // result === "성공했을때 반환되는 데이터"
    // 성공한 데이터를 가지고 작업을 진행하는 코드
    // 예를들어 게시판의 내용을 만들어주면 된다.
}).catch((error)=> { // 실패상태일때 (메서드 체이닝)
    
})

// promise 체이닝
// 비동기 작업을 순서대로 실행하고 싶을때
res.then((result)=>{
    return 1
}).then((result)=> {
    console.log(result);
}).catch((error)=> {

})

// 
class Promise {
    state = "pandding"
    Fullfilled = function (resValue) {this.state="Fullfilled", this.resValue = resValue}
    Rejected = function (rejValue) {this.state="Rejected", this.rejValue = rejValue}
    
    constructor(cb){
        this.cb = cb; //((res, rej)=>{res("성공")})
        init();

    }
    init(){
        // try catch 벡엔드 로직 오류가 발생해도 프로그램이 종료되지않는다.
        // try catch 밖에 try catch 또 있고, 첫번째 try catch문에서 두번째 try catch문의 return한 오류의 내용을 
        try{
            // 에러가 발생하면
            this.cb(this.Fullfilled , this.Rejected)
        }catch(error){
            console.log(error);
        }
        //((res, rej)=>{res("성공")})
    }

    then(callback) {
        /*
        callback 안의 내용물
            (result) => {
                console.log(result)}
        */
        //pandding이 끝나면
        if(this.state === "Fullfilled"){
            callback(this.resValue);
            return this 
        }
        if(callback === undefined){
            return this 
        }
        return this
    }
    catch(callback){
        //pandding이 끝나면
        /* callback
            (error) => {
                console.log(error)
            }
        */
        if(this.state === "rejected"){
            callback(this.rejValue)
        }
        if(callback === undefined){
            return this
        }
        return this
    }
}

const promise = new Promise((res, rej)=>{res("성공")})

promise.then((result)=>{
    console.log(result)
    // 게시판의 렌더링하는 내용을 넣게되면
}).catch((error)=>{
    console.log(error)
})
```

### 콜백 지옥
```js
callback(()=> {
    console.log("안녕");
    callback2(()=> {
        console.log("안녕")
        callback3(()=> {
            console.log("안녕")
            callback4(()=> {
                console.log("안녕")
                callback5(()=> {
                    console.log("안녕")
                })
            })
        })
    })
})

```

### ES8 async, await
> ES8 에서 탄생한 문법
> promise의 비동기 처리의 내용을 가독성을 높이기 위해 만들어졌다.
> async 붙은 함수는 promise를 반환하는 함수가 된다.

```js
// async 구문이 함수의 앞에 붙게되면 promise를 반환하는 함수
// await promise의 대기상태가 끝날때까지 대기
// const data = await promise(); await 대기상태가 끝난후에 결과의 값을 반환해준다.
// 표현법 3개
//1
const dataFetch = async () =>{
    // 데이터가 정상적으로 받아졌을때
    // await는 promise의 내용이 정상적으로 처리될때까지 기다린다.
    // await [여기 작성한 promise] 대기상태가 끝날때까지 대기
    const data = await promise();
}
//2
const dataFetch = async function() =>{
    
}
//3
async function dataFetch () {

}
```
### fetch 
> api의 내용을 요청할수 있는 메서드
> api는 요청의 주소 url 내가 요청하는 엔드포인트의 주소를 매개변수로 전달하면 
> json()메서드 호출해서 사용 JSON paser JSON 객체로 변환

### 날씨정보를 가져와서 페이지에 보여주자
