// popup class

class Popup {
    constructor(_popup){
        this.popup = _popup;
    }
    setOpen(){
        // // 팝업을 켜줄 메서드
        // // 열려있으면 닫고, 닫혀있으면 여는
        // console.log(this.popup)
        // // 클래스를 가지고있는지 검사
        // // contains 메서드 classList 배열안에 해당 클래스가 있는지 반환값은 bool
        // console.log(this.popup.classlist.contains("is-active"))
        // // add 클래스를 추가 매개변수로 전달한 클래스 이름을 추가
        // console.log(this.popup.classlist.add("is-active"))
        // // remopve 매개변수로 전달한 클래스를 제거
        // console.log(this.popup.classlist.remove("is-active"))
        if(this.popup.classList.contains("is-active")){
            // 클래스가 켜져있다면, 팝업을 끄고
            this.popup.classList.remove("is-active")
        }else{
            // 클래스가 꺼져있다면 팝업을 켜고
            this.popup.classList.add("is-active")
        }
    }
}
//querySelector 아이디, 클래스, 요소이름 모든 선택자 구문
// querySelector 반환 값은 요소 node
let popup = new Popup(document.querySelector(".popup-wrap"))

let popupOpen = popup.setOpen.bind(popup);
document.querySelector(".popup-btn").onclick = {popupsetOpen()};
//document.querySelector(".popup-btn").onclick = () => {popup.setOpen()};

