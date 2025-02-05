let playerBtn = document.querySelectorAll(".player-btn");
let playerSelect = document.querySelector(".player-select");//3

console.log(playerBtn)
// 플레이어는 rock, scissors, paper 중에 버튼을 눌러서 값을 할당
const Arr = ["scissors", "rock", "paper"]//1
//게임 초기화
const init = () =>{//2
    // 반복문
    // 배열 메서드
    playerBtn.forEach((item,index)=> {
        item.onclick = () => {
            console.log(index);
            playerSelect.classList;
            // if(playerSelect.classList[1]===undefined){

            // }else{
            //     playerSelect.classList.remove(playerSelect.classList[1])
            //     playerSelect.classList.add(Arr[index]);
            // } // 다른 방법
                playerSelect.className = `player-select ${Arr[index]}`;//4
                const { value, text } = gameStart(Arr[index]); //14
                document.querySelector(".result").innerHTML = value;//15
                document.querySelector(".content-value").innerHTML = text;//16
            //playerSelect.classList.add(Arr[index]);//4

        }
        console.log(item)
        console.log(index)
    })
    // forEach 콜백함수 내부에서 기능을 호출해야하고,
    // 반환값이 없다. ( 잘 사용안함 )
    // 첫번째 매개변수에는 배열의 요소가 순차적으로 들어온다.
    //[0,1,2,3,4,5,6].forEach((el)=>{console.log(el)})
    // 우리가 전달한 콜백 함수를 배열의 갯수만큼 호출을 한다.
    // 두번째 매개변수에는 인덱스번호
    // 메서드를 사용할때 반환값을 확인하는게 필수
}
// 플레이어의 값을 버튼을 눌러서 이미지를 보여주는 이벤트를 초기화
init();

const gameStart = (player) => {//5
    // 플레이어 값을 매개변수로 // 9
    // 컴퓨터의 선택은 여러번 호출되어야한다.
    // 소수점 버리자(floor 메서드) //7
    const index = Math.floor(Math.random() * Arr.length) //6
    let comSelect = Arr[index]; //8
    document.querySelector(".com-select").className = "com-select " + comSelect // 띄어쓰기로 클래스 구분//15
    if(player === comSelect) {
        return { value : "무승부", text : "무승부"}//10
    }else if (player === "rock" && comSelect === "scissors" || // 이겼을때 //11
              player === "paper" && comSelect === "rock" ||
              player === "scissors" && comSelect === "paper"
    ) {
        return { value : "승리", text : "플레이어의 승리"} //12
    }else{
        return { value : "패배", text : "컴퓨터의 승리"}//13
    }
}