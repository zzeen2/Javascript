// 유저 아이디
const user = {
    uid : "김지은"
}

// 필요 html요소 가져오기
const commentList = document.querySelector("#comment-list");
const commentFrm = document.querySelector("#comment-frm")
//create - 객체 내용물 만들기
class Comment {
    constructor (comment){
        this.uid = user.uid;
        this.comment = this.comment;
        this.date = new Date();
        this.update = false;
    }
    getToday(text){
        const date = this.date;
        let m = date.getMonth()+1;
        let d = date.getDate();
        return [date.getFullYear(), (m>9 ? "" : "0")+m, (d>9 ? "" : "0")+d].join(text) 
    }
}
//create
// 댓글 담을 배열
const state=[];
// 총 갯수 세는 함수
const setTotalRecord = ()=> {
        const span = document.querySelector("h4>span");
        span.innerHTML = state.length;
}

const addState = (value) =>{
    if (value.trim()==="") return;
    const instance = new Comment (value);
    state.push(instance);
    setTotalRecord ();
}

// read------------------------------------------------------
// 요소를 생성해서 화면에 보여주기
const createRow = (index) => {
    const item = state[index];
    const commentRow = document.createElement("ul"); // 객체 감싸기
    commentRow.classList.add("comment-row") // 스타일
    commentRow.dataset.index = index;

    const commentId = document.createElement("li");
    commentId.classList.add("comment-id");
    commentId.innerHTML= item.uid;

    const commentContent = document.createElement("li");
    commentContent.classList.add("comment-content");

    const commentDate = document.createElement("ul");
    commentDate.innerHTML = item.getToday("-");
    
    commentRow.append(commentId, commentContent, commentDate)
    return commentRow;
}
// 기본상태 - read
const createContentWrap = (content) =>{
    const commentContent = document.createElement("li")
    const comment = document.createElement("span");
    const commentDeleteBtn = document.createElement("span");

    comment.onclick = clickHandler;
    comment.classList.add("comment-delete-btn");
    comment.innerHTML = content;
    commentDeleteBtn.classList.add("comment-delete-btn");
    commentDeleteBtn.onclick = clickHandler;
    commentContent.append(comment,commentDeleteBtn)
    return commentContent;
}
// Update-delete

const createUpdateBox = (content) =>{
    const commentContent = document.createElement("li");
    const commentUpdateInput = document.createElement("input");
    const commentDeleteBtn = document.createElement("span");

    commentUpdateInput.classList.add("comment-update-input");
    commentUpdateInput.value = content;

    commentDeleteBtn.classList.add("comment-update-cancel");
    commentUpdateInput.onkeyup =(e)=>{
        const { index } = e.target.parentNode.parentNode.dataset;
        if(e.keyCode !==13 ) return;
        state[index].content = e.target.value;
        state[index].update = !state[index].update;
        drawing();
    }
    commentDeleteBtn.onclick = (e) =>{
        const {index} = e.target.parentNode.parentNode.dataset;
        //
    }
}

const clickHandler = (e) =>{
    const contentNode = e.target.parentNode.parentNode;
    const{index} = contentNode.dataset;
    if (e.target.className === "comment-update-btn"){
        state[index].update = !state[index].update;
        drawing();
    }else{
        const flag = confirm("delete?")
        if(flag){
            state.splice(index,1);
            setTotalRecord();
            drawing();
        }
    }
}

const getContentBox = (flag,content) =>{
    return ! flag ? createContentWrap(content) : createUpdateBox(content);
}

const drawing = () =>{
    commentList.innerHTML = "" //초기화
    for (let i = 0; i < state.length ; i++) {
        const row = createRow(i);
        commentList.append(row);
        
    }
}
const submitHandler = (e) =>{
    e.preventDefault();
    const{content} = e.target;
    const{value} = content;
    addState(value);
    drawing();
    content.value = "";

}
commentFrm.onsubmit = submitHandler;