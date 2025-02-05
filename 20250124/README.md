# 이벤트 속성 스크롤 scroll swiper
```js
let boxContent = document.querySelectorAll(".box-content");//1

//메서드 getBoundingClientRect 상하좌우 사각면의 수치를 가져올 수 있다. x축, y축
// getBoundingClientRect: 상대 위치, 브라우저에서 보고있는 화면의 상대적 위치
console.log(boxContent[0].getBoundingClientRect().top+window.pageYOffset);//2
// 상대위치를 절대 위치로 계산
// 절대위치 = 상대 위치값 + 스크롤 된 값 

// scrollY 브라우저의 상단 기준으로 얼마만큼 스크롤이 이동됐는지
// 맨위를 기준으로 하고싶지 않아 > 만들고 확인
// 화면의 크기만큼 더해주면 기준이 브라우저의 맨밑이 기준이 된다.
const posY = []; //4
for (let i = 0; i < boxContent.length; i++) {
    posY.push(boxContent[i].getBoundingClientRect().top + window.pageYOffset); 
}

// 스크롤 된 값은 스크롤된 요소의 dom객체의 내용에 포함되어 있다.
// 속성 pageXoffset , pageYoffset 스크롤 진행한 진행도의 값 수치, 스크롤을 얼마나 했는지

//절대 위치 === 상대 위치 + 스크롤 된 값
window.onscroll = ()=> { //3
    // onscroll : 스크롤이 될때마다 발생하는 이벤트
    //console.log (boxContent[0].getBoundingClientRect().top + window.pageYOffset); 
    console.log(window.scrollY) 
    //const scroll = window.scrollY;//9
    const scroll = window.scrollY+window.innerHeight;// 기준점을 옮겨서 놓치는 요소가 없도록
    boxContent.forEach((el, index)=>{ //8
        if(scroll>posY[index]){//10
            el.classList.add("is-active")//11
        }else
        el.classList.remove("is-active")//12
    })
    // const scroll = window.scrollY//5
    // if(scroll>posY[0]){//6
    //     boxContent[0].classList.add('is-active');
    //     console.log(boxContent[0].classList)
    // }else{//7
    //     boxContent[0].classList.remove('is-active');
    // }
}

// 기준점을 옮겨서 놓치는 요소가 없도록
```

## swiper

> 과제 스와이프 직접 구현하고
> 이전에 우리가 만든 html 페이지에서 스와이프를 구현하고, 스와이프의 위치는 페이지의 중단 또는 하단
> 스크롤해서 밑으로 페이지를 내리면 스와이프가 보이게
> 스와이프에는 현재 인덱스를 표현하는 불릿에 있다.

// 모바일 기준 

swiper.onmousedown = (e) =>{//4
    //console.log("나 클릭시작")
    //console.log(e);
    start = e.clientX; //5
    console.log("나 클릭시작:x축: " + start)
}

여기서 onmousedown >> ontouchstart, ontouchend