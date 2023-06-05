//Randomly generates a number between 1 and 100; Also console logs it
let RandomNum = Math.floor(Math.random() * 101) + 1;
console.log(RandomNum)

const computerResponse = document.getElementById("computer_response");

function compute(UserAnswer){

    if(RandomNum == UserAnswer){
        computerResponse.innerHTML = "Correct!";
        //console.log("Correct!")
    }
    else if (RandomNum > UserAnswer){
        computerResponse.innerHTML = "Your answer is too low";
        //console.log("Your answer is too low")
    }
    else if (RandomNum < UserAnswer){
        computerResponse.innerHTML = "Your answer is too high";
        //console.log("Your answer is too high")
    }
}

//Gets the Form
document.getElementById("myForm").addEventListener("submit", function(event) {
    //Makes sure that the page doesn't reaload after I hit submit 
        // This is to make sure that the random number doesn't change while you are playing the game
    event.preventDefault();

    //Gets the user inpput
    var inputVal = document.getElementById("inputID").value;

    //Calls the inputVal function to compare user answer to the correct answer
    compute(inputVal)
});


//console.log(computerResponse);


