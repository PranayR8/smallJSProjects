
let divElement = document.getElementById("myDiv");
let pTags = divElement.querySelectorAll("p");
var imgElement = divElement.querySelector("img");

var backButton = document.getElementById("backButton");
var forwardButton = document.getElementById("forwardButton");
var supriseButton = document.getElementById("supriseMe");


function Pranay(){
    let person1= ["Pranay Ryang", "Student", "Lord Pranay The Best"];

    pTags.forEach(function(p, index) {
        p.textContent = person1[index];
    });

    imgElement.src = "imgs/first.jpeg"

}

function Jennie(){
    let person1= ["Jennie Kim", "Lead Vocals (BP)", "Jennie is the main rapper and vocalist of the group. She is known for her powerful rapping skills and her unique voice. She has also released solo music and has been praised for her fashion sense."];

    pTags.forEach(function(p, index) {
        p.textContent = person1[index];
    });

    imgElement.src = "imgs/Jennie.jpeg"

}


function Lisa(){
    let person1= ["Lalisa Manobal", "Main Dancer (BP)", "Lisa is the main dancer and rapper of the group. She is known for her incredible dance skills and her unique rapping style. She has also released solo music and has been praised for her fashion sense."];

    pTags.forEach(function(p, index) {
        p.textContent = person1[index];
    });

    imgElement.src = "imgs/Lisa.jpeg"

}

function Jisoo(){
    let person1= ["Kim Ji-soo", "Vocals (BP)", "The oldest member in the group, Jisoo is a singer and actress. She is known for her unique voice and her ability to hit high notes. She has also acted in several Korean dramas and has been praised for her acting skills."];

    pTags.forEach(function(p, index) {
        p.textContent = person1[index];
    });

    imgElement.src = "imgs/Jisoo.jpeg"

}


function Rose(){
    let person1= ["Roseanne Park", "Main Vocals (BP)", "Rosé is the main vocalist of the group. She is known for her powerful voice and her ability to hit high notes. She has also released solo music and has been praised for her guitar skills."];

    pTags.forEach(function(p, index) {
        p.textContent = person1[index];
    });

    imgElement.src = "imgs/Rose.jpeg"

}


let num = 2;

function currentPage(num){
    if (num === 1){
        Jennie();
    }
    else if (num === 2){
        Lisa();
    }
    else if (num === 3){
        Jisoo();
    }
    else if (num === 4){
        Rose();
    }
    else if (num === 5){
        Pranay();
    }
    else{
        window.alert("Wrong information! Please try again")
    }
    
}

forwardButton.addEventListener("click", function(){
    if (num < 4){
        num++;
    }
    else{
        num = 1;
    }
    currentPage(num);

});

backButton.addEventListener("click", function(){
    if (num > 1){
        num--;
    }
    else{
        num = 4;
    }
    currentPage(num);

});


supriseButton.addEventListener("click", function(){
    num = Math.random() < 0.1 ? 5 : Math.floor(Math.random() * 4) + 1;
    currentPage(num);

});

currentPage(num);




