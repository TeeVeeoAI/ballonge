//ballon
let size = 100;
let explod = false;
//root
const root = document.documentElement;
//background
const currentColor = getComputedStyle(root).getPropertyValue('--main-color');
let newColor = currentColor;
//text
const currentText = getComputedStyle(root).getPropertyValue('--text-color');
let newText = currentText;

function Bigger(){
    size += 10;

    if (size >= 500 && size < 509){
        document.getElementById("ballon").innerHTML = "💥";
    } else if (size >= 510){
        explod = true;
    }

    if (explod){
        size = 100;
        document.getElementById("ballon").innerHTML = "🎈";
        explod = false;
    } 

    document.getElementById("ballon").style.fontSize = size + "px";
    document.getElementById("size").innerHTML = "Size: " + size + "px";
}

function DarkAndLightMode(){

    if (newColor == "#111"){
        document.getElementById("button").innerHTML = "Dark Mode";
        newColor = "#AAA";
        newText = "#000";
    } else if (newColor = "#AAA"){
        document.getElementById("button").innerHTML = "Light Mode";
        newColor = "#111";
        newText = "#AAA";
    }

    root.style.setProperty('--main-color', newColor);
    root.style.setProperty('--text-color', newText);
}


