
// 댓글의 형태가 객체

// 생성자 함수
/* 객체 생김새
    {
        uid:"".
        content:""
        date:""
    }
 */


const user = {
    uid : "soon"
}
// html요소 가져오기(create)
const commentFrm = document.querySelector('#comment-frm')
const commentList = document.querySelector('#comment-list')

// 객체를 생성하기 위해 클래스를 만들었다.
class Comment { // 댓글 하나를 객체로 관리하기 위한 클래스
    constructor(content){ // 새로운 댓글 객체를 생성할 때 호출되는 메서드
        this.uid = user.uid;
        this.content = content;
        this.date = new Date(); //글을 작성한 현재 시간
        this.update = false;
    }
    // 값을 조회하겠다.
    getToday (text){ // 객체 안에 포함된 함수(메서드)
        //2025,01,21 >> 2025-01-21, 2025_01_21 등등으로 바꿔주기
        // 날짜의 문자열 형태를 커스텀 하는 내용이 자주 사용되니 메서드로 만들어두자
        const date = this.date;
        let m = date.getMonth()+1;
        let d = date.getDate();

        //배열 메서드 join
        // 달을 표현할때,일을 표현할때 01, 02, 10 << 이런식으로 표현하는 방법(앞에 0을 붙힐지 말지)
        [date.getFullYear(), (m > 9 ? "" : "0")+ m, (d>9 ? "":"0") +d].join(text);
        // 반환값이 string (문자열로 형변환)
        // , 요소의 구분 부분의 텍스트를 넣어준다 하나의 문자열로
        // [1,2,3].join("") === '123'
        // [1,2,3].join("*") === '1*2*3'
        // text에 매개변수로 "-"을 넣게 되면 2025-01-21

        // 값을 내보내서 할당받아서 사용하기 위한 리턴
        return [date.getFullYear(), (m > 9 ? "" : "0")+ m, (d>9 ? "":"0") +d].join(text);
    }
}
// 글을 작성했을때 객체 생성이 일어나는데 
// 생성자 함수가 호출된다.

// 전체 글을 담을 배열
// 담을 데이터의 영역 배열로
const state = []; // 댓글이 추가되거나 삭제될 때 state 배열이 업데이트됨

// 총 글의 갯수 확인하는 메서드 만들기
const setTotalRecord = () => {
    const span = document.querySelector("h4>span");
    span.innerHTML = state.length;
}

//배열에 글 추가(create)
const addState = (value)=> {
    // 문자열 관련된 내용 
    // 댓글입력에 관련된 수정 메서드
    // trim: 띄어쓰기를 없애준다.
    if (value.trim() === "") return; //빈문자열 막기
    const instance = new Comment(value.trim());
    state.push(instance);
    setTotalRecord();
}
111
// 게시글 하나 생성하늖 함수, 댓글 dom생성, 댓글을 화면에 표시하기위해 html을 동적으로 생성
// read ( 요소를 생성해서 데이터를 요소에 넣어서 화면에 보여주기 위함 )
const createRow = (index)=> {
    // index 배열에 추가된 글의 index 번호를 사용하기 위해
    const item = state[index];
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li")
    const commentContent = getContentBox(item.update, item.content);
    const commentDate = document.createElement("li")

    commentRow.classList.add("comment-row");
    // data-index = "글의 번호"
    commentRow.dataset.index = index; //수정이나 삭제부분 사용할때 index를 요소에 기록
    // css 스타일 작성하는 것 class 
    // 개발자가 요소애 속성의 값이 필요할때
    // index라는 이름을 data- 속성을 만들고 내가 필요한 값을 저장 요소에 속성값으로 저장
    // 민감한 정보는 담으면 안된다.
    commentId.classList.add("comment-id");
    commentId.innerHTML = item.uid;

    // 함수를 사용해서 컨텐츠의 수정이 일어나는 중인지 확인해서 수정하기 **
    //commentContent = createContentWrap(item.content);
    //commentContent.innerHTML = item.content;

    commentDate.classList.add("comment-date");
    commentDate.innerHTML = item.getToday("-");

    commentRow.append(commentId, commentContent, commentDate)
    return commentRow;
} 
//--------------------------------------------------
const createContentWrap=(content)=>{
    const commentContent = document.createElement('li')
    // 요소를 반환
    // 글의 요소와 삭제 버튼의 요소
    // 글을 클릭하면 수정모드로
    // 삭제버튼 클릭하면 삭제 알림창
    const comment = document.createElement("span"); //글영역 만드는 요소
    const commentDeleteBtn = document.createElement("span")

    comment.onclick = clickHandler;
    comment.classList.add("comment-update-btn")
    comment.innerHTML = content;
    //commentContent.innerHTML = content;
    
    commentDeleteBtn.classList.add("comment-delete-btn")
    commentDeleteBtn.onclick = clickHandler;
    commentContent.append(comment,commentDeleteBtn)
    /*
    <li>
        <span>내용</span>
        <span>삭제 버튼</span>
    </li>
    */
    return commentContent
}

