let scoreBoard = document.getElementById("score");

let score = 0;
scoreBoard.textContent = score;

var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");

increase.addEventListener("click", function(){
    score++;
    scoreBoard.textContent = score;
});

decrease.addEventListener("click", function(){
    score--;
    scoreBoard.textContent = score
});

reset.addEventListener("click", function(){
    score = 0;
    scoreBoard.textContent = score
});