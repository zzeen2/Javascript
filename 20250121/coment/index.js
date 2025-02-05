
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
};

const commentFrm = document.querySelector('#comment-frm')

const commentList = document.querySelector('#comment-list')

class Comment { // 댓글 하나를 객체로 관리하기 위한 클래스
    constructor(content){ // 새로운 댓글 객체를 생성할 때 호출되는 메서드
        this.uid = user.uid;
        this.content = content;
        this.date = new Date(); //글을 작성한 현재 시간
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
const state = []; // 댓글이 추가되거나 삭제될 때 state 배열이 업데이트됨
// 총 글의 갯수 확인하는 메서드 만들기
const setTotalRecord = () => {
    const span = document.querySelector("h4>span");
    span.innerHTML = state.length;
}

//배열에 글 추가
const addState = (value)=> {
    const instance = new Comment(value);
    state.push(instance);
    setTotalRecord();
}
// 게시글 하나 생성하늖 함수, 댓글 dom생성, 댓글을 화면에 표시하기위해 html을 동적으로 생성 
const createRow = (index)=> {
    // index 배열에 추가된 글의 index 번호를 사용하기 위해
    const item = state[index];
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li")
    const commentContent = document.createElement("li");
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
    
    commentContent.innerHTML = item.content;

    commentDate.classList.add("comment-date");
    commentDate.innerHTML = item.getToday("-");

    commentRow.append(commentId, commentContent, commentDate)
    return commentRow;
} 
//--------------------------read------------------------------
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
    //const{content_n} = e.target; //input요소의 name을 content로 작성했기 때문에 값을 가져올 수 있다.''
    const content_n = e.target.content_n
    console.log(content_n)
    // content : content라는 이름의 속성을 가지고 있는 input요소 자체
    const {value} = content_n;
    console.log(value);
    console.dir(value);
    addState(value);
    drawing();
    //content.value = ""; // 글 추가하고 나서 입력창 비우기
}

commentFrm.onsubmit = submitHandler;