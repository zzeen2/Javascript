// 데이터 베이스의 유저정보
// 로그인 상태는 쿠키의 값이 있으면 로그인 상태다
// 쿠키값을 가지고 유저정보 검증
// 쿠키도 결굴 브라우저에 저장되는 문자열의 형태

const user = {
    uid : ""
}


class Comment {
    constructor(title, content){
        this.uid = user.uid;
        this.title = title;
        this.content = content;
    }
}

const PAGENUM = 5;
let pageIndex = 1;

// 저장한 값이 있으면 값을 가져와야 한다.
console.log(localStorage.getItem("comment"))
const localStoragecValue = JSON.parse(localStorage.getItem("comment"));
console.log(localStoragecValue);
// 값이 있으면 가져오고 없으면 빈배열로 초기화
const arr = localStoragecValue || []; 
// | : 값이 있는지 검사를 해서 있으면 1, 없으면 0
// || : 값이 있으면 그값을 반환한다.
console.log(arr);
// const arr = [];

const addComment = (title, content) =>{
    if(title.trim() === "" || content.trim() === "") return; //공백제거
    const instance = new Comment(title.trim(), content.trim());
    arr.push(instance);
    localStorage.setItem('comment', JSON.stringify(arr)); // 로컬스토리지에 json으로 저장
}

// 요소를 생성하는 함수
const createContent = (index, search) => {
    let item;
    if(search){
        item = search[index]
    }else
    item = arr[index];
    const ul = document.createElement('ul')
    const li_uid = document.createElement('li')
    const li_title = document.createElement('li')
    const li_content = document.createElement('li')
    /*
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>    
    */
   ul.append(li_uid,li_title,li_content); //여려개의 요소를 자식요소로 포함
   const {uid, title, content} = item; //item에서 구조분해 할당
   li_uid.innerHTML = uid;
   li_title.innerHTML = title;
   li_content.innerHTML = content;
   ul.onclick = () => {
    location.href = `../detail/index.html?index=${index + (pageIndex -1)* PAGENUM}`;
   }
   content_wrap.append(ul);
}

const render = (arr, search = false) => {//arr 추가
    content_wrap.innerHTML = "" ;
    arr.forEach((el,index) => {
        if (search){
            createContent(index, arr);
        }else
        createContent(index);
    });
}

render(arr); //arr추가

form_wrap.onsubmit = (e) => {
    e.preventDefault();
    const{ title, content} = e.target;
    addComment(title.value, content.value);
    console.log(arr);
    title.value = ""
    content.value = ""
    render(arr);//arr추가
}

// 검색창 이벤트
//onkeydown은 value값이 할당되기 전에 콜백함수가 호출된다. >> value값이 밀린것처럼 보임
search_input.onkeyup = (e) => {
    console.log("뭐 눌렸어")
    console.log(e.target.value)
    const arrTemp = [... arr]
    // "".startsWidh() 문자열이 매개변수로 전달한 문자열로 시작되는지 확인
    const searchArr = arrTemp.filter((el)=> el.title.startsWith(e.target.value));
    render(searchArr,true);
}

// 페이지네이션
const paginationCreate = () => {
    const total = arr.length;
    const pages = Math.floor((total + PAGENUM -1) /PAGENUM); //floor > 버림처리
    console.log(pages);
    console.log(total);
    for (let i = 0; i < pages; i++) {
        const span = document.createElement("span");
        span.innerHTML = i + 1;
        span.onclick = () => {
            pageIndex = i + 1; // 최초에는 1번페이지가 보임
            paginationContent(pageIndex)
        }
        pagination.append(span);
    }
}

const paginationContent = (index) =>{
    // (현재 페이지 인덱스 -1) * 페이지의 글 갯수
    let pagingContent = [...arr].splice((index-1) * PAGENUM, PAGENUM);
    console.log(pagingContent);
    render(pagingContent,true)
}

paginationCreate();
paginationContent(pageIndex);

// 쿠키 생성 
// 쿠키의 내용은 여러번 호출될 수 있다. 재사용성을 위해서 기능으로 만들자
// 만료시간 지정안한 쿠키는 세션으로 만료시간이 지정되고, 세션은 브라우저를 종료하면 사라진다.
// 쿠키의 삭제는 만료시간을 과거의 값으로 덮어씌우면 쿠키가 삭제된다.
// 쿠키의 값이 여러개일때 세미콜론으로 구분

const setCookie = (key, value, time) =>{
    let date = new Date()
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000)
    console.log(date.toUTCString());
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/;`
}
const getCookie = (key) => {
    console.log(document.cookie);
    let result;

    let arr = document.cookie.trim().split(";");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().split('=')
        if (key === arr[i][0]){
            result = arr[i][1];
        }
    }
    console.log(result);
    return result;
}

if(getCookie('login')){
    login_user.innerHTML = getCookie('login')
    user.uid = getCookie('login');
};

const deleteCookie = (key) => {
    document.cookie = `${key}=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

login_btn.onclick = () => {
    setCookie('login', login_input.value, 1)
    setCookie('login2', login_input.value, 1)
    location.reload();// 새로고침
}

logout_btn.onclick = () => {
    deleteCookie('login');
    location.reload();
}

// 쿠키의 값이 있으면 로그인이 유지되는 상태가 
