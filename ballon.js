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
//colors
const defText = "#010101";
const dark = "#111";
const light = "#EEE";
const red = "#FF1A1A";

function Bigger(s, inSize){
    
    size += 10;
    if (inSize){
        size = s;
    }
    

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

    if (newColor == dark){
        document.getElementById("darkAndLight").innerHTML = "Red Mode";
        newColor = light;
        newText = dark;
    } else if (newColor == light){
        document.getElementById("darkAndLight").innerHTML = "Dark Mode";
        newColor = red;
        newText = defText;
    } else if (newColor == red){
        document.getElementById("darkAndLight").innerHTML = "Light Mode";
        newColor = dark;
        newText = light;
    }

    root.style.setProperty('--main-color', newColor);
    root.style.setProperty('--text-color', newText);
}

function ChangeSize(){
    let newSize = document.getElementById('inSize').value;
    newSize = parseInt(newSize);
    while (newSize % 10 != 0){
        newSize--;
    }
    Bigger(newSize, true);
}