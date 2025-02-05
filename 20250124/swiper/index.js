// 클릭의 위치 정보가 필요하다.

// 클릭한 위치의 좌표
// 클릭한 위치의 좌표를 눌렀을때, 뗏을때

// 마우스의 클릭 시작 위치
let start;
// 진행중인 swiper 인덱스
let index = 0;

let swiper = document.querySelector(".swiper"); //1

let swiperContent = document.querySelector(".swiper-content")//2

let {length}  = document.querySelectorAll(".swiper-item")//3 // length는 key값이라서 구조분해할당해서 가져올 수 있음 value는 4

let prevBtn = document.querySelector("prev");
let nextBtn = document.querySelector("next")

// 마우스 클릭이 시작되었을때 발생하는 이벤트
swiper.onmousedown = (e) =>{//4
    //console.log("나 클릭시작")
    //console.log(e);
    start = e.clientX; //5
    console.log("나 클릭시작:x축: " + start)
}

swiper.onmouseup = (e) =>{
    console.log("나 클릭 종료 x츅 : "+ e.clientX)
    if(e.clientX < start) {
        //요소들이 오른쪽으로 이동되어야 한다.
        // 오른쪽으로 스와이프를 넘긴 것
        if(index < length - 1)
        index ++ ;
        swiperMove();
    }else{
        if(index > 0)
        index --;
        swiperMove();
    }
    console.log(index);
}
const swiperMove = () =>{
    // css 영역 스타일 시트에 접근해서 스타일 값을 가져오는 메서드
    let swiperWidth = parseInt(getComputedStyle(swiper).width); // 반환타입이 문자열 >> 정수
    // 0* 500 ===0
    // 1* 500 ===500
    // 2* 500 ===1000
    // 3* 500 ===1500
    console.log(swiperWidth)
    swiperContent.style.left = `${-(index * swiperWidth)}px`;

}

prevBtn.onclick = () =>{
    if(index < length - 1)
        index ++ ;
        swiperMove();

}

nextBtn.onclick = () => {
    if(index > 0)
        index --;
        swiperMove();
}