// 수정중일때 요소 생성(read)
const createUpdateBox =(content)=>{
    const commentContent = document.createElement("li");
    const commentUpdateInput = document.createElement("input");
    const commentDeleteBtn = document.createElement("span");

    commentUpdateInput.classList.add("comment-update-input");
    // input에서 엔터키 누르면 수정중을 종료시키면서 글을 다시 리렌더링
    // onkeyup: 키를 눌렀다가 뗏을때
    // onkeydown : 키를 누르자마자
    commentUpdateInput.value = content;

    commentDeleteBtn.classList.add('comment-update-cancel'); // 수정 취소 버튼
    
    commentUpdateInput.onkeyup = (e) => {
        console.log(e);
        const { index } = e.target.parentNode.parentNode.dataset;
        //엔터를 누르면 수정이 될 수 있게
        if(e.keyCode !== 13) return;
        // 엔터눌렀을때만 코드 실행 밑으로

        state[index].content = e.target.value;
        state[index].update = !state[index].update;
        drawing(); 
    }
    commentDeleteBtn.onclick = (e) =>{
        const { index } = e.target.parentNode.parentNode.dataset;
        const flag = confirm("수정된 내용은 저장 되지 않습니다.")
        if (!flag) return;
            state[index].update = !state[index].update;
        drawing();
    
    }
    commentContent.append(commentUpdateInput, commentDeleteBtn)
    return commentContent;
}

// 삭제와 수정을 둘다 처리할 핸들러 함수(u,d)
const clickHandler =(e)=>{
    console.dir(e.target)
    const contentNode = e.target.parentNode.parentNode; // perentNode: 요소의 부모요소 호출 (li)
    const {index} = contentNode.dataset;
    // 클래스 내임 내에는 문자열로 저장되어있음 
    // update
    if(e.target.className === "comment-update-btn"){
        // 요소를 판단하기 위해서
        // dataset의 값으로 요소의 인덱스를 찾아서
        // 반대의 Bool값을 누를때마다 할당
        // 스위치 하나
        state[index].update = !state[index].update;
        //const content = e.target.innerHTML;
        drawing();
    }else{ // delete
        //삭제 버튼일 경우
        // confirm 
        const flag = confirm("삭제할래?")
        console.log(flag);
        // 시스템 팝업 쓰지말고 직접 모달창 만들어서
        if(flag){
            state.splice(index,1);
            setTotalRecord();
            drawing();
        }
    }
}

// 컨텐츠 영역을 나눌 함수(read)
const getContentBox = (flag, content) => {
    // flag true나 flase값을 받아서
    // true면 수정중
    //false면 일반 글
    //!false === true / !true === false
    return ! flag ? createContentWrap(content) : createUpdateBox(content)
}


//수정중이 아닐때 컨텐츠 영역 요소 반환(read)
const drawing = ()=> {
    commentList.innerHTML = "" // 초기화(안에 글이 들어있을수 있으니까)
    for (let i = 0; i < state.length; i++) {
        const row = createRow(i);
        commentList.append(row)  
    }
}
//---------------------------create--------------------------------
const submitHandler = (e)=> {
    e.preventDefault(); // 요청을 막는다. 새로고침이 일어나지 않는다.
    // 기본적인 form의 요청 기능을 제거
    const{content} = e.target; //input요소의 name을 content로 작성했기 때문에 값을 가져올 수 있다.''
    //const content = e.target.content
    console.log(content)
    // content : content라는 이름의 속성을 가지고 있는 input요소 자체
    const {value} = content;
    console.log(value);
    console.dir(value);
    addState(value);
    drawing(); //read
    content.value = ""; // 글 추가하고 나서 입력창 비우기
}

commentFrm.onsubmit = submitHandler;

// 상태