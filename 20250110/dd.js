// let comSelect;
//  // 0 1 2 중에 선택=
// console.log(comSelect);
// //플레이어
// let playerSelect; // while 문에서 입력받을거임 
// console.log(comSelect)
let text=""


let comSelect= parseInt(Math.random()*3);
let playerSelect=(prompt("가위 바위 보 !"));
console.log(comSelect);

if (playerSelect === "가위") {
    playerSelect == 0;
    console.log(playerSelect);

}else if (playerSelect === "바위"){
    playerSelect === 1;
    console.log(playerSelect);
}else if (playerSelect === "보"){
    playerSelect === 2;
    console.log(playerSelect);
}else{
    text = "다시 입력해주세요."
    console.log(playerSelect);
}
