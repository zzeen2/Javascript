const getQueryContent = () => {
    // ex) ?index=3&name=2
    //location.search.replace("?"."") === index=3&name=2
    //location.search.replace("?","").split('&') === [index=3 , name=2]
    //location.search.replace("?","").split('&').map((e)=>e.split("=")) === [[index,3] , [name,2]]
    //location.search.replace("?","").split('&').map((e)=>e.split("=")).filter((e)=>e[0]==="index"); === [[index, 3]]
    //[[index, 3]] >> 배열을 벗기기 위해 = 왼쪽에서 구조분해 할당
    // cosnt [index] = [[index,3]]===[index,3]
    // : 객체의 구조분해할당(배열에는 불가능)
    // 배열의 구조분해 할당은 [[]] << 이런식으로 사용해야한다.
    // 0의 인덱스에는 key, 1에는 value
    const [searchArr] = location.search.replace("?" , "").split('&').map((e)=>e.split("=")).filter((e)=> e[0]==="index");
    const index = parseInt(searchArr[1]);
    const data = JSON.parse(localStorage.getItem('comment'))[index] ;
    console.log(data);
    return data;

}

const render = (data) => {
    uid.innerHTML = data.uid;
    title.innerHTML = data.title;
    content.innerHTML = data.content;
}

const init =() => {
    const data = getQueryContent();
    render(data);
}

init();