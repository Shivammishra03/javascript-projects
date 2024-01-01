const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

const btn = document.getElementById('click_me_btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let rndmColorCode = "#";
    for(let i=0;i<6;i++){
        rndmColorCode += hex[getRandomNumber()];
    }
    color.textContent = rndmColorCode;
    document.body.style.backgroundColor = rndmColorCode;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}