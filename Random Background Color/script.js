 let R;
 let G;
 let B;


function changeColor(){
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);
 }
 
changeColor();

let rgbColor = "rgb("+ R + ", " + G + ", " + B + ")";

document.body.style.backgroundColor = rgbColor;
console.log(rgbColor);

var currentColor = document.getElementById("currentColor");
currentColor.textContent = "Background Color: " + rgbColor;

var colorSwitch = document.getElementById("randomizeColor");
colorSwitch.addEventListener("click", function(){
    changeColor()
    rgbColor = "rgb("+ R + ", " + G + ", " + B + ")";
    document.body.style.backgroundColor = rgbColor;
    
    currentColor.textContent = "Background Color: " + rgbColor;
});




