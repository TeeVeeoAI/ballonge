let size = 100;
let explod = false;

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
