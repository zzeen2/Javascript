// 내가 만들 게임은
// 업다운 게임

// 50 > state
// 30 업
// 100 다운 ...

// player 1, computer가 숫자를 정해놓는다.

// 프로그램을 만들 때 

// 1. 플레이어의 선택을 담을 변수 
// 2. 컴퓨터의 선택을 담을 변수
// 3. 플레이어가 선택을 했으면 사용할 제어문 (조건문)/ 플레이어가 잘못선택하면 계속 무한히 설정/ 숫자를 맞출 때 범위
// 4. 게임의 종료 시점 결과가 같을 때 / 게임의 횟수가 끝났을때 >> 게임종료

// let a = parseInt(Math.random() * 3) +1; // 1~3까지의 수만 나옴
// alert(a);

// 최초에 컴퓨터가 랜덤한 겂을 하나 가지게 하고
let playerSelect;
let comSelect =parseInt(Math.random() * 99);

// 컴퓨터는 랜덤하게 값을 가져야 한다.
// 랜덤한 값을 구하는 메서드
// Math.random()
// random : 0~1 랜덤한 값을 구해준다. >> 소수점으로 표현을 해준다. 


let count = 0; // 게임을 시도한 횟수

let max = 99; // 플레이어가 선택할 수 있는 최대 숫자의 범위

let min = 0; // 플레이어가 선택할 수 있는 최소 숫자의 범위

let text = "" // 안내문구 사용할 텍스트

let gameCount = parseInt(prompt("게임은 몇판할래?"));

// 게임을 한번만 할게 아니고 코드를 여러번 호출해야하니 반복문을 통해서 게임의 로직을 이 안에 작성하자.
// 연산자의 우선순위 *** + * / - 
while ((playerSelect !==comSelect) && (count < gameCount)) { // 게임이 끝나는 조건 
    // 게임의 로직
    playerSelect = prompt( text + " 숫자를 입력해주세요 최소 :" + min + "| 최대 " + max + "  게임의 남은 횟수 :" + (gameCount-count ))
    playerSelect = parseInt(playerSelect); // 문자열을 숫자형으로 전환
    // 숫자가 아닌 문자열 입력했을때 처리
    //NAN의 값이 나오면 입력을 다시 받아야 한다. 
    //isNaN : NaN 숫자의 형태가 아닌 문자를 숫자로 변환했을떄 NaN 값이 나왔는지? 확인을 하는 것 . True
    if ((isNaN(playerSelect))){
        text = "숫자를 다시 입력하세요" // 재할당
        continue; // 반복문에서 샤용할 수 있는 예약어. 반복문 중간에 만나게 되면 밑의 코드를 실행하지 않고 반복문의 시작 코드 영역부터 동작 
        // ( count ++ 은 실행 되지 않음)
        // break; // 중단을 하면 반목문이 끝난다.
    }
    // 잘못된 값을 입력하면 게임의 횟수가 줄면 안돼
    // 숫자는 입력했는데 120 초과된 값을 입력한 경우
    // 0 이상의 값을 입력받고 싶다 
    // 두가지의 값중 하나만 충족해도 

    if ((min >= playerSelect) || (max <= playerSelect)){
        text = "입력값의 최소단위와 최대단위는" +  (min+1) + "~" + (max-1) + "입니다."
        continue;
    }

    count++;
    // 게임이 정상적으로 진행
    // 게임 오버
    if (playerSelect > comSelect) {
        max = playerSelect;
        text = "다운";
    }else if(playerSelect < comSelect) {
        min = playerSelect;
        text = "업";
    }else {
        alert(count + "횟수를 시도해서 정답을 맞췄어");
        break; // 게임 끝
    }
}



