// ### 실습 과제 
// > 가위바위보게임을 만들어보자

// - 요구사항 1: 플레이어가 가위 혹은 바위 혹은 보를 입력받을 수 있다.
//             플레이어가 가위를 입력하면 0 , 바위를 입력하면 1, 보를 입력하면 2
// - 요구사항 2: 컴퓨터는 가위 바위 보를 랜덤하게 본인이 선택 할 수 있다. (0 1 2)
// - 요구사항 3: 무승부도 있다.
// - 요구사항 4: 입력받은 값이 잘못된 경우, 다시 입력받으세요 계속
// - 요구사항 5: 논리 연산자 둘중 하나 활용

// 플레이어
// 가위, 바위, 보를 입력받으면 0,1,2 로 재할당?

// 컴퓨터 랜덤값
let comSelect;
 // 0 1 2 중에 선택=
// console.log(comSelect);
//플레이어
let playerSelect; // while 문에서 입력받을거임 
// console.log(comSelect)
let text=""

while (true){
    let comSelect= parseInt(Math.random()*3);
    let playerSelect=(prompt("가위 바위 보 !"))
    if ((playerSelect === "가위") && (playerSelect === "바위") && (playerSelect === "보")){
        // 승부 판정
        if (((playerSelect==="가위") && (comSelect===0)) || ((playerSelect==="바위") && (comSelect===1)) || ((playerSelect==="보") && (comSelect===2))) {
            text ="비겼습니다."
            break;
        }
        if (playerSelect==="가위"){
            if (comSelect===1){
                text="컴퓨터는 바위를 냈습니다. 컴퓨터가 이겼습니다."
            }else if (comSelect===2){
                text="컴퓨터는 보를 냈습니다. 당신이 이겼습니다!"
                break;
            }
        }
        if (playerSelect==="가위"){
            if (comSelect===0){
                text="컴퓨터는 바위를 냈습니다. 당신이 이겼습니다!"
            }else if (comSelect===2){
                text="컴퓨터는 보를 냈습니다. 컴퓨터가 이겼습니다!"
                break;
            }
        }
        if (playerSelect==="보"){
            if (comSelect===0){
                text="컴퓨터는 가위를 냈습니다. 컴퓨터가 이겼습니다!"
            }else if (comSelect===1){
                text="컴퓨터는 바위를 냈습니다.당신이 이겼습니다!"
                break;
            }
        }
    }else {
        text ="잘못입력하였습니다."
        continue;
    }
    
    
}







// while ((true)){
//     // 가위바위보를 숫자로 변환
//     if (playerSelect == "가위") {
//         playerSelect == 0;
//     }else if (playerSelect == "바위"){
//         playerSelect == 1;
//     }else if (playerSelect == "보"){
//         playerSelect == 2;
//     }else{
//         text = "다시 입력해주세요."
//         continue;
//     }
//     // 승부 판정
//     if (playerSelect==comSelect) {
//         text ="비겼습니다."
//         break;
//     }
//     if (playerSelect==0){
//         if (comSelect==1){
//             text="컴퓨터는 바위를 냈습니다. 컴퓨터가 이겼습니다."
//         }else if (comSelect==2){
//             text="컴퓨터는 보를 냈습니다. 당신이 이겼습니다!"
//             break;
//         }
//     }
//     if (playerSelect==1){
//         if (comSelect==0){
//             text="컴퓨터는 바위를 냈습니다. 당신이 이겼습니다!"
//         }else if (comSelect==2){
//             text="컴퓨터는 보를 냈습니다. 컴퓨터가 이겼습니다!"
//             break;
//         }
//     }
//     if (playerSelect==2){
//         if (comSelect==0){
//             text="컴퓨터는 가위를 냈습니다. 컴퓨터가 이겼습니다!"
//         }else if (comSelect==1){
//             text="컴퓨터는 바위를 냈습니다.당신이 이겼습니다!"
//             break;
//         }
//     }
    
// }
   

