console.log(document.querySelector(".border"))
//.border 클래스를 가진 HTML 요소를 선택하고, 해당 요소를 콘솔에 출력

//innerHTML: 태그의 형태를 문자로 작성하면 브라우저가 해석해서 요소로 생성한다.
header.innerHTML += `
<div>
    안녕하세요
    <div>내 제목</div>
 </div>
`
const border = document.querySelector(".border"); //특정 HTML 요소를 선택
// *** JavaScript에서 document.querySelector 메서드는 CSS 선택자를 나타내는 문자열을 인자로 받습니다.
// 그렇지 않으면 변수나 다른 데이터로 해석하려고 하기 때문

// 글이 생성되는 기능
/*
 <li>
    <span>번호</span>
    <span>제목</span>
    <span>내용</span>
</li>
 */

const contentArr = [];


const createContent = (index, title, content) => {
//세 개의 매개변수(index, title, content)를 받아서, HTML에 새로운 항목(<li>)을 생성하고 .
//border 클래스에 추가하는 역할
    const _li = document.createElement("li");
    const _span01 = document.createElement("span");
    const _span02 = document.createElement("span");
    const _span03 = document.createElement("span");
    // 메모리상에 생성되고, 변수에 주소가 할당만 되어있다.

    _li.append(_span01, _span02, _span03) // 한번에 추가하기
    // _li.append(_span01)
    // _li.append(_span01)

    // input요소는 value라는 속성을 가지고 있고, value에는 우리가 입력한 값이 담긴다.
    _span01.innerHTML = index;
    _span02.innerHTML = title;
    _span03.innerHTML = content;
    border.append(_li);
    /* 실제 생성된 요소들
    <li>
      <span></span>
      <span></span>
      <span></span>
    </li>
    */
}
const addContent = () => {
    const content = {
        index : contentArr.length + 1,
        title : title_input.value,
        content : content_input.value

    }
    console.log(content)
    contentArr.push(content)
    console.log(contentArr)
    render();
}
const render = () => {
    // 화면에 추가한 글의 내용을 보여주는 함수
    // 다시 화면을 랜더링하기전에 게시글을 생성할때 초기화를 한번 해준다.
    border.innerHTML = ` <li>
    <span>번호</span>
    <span>제목</span>
    <span>내용</span>
    </li>`
    // 초기화
    for (let i = 0; i < contentArr.length; i++) {
        //const element = array[index];
        // 참조 타입은 `구조분해 할당`
        // 객체 안에 있는 키의 이름으로 할당한다.
        // contentArr 객체 안에 있는 키의 이름이 동일해야한다.
        // 객체의 구조분해 할당
        // index : num index키의 값을 할당하고 num이라는 변수에 할당해서 num을 사용할 수 있다.
        const {index : num, title, content} = contentArr[i];
        const index = 1;
        createContent(index, title, content);
    }
}
create.onclick = addContent;

